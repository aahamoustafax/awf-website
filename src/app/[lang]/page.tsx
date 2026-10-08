import type { Metadata } from "next";

import {
  CtaBand,
  Geographies,
  GoalsBand,
  Hero,
  MissionQuote,
  ProgramGrid,
  ValuesList,
  WaysToGive,
} from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getAbout, getHome, getPrograms } from "@/lib/content";
import { toProgramCard } from "@/lib/programs";

export async function generateMetadata(): Promise<Metadata> {
  return { alternates: { canonical: localePath(await getLocale(), "/") } };
}

export default async function HomePage() {
  const [home, about, programs, dict, locale] = await Promise.all([
    getHome(),
    getAbout(),
    getPrograms(),
    getDictionary(),
    getLocale(),
  ]);

  // Content stores paths without the language; add it here, once, for every link on the page.
  const path = (href: string) => localePath(locale, href);
  const link = <T extends { href: string }>(item: T): T => ({ ...item, href: path(item.href) });

  return (
    <>
      <Hero
        {...home.hero}
        giveCard={{
          ...home.hero.giveCard,
          options: home.hero.giveCard.options.map(link),
          action: link(home.hero.giveCard.action),
          secondaryAction: link(home.hero.giveCard.secondaryAction),
        }}
      />
      <MissionQuote {...home.mission} />
      <ProgramGrid
        intro={home.programs}
        learnMoreLabel={dict.programs.learnMore}
        programs={programs.map((program) => toProgramCard(program, dict, locale))}
      />
      <GoalsBand {...home.goals} />
      <Geographies {...home.geographies} />
      <WaysToGive {...home.give} ways={home.give.ways.map(link)} />
      <ValuesList {...home.values} values={about.values} />
      <CtaBand {...home.partner} action={link(home.partner.action)} />
    </>
  );
}
