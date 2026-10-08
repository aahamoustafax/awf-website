import type { Locale } from "./config";

/**
 * Prefixes a site path with the language: localePath("en", "/about") → "/en/about".
 * Every internal link goes through this so adding a language never means hunting for hrefs.
 */
export function localePath(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}
