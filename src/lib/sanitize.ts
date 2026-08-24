/**
 * Input sanitization and normalization utilities.
 * Server-only module — do not import from client components.
 */

// ---------------------------------------------------------------------------
// Core sanitizers
// ---------------------------------------------------------------------------

/** Trim, collapse internal whitespace, and strip control characters. */
export function sanitizeString(input: unknown): string {
  if (typeof input !== "string") return "";
  return input
    .trim()
    // Strip C0/C1 control characters except newline/tab
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "")
    // Collapse runs of whitespace (including newlines) to a single space
    .replace(/\s+/g, " ");
}

/** Sanitize and lowercase an email address. */
export function sanitizeEmail(input: unknown): string {
  if (typeof input !== "string") return "";
  return input.trim().toLowerCase();
}

/**
 * Sanitize a phone number.
 *
 * Strips everything except digits, `+`, hyphens, spaces, and parentheses,
 * then performs basic E.164 validation for Indian numbers.
 * Returns the cleaned number, or an empty string if it looks invalid.
 */
export function sanitizePhone(input: unknown): string {
  if (typeof input !== "string") return "";

  // Keep only phone-valid characters
  let cleaned = input.replace(/[^\d+\-\s()]/g, "").trim();

  // Strip formatting characters for validation
  const digitsOnly = cleaned.replace(/\D/g, "");

  // Accept Indian numbers: 10 digits, or 91 + 10 digits
  if (digitsOnly.length === 10) {
    // Normalise to +91 prefix
    cleaned = `+91${digitsOnly}`;
  } else if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
    cleaned = `+${digitsOnly}`;
  } else if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    // Indian trunk prefix (0-prefixed)
    cleaned = `+91${digitsOnly.slice(1)}`;
  } else if (digitsOnly.length >= 7 && digitsOnly.length <= 15) {
    // Accept other international numbers as-is (basic ITU length check)
    if (!cleaned.startsWith("+")) {
      cleaned = `+${digitsOnly}`;
    }
  } else {
    return "";
  }

  return cleaned;
}

// ---------------------------------------------------------------------------
// Schema-driven normalizer
// ---------------------------------------------------------------------------

export type FieldType = "string" | "email" | "phone" | "boolean" | "number";

export interface FieldSchema {
  type: FieldType;
  /** If true, preserve multi-line content (only collapses horizontal whitespace). */
  multiline?: boolean;
}

/**
 * Apply field-level sanitization to an object based on a schema map.
 *
 * Unknown keys (not in the schema) are silently dropped.
 */
export function normalizeFormData<T extends Record<string, unknown>>(
  data: Record<string, unknown>,
  schema: Record<string, FieldSchema>,
): T {
  const result: Record<string, unknown> = {};

  for (const [key, fieldSchema] of Object.entries(schema)) {
    const raw = data[key];

    switch (fieldSchema.type) {
      case "email":
        result[key] = sanitizeEmail(raw);
        break;

      case "phone":
        result[key] = sanitizePhone(raw);
        break;

      case "boolean":
        result[key] = Boolean(raw);
        break;

      case "number":
        result[key] = typeof raw === "number" ? raw : Number(raw) || 0;
        break;

      case "string":
      default:
        if (fieldSchema.multiline && typeof raw === "string") {
          // Only strip control chars, keep newlines
          result[key] = raw
            .trim()
            .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "");
        } else {
          result[key] = sanitizeString(raw);
        }
        break;
    }
  }

  return result as T;
}
