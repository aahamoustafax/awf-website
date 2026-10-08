import { Reveal } from "@/components/motion";
import { Section } from "@/components/ui";
import type { FaqItem } from "@/content/types";

type FaqListProps = { label: string; items: FaqItem[] };

/**
 * Questions as native <details> disclosures: keyboard and screen-reader friendly, works without JS.
 */
export function FaqList({ label, items }: FaqListProps) {
  return (
    <Section aria-label={label}>
      <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
        {items.map((item, index) => (
          <Reveal key={item.question} delay={Math.min(index, 4) * 60}>
            <details className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-lg py-4 font-display text-display-sm font-semibold text-primary [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="grid size-8 shrink-0 place-items-center rounded-full border border-border text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pb-6 text-lg text-muted">{item.answer}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
