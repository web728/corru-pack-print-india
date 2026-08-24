/**
 * Shared form submission handler.
 *
 * Implements the full submission flow:
 *  1. Rate limit check
 *  2. Bot protection verify
 *  3. Zod validate
 *  4. Normalize / sanitize
 *  5. Generate reference number
 *  6. Duplicate check (email + formType + edition)
 *  7. Save to MongoDB
 *  8. Create integration jobs for sheets / email
 *  9. Attempt immediate Google Sheets sync
 * 10. Attempt immediate admin email
 * 11. Attempt immediate confirmation email
 * 12. Return result with reference number
 *
 * The function returns success after the MongoDB save even if downstream
 * integrations fail. Downstream failures create retry jobs.
 *
 * Server-only module — do not import from client components.
 */

import { type ZodSchema, ZodError } from "zod";
import { EVENT, type FormType } from "@/config/event";
import { checkRateLimit, FORM_RATE_LIMIT } from "@/lib/rate-limit";
import { verifyBotProtection } from "@/lib/bot-protection";
import { normalizeFormData, type FieldSchema } from "@/lib/sanitize";
import { generateReference } from "@/lib/reference";
import { getCollection } from "@/lib/mongodb";
import { createJob } from "@/lib/jobs";
import { appendToSheet, isGoogleSheetsEnabled } from "@/lib/google-sheets";
import {
  sendConfirmationEmail,
  sendAdminNotification,
  isEmailEnabled,
  type ConfirmationTemplateData,
  type AdminNotificationData,
} from "@/lib/email";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SubmissionOptions<T extends Record<string, unknown>> {
  /** Form type code (VIS, EXH, etc.) */
  formType: FormType;

  /** Raw form data from the client. */
  rawData: Record<string, unknown>;

  /** Zod schema for validation. */
  zodSchema: ZodSchema<T>;

  /** Field-type map for sanitization. */
  fieldSchema: Record<string, FieldSchema>;

  /** MongoDB collection name. Defaults to "submissions". */
  collection?: string;

  /** Rate-limit key (typically IP or IP+formType). */
  rateLimitKey: string;

  /** Bot protection token from the client widget (nullable). */
  botToken: string | null;

  /** Field name in the validated data that holds the submitter's email. */
  emailField?: keyof T & string;

  /** Field name(s) for the submitter's display name. */
  nameFields?: (keyof T & string)[];

  /** Sheet tab name for Google Sheets sync. */
  sheetName?: string;

  /** Function to build the ordered row array for Google Sheets. */
  buildSheetRow?: (ref: string, data: T) => (string | number | boolean)[];

  /** Function to build the admin notification fields map. */
  buildAdminFields?: (data: T) => Record<string, string>;

  /** Extra details to include in the confirmation email. */
  buildConfirmationDetails?: (data: T) => Record<string, string>;
}

export interface SubmissionResult {
  success: boolean;
  referenceNumber?: string;
  error?: string;
  /** HTTP status code suggestion for the API route. */
  statusCode: number;
  /** Downstream integration statuses (non-blocking). */
  integrations?: {
    sheets: string;
    adminEmail: string;
    confirmationEmail: string;
  };
}

// ---------------------------------------------------------------------------
// Main handler
// ---------------------------------------------------------------------------

