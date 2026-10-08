import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/** Small label above a heading, e.g. "Our programs". */
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p className={cn("text-sm font-semibold tracking-[0.14em] uppercase", className)} {...props} />
  );
}
