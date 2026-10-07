import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/** Larger intro paragraph under a heading. */
export function Lead({ className, ...props }: ComponentProps<"p">) {
  return <p className={cn("max-w-2xl text-lg text-pretty sm:text-xl", className)} {...props} />;
}
