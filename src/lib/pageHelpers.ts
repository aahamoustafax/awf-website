import type { Metadata, ResolvingMetadata } from "next";

import type { PageKey } from "@/content/pages";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

import { getLocale } from "@/i18n/dictionaries";

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

/**
 * Title, description and canonical URL for a standalone page, from its intro copy.
 * `path` is the page's site path without the language, e.g. "/partner".
 */
export async function pageMetadata(
  key: PageKey,
  path: string,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const [page, locale] = await Promise.all([getPage(key), getLocale()]);
  const { title, lead } = page.intro;
  return pageSeo({ title, description: lead, url: localePath(locale, path) }, parent);
}

/**
 * Per-page SEO that keeps the inherited share image. A page that sets `openGraph` replaces the
 * parent's object entirely, so the generated opengraph-image would be lost; spreading the
 * parent's resolved openGraph keeps it.
 */
export async function pageSeo(
  { title, description, url }: { title: string; description: string; url: string },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const inherited = (await parent).openGraph ?? {};
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { ...inherited, title, description, url },
  };
}
