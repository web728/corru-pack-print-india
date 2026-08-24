/**
 * Configurable bot protection verification.
 *
 * When BOT_PROTECTION_SECRET is set, verifies tokens server-side via
 * a generic verification endpoint (compatible with hCaptcha, Turnstile,
 * reCAPTCHA, etc.).
 *
 * When not set:
 *   - Development: verification is skipped (allows local testing).
 *   - Production: fails closed — all requests are rejected.
 *
 * Server-only module — do not import from client components.
 */

import { isProduction, isIntegrationEnabled, getOptionalEnv } from "@/lib/env";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BotProtectionResult {
  verified: boolean;
  reason?: string;
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

/**
 * Override this with the provider's siteverify URL. Defaults to hCaptcha.
 * Set BOT_PROTECTION_VERIFY_URL in env to switch providers.
 */
const DEFAULT_VERIFY_URL = "https://api.hcaptcha.com/siteverify";

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Verify a bot-protection token.
 *
 * @param token The challenge response token from the client-side widget.
 */
export async function verifyBotProtection(
  token: string | null,
): Promise<BotProtectionResult> {
  // Integration not configured
  if (!isIntegrationEnabled("bot-protection")) {
    if (isProduction()) {
      return { verified: false, reason: "Bot protection not configured in production" };
    }
    // Development: skip verification
    return { verified: true, reason: "Bot protection disabled (development)" };
  }

  // Token missing
  if (!token || token.trim().length === 0) {
    return { verified: false, reason: "Missing bot protection token" };
  }

  const secret = getOptionalEnv("BOT_PROTECTION_SECRET");
  const verifyUrl = getOptionalEnv("BOT_PROTECTION_VERIFY_URL", DEFAULT_VERIFY_URL);

  try {
    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
      }),
    });

    if (!response.ok) {
      return {
        verified: false,
        reason: `Verification endpoint returned ${response.status}`,
      };
    }

    const data = (await response.json()) as { success?: boolean; "error-codes"?: string[] };

    if (data.success) {
      return { verified: true };
    }

    const errorCodes = data["error-codes"]?.join(", ") ?? "unknown";
    return { verified: false, reason: `Verification failed: ${errorCodes}` };
  } catch (error) {
    return {
      verified: false,
      reason: `Verification request failed: ${error instanceof Error ? error.message : "unknown error"}`,
    };
  }
}
