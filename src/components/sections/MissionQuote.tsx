import type { ReactNode } from "react";

import { Eyebrow, Section } from "@/components/ui";

type MissionQuoteProps = {
  eyebrow: string;
  quote: string;
  /** Phrase inside the quote to highlight. */
  emphasis?: string;
  attribution: string;
  /** Beside the quote on desktop, below it on phones: the help card, or `GlobeMap`. */
  aside: ReactNode;
};

/** Mission statement with an aside (on the right on desktop, below the quote on phones). */
export function MissionQuote({ eyebrow, quote, emphasis, attribution, aside }: MissionQuoteProps) {
  return (
    <Section aria-labelledby="mission-title">
      <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <figure className="text-center lg:text-left">
          <Eyebrow id="mission-title" className="text-accent">
            {eyebrow}
          </Eyebrow>
          <blockquote className="mt-6 font-display text-display-md text-balance text-primary">
            <p>
              “<Highlighted text={quote} phrase={emphasis} />”
            </p>
          </blockquote>
          <figcaption className="mt-6 text-muted">{attribution}</figcaption>
        </figure>
        {aside}
      </div>
    </Section>
  );
}

/**
 * Renders `text`, marking `phrase` with a soft saffron highlighter stroke behind it.
 * Text stays navy for contrast; the stroke is decorative. Falls back to plain text if the phrase
 * isn't found (e.g. after the copy is edited).
 */
function Highlighted({ text, phrase }: { text: string; phrase?: string }) {
  const start = phrase ? text.indexOf(phrase) : -1;
  if (!phrase || start === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, start)}
      <mark className="bg-transparent bg-[linear-gradient(transparent_58%,color-mix(in_oklab,var(--color-cta)_45%,transparent)_58%,color-mix(in_oklab,var(--color-cta)_45%,transparent)_92%,transparent_92%)] box-decoration-clone px-0.5 text-primary">
        {phrase}
      </mark>
      {text.slice(start + phrase.length)}
    </>
  );
}
