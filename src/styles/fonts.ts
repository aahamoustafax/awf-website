import { Fraunces, Inter } from "next/font/google";

/**
 * Fonts are downloaded at build time and served from our own domain (no requests to Google from
 * visitors' browsers). They are exposed as CSS variables that globals.css maps to `font-sans` and
 * `font-display`. Adding Dari/Pashto/Arabic later will need an Arabic-script font here too
 * (e.g. Vazirmatn or Noto Naskh Arabic).
 */
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  // Not preloaded: body text shows instantly in a size-matched fallback, leaving early bandwidth on
  // slow phones for the display font and hero image (the largest-paint elements).
  preload: false,
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  // Optical sizing only: refines letter shapes at large display sizes. (The unused "SOFT" axis was
  // dropped: it added ~40% to the download and slowed the first paint on phones.)
  axes: ["opsz"],
});

export const fontVariables = `${inter.variable} ${fraunces.variable}`;
