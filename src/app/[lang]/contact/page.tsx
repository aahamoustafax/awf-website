import type { ResolvingMetadata } from "next";

import { CardGrid, ContactPanel, PageHeader } from "@/components/sections";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPage, getSite } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("contact", "/contact", parent);

/**
 * Contact details and common reasons to get in touch. The contact form (ContactForm, ADR 0005) is
 * switched off until email sending is set up; its code is kept for then.
 */
export default async function ContactPage() {
  const [page, site, dict, locale] = await Promise.all([
    getPage("contact"),
    getSite(),
    getDictionary(),
    getLocale(),
  ]);
  const { location } = site;
  const place = `${location.city}, ${location.region}, ${location.country}`;

  const methods = [
    site.email && { label: dict.contact.email, value: site.email, href: `mailto:${site.email}` },
    site.phone && {
      label: dict.contact.phone,
      value: site.phone,
      href: `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    },
    { label: dict.contact.location, value: site.address ? `${site.address}, ${place}` : place },
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
