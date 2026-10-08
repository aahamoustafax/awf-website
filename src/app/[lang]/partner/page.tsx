import { CardGrid, CtaBand, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath, localizeHrefs } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("partner");

/** The page for sponsors, institutions and diplomatic partners. */
export default async function PartnerPage() {
  const [page, dict, locale] = await Promise.all([
    getPage("partner"),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <CardGrid id="why" columns={4} {...page.why} />
      <CardGrid
        id="ways"
        tone="muted"
        columns={2}
        {...page.ways}
        items={localizeHrefs(locale, page.ways.items)}
      />
      <CardGrid id="process" numbered columns={4} {...page.process} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
