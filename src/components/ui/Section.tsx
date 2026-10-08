import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

import { Container } from "./Container";

const tones = {
  default: "bg-background text-foreground",
  muted: "bg-surface-muted text-foreground",
  primary: "bg-primary text-on-primary",
} as const;

export type SectionTone = keyof typeof tones;

type SectionProps = ComponentProps<"section"> & {
  tone?: SectionTone;
  /** Set false for full-bleed content (e.g. a photo hero) that manages its own width. */
  contained?: boolean;
};

/**
 * A page band with consistent vertical rhythm. Give it `aria-labelledby` pointing at its heading's
 * id so screen-reader users can jump between sections.
 */
export function Section({
  tone = "default",
  contained = true,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", tones[tone], className)} {...props}>
      {contained ? <Container>{children}</Container> : children}
    </section>
  );
}
