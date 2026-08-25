/**
 * UTM parameter extraction from URLs and headers.
 * Server-only module — do not import from client components.
 */

export interface UtmParams {
  source: string;
  medium: string;
  campaign: string;
  term: string;
  content: string;
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

export function extractUtmParams(url: string | null): UtmParams | null {
  if (!url) return null;

  let searchParams: URLSearchParams;
  try {
    if (url.startsWith("http://") || url.startsWith("https://")) {
      searchParams = new URL(url).searchParams;
    } else if (url.includes("?")) {
      const queryString = url.split("?")[1] ?? "";
      searchParams = new URLSearchParams(queryString);
    } else {
      return null;
    }
  } catch {
    return null;
  }

  const hasAny = UTM_KEYS.some((k) => searchParams.has(k));
  if (!hasAny) return null;

  return {
    source: searchParams.get("utm_source") ?? "",
    medium: searchParams.get("utm_medium") ?? "",
    campaign: searchParams.get("utm_campaign") ?? "",
    term: searchParams.get("utm_term") ?? "",
    content: searchParams.get("utm_content") ?? "",
  };
}