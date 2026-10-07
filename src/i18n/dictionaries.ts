import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { isLocale, type Locale } from "./config";
import type en from "./messages/en.json";

/** English is the source of truth: every other language must have the same keys. */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./messages/en.json").then((module) => module.default),
};

/** The current locale, read from the `[lang]` URL segment. Server-only. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!isLocale(value)) notFound();
  return value;
}

/** UI strings (labels, buttons, nav) for the current locale. Server-only. */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()]();
}
