/**
 * Google Sheets downstream sync.
 *
 * Uses the googleapis package with a service-account key (base64-encoded
 * private key in GOOGLE_PRIVATE_KEY_BASE64).
 *
 * One sheet per form type. Stable column ordering.
 * Reference-number-based duplicate protection (checks before append).
 *
 * Server-only module — do not import from client components.
 */

import { google, type sheets_v4 } from "googleapis";
import { isIntegrationEnabled, getOptionalEnv } from "@/lib/env";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SheetAppendResult {
  success: boolean;
  /** "disabled" when credentials are missing, "duplicate" when ref already exists. */
  status: "appended" | "duplicate" | "disabled" | "error";
  message?: string;
}

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

let _sheetsClient: sheets_v4.Sheets | null = null;

function getSheetsClient(): sheets_v4.Sheets | null {
  if (_sheetsClient) return _sheetsClient;

  if (!isGoogleSheetsEnabled()) return null;

  const clientEmail = getOptionalEnv("GOOGLE_CLIENT_EMAIL");
  const privateKeyBase64 = getOptionalEnv("GOOGLE_PRIVATE_KEY_BASE64");

  let privateKey: string;
  try {
    privateKey = Buffer.from(privateKeyBase64, "base64").toString("utf8");
  } catch {
    console.error("[google-sheets] Failed to decode GOOGLE_PRIVATE_KEY_BASE64");
    return null;
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  _sheetsClient = google.sheets({ version: "v4", auth });
  console.info("[google-sheets] Client initialised");
  return _sheetsClient;
}

function getSpreadsheetId(): string {
  return getOptionalEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
}

/**
 * Check whether a reference number already exists in the sheet.
 * Searches column A (assumed to be the reference number column).
 */
async function isDuplicate(
  client: sheets_v4.Sheets,
  spreadsheetId: string,
  sheetName: string,
  referenceNumber: string,
): Promise<boolean> {
  try {
    const response = await client.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A:A`,
    });

    const rows = response.data.values;
    if (!rows) return false;

    return rows.some((row) => row[0] === referenceNumber);
  } catch {
    // Sheet may not exist yet — not a duplicate
    return false;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Check if Google Sheets integration has all required credentials. */
export function isGoogleSheetsEnabled(): boolean {
  return isIntegrationEnabled("google-sheets");
}

/**
 * Append a row to the named sheet.
 *
 * @param sheetName  Tab name (e.g. "Visitors", "Exhibitors")
 * @param rowData    Ordered array of cell values. First element must be the reference number.
 */
export async function appendToSheet(
  sheetName: string,
  rowData: (string | number | boolean)[],
): Promise<SheetAppendResult> {
  if (!isGoogleSheetsEnabled()) {
    return { success: false, status: "disabled", message: "Google Sheets not configured" };
  }

  const client = getSheetsClient();
  if (!client) {
    return { success: false, status: "error", message: "Failed to initialise Sheets client" };
  }

  const spreadsheetId = getSpreadsheetId();
  const referenceNumber = String(rowData[0] ?? "");

  if (!referenceNumber) {
    return { success: false, status: "error", message: "Row data must start with a reference number" };
  }

  try {
    // Duplicate protection
    const exists = await isDuplicate(client, spreadsheetId, sheetName, referenceNumber);
    if (exists) {
      return { success: true, status: "duplicate", message: `Reference ${referenceNumber} already in sheet` };
    }

    await client.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true, status: "appended" };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error(`[google-sheets] Append to "${sheetName}" failed:`, message);
    return { success: false, status: "error", message };
  }
}
