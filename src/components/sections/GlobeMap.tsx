import { drawOnViewClass, InView } from "@/components/motion";

type Place = { name: string; note: string };

export type GlobeMapProps = {
  /** Accessible description of the illustration. */
  label: string;
  /** Left on the globe (west). */
  west: Place;
  /** Right on the globe (east). */
  east: Place;
};

// Drawn from Canada (west, head office) to Afghanistan (east, where supplies go); pins set wide apart.
const ARC = "M110 232 Q 280 0 450 252";

/**
 * Line-art globe for light backgrounds: a navy latitude/longitude grid with an arc from
 * Canada (west, head office) to Afghanistan (east, where supplies go). No arrow: the destination is
 * shown by the pins. Canada is a small, quiet blue dot; Afghanistan is a larger gold dot whose glow
 * blooms and pulses when the arc arrives.
 * The arc draws itself once when the globe first comes into view (InView); reduced motion and
 * no-JS show it complete.
 * Not on any page for now: the help card took its place beside the mission quote (ADR 0007).
 * To bring it back, pass it as MissionQuote's `aside`. On desktop it takes the quote's height
 * (absolutely positioned box) and never adds height itself; on phones it has a compact fixed height.
 */
export function GlobeMap({ label, west, east }: GlobeMapProps) {
  const latitudes = [100, 150, 200, 250, 300, 350, 400];
  const meridians = [55, 115, 165];

  return (
    <div className="relative h-72 self-stretch sm:h-80 lg:h-auto">
      <InView animateOnLoad threshold={0.4} className="group absolute inset-0">
        <svg
          viewBox="40 40 480 460"
          role="img"
          aria-label={label}
          className="size-full overflow-visible"
        >
          <defs>
            <clipPath id="globe-clip">
              <circle cx="280" cy="260" r="200" />
            </clipPath>
            <linearGradient
              id="globe-arc"
              gradientUnits="userSpaceOnUse"
              x1="110"
              x2="450"
              y1="0"
              y2="0"
            >
              <stop offset="0" stopColor="var(--color-accent)" />
              <stop offset="1" stopColor="var(--color-cta)" />
            </linearGradient>
            <radialGradient id="globe-glow" cx="0.5" cy="0.45" r="0.6">
              <stop offset="0" stopColor="var(--color-brand-sky)" stopOpacity="0.16" />
              <stop offset="1" stopColor="var(--color-brand-sky)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Globe: soft glow, then the grid, then the rim. */}
          <circle cx="280" cy="260" r="200" fill="url(#globe-glow)" />
          <g
            clipPath="url(#globe-clip)"
            fill="none"
            className="stroke-primary"
            strokeOpacity="0.12"
          >
            {latitudes.map((y) => (
              <line key={y} x1="60" x2="500" y1={y} y2={y} />
            ))}
            {meridians.map((rx) => (
              <ellipse key={rx} cx="280" cy="260" rx={rx} ry="200" />
            ))}
            <line x1="280" x2="280" y1="40" y2="480" />
          </g>
          <circle
            cx="280"
            cy="260"
            r="200"
            fill="none"
            className="stroke-primary"
            strokeOpacity="0.25"
          />

          {/* Route: dotted guide, then the arc that draws in. */}
          <path
            d={ARC}
            fill="none"
            className="stroke-primary"
            strokeOpacity="0.25"
            strokeWidth="2"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
          <path
            d={ARC}
            fill="none"
            stroke="url(#globe-arc)"
            strokeWidth="3.5"
            strokeLinecap="round"
            pathLength={1}
            strokeDasharray="1"
            className={drawOnViewClass}
          />

          <MapPin x={110} y={232} place={west} align="start" />
          <MapPin x={450} y={252} place={east} align="end" destination />
        </svg>
      </InView>
    </div>
  );
}

type MapPinProps = {
  x: number;
  y: number;
  place: Place;
  align: "start" | "end";
  /** The end of the journey: gold, with a glow that blooms when the arc arrives (~0.8s). */
  destination?: boolean;
};

function MapPin({ x, y, place, align, destination = false }: MapPinProps) {
  const labelX = align === "start" ? x - 22 : x + 22;
  const origin = { transformOrigin: `${x}px ${y}px` };
  return (
    <g aria-hidden="true">
      {destination ? (
        <>
          {/* Soft glow: hidden until the arc arrives, then scales in. Shown by default without JS. */}
          <circle
            cx={x}
            cy={y}
            r="24"
            className="fill-cta/25 transition duration-500 group-data-[inview=visible]:delay-[800ms] group-data-[inview=waiting]:scale-0 group-data-[inview=waiting]:opacity-0"
            style={origin}
          />
          {/* Pulse rings start on arrival. */}
          <circle
            cx={x}
            cy={y}
            r="18"
            className="fill-none stroke-cta opacity-0 group-data-[inview=visible]:animate-pulse-ring"
            strokeWidth="2"
            style={{ ...origin, animationDelay: "0.9s" }}
          />
          <circle cx={x} cy={y} r="9" className="fill-cta" />
        </>
      ) : (
        <circle cx={x} cy={y} r="6" className="fill-accent" />
      )}
      <text
        x={labelX}
        y={y + 48}
        textAnchor={align}
        className="fill-primary font-display text-[30px] font-semibold"
      >
        {place.name}
      </text>
      <text
        x={labelX}
        y={y + 74}
        textAnchor={align}
        className="fill-accent text-[16px] font-semibold tracking-[0.12em] uppercase"
      >
        {place.note}
      </text>
    </g>
  );
}
