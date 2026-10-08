import type { ResolvingMetadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { CardGrid, ContactPanel, PageHeader, SectionIntro } from "@/components/sections";
import { Section } from "@/components/ui";
import { getDictionary, getLocale } from "@/i18n/dictionaries";
import { getPage, getSite } from "@/lib/content";
import { breadcrumb, pageMetadata } from "@/lib/pageHelpers";

export const generateMetadata = (_props: unknown, parent: ResolvingMetadata) =>
  pageMetadata("contact", "/contact", parent);

/** Contact details, the contact form, and common reasons to get in touch. */
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
      <Section tone="muted" aria-labelledby="form-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionIntro
            id="form-title"
            eyebrow={page.intro.eyebrow}
            title={dict.form.title}
            lead={dict.form.lead}
          />
          <div className="rounded-3xl bg-surface p-6 shadow-sm sm:p-10">
            <ContactForm labels={dict.form} fallbackEmail={site.email ?? ""} />
          </div>
        </div>
      </Section>
      <CardGrid id="reasons" columns={4} {...page.reasons} />
    </>
  );
}
