import type { Locale } from "./config";

/**
 * Prefixes a site path with the language: localePath("en", "/about") → "/en/about".
 * Every internal link goes through this so adding a language never means hunting for hrefs.
 */
export function localePath(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Localizes the `href` of every item that has one (cards, actions). */
export function localizeHrefs<T extends { href?: string }>(locale: Locale, items: T[]): T[] {
  return items.map((item) => (item.href ? { ...item, href: localePath(locale, item.href) } : item));
}
