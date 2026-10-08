/**
 * Supported languages. To add one (e.g. "fr", "fa" for Dari, "ps" for Pashto):
 * 1. add it to `locales` (and to `rtlLocales` if it is right-to-left),
 * 2. add `messages/<locale>.json` with the same keys as `en.json`,
 * 3. register it in `dictionaries.ts`.
 * See docs/decisions/0003-i18n-native-routing.md.
 */
export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

const rtlLocales: readonly string[] = ["ar", "fa", "ps"];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return rtlLocales.includes(locale) ? "rtl" : "ltr";
}
