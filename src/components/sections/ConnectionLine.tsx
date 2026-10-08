import { Container } from "@/components/ui";
import { cn } from "@/lib/cn";

import { DrawOnView } from "./DrawOnView";

type Place = { name: string; note: string };

export type ConnectionLineProps = {
  /** Accessible name for the group. */
  label: string;
  from: Place;
  to: Place;
};

/**
 * Straight line joining the two countries (Afghanistan → Canada) across the bottom of the hero.
 * The line fills slowly from left to right, once, the first time it comes into view (DrawOnView).
 * Without JavaScript, or under prefers-reduced-motion, it is shown complete.
 */
export function ConnectionLine({ label, from, to }: ConnectionLineProps) {
  return (
    <div role="group" aria-label={label} className="text-on-primary">
      {/* Equal side columns keep the line centred whatever the names' lengths. */}
      <Container className="grid grid-cols-2 items-end gap-x-4 gap-y-5 py-10 sm:grid-cols-[minmax(0,1fr)_minmax(0,3fr)_minmax(0,1fr)] sm:gap-10 sm:py-14">
        <PlaceName place={from} />

        {/*
          Phones: the line spans the full width above the names.
          sm+: it sits between the names, level with the country names (not the small labels).
        */}
        <div
          aria-hidden="true"
          className="relative order-first col-span-2 mx-2 h-4 sm:order-none sm:col-span-1 sm:mx-0 sm:mb-1 sm:h-12"
        >
          <DrawOnView className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2">
            {/* Stretches to any width; non-scaling strokes keep line weight constant. */}
            <svg
              viewBox="0 0 1000 2"
              preserveAspectRatio="none"
              className="block size-full overflow-visible"
            >
              <defs>
                {/* userSpaceOnUse: a flat line has a zero-height bounding box, which breaks the default units. */}
                <linearGradient
                  id="connection-line"
                  gradientUnits="userSpaceOnUse"
                  x1="0"
                  x2="1000"
                  y1="0"
                  y2="0"
                >
                  <stop offset="0" stopColor="var(--color-brand-sky)" />
                  <stop offset="1" stopColor="var(--color-cta)" />
                </linearGradient>
              </defs>
              {/* Faint dotted guide, visible before the line fills in. */}
              <path
                d="M0 1 L1000 1"
                className="stroke-on-primary"
                strokeOpacity="0.2"
                strokeWidth="1.5"
                strokeDasharray="2 7"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M0 1 L1000 1"
                stroke="url(#connection-line)"
                strokeWidth="3"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                pathLength={1}
                strokeDasharray="1"
                className="group-data-[draw=drawing]:animate-draw group-data-[draw=waiting]:[stroke-dashoffset:1]"
              />
            </svg>
          </DrawOnView>

          <Pin className="left-0" />
          <Pin className="left-full" />
        </div>

        <PlaceName place={to} align="end" />
      </Container>
    </div>
  );
}

/**
 * Phones: names sit under the line's ends, aligned to the outer edges.
 * sm+: names sit beside the line, aligned towards it, so both sides mirror each other.
 */
function PlaceName({ place, align = "start" }: { place: Place; align?: "start" | "end" }) {
  return (
    <p className={cn("pb-1", align === "start" ? "sm:text-right" : "text-right sm:text-left")}>
      <span className="block text-xs font-semibold tracking-[0.14em] text-brand-sky uppercase sm:text-sm">
        {place.note}
      </span>
      <span className="mt-1 block font-display text-display-sm leading-tight font-semibold sm:h-12 sm:text-display-md sm:leading-[3rem]">
        {place.name}
      </span>
    </p>
  );
}

/** Endpoint dot with a soft pulsing ring, centred on the line's end. */
function Pin({ className }: { className: string }) {
  return (
    <span className={cn("absolute top-1/2 size-3.5 -translate-1/2", className)}>
      <span className="absolute -inset-2 animate-pulse-ring rounded-full border-2 border-cta" />
      <span className="absolute inset-0 rounded-full bg-cta" />
    </span>
  );
}
