import { Reveal } from "@/components/motion";
import { CardGrid, CtaBand, PageHeader } from "@/components/sections";
import { Container, Heading } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { localePath, localizeHrefs } from "@/i18n/paths";
import { getPage } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("donate");

/** Ways to give today. Online giving (DonationWidget) arrives after registration (ADR 0004). */
export default async function DonatePage() {
  const [page, dict, locale] = await Promise.all([getPage("donate"), getDictionary(), getLocale()]);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <CardGrid
        id="ways"
        columns={2}
        {...page.ways}
        items={localizeHrefs(locale, page.ways.items)}
      />

      <Container className="pb-4">
        <Reveal>
          <aside
            aria-labelledby="receipts-title"
            className="max-w-3xl rounded-2xl border-l-4 border-cta bg-surface-muted p-6 sm:p-8"
          >
            <Heading level={2} size="sm" id="receipts-title" className="text-primary">
              {page.receipts.title}
            </Heading>
            <p className="mt-3 text-lg">{page.receipts.body}</p>
          </aside>
        </Reveal>
      </Container>

      <CtaBand
        {...page.cta}
        action={{ ...page.cta.action, href: localePath(locale, page.cta.action.href) }}
      />
    </>
  );
}
