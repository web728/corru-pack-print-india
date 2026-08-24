/**
 * UTM parameter extraction from URLs and headers.
 * Server-only module — do not import from client components.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface UtmParams {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Extract UTM parameters from a URL string (e.g. Referer header or page URL).
 *
 * Returns a `UtmParams` object if at least one UTM parameter is present,
 * or `null` if the URL is empty / has no UTM params.
 */
export function extractUtmParams(url: string | null): UtmParams | null {
  if (!url) return null;

  let searchParams: URLSearchParams;
  try {
    // Handle both full URLs and bare query strings
    if (url.startsWith("http://") || url.startsWith("https://")) {
      searchParams = new URL(url).searchParams;
    } else if (url.includes("?")) {
      searchParams = new URLSearchParams(url.split("?")[1] ?? "");
    } else {
      return null;
    }
  } catch {
    return null;
  }

  const source = searchParams.get("utm_source") ?? "";
  const medium = searchParams.get("utm_medium") ?? "";
  const campaign = searchParams.get("utm_campaign") ?? "";
  const term = searchParams.get("utm_term") ?? "";
  const content = searchParams.get("utm_content") ?? "";

  // Only return if at least one UTM param is present
  const hasAny = UTM_KEYS.some((k) => searchParams.has(k));
  if (!hasAny) return null;

  return { source, medium, campaign, term, content };
}
