import "server-only";

import { about } from "@/content/about";
import { home } from "@/content/home";
import { programs } from "@/content/programs";
import { site } from "@/content/site";
import type { About, Home, Program, Site } from "@/content/types";

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

export async function getPrograms(): Promise<Program[]> {
  return programs;
}

export async function getProgram(slug: string): Promise<Program | undefined> {
  return programs.find((program) => program.slug === slug);
}
