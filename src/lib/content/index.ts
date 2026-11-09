import "server-only";

import { about } from "@/content/about";
import { home } from "@/content/home";
import { pages, type PageKey } from "@/content/pages";
import { site } from "@/content/site";
import type { About, Home, Site, SitePages, Work } from "@/content/types";
import { work } from "@/content/work";

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

/** What AWF does and how: programs, the supply process and what we supply. */
export async function getWork(): Promise<Work> {
  return work;
}

/** Content of a standalone page, e.g. getPage("partner"). */
export async function getPage<K extends PageKey>(key: K): Promise<SitePages[K]> {
  return pages[key];
}
