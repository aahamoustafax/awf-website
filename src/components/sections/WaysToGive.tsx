import Link from "next/link";

import { Card, Heading, Section } from "@/components/ui";
import type { WayToGive } from "@/content/types";

import { SectionIntro } from "./SectionIntro";

type WaysToGiveProps = { eyebrow: string; title: string; lead: string; ways: WayToGive[] };

/**
 * Home page giving section. Reserved slot for the online donation module (ADR 0004):
 * once AWF can accept online gifts, the DonationWidget goes above these cards.
 */
export function WaysToGive({ eyebrow, title, lead, ways }: WaysToGiveProps) {
  return (
    <Section tone="muted" id="give" aria-labelledby="give-title">
      <SectionIntro id="give-title" eyebrow={eyebrow} title={title} lead={lead} />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ways.map((way, index) => (
          <li key={way.title}>
            <Card className="flex h-full flex-col">
              <span
                aria-hidden="true"
                className="font-display text-display-sm font-semibold text-accent"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading level={3} size="sm" className="mt-3 text-primary">
                {way.title}
              </Heading>
              <p className="mt-3 text-muted">{way.description}</p>
              <Link
                href={way.href}
                className="mt-auto pt-6 font-semibold text-accent underline-offset-4 hover:underline"
              >
                {way.linkLabel} →
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
