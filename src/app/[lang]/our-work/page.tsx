import type { ResolvingMetadata } from "next";

import {
  CardGrid,
  CtaBand,
  PageHeader,
  ProgramIllustration,
  ProgramNeeds,
  StorySection,
} from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPage, getWork } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("ourWork", "/our-work", parent);

export default async function OurWorkPage() {
  const [page, work, dict, locale] = await Promise.all([
    getPage("ourWork"),
    getWork(),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
        art={<ProgramIllustration icon="care" animated />}
      />
      <StorySection id="story" {...page.story} />
      <CardGrid
        id="how-we-work"
        tone="muted"
        numbered
        columns={4}
        {...page.howWeWork}
        items={work.howWeWork}
      />
      <ProgramNeeds id="what-we-supply" {...page.supplies} needs={work.supplies} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
