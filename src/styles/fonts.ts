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
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const fontVariables = `${inter.variable} ${fraunces.variable}`;
