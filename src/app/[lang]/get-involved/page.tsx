import type { ResolvingMetadata } from "next";

import { CardGrid, CtaBand, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath, localizeHrefs } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("getInvolved", "/get-involved", parent);

export default async function GetInvolvedPage() {
  const [page, dict, locale] = await Promise.all([
    getPage("getInvolved"),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <CardGrid id="ways" {...page.ways} items={localizeHrefs(locale, page.ways.items)} />
      <CardGrid id="roles" tone="muted" {...page.roles} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
