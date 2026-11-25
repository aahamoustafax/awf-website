import type { Metadata } from "next";

import { CardGrid, CtaBand, Hero, MissionQuote } from "@/components/sections";
import { ButtonLink } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getHome, getWork } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return { alternates: { canonical: localePath(await getLocale(), "/") } };
}

/** Kept simple on purpose: headline, mission, the programs, and a way to get in touch. */
export default async function HomePage() {
  const [home, work, dict, locale] = await Promise.all([
    getHome(),
    getWork(),
    getDictionary(),
    getLocale(),
  ]);

  // Content stores paths without the language; add it here, once, for every link on the page.
  const path = (href: string) => localePath(locale, href);

  const programCards = work.programs.map((program) => ({
    title: program.title,
    description: program.summary,
    href: path(`/our-work#${program.slug}`),
    linkLabel: dict.programs.learnMore,
  }));

  return (
    <>
      <Hero
        {...home.hero}
        actions={
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={path(home.actions.primary.href)} variant="cta" size="lg">
              {home.actions.primary.label}
            </ButtonLink>
            <ButtonLink href={path(home.actions.secondary.href)} variant="outline" size="lg">
              {home.actions.secondary.label}
            </ButtonLink>
          </div>
        }
      />
      <MissionQuote {...home.mission} />
      <CardGrid id="programs" tone="muted" columns={4} {...home.programs} items={programCards} />
      <CtaBand
        {...home.contact}
        action={{ ...home.contact.action, href: path(home.contact.action.href) }}
      />
    </>
  );
}
