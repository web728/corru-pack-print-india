/**
 * In-memory sliding-window rate limiter.
 *
 * Uses a Map with TTL-based cleanup. This is instance-local — each
 * serverless invocation or Node process has its own Map.
 *
 * PRODUCTION UPGRADE PATH:
 * Replace the in-memory store with Redis (e.g. @upstash/ratelimit) or a
 * MongoDB TTL collection for distributed rate limiting across instances.
 *
 * Server-only module — do not import from client components.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetAt: number; // epoch ms
}

interface RateLimitEntry {
  timestamps: number[];
  expiresAt: number;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

const store = new Map<string, RateLimitEntry>();

/** Prune expired entries. Runs at most once per 60 seconds. */
let lastCleanup = 0;
const CLEANUP_INTERVAL_MS = 60_000;

function cleanup(): void {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL_MS) return;
  lastCleanup = now;

  for (const [key, entry] of store) {
    if (entry.expiresAt <= now) {
      store.delete(key);
    }
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Check (and consume) a rate-limit token.
 *
 * @param key     Unique identifier (e.g. IP + form type)
 * @param limit   Max requests allowed within the window
 * @param windowMs Window duration in milliseconds
 */
export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number,
): RateLimitResult {
  cleanup();

  const now = Date.now();
  const windowStart = now - windowMs;

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [], expiresAt: now + windowMs };
    store.set(key, entry);
  }

  // Discard timestamps outside the current window
  entry.timestamps = entry.timestamps.filter((t) => t > windowStart);

  if (entry.timestamps.length >= limit) {
    // Rejected — calculate when the earliest recorded request expires
    const oldestInWindow = entry.timestamps[0] ?? now;
    return {
      allowed: false,
      remaining: 0,
      resetAt: oldestInWindow + windowMs,
    };
  }

  // Allowed — record the request
  entry.timestamps.push(now);
  entry.expiresAt = now + windowMs;

  return {
    allowed: true,
    remaining: limit - entry.timestamps.length,
    resetAt: entry.timestamps[0]! + windowMs,
  };
}

// ---------------------------------------------------------------------------
// Preset limits (used by submission handler & cron routes)
// ---------------------------------------------------------------------------

/** Form submission: 5 requests per 15 minutes per IP+form key. */
export const FORM_RATE_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 } as const;

/** Cron endpoint: 1 request per 60 seconds. */
export const CRON_RATE_LIMIT = { limit: 1, windowMs: 60 * 1000 } as const;
