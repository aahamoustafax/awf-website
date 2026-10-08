import { CardGrid, CtaBand, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath, localizeHrefs } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("governance");

export default async function GovernancePage() {
  const [page, about, dict, locale] = await Promise.all([
    getPage("governance"),
    getPage("about"),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [
          { label: about.intro.eyebrow, path: "/about" },
          { label: page.intro.eyebrow },
        ])}
        {...page.intro}
      />
      <CardGrid
        id="commitments"
        {...page.commitments}
        items={localizeHrefs(locale, page.commitments.items)}
      />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
