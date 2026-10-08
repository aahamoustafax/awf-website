import type { Program } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";

/**
 * Site menu structure: the single source for the header, mobile menu and footer.
 * Labels come from the dictionary (UI strings) or content (program titles); hrefs are localized here,
 * so navigation components receive ready-to-render data and stay simple.
 */

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; children: NavLink[] };
export type NavItem = NavLink | NavGroup;

export type Navigation = {
  main: NavItem[];
  partner: NavLink;
  donate: NavLink;
};

export function isNavGroup(item: NavItem): item is NavGroup {
  return "children" in item;
}

export function buildNavigation(dict: Dictionary, locale: Locale, programs: Program[]): Navigation {
  const link = (label: string, path: string): NavLink => ({
    label,
    href: localePath(locale, path),
  });
  const { nav } = dict;

  return {
    main: [
      {
        label: nav.about,
        children: [
          link(nav.whoWeAre, "/about"),
          link(nav.whoWeServe, "/who-we-serve"),
          link(nav.governance, "/about/governance"),
        ],
      },
      {
        label: nav.programs,
        children: [
          link(nav.allPrograms, "/programs"),
          ...programs.map((program) => link(program.title, `/programs/${program.slug}`)),
        ],
      },
      link(nav.getInvolved, "/get-involved"),
      link(nav.contact, "/contact"),
    ],
    partner: link(nav.partner, "/partner"),
    donate: link(nav.donate, "/donate"),
  };
}
