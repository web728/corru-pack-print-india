import { type NextRequest, NextResponse } from "next/server";
import { type ZodSchema } from "zod";
import { type FormType } from "@/config/event";
import { type FieldSchema } from "@/lib/sanitize";
import { processFormSubmission, type SubmissionOptions } from "@/lib/submission";

export interface FormRouteConfig<T extends Record<string, unknown>> {
  formType: FormType;
  zodSchema: ZodSchema<T>;
  fieldSchema: Record<string, FieldSchema>;
  collection?: string;
  emailField?: keyof T & string;
  nameFields?: (keyof T & string)[];
  sheetName?: string;
  buildSheetRow?: (ref: string, data: T) => (string | number | boolean)[];
  buildAdminFields?: (data: T) => Record<string, string>;
  buildConfirmationDetails?: (data: T) => Record<string, string>;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export function createFormHandler<T extends Record<string, unknown>>(
  config: FormRouteConfig<T>,
) {
  return async function POST(request: NextRequest) {
    try {
      const body = await request.json();
      const { botToken, ...rawData } = body as Record<string, unknown> & { botToken?: string };

      const ip = getClientIp(request);

      const options: SubmissionOptions<T> = {
        formType: config.formType,
        rawData,
        zodSchema: config.zodSchema,
        fieldSchema: config.fieldSchema,
        collection: config.collection,
        rateLimitKey: `${ip}:${config.formType}`,
        botToken: (botToken as string) ?? null,
        emailField: config.emailField,
        nameFields: config.nameFields,
        sheetName: config.sheetName,
        buildSheetRow: config.buildSheetRow,
        buildAdminFields: config.buildAdminFields,
        buildConfirmationDetails: config.buildConfirmationDetails,
      };

      const result = await processFormSubmission(options);

      return NextResponse.json(
        {
          success: result.success,
          referenceNumber: result.referenceNumber,
          error: result.error,
        },
        { status: result.statusCode },
      );
    } catch (error) {
      console.error(`[api/forms/${config.formType}] Unhandled error:`, error instanceof Error ? error.message : error);
      return NextResponse.json(
        { success: false, error: "An unexpected error occurred. Please try again." },
        { status: 500 },
      );
    }
  };
}
