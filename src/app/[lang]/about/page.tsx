import type { ResolvingMetadata } from "next";

import { Reveal } from "@/components/motion";
import { CardGrid, CtaBand, PageHeader, StorySection, ValuesList } from "@/components/sections";
import { Card, Heading } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getAbout, getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("about", "/about", parent);

export default async function AboutPage() {
  const [page, about, dict, locale] = await Promise.all([
    getPage("about"),
    getAbout(),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />

      <StorySection
        id="story"
        {...page.story}
        paragraphs={about.intro}
        aside={
          <>
            <Reveal delay={120}>
              <Card className="border-t-4 border-t-accent">
                <Heading level={3} size="sm" className="text-primary">
                  {page.missionLabel}
                </Heading>
                <p className="mt-3 text-muted">{about.mission}</p>
              </Card>
            </Reveal>
            <Reveal delay={240}>
              <Card className="border-t-4 border-t-cta">
                <Heading level={3} size="sm" className="text-primary">
                  {page.visionLabel}
                </Heading>
                <p className="mt-3 text-muted">{about.vision}</p>
              </Card>
            </Reveal>
          </>
        }
      />

      <ValuesList {...page.values} values={about.values} />

      <CardGrid
        id="leadership"
        tone="muted"
        columns={3}
        {...page.leadership}
        items={about.leadership.map((person) => ({
          title: person.name,
          description: person.bio ? `${person.role}. ${person.bio}` : person.role,
        }))}
      />

      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
