import { Reveal } from "@/components/motion";
import { Card, Heading, Section } from "@/components/ui";

type ProgramStoryProps = {
  overview: string[];
  audience: string;
  facts?: { label: string; value: string }[];
  labels: { whyItMatters: string; whoWeServe: string; keyDetails: string };
};

/** "Why it matters" narrative beside who the program serves and its key details. */
export function ProgramStory({ overview, audience, facts, labels }: ProgramStoryProps) {
  return (
    <Section aria-labelledby="why-title">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          {/* A real h2, styled as a small label. */}
          <h2
            id="why-title"
            className="text-sm font-semibold tracking-[0.14em] text-accent uppercase"
          >
            {labels.whyItMatters}
          </h2>
          <div className="mt-5 space-y-6 text-lg text-pretty">
            {overview.map((paragraph, index) => (
              <p
                key={index}
                className={index === 0 ? "font-display text-display-sm text-primary" : undefined}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>

        <div className="space-y-6">
          <Reveal delay={120}>
            <Card className="border-t-4 border-t-accent">
              <Heading level={2} size="sm" className="text-primary">
                {labels.whoWeServe}
              </Heading>
              <p className="mt-3 text-muted">{audience}</p>
            </Card>
          </Reveal>
          {facts && (
            <Reveal delay={240}>
              <Card>
                <Heading level={2} size="sm" className="text-primary">
                  {labels.keyDetails}
                </Heading>
                <dl className="mt-4 divide-y divide-border">
                  {facts.map((fact) => (
                    <div key={fact.label} className="flex justify-between gap-4 py-3">
                      <dt className="text-muted">{fact.label}</dt>
                      <dd className="text-right font-semibold text-primary">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Card>
            </Reveal>
          )}
        </div>
      </div>
    </Section>
  );
}
