import { Section, Stat, StatList } from "@/components/ui";
import type { Goal } from "@/content/types";

import { SectionIntro } from "./SectionIntro";

type GoalsBandProps = { eyebrow: string; title: string; lead: string; items: Goal[]; note: string };

/** Navy band of forward-looking targets. Always labelled as goals, never as results. */
export function GoalsBand({ eyebrow, title, lead, items, note }: GoalsBandProps) {
  return (
    <Section tone="primary" aria-labelledby="goals-title">
      <SectionIntro id="goals-title" eyebrow={eyebrow} title={title} lead={lead} tone="light" />
      <StatList className="mt-14 border-t border-on-primary/20 pt-10">
        {items.map((goal) => (
          <Stat key={goal.label} value={goal.value} label={goal.label} />
        ))}
      </StatList>
      <p className="mt-10 text-sm text-brand-sky">{note}</p>
    </Section>
  );
}
