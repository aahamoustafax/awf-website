import type { Metadata } from "next";

import {
  AlertBanner,
  Badge,
  Button,
  ButtonLink,
  Card,
  Eyebrow,
  Heading,
  ImagePlaceholder,
  Lead,
  Logo,
  Section,
  Stat,
  StatList,
} from "@/components/ui";

/**
 * Internal design-system reference: every token and primitive in one place, for design review
 * and for checking changes. Not linked from the site and hidden from search engines.
 * Sample text here is demo data, the one place hard-coded copy is allowed.
 */
export const metadata: Metadata = {
  title: "Style guide",
  robots: { index: false, follow: false },
};

const colours = [
  { name: "background", className: "bg-background", note: "Page background" },
  { name: "surface", className: "bg-surface", note: "Cards, panels" },
  { name: "surface-muted", className: "bg-surface-muted", note: "Alternating sections" },
  { name: "foreground", className: "bg-foreground", note: "Body text" },
  { name: "muted", className: "bg-muted", note: "Secondary text" },
  { name: "primary", className: "bg-primary", note: "Navy: headings, dark sections" },
  { name: "accent", className: "bg-accent", note: "Links, blue text" },
  { name: "brand-sky", className: "bg-brand-sky", note: "Logo blue: decorative / on navy only" },
  { name: "cta", className: "bg-cta", note: "Donate / Partner buttons" },
  { name: "alert", className: "bg-alert", note: "Urgent appeal banner" },
] as const;

export default function StyleguidePage() {
  return (
    <>
      <Section aria-labelledby="sg-title">
        <Eyebrow className="text-accent">Design system</Eyebrow>
        <Heading level={1} id="sg-title" className="mt-3 text-primary">
          AWF style guide
        </Heading>
        <Lead className="mt-6 text-muted">
          Every colour, type style and building block used on the site. Change tokens in
          src/styles/globals.css and components in src/components/ui.
        </Lead>
      </Section>

      <Section tone="muted" aria-labelledby="sg-colours">
        <Heading level={2} size="md" id="sg-colours" className="text-primary">
          Colours
        </Heading>
        <ul className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {colours.map((colour) => (
            <li
              key={colour.name}
              className="overflow-hidden rounded-xl border border-border bg-surface"
            >
              <div className={`h-20 ${colour.className}`} />
              <div className="p-3 text-sm">
                <p className="font-semibold">{colour.name}</p>
                <p className="text-muted">{colour.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section aria-labelledby="sg-type">
        <Heading level={2} size="md" id="sg-type" className="text-primary">
          Typography
        </Heading>
        <div className="mt-8 space-y-6 text-primary">
          <p className="font-display text-display-xl font-semibold">Display XL: hero</p>
          <p className="font-display text-display-lg font-semibold">Display LG: page sections</p>
          <p className="font-display text-display-md font-semibold">Display MD: sub-sections</p>
          <p className="font-display text-display-sm font-semibold">Display SM: card titles</p>
          <Lead className="text-foreground">
            Lead paragraph: medicines and medical supplies for hospitals and clinics in Afghanistan.
          </Lead>
          <p className="max-w-prose text-foreground">
            Body text (Inter). Azan Welfare Foundation runs programs designed to uplift vulnerable
            individuals, from hospitals and clinics to patients in underserved Afghan communities.{" "}
            <a href="#sg-type" className="text-accent underline underline-offset-2">
              This is a link.
            </a>
          </p>
        </div>
      </Section>

      <Section tone="muted" aria-labelledby="sg-buttons">
        <Heading level={2} size="md" id="sg-buttons" className="text-primary">
          Buttons
        </Heading>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink href="#sg-buttons" variant="cta" size="lg">
            Donate
          </ButtonLink>
          <Button variant="primary">Primary</Button>
          <Button variant="outline" className="text-primary">
            Outline
          </Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </Section>

      <Section tone="primary" aria-labelledby="sg-dark">
        <Eyebrow className="text-brand-sky">On navy</Eyebrow>
        <Heading level={2} id="sg-dark" className="mt-3">
          Our impact so far
        </Heading>
        <StatList className="mt-10">
          <Stat value="120+" label="Sample figure: hospitals supported" />
          <Stat value="4" label="Programs" />
          <Stat value="2" label="Countries served" />
          <Stat value="1400" label="Founding year (Solar Hijri)" />
        </StatList>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="#sg-dark" variant="cta">
            Partner with us
          </ButtonLink>
          <Button variant="outline">Outline on dark</Button>
        </div>
        <div className="mt-10">
          <Logo name="Azan Welfare Foundation" variant="light" />
        </div>
      </Section>

      <Section aria-labelledby="sg-cards">
        <Heading level={2} size="md" id="sg-cards" className="text-primary">
          Cards, badges, placeholders
        </Heading>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card>
            <Badge>Healthcare</Badge>
            <Heading level={3} size="sm" className="mt-4 text-primary">
              Thalassemia support
            </Heading>
            <p className="mt-3 text-muted">
              Sample text: support for patients living with blood disorders.
            </p>
          </Card>
          <Card>
            <Badge tone="primary">Afghanistan</Badge>
            <Heading level={3} size="sm" className="mt-4 text-primary">
              Healthcare for Afghanistan
            </Heading>
            <p className="mt-3 text-muted">
              Medical equipment from donors across Canada, shipped to underserved clinics.
            </p>
          </Card>
          <ImagePlaceholder description="Medical supplies being unpacked at a clinic" />
        </div>
        <div className="mt-10">
          <Logo name="Azan Welfare Foundation" />
        </div>
      </Section>

      <Section tone="muted" aria-labelledby="sg-alert">
        <Heading level={2} size="md" id="sg-alert" className="text-primary">
          Alert banner
        </Heading>
      </Section>
      <AlertBanner
        label="Announcement"
        message="Sample urgent appeal: emergency medical shipment."
        link={{ href: "#sg-alert", label: "How to help" }}
      />
    </>
  );
}
