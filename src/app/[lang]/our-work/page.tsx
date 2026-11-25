import type { ResolvingMetadata } from "next";

import {
  CtaBand,
  PageHeader,
  ProgramIllustration,
  ProgramList,
  StorySection,
} from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPage, getWork } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("ourWork", "/our-work", parent);

/** All programs on one page, each an expanding panel. */
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
      <ProgramList {...page.programs} programs={work.programs} labels={dict.programs} />
      <StorySection id="story" {...page.story} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
