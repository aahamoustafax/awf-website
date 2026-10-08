// Motion helpers. All of them respect prefers-reduced-motion and leave content visible without JS.
export { InView } from "./InView";
export { Reveal } from "./Reveal";

/**
 * Classes for an SVG path that draws itself when its InView ancestor (marked `group`) appears.
 * The path needs pathLength={1} and strokeDasharray="1".
 */
export const drawOnViewClass =
  "group-data-[inview=visible]:animate-draw group-data-[inview=waiting]:[stroke-dashoffset:1]";
