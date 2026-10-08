/**
 * Shapes of all site content. Pages and components depend on these types,
 * never on where the data is stored (see src/lib/content).
 */

export type SocialLink = {
  platform: "facebook" | "instagram" | "x" | "linkedin" | "youtube";
  url: string;
};

/** Site-wide urgent notice shown above the header (e.g. an emergency appeal). */
export type SiteAlert = {
  message: string;
  link?: { href: string; label: string };
};

export type Site = {
  name: string;
  shortName: string;
  /** One-sentence description, used for SEO and social previews. */
  description: string;
  /** Short mission line for the footer. */
  tagline: string;
  location: { city: string; region: string; country: string };
  email?: string;
  phone?: string;
  socials: SocialLink[];
  alert?: SiteAlert;
};

/** Where a program operates. */
export type ProgramRegion = "hamilton" | "afghanistan";

/** Phase 4 extends this with the full program story (outcomes, how to help, photos). */
export type Program = {
  /** URL segment: /programs/<slug>. Lowercase, kebab-case, never change once published. */
  slug: string;
  title: string;
  summary: string;
  region: ProgramRegion;
};
