/**
 * The public base URL (for canonical links, sitemap, social previews).
 * Set NEXT_PUBLIC_SITE_URL in production; Vercel previews fall back to their own URL.
 */
export function siteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);
  if (process.env.VERCEL_URL) return new URL(`https://${process.env.VERCEL_URL}`);
  return new URL("http://localhost:3000");
}
