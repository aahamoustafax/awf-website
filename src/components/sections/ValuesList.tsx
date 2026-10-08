import { Section } from "@/components/ui";
import type { Value } from "@/content/types";

import { SectionIntro } from "./SectionIntro";

type ValuesListProps = { eyebrow: string; title: string; values: Value[] };

/** The organization's values as a numbered editorial list. */
export function ValuesList({ eyebrow, title, values }: ValuesListProps) {
  return (
    <Section aria-labelledby="values-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <SectionIntro id="values-title" eyebrow={eyebrow} title={title} />
        <dl className="divide-y divide-border border-y border-border">
          {values.map((value) => (
            <div key={value.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
              <dt className="font-display text-display-sm font-semibold text-primary">
                {value.title}
              </dt>
              <dd className="text-muted sm:pt-1">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
