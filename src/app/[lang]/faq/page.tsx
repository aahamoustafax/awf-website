import { CtaBand, FaqList, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("faq");

export default async function FaqPage() {
  const [page, dict, locale] = await Promise.all([getPage("faq"), getDictionary(), getLocale()]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <FaqList label={page.intro.title} items={page.items} />
      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
