import { Eyebrow, Section } from "@/components/ui";

import { GlobeMap, type GlobeMapProps } from "./GlobeMap";

type MissionQuoteProps = {
  eyebrow: string;
  quote: string;
  /** Phrase inside the quote to highlight. */
  emphasis?: string;
  attribution: string;
  map: GlobeMapProps;
};

/**
 * Mission statement with the globe of the two countries: quote first, then the globe (on the
 * right on desktop, below on phones). Desktop: side by side. The globe sits in an absolutely positioned box, so it always takes
 * exactly the quote's height (from the eyebrow to the attribution) and never adds height itself.
 * Phones: stacked, globe at a compact fixed height below the quote.
 */
export function MissionQuote({ eyebrow, quote, emphasis, attribution, map }: MissionQuoteProps) {
  return (
    <Section aria-labelledby="mission-title">
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
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
        <div className="relative h-72 sm:h-80 lg:h-auto">
          <div className="absolute inset-0">
            <GlobeMap {...map} />
          </div>
        </div>
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
