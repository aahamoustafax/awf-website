import type { ResolvingMetadata } from "next";

import { CtaBand, PageHeader, ProgramGrid } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getHome, getPage, getPrograms } from "@/lib/content";
import { pageMetadata } from "@/lib/pageHelpers";
import { toProgramCard } from "@/lib/programs";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("programs", "/programs", parent);

export default async function ProgramsPage() {
  const [intro, programs, home, dict, locale] = await Promise.all([
    getPage("programs").then((page) => page.intro),
    getPrograms(),
    getHome(),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={{
          label: dict.breadcrumb.label,
          items: [
            { label: dict.breadcrumb.home, href: localePath(locale, "/") },
            { label: intro.eyebrow },
          ],
        }}
        {...intro}
      />
      <ProgramGrid
        label={intro.eyebrow}
        learnMoreLabel={dict.programs.learnMore}
        programs={programs.map((program) => toProgramCard(program, dict, locale))}
      />
      <CtaBand
        {...home.partner}
        action={{ ...home.partner.action, href: localePath(locale, home.partner.action.href) }}
      />
    </>
  );
}
