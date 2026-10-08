import { Eyebrow, Section } from "@/components/ui";

type MissionQuoteProps = { eyebrow: string; quote: string; attribution: string };

/** Large editorial statement of the mission. */
export function MissionQuote({ eyebrow, quote, attribution }: MissionQuoteProps) {
  return (
    <Section aria-labelledby="mission-title">
      <figure className="mx-auto max-w-4xl text-center">
        <Eyebrow id="mission-title" className="text-accent">
          {eyebrow}
        </Eyebrow>
        <blockquote className="mt-6 font-display text-display-md text-balance text-primary">
          <p>“{quote}”</p>
        </blockquote>
        <figcaption className="mt-6 text-muted">{attribution}</figcaption>
      </figure>
    </Section>
  );
}
