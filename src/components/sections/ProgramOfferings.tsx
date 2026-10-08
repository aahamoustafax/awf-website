import { Reveal } from "@/components/motion";
import { Card, Heading, Section } from "@/components/ui";
import type { Item } from "@/content/types";

type ProgramOfferingsProps = { heading: string; items: Item[] };

/** What the program delivers, as numbered cards that rise into view one after another. */
export function ProgramOfferings({ heading, items }: ProgramOfferingsProps) {
  return (
    <Section tone="muted" aria-labelledby="offerings-title">
      <Heading level={2} id="offerings-title" className="text-primary">
        {heading}
      </Heading>
      <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={index * 90} className="h-full">
              <Card className="h-full">
                <span
                  aria-hidden="true"
                  className="font-display text-display-sm font-semibold text-accent"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading level={3} size="sm" className="mt-3 text-primary">
                  {item.title}
                </Heading>
                {item.description && <p className="mt-3 text-muted">{item.description}</p>}
              </Card>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
