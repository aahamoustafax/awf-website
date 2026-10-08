import type { Metadata } from "next";

import type { PageKey } from "@/content/pages";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

import { getPage } from "./content";

type Crumb = { label: string; path?: string };

/** Breadcrumb props for PageHeader: Home → …trail. The last crumb is the current page (no link). */
export function breadcrumb(dict: Dictionary, locale: Locale, trail: Crumb[]) {
  return {
    label: dict.breadcrumb.label,
    items: [{ label: dict.breadcrumb.home, path: "/" }, ...trail].map((crumb) => ({
      label: crumb.label,
      href: crumb.path ? localePath(locale, crumb.path) : undefined,
    })),
  };
}

/** Title and description for a standalone page, taken from its intro copy. */
export async function pageMetadata(key: PageKey): Promise<Metadata> {
  const page = await getPage(key);
  const intro = (page as { intro: { title: string; lead: string } }).intro;
  return { title: intro.title, description: intro.lead };
}
