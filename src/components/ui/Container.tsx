import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

/** Centres content and applies the site's max width and side gutters. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-site px-4 sm:px-6 lg:px-8", className)} {...props} />
  );
}