export async function processFormSubmission<T extends Record<string, unknown>>(
  options: SubmissionOptions<T>,
): Promise<SubmissionResult> {
  const {
    formType,
    rawData,
    zodSchema,
    fieldSchema,
    collection: collectionName = "submissions",
    rateLimitKey,
    botToken,
    emailField = "email" as keyof T & string,
    nameFields = ["name" as keyof T & string],
    sheetName,
    buildSheetRow,
    buildAdminFields,
    buildConfirmationDetails,
  } = options;

  // -----------------------------------------------------------------------
  // 1. Rate limit
  // -----------------------------------------------------------------------
  const rl = checkRateLimit(rateLimitKey, FORM_RATE_LIMIT.limit, FORM_RATE_LIMIT.windowMs);
  if (!rl.allowed) {
    return {
      success: false,
      error: "Too many submissions. Please try again later.",
      statusCode: 429,
    };
  }

  // -----------------------------------------------------------------------
  // 2. Bot protection
  // -----------------------------------------------------------------------
  const botResult = await verifyBotProtection(botToken);
  if (!botResult.verified) {
    return {
      success: false,
      error: botResult.reason ?? "Bot verification failed.",
      statusCode: 403,
    };
  }

  // -----------------------------------------------------------------------
  // 3. Zod validate
  // -----------------------------------------------------------------------
  let validatedData: T;
  try {
    validatedData = zodSchema.parse(rawData);
  } catch (err) {
    if (err instanceof ZodError) {
      const firstIssue = err.issues[0];
      const field = firstIssue?.path.join(".") || "input";
      return {
        success: false,
        error: `Validation error on "${field}": ${firstIssue?.message ?? "invalid"}`,
        statusCode: 400,
      };
    }
    return { success: false, error: "Validation failed.", statusCode: 400 };
  }

  // -----------------------------------------------------------------------
  // 4. Normalize / sanitize
  // -----------------------------------------------------------------------
  const sanitized = normalizeFormData<T>(validatedData as Record<string, unknown>, fieldSchema);

  // -----------------------------------------------------------------------
  // 5. Generate reference number
  // -----------------------------------------------------------------------
  const referenceNumber = await generateReference(formType, collectionName);

  // -----------------------------------------------------------------------
  // 6. Duplicate check (email + formType + edition)
  // -----------------------------------------------------------------------
  const submitterEmail = String(sanitized[emailField] ?? "");
  if (submitterEmail) {
    const col = await getCollection(collectionName);
    const duplicate = await col.findOne(
      {
        formType,
        edition: EVENT.edition,
        [emailField]: submitterEmail,
      },
      { projection: { referenceNumber: 1 } },
    );

    if (duplicate) {
      const existingRef = (duplicate as Record<string, unknown>).referenceNumber;
      return {
        success: false,
        error: `A ${formType} submission for this email already exists (ref: ${existingRef}).`,
        statusCode: 409,
      };
    }
  }

  // -----------------------------------------------------------------------
  // 7. Save to MongoDB
  // -----------------------------------------------------------------------
  const now = new Date();
  const submitterName = nameFields
    .map((f) => String(sanitized[f] ?? ""))
    .filter(Boolean)
    .join(" ");

  const document = {
    ...sanitized,
    formType,
    referenceNumber,
    edition: EVENT.edition,
    status: "confirmed" as const,
    createdAt: now,
    updatedAt: now,
  };

  const col = await getCollection(collectionName);
  const insertResult = await col.insertOne(document);
  const entityId = insertResult.insertedId.toHexString();

  // -----------------------------------------------------------------------
  // From here on, the submission is saved — downstream failures are non-fatal.
  // -----------------------------------------------------------------------

  const integrations = {
    sheets: "skipped",
    adminEmail: "skipped",
    confirmationEmail: "skipped",
  };

  // -----------------------------------------------------------------------
  // 8 & 9. Google Sheets sync
  // -----------------------------------------------------------------------
  if (sheetName && buildSheetRow && isGoogleSheetsEnabled()) {
    try {
      const row = buildSheetRow(referenceNumber, sanitized);
      const sheetsResult = await appendToSheet(sheetName, row);
      integrations.sheets = sheetsResult.status;
    } catch (error) {
      integrations.sheets = "failed";
      console.error("[submission] Sheets sync failed, creating retry job:", error instanceof Error ? error.message : error);
      await createJob({
        jobType: "google_sheets_sync",
        entityId,
        referenceNumber,
        payload: { sheetName, formType },
      }).catch(() => { /* job creation itself failed — logged by MongoDB */ });
    }
  }

  // -----------------------------------------------------------------------
  // 10. Admin email
  // -----------------------------------------------------------------------
  if (isEmailEnabled() && buildAdminFields) {
    const adminData: AdminNotificationData = {
      referenceNumber,
      formType,
      submitterName,
      submitterEmail,
      fields: buildAdminFields(sanitized),
    };

    try {
      const emailResult = await sendAdminNotification(formType, adminData);
      integrations.adminEmail = emailResult.status;

      if (emailResult.status === "error") {
        await createJob({
          jobType: "admin_email",
          entityId,
          referenceNumber,
          payload: { formType, adminData },
        }).catch(() => {});
      }
    } catch (error) {
      integrations.adminEmail = "failed";
      console.error("[submission] Admin email failed, creating retry job:", error instanceof Error ? error.message : error);
      await createJob({
        jobType: "admin_email",
        entityId,
        referenceNumber,
        payload: { formType, adminData },
      }).catch(() => {});
    }
  }

  // -----------------------------------------------------------------------
  // 11. Confirmation email
  // -----------------------------------------------------------------------
  if (isEmailEnabled() && submitterEmail) {
    const confirmData: ConfirmationTemplateData = {
      recipientName: submitterName || "Registrant",
      referenceNumber,
      formType,
      details: buildConfirmationDetails ? buildConfirmationDetails(sanitized) : undefined,
    };

    try {
      const emailResult = await sendConfirmationEmail(submitterEmail, confirmData);
      integrations.confirmationEmail = emailResult.status;

      if (emailResult.status === "error") {
        await createJob({
          jobType: "confirmation_email",
          entityId,
          referenceNumber,
          payload: { to: submitterEmail, confirmData },
        }).catch(() => {});
      }
    } catch (error) {
      integrations.confirmationEmail = "failed";
      console.error("[submission] Confirmation email failed, creating retry job:", error instanceof Error ? error.message : error);
      await createJob({
        jobType: "confirmation_email",
        entityId,
        referenceNumber,
        payload: { to: submitterEmail, confirmData },
      }).catch(() => {});
    }
  }

  // -----------------------------------------------------------------------
  // 12. Return result
  // -----------------------------------------------------------------------
  return {
    success: true,
    referenceNumber,
    statusCode: 201,
    integrations,
  };
}
