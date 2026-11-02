import "server-only";

import { about } from "@/content/about";
import { home } from "@/content/home";
import { pages, type PageKey } from "@/content/pages";
import { programs } from "@/content/programs";
import { site } from "@/content/site";
import type { About, Home, Program, Site, SitePages, Work } from "@/content/types";
import { work } from "@/content/work";
import { isHiddenRoute, programPath } from "@/lib/routes";

/**
 * The content layer: the ONLY module pages and components use to get content.
 *
 * Today it reads typed objects from src/content. When a CMS (e.g. Sanity) is added,
 * only the bodies of these functions change; their signatures stay the same.
 * Functions are async for that reason, even though the current data is local.
 */

export async function getSite(): Promise<Site> {
  return site;
}

export async function getHome(): Promise<Home> {
  return home;
}

export async function getAbout(): Promise<About> {
  return about;
}

/**
 * Programs shown on the site. Hidden programs (ADR 0007) are left out unless `includeHidden` is set,
 * which only prerendering needs: their pages are still built, and the proxy answers them with a 404.
 */
export async function getPrograms({ includeHidden = false } = {}): Promise<Program[]> {
  return includeHidden
    ? programs
    : programs.filter((program) => !isHiddenRoute(programPath(program.slug)));
}

export async function getProgram(slug: string): Promise<Program | undefined> {
  return programs.find((program) => program.slug === slug);
}

/** What AWF does and how: focus areas, the supply process and what we supply. */
export async function getWork(): Promise<Work> {
  return work;
}

/** Content of a standalone page, e.g. getPage("partner"). */
export async function getPage<K extends PageKey>(key: K): Promise<SitePages[K]> {
  return pages[key];
}
