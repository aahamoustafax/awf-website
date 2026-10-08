import { drawOnViewClass, InView } from "@/components/motion";
import type { ProgramIcon } from "@/content/types";
import { cn } from "@/lib/cn";

type ProgramIllustrationProps = {
  icon: ProgramIcon;
  /** Draw stroke by stroke when it first comes into view (page headers). Static on cards. */
  animated?: boolean;
  className?: string;
};

/**
 * Line-art mark for each program, in the same style as the home page's globe arc:
 * round-capped strokes in sky blue and saffron. Decorative (aria-hidden): the program title
 * always appears next to it.
 */
export function ProgramIllustration({
  icon,
  animated = false,
  className,
}: ProgramIllustrationProps) {
  const svg = (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="size-full overflow-visible">
      {drawings[icon].map(({ d, accent }, index) => (
        <path
          key={index}
          d={d}
          fill="none"
          className={cn(accent ? "stroke-cta" : "stroke-brand-sky", animated && drawOnViewClass)}
          strokeWidth={accent ? 5 : 4}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          // Stagger strokes so the drawing builds up piece by piece.
          style={animated ? { animationDelay: `${index * 0.15}s` } : undefined}
        />
      ))}
    </svg>
  );

  return animated ? (
    <InView animateOnLoad threshold={0.4} className={cn("group", className)}>
      {svg}
    </InView>
  ) : (
    <div className={className}>{svg}</div>
  );
}

type Stroke = { d: string; accent?: boolean };

/** Hand-drawn paths on a 200×200 grid. Accent strokes are saffron. */
const drawings: Record<ProgramIcon, Stroke[]> = {
  // Open book with lines of text and a bookmark.
  education: [
    {
      d: "M100 62 C80 48 50 44 22 50 V152 C50 146 80 150 100 164 C120 150 150 146 178 152 V50 C150 44 120 48 100 62 Z",
    },
    { d: "M100 62 V164" },
    { d: "M40 78 C55 75 70 76 84 82 M40 98 C55 95 70 96 84 102 M40 118 C55 115 70 116 84 122" },
    { d: "M116 82 C130 76 145 75 160 78 M116 102 C130 96 145 95 160 98" },
    { d: "M140 46 V20 L150 30 L160 20 V48", accent: true },
  ],
  // Scissors with a curling thread.
  skills: [
    { d: "M58 164 m-18 0 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0" },
    { d: "M112 164 m-18 0 a18 18 0 1 0 36 0 a18 18 0 1 0 -36 0" },
    { d: "M70 150 L132 40" },
    { d: "M100 150 L48 40" },
    {
      d: "M140 120 C170 110 178 80 160 66 C144 54 128 70 140 84 C152 98 176 92 184 72",
      accent: true,
    },
  ],
  // School backpack with a front pocket and a zip (no "+": it reads as a medical cross).
  essentials: [
    {
      d: "M60 72 C60 52 76 42 100 42 C124 42 140 52 140 72 V160 C140 168 134 174 126 174 H74 C66 174 60 168 60 160 Z",
    },
    { d: "M84 42 C84 28 92 22 100 22 C108 22 116 28 116 42" },
    { d: "M74 118 H126 V150 C126 154 123 158 118 158 H82 C77 158 74 154 74 150 Z" },
    { d: "M74 132 H126" },
    { d: "M74 78 C88 88 112 88 126 78", accent: true },
  ],
  // Two cupped hands holding a heart with a heartbeat: care and humanitarian support.
  care: [
    {
      d: "M100 86 C100 64 70 54 56 72 C42 90 58 110 100 136 C142 110 158 90 144 72 C130 54 100 64 100 86 Z",
    },
    { d: "M18 112 C36 116 48 134 60 148 C72 162 88 170 106 170" },
    { d: "M182 112 C164 116 152 134 140 148 C128 162 112 170 94 170" },
    { d: "M18 112 L10 150 M182 112 L190 150" },
    { d: "M60 100 H80 L89 86 L100 118 L110 94 L117 104 H140", accent: true },
  ],
};
