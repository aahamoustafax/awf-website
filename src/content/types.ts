import type { StaticImageData } from "next/image";

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
  /** Display format, e.g. "+1 365 323 6555". */
  phone?: string;
  socials: SocialLink[];
  alert?: SiteAlert;
};

/**
 * A photo. `src` is a static import, which gives next/image its dimensions and a blur placeholder.
 * `credit` records where a stock photo came from (not displayed); omit it for AWF's own photos.
 */
export type Photo = {
  src: StaticImageData;
  /** What the photo shows, for screen readers. */
  alt: string;
  credit?: { name: string; url: string; source: string };
};

/** A titled item with optional detail: a course, an activity, a step. */
export type Item = { title: string; description?: string };

/**
 * A forward-looking target. Programs are launching, so the site shows goals, never claimed results.
 * When real results exist, add an `Impact` type rather than reusing this one.
 */
export type Goal = {
  /** Short figure, e.g. "50–100". */
  value: string;
  label: string;
};

/** Where a program operates. */
export type ProgramRegion = "hamilton" | "afghanistan";

export type ProgramStatus = "launching" | "active";

export type Program = {
  /** URL segment: /programs/<slug>. Lowercase, kebab-case, never change once published. */
  slug: string;
  title: string;
  /** One or two sentences for cards and menus. */
  summary: string;
  region: ProgramRegion;
  status: ProgramStatus;
  /** Short focus tags, e.g. ["Weekend classes", "Heritage languages"]. */
  focus: string[];
  /** Detail page body: the problem and our response, one paragraph per entry. */
  overview: string[];
  /** Who the program is for. */
  audience: string;
  /** What the program delivers: courses, activities or steps. */
  offerings: { heading: string; items: Item[] };
  /** Optional key facts, e.g. schedule rows. */
  facts?: { label: string; value: string }[];
  /** Optional in-kind donation needs, grouped. */
  needs?: { category: string; items: string[] }[];
  goals?: Goal[];
  /** Closing call to action on the detail page. */
  action: { heading: string; body: string };
};

export type Value = { title: string; description: string };

export type Person = { name: string; role: string; bio?: string };

export type About = {
  intro: string[];
  mission: string;
  vision: string;
  values: Value[];
  leadership: Person[];
};

/** A way to support AWF that works today (before online giving exists). */
export type WayToGive = { title: string; description: string; href: string; linkLabel: string };

export type Home = {
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    image: Photo;
    /** CSS object-position for the photo, keeping the subject in view, e.g. "60% 30%". */
    imageFocus: string;
    /**
     * Charity: water-style action card. Until online giving exists its options link to the ways to
     * help; later they become donation amounts (ADR 0004).
     */
    giveCard: {
      title: string;
      options: { label: string; href: string }[];
      note: string;
      action: { label: string; href: string };
      secondaryAction: { label: string; href: string };
    };
  };
  /** Full-width Canada ↔ Afghanistan band under the hero. */
  connection: {
    /** Accessible name for the band. */
    label: string;
    from: { name: string; note: string };
    to: { name: string; note: string };
  };
  mission: { eyebrow: string; quote: string; attribution: string };
  programs: { eyebrow: string; title: string; lead: string };
  goals: { eyebrow: string; title: string; lead: string; items: Goal[]; note: string };
  geographies: {
    eyebrow: string;
    title: string;
    places: { name: string; title: string; body: string; points: string[] }[];
  };
  give: { eyebrow: string; title: string; lead: string; ways: WayToGive[] };
  values: { eyebrow: string; title: string };
  partner: { title: string; body: string; action: { label: string; href: string } };
};
