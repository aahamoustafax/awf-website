/**
 * Public pages without a dynamic segment, as site paths (no language prefix).
 * Used by the sitemap; add new pages here. Program pages are added from content.
 */
export const staticRoutes = [
  "/",
  "/about",
  "/about/governance",
  "/our-work",
  "/who-we-serve",
  "/programs",
  "/partner",
  "/get-involved",
  "/donate",
  "/contact",
  "/faq",
  "/privacy",
  "/accessibility",
] as const;

/**
 * Pages switched off for now (ADR 0007): the site focuses on medical supplies for Afghanistan, and
 * the Hamilton programs are paused. Hidden pages return a real 404 and are left out of menus,
 * the sitemap and program lists. Their content stays in the repo: delete a path here to bring it back.
 */
export const hiddenRoutes: readonly string[] = [
  "/who-we-serve",
  "/programs",
  "/programs/children-education",
  "/programs/skills-livelihoods",
  "/programs/kids-essentials-bank",
  "/programs/healthcare-afghanistan",
];

/** True if a site path (no language prefix; any #anchor ignored) is switched off. */
export function isHiddenRoute(path: string): boolean {
  const page = path.replace(/#.*$/, "").replace(/(.)\/$/, "$1");
  return hiddenRoutes.includes(page);
}

/** Program detail page path, without the language prefix. */
export function programPath(slug: string): string {
  return `/programs/${slug}`;
}
