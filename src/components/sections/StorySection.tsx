import type { ReactNode } from "react";

import { Reveal } from "@/components/motion";
import { Heading, Section, type SectionTone } from "@/components/ui";

type StorySectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  /** Optional content beside the text on desktop (cards, facts). */
  aside?: ReactNode;
  tone?: SectionTone;
};

/** Narrative text block; the first paragraph is set larger, editorial style. */
export function StorySection({
  id,
  eyebrow,
  title,
  paragraphs,
  aside,
  tone = "default",
}: StorySectionProps) {
  const headingId = `${id}-title`;
  return (
    <Section tone={tone} aria-labelledby={headingId}>
      <div className={aside ? "grid gap-12 lg:grid-cols-[1.5fr_1fr]" : "max-w-3xl"}>
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">{eyebrow}</p>
          <Heading level={2} size="md" id={headingId} className="mt-3 text-primary">
            {title}
          </Heading>
          <div className="mt-6 space-y-5 text-lg text-pretty">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "font-display text-display-sm text-primary" : "text-muted"}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
        {aside && <div className="space-y-6">{aside}</div>}
      </div>
    </Section>
  );
}
