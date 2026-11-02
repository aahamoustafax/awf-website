import Link from "next/link";

import { ButtonLink } from "@/components/ui";

type Link = { label: string; href: string };

export type HelpCardProps = {
  title: string;
  options: Link[];
  note: string;
  action: Link;
  secondaryAction: Link;
};

/** White card of the ways to help today, beside the mission quote on the home page. */
export function HelpCard({ title, options, note, action, secondaryAction }: HelpCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-5 text-foreground shadow-lg sm:p-6">
      <h2 className="text-sm font-semibold tracking-[0.12em] text-primary uppercase">{title}</h2>
      <ul className="mt-4 grid grid-cols-2 gap-2.5">
        {options.map((option) => (
          <li key={option.href}>
            <Link
              href={option.href}
              className="flex h-full min-h-14 items-center justify-center rounded-xl border border-border bg-background px-3 py-2.5 text-center text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-surface-muted"
            >
              {option.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex gap-2 text-sm text-muted">
        <HeartIcon />
        {note}
      </p>
      <ButtonLink href={action.href} variant="cta" size="lg" className="mt-5 w-full">
        {action.label}
      </ButtonLink>
      <p className="mt-3 text-center">
        <Link
          href={secondaryAction.href}
          className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          {secondaryAction.label} →
        </Link>
      </p>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent">
      <path
        d="M10 17s-6.5-3.9-6.5-8.6A3.6 3.6 0 0 1 10 6.3a3.6 3.6 0 0 1 6.5 2.1C16.5 13.1 10 17 10 17z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
