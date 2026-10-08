/**
 * Small in-memory rate limiter: at most `limit` hits per `windowMs` for each key (e.g. an IP).
 *
 * Best effort only: memory is per server instance and resets on deploy. That's enough to slow
 * down casual abuse of the contact form. If spam becomes a problem, swap the store for a shared
 * one (e.g. Vercel KV / Upstash) without changing callers.
 */
export function createRateLimiter({ limit, windowMs }: { limit: number; windowMs: number }) {
  const hits = new Map<string, number[]>();

  return function isAllowed(key: string, now = Date.now()): boolean {
    const recent = (hits.get(key) ?? []).filter((time) => now - time < windowMs);
    if (recent.length >= limit) {
      hits.set(key, recent);
      return false;
    }
    recent.push(now);
    hits.set(key, recent);
    return true;
  };
}
