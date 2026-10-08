import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const tones = {
  neutral: "bg-surface-muted text-foreground",
  primary: "bg-primary text-on-primary",
  cta: "bg-cta text-on-cta",
  /** Subtle tag on navy backgrounds. */
  onDark: "bg-on-primary/10 text-on-primary ring-1 ring-on-primary/15",
} as const;

/** Small label, e.g. "Hamilton" or "Afghanistan" on a program card. */
export function Badge({
  tone = "neutral",
  className,
  ...props
}: ComponentProps<"span"> & { tone?: keyof typeof tones }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
