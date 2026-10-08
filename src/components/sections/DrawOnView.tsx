"use client";

import { useEffect, useRef, type ReactNode } from "react";

import { cn } from "@/lib/cn";

type DrawOnViewProps = { className?: string; children: ReactNode };

/**
 * Starts a one-time "draw" animation the first time this element scrolls into view.
 *
 * It sets `data-draw` on itself: "waiting" (hidden) until visible, then "drawing". Children style
 * themselves with `group-data-[draw=waiting]:…` and `group-data-[draw=drawing]:animate-draw`.
 * Without JavaScript, or with prefers-reduced-motion, no attribute is set and the line shows complete.
 */
export function DrawOnView({ className, children }: DrawOnViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    element.dataset.draw = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.dataset.draw = "drawing";
        observer.disconnect();
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("group", className)}>
      {children}
    </div>
  );
}
