/**
 * Email integration using Nodemailer (Gmail / SMTP App Password).
 *
 * Sends confirmation emails to registrants and admin notification emails.
 * Handles missing credentials gracefully (returns disabled status).
 *
 * Server-only module — do not import from client components.
 */

import nodemailer from "nodemailer";
import { EVENT, type FormType } from "@/config/event";
import { isIntegrationEnabled, getConfig, getOptionalEnv } from "@/lib/env";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface EmailResult {
  success: boolean;
  status: "sent" | "disabled" | "error";
  messageId?: string;
  errorMessage?: string;
}

export interface ConfirmationTemplateData {
  recipientName: string;
  referenceNumber: string;
  formType: FormType;
  /** Additional key-value pairs rendered in the confirmation body. */
  details?: Record<string, string>;
}

export interface AdminNotificationData {
  referenceNumber: string;
  formType: FormType;
  submitterName: string;
  submitterEmail: string;
  /** Key-value pairs summarising the submission. */
  fields: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Internals (SMTP Transporter setup with App Password)
// ---------------------------------------------------------------------------

let _transporter: nodemailer.Transporter | null = null;

function getTransporter(): nodemailer.Transporter | null {
  if (_transporter) return _transporter;

  const smtpEmail = getOptionalEnv("SMTP_USER") || getOptionalEnv("EMAIL_FROM");
  const smtpPass = getOptionalEnv("SMTP_PASS") || getOptionalEnv("EMAIL_APP_PASSWORD");

  if (!smtpEmail || !smtpPass) {
    console.warn("[email] SMTP credentials missing in environment variables.");
    return null;
  }

  _transporter = nodemailer.createTransport({
    service: "gmail", // Ya custom SMTP setup (host/port)
    auth: {
      user: smtpEmail,
      pass: smtpPass, // 16-character App Password
    },
  });

  return _transporter;
}

const FORM_TYPE_LABELS: Record<FormType, string> = {
  VIS: "Visitor Registration",
  EXH: "Exhibitor Enquiry",
  CON: "Contact Form",
  SPO: "Sponsorship Enquiry",
  BRO: "Brochure Request",
  NWS: "Newsletter Subscription",
  MED: "Media Registration",
  CNF: "Conference Registration",
};

function formTypeLabel(type: FormType): string {
  return FORM_TYPE_LABELS[type] ?? type;
}

// ---------------------------------------------------------------------------
// HTML & Text Helpers
// ---------------------------------------------------------------------------

function confirmationHtml(data: ConfirmationTemplateData): string {
  const detailRows = data.details
    ? Object.entries(data.details)
        .map(([k, v]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#555;">${k}</td><td style="padding:6px 12px;">${v}</td></tr>`)
        .join("")
    : "";

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;background:#f7f7f7;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;background:#ffffff;">
    <tr><td style="padding:24px;background:#1a365d;color:#ffffff;text-align:center;">
      <h1 style="margin:0;font-size:22px;">${EVENT.fullName}</h1>
      <p style="margin:4px 0 0;font-size:14px;">${EVENT.dates.display} | ${EVENT.venue.display}</p>
    </td></tr>
    <tr><td style="padding:24px;">
      <p>Dear ${data.recipientName},</p>
      <p>Thank you for your <strong>${formTypeLabel(data.formType).toLowerCase()}</strong>. Your submission has been received successfully.</p>
      <p style="background:#f0f4f8;padding:12px;border-radius:6px;font-size:16px;text-align:center;">
        Reference Number: <strong>${data.referenceNumber}</strong>
      </p>
      ${detailRows ? `<table style="width:100%;border-collapse:collapse;margin:16px 0;">${detailRows}</table>` : ""}
      <p>Please save your reference number for future correspondence.</p>
      <p>If you have any questions, please contact us at <a href="mailto:${EVENT.contact.primary.email}">${EVENT.contact.primary.email}</a> or call ${EVENT.contact.primary.phone}.</p>
      <p>Best regards,<br><strong>Team ${EVENT.name}</strong></p>
    </td></tr>
    <tr><td style="padding:16px;background:#f0f0f0;text-align:center;font-size:12px;color:#888;">
      ${EVENT.organizers.icpma.shortName} &amp; ${EVENT.organizers.futurex.shortName} | ${EVENT.venue.fullDisplay}
    </td></tr>
  </table>
</body>
</html>`.trim();
}

function confirmationText(data: ConfirmationTemplateData): string {
  const detailLines = data.details
    ? Object.entries(data.details)
        .map(([k, v]) => `  ${k}: ${v}`)
        .join("\n")
    : "";

  return [
    `${EVENT.fullName}`,
    `${EVENT.dates.display} | ${EVENT.venue.display}`,
    "",
    `Dear ${data.recipientName},`,
    "",
    `Thank you for your ${formTypeLabel(data.formType).toLowerCase()}. Your submission has been received successfully.`,
    "",
    `Reference Number: ${data.referenceNumber}`,
    detailLines ? `\nDetails:\n${detailLines}` : "",
    "",
    "Please save your reference number for future correspondence.",
    "",
    `Questions? Email ${EVENT.contact.primary.email} or call ${EVENT.contact.primary.phone}.`,
    "",
    `Best regards,`,
    `Team ${EVENT.name}`,
  ]
    .join("\n")
    .trim();
}

function adminHtml(data: AdminNotificationData): string {
  const fieldRows = Object.entries(data.fields)
    .map(([k, v]) => `<tr><td style="padding:4px 8px;font-weight:600;">${k}</td><td style="padding:4px 8px;">${v}</td></tr>`)
    .join("");

  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;font-family:Arial,Helvetica,sans-serif;">
  <h2>New ${formTypeLabel(data.formType)}</h2>
  <p><strong>Reference:</strong> ${data.referenceNumber}</p>
  <p><strong>Name:</strong> ${data.submitterName}</p>
  <p><strong>Email:</strong> ${data.submitterEmail}</p>
  <table style="border-collapse:collapse;width:100%;">${fieldRows}</table>
</body>
</html>`.trim();
}

function adminText(data: AdminNotificationData): string {
  const fieldLines = Object.entries(data.fields)
    .map(([k, v]) => `  ${k}: ${v}`)
    .join("\n");

  return [
    `New ${formTypeLabel(data.formType)}`,
    `Reference: ${data.referenceNumber}`,
    `Name: ${data.submitterName}`,
    `Email: ${data.submitterEmail}`,
    "",
    "Fields:",
    fieldLines,
  ]
    .join("\n")
    .trim();
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Check if email sending is configured. */
export function isEmailEnabled(): boolean {
  return isIntegrationEnabled("email");
}

/**
 * Send a confirmation email to the registrant.
 */
export async function sendConfirmationEmail(
  to: string,
  templateData: ConfirmationTemplateData
): Promise<EmailResult> {
  if (!isEmailEnabled()) {
    return { success: false, status: "disabled", errorMessage: "Email not configured" };
  }

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, status: "error", errorMessage: "Failed to initialise SMTP transporter" };
  }

  const config = getConfig();
  const subject = `${templateData.referenceNumber} — ${formTypeLabel(templateData.formType)} Confirmation | ${EVENT.name}`;

  try {
    const info = await transporter.sendMail({
      from: config.EMAIL_FROM,
      to,
      subject,
      html: confirmationHtml(templateData),
      text: confirmationText(templateData),
    });

    return { success: true, status: "sent", messageId: info.messageId };
  } catch (error) {
    return {
      success: false,
      status: "error",
      errorMessage: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Send an admin notification email.
 */
export async function sendAdminNotification(
  formType: FormType,
  submissionData: AdminNotificationData
): Promise<EmailResult> {
  if (!isEmailEnabled()) {
    return { success: false, status: "disabled", errorMessage: "Email not configured" };
  }

  const transporter = getTransporter();
  if (!transporter) {
    return { success: false, status: "error", errorMessage: "Failed to initialise SMTP transporter" };
  }

  const config = getConfig();

  if (!config.EMAIL_ADMIN_RECIPIENTS || config.EMAIL_ADMIN_RECIPIENTS.length === 0) {
    return { success: false, status: "disabled", errorMessage: "No admin recipients configured" };
  }

  const subject = `[${submissionData.referenceNumber}] New ${formTypeLabel(formType)} | ${EVENT.name}`;

  try {
    const info = await transporter.sendMail({
      from: config.EMAIL_FROM,
      to: config.EMAIL_ADMIN_RECIPIENTS.join(", "), // Nodemailer multiple emails ko string me support karta hai
      subject,
      html: adminHtml(submissionData),
      text: adminText(submissionData),
    });

    return { success: true, status: "sent", messageId: info.messageId };
  } catch (error) {
    return {
      success: false,
      status: "error",
      errorMessage: error instanceof Error ? error.message : "Unknown error",
    };
  }
}