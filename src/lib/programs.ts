import type { ProgramCard } from "@/components/sections";
import type { Program } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

/** Program detail page path, without the language prefix. */
export function programPath(slug: string): string {
  return `/programs/${slug}`;
}

/** Turns a program into the props of a card in ProgramGrid (home, programs index, detail pages). */
export function toProgramCard(program: Program, dict: Dictionary, locale: Locale): ProgramCard {
  return {
    title: program.title,
    summary: program.summary,
    focus: program.focus,
    href: localePath(locale, programPath(program.slug)),
    regionLabel: dict.programs.regions[program.region],
    icon: program.icon,
    statusLabel: program.status === "launching" ? dict.programs.status.launching : undefined,
  };
}
