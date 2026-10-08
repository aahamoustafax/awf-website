"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type InViewProps = {
  className?: string;
  style?: CSSProperties;
  /** Share of the element that must be visible before it counts as "in view". */
  threshold?: number;
  /**
   * Also animate when already on screen at page load. Use for things that "draw in" (lines,
   * illustrations), where starting hidden causes no flicker. Leave off for content reveals.
   */
  animateOnLoad?: boolean;
  children: ReactNode;
};

/**
 * Marks itself with `data-inview="waiting"` while below the fold, then `data-inview="visible"`
 * the first time it scrolls into view (once; never replays). Styles hang off that attribute:
 * `data-[inview=waiting]:opacity-0` on this element, or `group-data-[inview=…]:` on children.
 *
 * Elements already on screen when the page loads (unless `animateOnLoad`), visitors who prefer reduced motion, and
 * browsers without JavaScript never get the attribute, so content is always visible by default.
 */
export function InView({
  className,
  style,
  threshold = 0.2,
  animateOnLoad = false,
  children,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onScreen = element.getBoundingClientRect().top < window.innerHeight;
    if (onScreen && !animateOnLoad) return;

    element.dataset.inview = "waiting";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        element.dataset.inview = "visible";
        observer.disconnect();
      },
      { threshold },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, animateOnLoad]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}
