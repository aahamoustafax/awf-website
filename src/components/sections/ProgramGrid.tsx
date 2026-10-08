import Link from "next/link";

import { Badge, Card, Heading, Section } from "@/components/ui";

import { SectionIntro } from "./SectionIntro";

export type ProgramCard = {
  title: string;
  summary: string;
  href: string;
  regionLabel: string;
  statusLabel?: string;
  focus: string[];
};

type ProgramGridProps = {
  eyebrow: string;
  title: string;
  lead: string;
  programs: ProgramCard[];
  learnMoreLabel: string;
};

/** Grid of program cards. The whole card is clickable; the link text is the program title. */
export function ProgramGrid({ eyebrow, title, lead, programs, learnMoreLabel }: ProgramGridProps) {
  return (
    <Section tone="muted" aria-labelledby="programs-title">
      <SectionIntro id="programs-title" eyebrow={eyebrow} title={title} lead={lead} />
      <ul className="mt-12 grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <li key={program.href}>
            <Card className="group relative flex h-full flex-col transition-shadow focus-within:shadow-lg hover:shadow-lg">
              <div className="flex flex-wrap gap-2">
                <Badge tone="primary">{program.regionLabel}</Badge>
                {program.statusLabel && <Badge tone="cta">{program.statusLabel}</Badge>}
              </div>
              <Heading level={3} size="sm" className="mt-5 text-primary">
                {/* The ::after overlay makes the whole card the link's click target. */}
                <Link
                  href={program.href}
                  className="after:absolute after:inset-0 after:rounded-2xl"
                >
                  {program.title}
                </Link>
              </Heading>
              <p className="mt-3 text-muted">{program.summary}</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-foreground">
                {program.focus.map((tag) => (
                  <li key={tag} className="before:mr-2 before:text-accent before:content-['•']">
                    {tag}
                  </li>
                ))}
              </ul>
              <p aria-hidden="true" className="mt-auto pt-6 font-semibold text-accent">
                {learnMoreLabel}{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
