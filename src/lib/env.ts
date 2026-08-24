/**
 * Environment variable validation and typed access.
 * Server-only module — do not import from client components.
 */

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Retrieve a required environment variable or throw at startup. */
export function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

/** Retrieve an optional environment variable with a fallback. */
export function getOptionalEnv(key: string, fallback: string = ""): string {
  return process.env[key] ?? fallback;
}

export function isProduction(): boolean {
  return process.env.NODE_ENV === "production";
}

/**
 * Check whether an integration has all required credentials configured.
 * Supported names: "email", "google-sheets", "bot-protection".
 */
export function isIntegrationEnabled(name: string): boolean {
  switch (name) {
    case "email":
      return Boolean(process.env.RESEND_API_KEY);

    case "google-sheets":
      return Boolean(
        process.env.GOOGLE_CLIENT_EMAIL &&
          process.env.GOOGLE_PRIVATE_KEY_BASE64 &&
          process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      );

    case "bot-protection":
      return Boolean(process.env.BOT_PROTECTION_SECRET);

    default:
      return false;
  }
}

// ---------------------------------------------------------------------------
// Typed config — lazily evaluated so tests can override process.env
// ---------------------------------------------------------------------------

export interface EnvConfig {
  // MongoDB
  MONGODB_URI: string;
  MONGODB_DATABASE: string;

  // Resend email
  RESEND_API_KEY: string;
  EMAIL_FROM: string;
  EMAIL_ADMIN_RECIPIENTS: string[];

  // Google APIs
  GOOGLE_PROJECT_ID: string;
  GOOGLE_CLIENT_EMAIL: string;
  GOOGLE_PRIVATE_KEY_BASE64: string;
  GOOGLE_SHEETS_SPREADSHEET_ID: string;

  // Cron
  CRON_SECRET: string;

  // Bot protection
  NEXT_PUBLIC_BOT_PROTECTION_SITE_KEY: string;
  BOT_PROTECTION_SECRET: string;

  // Site
  NEXT_PUBLIC_SITE_URL: string;

  // Runtime
  NODE_ENV: string;
}

/**
 * Build a typed config from the current process.env snapshot.
 *
 * Required vars throw on access when missing (MONGODB_URI, MONGODB_DATABASE).
 * Optional / integration vars fall back to empty strings or sensible defaults
 * so the app can start with integrations disabled.
 */
export function buildConfig(): EnvConfig {
  return {
    // Required — app cannot function without these
    MONGODB_URI: getRequiredEnv("MONGODB_URI"),
    MONGODB_DATABASE: getRequiredEnv("MONGODB_DATABASE"),

    // Optional — integrations degrade gracefully
    RESEND_API_KEY: getOptionalEnv("RESEND_API_KEY"),
    EMAIL_FROM: getOptionalEnv("EMAIL_FROM", "Corru Pack Print India <noreply@corrupackprintindia.org>"),
    EMAIL_ADMIN_RECIPIENTS: getOptionalEnv("EMAIL_ADMIN_RECIPIENTS")
      .split(",")
      .map((e) => e.trim())
      .filter(Boolean),

    GOOGLE_PROJECT_ID: getOptionalEnv("GOOGLE_PROJECT_ID"),
    GOOGLE_CLIENT_EMAIL: getOptionalEnv("GOOGLE_CLIENT_EMAIL"),
    GOOGLE_PRIVATE_KEY_BASE64: getOptionalEnv("GOOGLE_PRIVATE_KEY_BASE64"),
    GOOGLE_SHEETS_SPREADSHEET_ID: getOptionalEnv("GOOGLE_SHEETS_SPREADSHEET_ID"),

    CRON_SECRET: getOptionalEnv("CRON_SECRET"),

    NEXT_PUBLIC_BOT_PROTECTION_SITE_KEY: getOptionalEnv("NEXT_PUBLIC_BOT_PROTECTION_SITE_KEY"),
    BOT_PROTECTION_SECRET: getOptionalEnv("BOT_PROTECTION_SECRET"),

    NEXT_PUBLIC_SITE_URL: getOptionalEnv("NEXT_PUBLIC_SITE_URL", "https://corrupackprintindia.org"),

    NODE_ENV: getOptionalEnv("NODE_ENV", "development"),
  };
}

/** Singleton config instance. */
let _config: EnvConfig | null = null;

export function getConfig(): EnvConfig {
  if (!_config) {
    _config = buildConfig();
  }
  return _config;
}
