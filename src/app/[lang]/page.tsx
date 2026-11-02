import type { Metadata } from "next";

import {
  CardGrid,
  CtaBand,
  DonationBox,
  GoalsBand,
  HelpCard,
  Hero,
  MissionQuote,
} from "@/components/sections";
import { getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getHome, getWork } from "@/lib/content";

export async function generateMetadata(): Promise<Metadata> {
  return { alternates: { canonical: localePath(await getLocale(), "/") } };
}

export default async function HomePage() {
  const [home, work, locale] = await Promise.all([getHome(), getWork(), getLocale()]);

  // Content stores paths without the language; add it here, once, for every link on the page.
  const path = (href: string) => localePath(locale, href);
  const link = <T extends { href: string }>(item: T): T => ({ ...item, href: path(item.href) });

  return (
    <>
      <Hero
        {...home.hero}
        card={<DonationBox {...home.donate} action={link(home.donate.action)} />}
      />
      <MissionQuote
        {...home.mission}
        aside={
          <HelpCard
            {...home.help}
            options={home.help.options.map(link)}
            action={link(home.help.action)}
            secondaryAction={link(home.help.secondaryAction)}
          />
        }
      />
      <CardGrid id="focus-areas" tone="muted" {...home.focusAreas} items={work.focusAreas} />
      <CardGrid id="how-we-work" numbered columns={4} {...home.howWeWork} items={work.howWeWork} />
      <GoalsBand {...home.goals} />
      <CtaBand {...home.partner} action={link(home.partner.action)} />
    </>
  );
}
