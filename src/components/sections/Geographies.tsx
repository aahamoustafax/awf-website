import { Card, Eyebrow, Heading, Section } from "@/components/ui";

import { SectionIntro } from "./SectionIntro";

type Place = { name: string; title: string; body: string; points: string[] };

type GeographiesProps = { eyebrow: string; title: string; places: Place[] };

/** Side-by-side cards for the two places AWF works. */
export function Geographies({ eyebrow, title, places }: GeographiesProps) {
  return (
    <Section aria-labelledby="where-title">
      <SectionIntro id="where-title" eyebrow={eyebrow} title={title} />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {places.map((place) => (
          <Card key={place.name} className="border-t-4 border-t-accent">
            <Eyebrow className="text-accent">{place.name}</Eyebrow>
            <Heading level={3} size="md" className="mt-3 text-primary">
              {place.title}
            </Heading>
            <p className="mt-4 text-muted">{place.body}</p>
            <ul className="mt-6 space-y-3">
              {place.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckIcon />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent">
      <path
        d="M4 10.5l4 4 8-9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
