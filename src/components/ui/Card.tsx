import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/** White panel with a subtle border. Use `article` semantics when the card stands alone. */
export function Card({ className, ...props }: ComponentProps<"article">) {
  return (
    <article
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8",
        className,
      )}
      {...props}
    />
  );
}
