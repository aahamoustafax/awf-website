import { Reveal } from "@/components/motion";
import { Section } from "@/components/ui";
import type { NeedGroup } from "@/content/types";

import { SectionIntro } from "./SectionIntro";

type ProgramNeedsProps = {
  /** Anchor for links to this section, e.g. "what-we-supply". */
  id?: string;
  eyebrow: string;
  title: string;
  lead: string;
  needs: NeedGroup[];
};

/** In-kind donation list, grouped by category. */
export function ProgramNeeds({ id, eyebrow, title, lead, needs }: ProgramNeedsProps) {
  return (
    <Section id={id} aria-labelledby="needs-title">
      <SectionIntro id="needs-title" eyebrow={eyebrow} title={title} lead={lead} />
      <div className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {needs.map((group, index) => (
          <Reveal key={group.category} delay={index * 90}>
            <h3 className="border-b-2 border-cta pb-3 font-display text-display-sm font-semibold text-primary">
              {group.category}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
