import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { InView } from "./InView";

type RevealProps = {
  className?: string;
  /** Stagger siblings, e.g. index * 80. Milliseconds. */
  delay?: number;
  children: ReactNode;
};

/** Fades and lifts its content into place the first time it scrolls into view (see InView). */
export function Reveal({ className, delay = 0, children }: RevealProps) {
  return (
    <InView
      className={cn(
        "transition-[opacity,translate] duration-700 ease-out",
        "data-[inview=waiting]:translate-y-6 data-[inview=waiting]:opacity-0",
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </InView>
  );
}
