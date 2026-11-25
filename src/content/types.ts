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
  /** Street address of the head office, e.g. "778 King St E". */
  address?: string;
  email?: string;
  /** Display format, e.g. "+1 365 323 6555". */
  phone?: string;
  socials: SocialLink[];
  alert?: SiteAlert;
};

/**
 * A photo. `src` is a static import, which gives next/image its dimensions and a blur placeholder.
 * `credit` records where a stock photo came from (not displayed); omit it for the organization's own photos.
 */
export type Photo = {
  src: StaticImageData;
  /** What the photo shows, for screen readers. */
  alt: string;
  credit?: { name: string; url: string; source: string };
};

/**
 * A forward-looking target. Operations are launching, so the site shows goals, never claimed results.
 * When real results exist, add an `Impact` type rather than reusing this one.
 */
export type Goal = {
  /** Short figure, e.g. "50–100", or a short headline ("First shipment") until a number is set. */
  value: string;
  label: string;
};

/** Which line-art illustration to draw (see ProgramIllustration). */
export type ProgramIcon =
  "care" | "blood" | "family" | "education" | "home" | "skills" | "shelter" | "essentials";

export type Value = { title: string; description: string };

export type Person = { name: string; role: string; bio?: string };

export type About = {
  intro: string[];
  mission: string;
  vision: string;
  values: Value[];
  leadership: Person[];
};

export type Home = {
  hero: {
    title: string;
    lead: string;
    image: Photo;
    /** CSS object-position for the photo, keeping the subject in view, e.g. "60% 30%". */
    imageFocus: string;
  };
  /** Buttons under the headline. */
  actions: { primary: Action; secondary: Action };
  mission: {
    eyebrow: string;
    quote: string;
    /** Exact phrase inside `quote` to highlight (one phrase only, so it stands out). */
    emphasis?: string;
    attribution: string;
  };
  programs: { eyebrow: string; title: string; lead: string };
  contact: Cta;
};

export type Action = { label: string; href: string };

/** In-kind or sourced items, grouped, e.g. { category: "Mobility aids", items: ["Wheelchairs"] }. */
export type NeedGroup = { category: string; items: string[] };

/**
 * One program, shown as an expanding panel on /our-work and as a card on the home page.
 * Only `description` is required in the panel; the optional parts appear when present.
 */
export type Program = {
  /** URL anchor, e.g. "kids-essentials-bank" (/our-work#kids-essentials-bank opens it). */
  slug: string;
  icon: ProgramIcon;
  title: string;
  /** One line, shown while the panel is closed and on the home page card. */
  summary: string;
  /** Where it runs, if it is a local program, e.g. "Hamilton, Ontario". */
  place?: string;
  description: string;
  /** Short list of what the program can include. */
  includes?: string[];
  /** Ordered steps, drawn as a numbered flow. */
  steps?: CardItem[];
  /** The main parts of the program, as tiles. */
  parts?: CardItem[];
  /** Items the program seeks, grouped. `id` gives the block its own anchor. */
  needs?: { id?: string; title: string; note?: string; groups: NeedGroup[] };
  /** A target, never a result. */
  goal?: Goal;
};

/** What the organization does. Used by home and /our-work. */
export type Work = { programs: Program[] };

/** Donation box copy. Visual only until online giving launches (ADR 0004). */
export type DonationBoxContent = {
  title: string;
  lead: string;
  frequency: { legend: string; once: string; monthly: string };
  /** Preset amounts in whole dollars; the second one is selected first. */
  amounts: { legend: string; presets: number[]; other: string };
  /** Button text: `label`, then the amount, then `monthlySuffix` for monthly gifts. */
  action: { label: string; monthlySuffix: string; href: string };
  note: string;
  /** Number formatting, e.g. "en-CA" and "CAD". */
  locale: string;
  currency: string;
};

/** Opening copy of a page: shown in its PageHeader and used for its metadata. */
export type PageIntro = { eyebrow: string; title: string; lead: string };

/** A card in a grid: optional link (site path without the language). */
export type CardItem = { title: string; description: string; href?: string; linkLabel?: string };

/** A titled grid of cards. */
export type CardSection = { eyebrow: string; title: string; lead?: string; items: CardItem[] };

/** Closing call to action of a page. */
export type Cta = { title: string; body: string; action: { label: string; href: string } };

export type FaqItem = { question: string; answer: string };

/** A block of a text page (privacy, accessibility). */
export type ProseSection = { heading: string; paragraphs: string[] };

/** Content of every standalone page, by route. */
export type SitePages = {
  about: {
    intro: PageIntro;
    story: { eyebrow: string; title: string };
    missionLabel: string;
    visionLabel: string;
    values: { eyebrow: string; title: string };
    leadership: { eyebrow: string; title: string };
    cta: Cta;
  };
  governance: { intro: PageIntro; commitments: CardSection; cta: Cta };
  ourWork: {
    intro: PageIntro;
    story: { eyebrow: string; title: string; paragraphs: string[] };
    programs: { eyebrow: string; title: string; lead: string };
    cta: Cta;
  };
  partner: {
    intro: PageIntro;
    why: CardSection;
    ways: CardSection;
    process: CardSection;
    cta: Cta;
  };
  getInvolved: { intro: PageIntro; ways: CardSection; roles: CardSection; cta: Cta };
  donate: {
    intro: PageIntro;
    receipts: { title: string; body: string };
    cta: Cta;
  };
  contact: { intro: PageIntro; reasons: CardSection };
  faq: { intro: PageIntro; items: FaqItem[]; cta: Cta };
  privacy: { intro: PageIntro; updated: string; sections: ProseSection[] };
  accessibility: { intro: PageIntro; updated: string; sections: ProseSection[] };
};
