import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

const sizes = {
  xl: "text-display-xl",
  lg: "text-display-lg",
  md: "text-display-md",
  sm: "text-display-sm",
} as const;

type HeadingProps = ComponentProps<"h2"> & {
  /** Semantic level (document outline). Choose by structure, not by looks. */
  level: 1 | 2 | 3 | 4;
  /** Visual size. Independent of level so the outline stays correct. */
  size?: keyof typeof sizes;
};

const defaultSize = { 1: "xl", 2: "lg", 3: "md", 4: "sm" } as const;

/** Serif display heading. Inherits colour, so it works on light and dark sections. */
export function Heading({ level, size = defaultSize[level], className, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag
      className={cn("font-display font-semibold text-balance", sizes[size], className)}
      {...props}
    />
  );
}
