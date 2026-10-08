import { PageHeader, ProseSection } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("privacy");

export default async function PrivacyPage() {
  const [page, dict, locale] = await Promise.all([
    getPage("privacy"),
    getDictionary(),
    getLocale(),
  ]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <ProseSection
        sections={page.sections}
        updated={page.updated}
        updatedLabel={dict.legal.updated}
      />
    </>
  );
}
