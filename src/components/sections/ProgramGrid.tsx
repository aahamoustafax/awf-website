import Link from "next/link";

import { Badge, Card, Heading, Section, type SectionTone } from "@/components/ui";

import { Reveal } from "@/components/motion";
import type { ProgramIcon } from "@/content/types";

import { ProgramIllustration } from "./ProgramIllustration";
import { SectionIntro } from "./SectionIntro";

export type ProgramCard = {
  title: string;
  summary: string;
  href: string;
  regionLabel: string;
  icon: ProgramIcon;
  statusLabel?: string;
  focus: string[];
};

type ProgramGridProps = {
  /** Section heading. Omit when the page header already introduces the grid, and pass `label`. */
  intro?: { eyebrow: string; title: string; lead?: string };
  /** Accessible name when there is no intro. */
  label?: string;
  /** Unique per page; links the section to its heading. */
  id?: string;
  tone?: SectionTone;
  programs: ProgramCard[];
  learnMoreLabel: string;
};

/** Grid of program cards. The whole card is clickable; the link text is the program title. */
export function ProgramGrid({
  intro,
  label,
  id = "programs",
  tone = "muted",
  programs,
  learnMoreLabel,
}: ProgramGridProps) {
  const headingId = `${id}-title`;
  return (
    <Section
      tone={tone}
      aria-labelledby={intro ? headingId : undefined}
      aria-label={intro ? undefined : label}
    >
      {intro && <SectionIntro id={headingId} {...intro} />}
      <ul className={intro ? "mt-12 grid gap-6 md:grid-cols-2" : "grid gap-6 md:grid-cols-2"}>
        {programs.map((program, index) => (
          <li key={program.href}>
            <Reveal delay={(index % 2) * 120} className="h-full">
              <Card className="group relative flex h-full flex-col transition-shadow focus-within:shadow-lg hover:shadow-lg">
                {/* Badges and icon share the top row, so the title below never runs under the icon. */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="primary">{program.regionLabel}</Badge>
                    {program.statusLabel && <Badge tone="cta">{program.statusLabel}</Badge>}
                  </div>
                  <div className="size-14 shrink-0 rounded-2xl bg-primary p-2 transition-transform group-hover:-rotate-3 sm:size-16 sm:p-2.5">
                    <ProgramIllustration icon={program.icon} />
                  </div>
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
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
