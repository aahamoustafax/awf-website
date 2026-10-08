import { CardGrid, ContactPanel, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPage, getSite } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = () => pageMetadata("contact");

/** Contact details now; the contact form is added in Phase 7. */
export default async function ContactPage() {
  const [page, site, dict, locale] = await Promise.all([
    getPage("contact"),
    getSite(),
    getDictionary(),
    getLocale(),
  ]);
  const { location } = site;

  const methods = [
    site.email && { label: dict.contact.email, value: site.email, href: `mailto:${site.email}` },
    site.phone && {
      label: dict.contact.phone,
      value: site.phone,
      href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    },
    {
      label: dict.contact.location,
      value: `${location.city}, ${location.region}, ${location.country}`,
    },
  ].filter((method) => !!method);

  return (
    <>
      <PageHeader
        breadcrumb={breadcrumb(dict, locale, [{ label: page.intro.eyebrow }])}
        {...page.intro}
      />
      <ContactPanel title={dict.contact.detailsTitle} methods={methods} />
      <CardGrid id="reasons" tone="muted" columns={4} {...page.reasons} />
    </>
  );
}
