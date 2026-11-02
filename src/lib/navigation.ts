import type { Program } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { isHiddenRoute, programPath } from "@/lib/routes";

/**
 * Site menu structure: the single source for the header, mobile menu and footer.
 * Labels come from the dictionary (UI strings) or content (program titles); hrefs are localized here,
 * so navigation components receive ready-to-render data and stay simple.
 * Hidden pages (ADR 0007) are left out, and the Programs menu only appears while a program is shown.
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
  const visibleLinks = (links: [label: string, path: string][]): NavLink[] =>
    links.filter(([, path]) => !isHiddenRoute(path)).map(([label, path]) => link(label, path));
  const { nav } = dict;

  const programLinks = programs.map((program) => link(program.title, programPath(program.slug)));
  const programsGroup: NavGroup[] =
    programLinks.length > 0
      ? [
          {
            label: nav.programs,
            children: [...visibleLinks([[nav.allPrograms, "/programs"]]), ...programLinks],
          },
        ]
      : [];

  return {
    main: [
      {
        label: nav.about,
        children: visibleLinks([
          [nav.whoWeAre, "/about"],
          [nav.whoWeServe, "/who-we-serve"],
          [nav.governance, "/about/governance"],
        ]),
      },
      link(nav.ourWork, "/our-work"),
      ...programsGroup,
      link(nav.getInvolved, "/get-involved"),
      link(nav.contact, "/contact"),
    ],
    partner: link(nav.partner, "/partner"),
    donate: link(nav.donate, "/donate"),
  };
}
