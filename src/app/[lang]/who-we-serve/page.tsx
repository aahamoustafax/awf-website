import { CardGrid, CtaBand, PageHeader, StorySection } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath, localizeHrefs } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("whoWeServe");

export default async function WhoWeServePage() {
  const [page, dict, locale] = await Promise.all([
    getPage("whoWeServe"),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <CardGrid
        id="groups"
        columns={2}
        {...page.groups}
        items={localizeHrefs(locale, page.groups.items)}
      />
      <StorySection id="base" tone="muted" {...page.base} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
