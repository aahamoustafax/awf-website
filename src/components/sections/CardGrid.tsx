import Link from "next/link";

import { Reveal } from "@/components/motion";
import { Card, Heading, Section, type SectionTone } from "@/components/ui";
import type { CardItem } from "@/content/types";
import { cn } from "@/lib/cn";

import { SectionIntro } from "./SectionIntro";

type CardGridProps = {
  /** Unique per page; links the section to its heading. */
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  items: CardItem[];
  /** Show 01, 02… on each card (for steps or ordered lists). */
  numbered?: boolean;
  columns?: 2 | 3 | 4;
  tone?: SectionTone;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

/** General-purpose section: intro plus a grid of cards that rise into view one after another. */
export function CardGrid({
  id,
  eyebrow,
  title,
  lead,
  items,
  numbered = false,
  columns = 3,
  tone = "default",
}: CardGridProps) {
  const headingId = `${id}-title`;
  const List = numbered ? "ol" : "ul";
  return (
    <Section tone={tone} aria-labelledby={headingId}>
      <SectionIntro id={headingId} eyebrow={eyebrow} title={title} lead={lead} />
      <List className={cn("mt-12 grid gap-6", columnClasses[columns])}>
        {items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={(index % columns) * 90} className="h-full">
              <Card className="flex h-full flex-col">
                {numbered && (
                  <span
                    aria-hidden="true"
                    className="font-display text-display-sm font-semibold text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                )}
                <Heading level={3} size="sm" className={cn("text-primary", numbered && "mt-3")}>
                  {item.title}
                </Heading>
                <p className="mt-3 text-muted">{item.description}</p>
                {item.href && item.linkLabel && (
                  <Link
                    href={item.href}
                    className="mt-auto pt-6 font-semibold text-accent underline-offset-4 hover:underline"
                  >
                    {item.linkLabel} →
                  </Link>
                )}
              </Card>
            </Reveal>
          </li>
        ))}
      </List>
    </Section>
  );
}
