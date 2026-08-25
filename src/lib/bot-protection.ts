/**
 * Google reCAPTCHA v2 & Generic Bot Protection Verification.
 *
 * Server-only module — do not import from client components.
 */

import { isProduction, isIntegrationEnabled, getOptionalEnv } from "@/lib/env";

export interface BotProtectionResult {
  verified: boolean;
  reason?: string;
}

/** Default to Google reCAPTCHA v2 Verification Endpoint */
const DEFAULT_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

/**
 * Verify reCAPTCHA token server-side with Google.
 *
 * @param token Client-side widget se mila token
 */
export async function verifyBotProtection(
  token: string | null,
): Promise<BotProtectionResult> {
  // Integration disabled check
  if (!isIntegrationEnabled("bot-protection")) {
    if (isProduction()) {
      return { verified: false, reason: "Bot protection not configured in production" };
    }
    // Development mode skip
    return { verified: true, reason: "Bot protection disabled (development)" };
  }

  // Check missing token
  if (!token || token.trim().length === 0) {
    return { verified: false, reason: "Please complete the reCAPTCHA challenge." };
  }

  const secret = getOptionalEnv("BOT_PROTECTION_SECRET");
  if (!secret) {
    return { verified: false, reason: "reCAPTCHA Secret Key missing in environment variables" };
  }

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
        reason: `reCAPTCHA endpoint error: ${response.status}`,
      };
    }

    const data = (await response.json()) as { 
      success?: boolean; 
      "error-codes"?: string[];
    };

    if (data.success) {
      return { verified: true };
    }

    const errorCodes = data["error-codes"]?.join(", ") ?? "invalid-input-response";
    return { verified: false, reason: `reCAPTCHA verification failed: ${errorCodes}` };
  } catch (error) {
    return {
      verified: false,
      reason: `Verification request failed: ${error instanceof Error ? error.message : "unknown error"}`,
    };
  }
}