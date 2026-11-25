import { Reveal } from "@/components/motion";
import { Heading, Section } from "@/components/ui";
import type { Program } from "@/content/types";
import type { Dictionary } from "@/i18n/dictionaries";

import { OpenDetailsFromHash } from "./OpenDetailsFromHash";
import { ProgramIllustration } from "./ProgramIllustration";
import { SectionIntro } from "./SectionIntro";

type ProgramListProps = {
  eyebrow: string;
  title: string;
  lead: string;
  programs: Program[];
  labels: Dictionary["programs"];
};

/**
 * Every program as an expanding panel (native <details>: keyboard and screen-reader friendly, and it
 * works without JS). Closed, a panel shows its drawing, title and one line; open, it shows whatever
 * parts the program has. /our-work#<slug> opens that panel.
 */
export function ProgramList({ eyebrow, title, lead, programs, labels }: ProgramListProps) {
  return (
    <Section id="programs" tone="muted" aria-labelledby="programs-title">
      <SectionIntro id="programs-title" eyebrow={eyebrow} title={title} lead={lead} />
      <OpenDetailsFromHash />
      <ul className="mt-12 space-y-4">
        {programs.map((program, index) => (
          <li key={program.slug}>
            <Reveal delay={Math.min(index, 4) * 60}>
              <details
                id={program.slug}
                className="disclosure group scroll-mt-28 rounded-3xl bg-surface shadow-sm transition-shadow open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center gap-4 rounded-3xl p-4 sm:gap-6 sm:p-6 [&::-webkit-details-marker]:hidden">
                  <span className="size-16 shrink-0 rounded-2xl bg-background p-2 sm:size-20">
                    <ProgramIllustration icon={program.icon} />
                  </span>
                  <span className="min-w-0 flex-1">
                    {program.place && (
                      <span className="mb-1 inline-block rounded-full bg-primary px-3 py-0.5 text-xs font-semibold tracking-wide text-on-primary">
                        {program.place}
                      </span>
                    )}
                    <Heading level={3} size="sm" className="text-primary">
                      {program.title}
                    </Heading>
                    <span className="mt-1 block text-muted">{program.summary}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-border text-xl text-accent transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="border-t border-border px-4 pt-6 pb-8 sm:px-8 sm:pb-10">
                  <ProgramDetails program={program} labels={labels} />
                </div>
              </details>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ProgramDetails({
  program,
  labels,
}: {
  program: Program;
  labels: ProgramListProps["labels"];
}) {
  const { description, includes, steps, parts, needs, goal } = program;
  return (
    <div className="space-y-10">
      <p className="max-w-3xl text-lg">{description}</p>

      {parts && (
        <Block title={labels.provides}>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {parts.map((part) => (
              <li key={part.title} className="rounded-2xl bg-surface-muted p-5">
                <span aria-hidden="true" className="block h-1 w-10 rounded-full bg-cta" />
                <p className="mt-3 font-display text-lg font-semibold text-primary">{part.title}</p>
                <p className="mt-1 text-muted">{part.description}</p>
              </li>
            ))}
          </ul>
        </Block>
      )}

      {includes && (
        <Block title={labels.includes}>
          <ul className="flex flex-wrap gap-2">
            {includes.map((item) => (
              <li key={item} className="rounded-full bg-surface-muted px-4 py-2 text-primary">
                {item}
              </li>
            ))}
          </ul>
        </Block>
      )}

      {steps && (
        <Block title={labels.howItWorks}>
          {/* A numbered flow: a line joins the steps (down on phones, across on desktop). */}
          <ol className="grid gap-6 lg:grid-cols-4 lg:gap-4">
            {steps.map((step, index) => (
              <li key={step.title} className="relative flex gap-4 lg:block">
                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute top-12 bottom-[-1.5rem] left-6 w-0.5 bg-border lg:top-6 lg:right-[-1rem] lg:bottom-auto lg:left-14 lg:h-0.5 lg:w-auto"
                  />
                )}
                <span className="relative grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-on-primary">
                  {index + 1}
                </span>
                <div className="lg:mt-4">
                  <p className="font-display text-lg font-semibold text-primary">{step.title}</p>
                  <p className="mt-1 text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Block>
      )}

      {needs && (
        <div id={needs.id} className="scroll-mt-28">
          <Block title={needs.title}>
            {needs.note && <p className="mb-6 max-w-3xl text-muted">{needs.note}</p>}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {needs.groups.map((group) => (
                <div key={group.category}>
                  <p className="border-b-2 border-cta pb-2 font-semibold text-primary">
                    {group.category}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Block>
        </div>
      )}

      {goal && (
        <div className="flex flex-col gap-2 rounded-2xl bg-primary p-6 text-on-primary sm:flex-row sm:items-center sm:gap-8 sm:p-8">
          <p className="shrink-0 font-display text-display-md font-semibold text-brand-sky">
            {goal.value}
          </p>
          <div>
            <p className="text-sm font-semibold tracking-[0.14em] uppercase">{labels.goal}</p>
            <p className="mt-1 text-lg">{goal.label}</p>
            <p className="mt-2 text-sm text-on-primary/80">{labels.goalNote}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold tracking-[0.14em] text-accent uppercase">
        {title}
      </h4>
      {children}
    </div>
  );
}
