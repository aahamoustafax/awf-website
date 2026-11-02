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
  /** Short figure, e.g. "50–100", or a short headline ("First shipment") until a number is set. */
  value: string;
  label: string;
};

/** Where a program operates. */
export type ProgramRegion = "hamilton" | "afghanistan";

export type ProgramStatus = "launching" | "active";

/** Which line-art illustration represents the program (see ProgramIllustration). */
export type ProgramIcon = "education" | "skills" | "essentials" | "care";

export type Program = {
  /** URL segment: /programs/<slug>. Lowercase, kebab-case, never change once published. */
  slug: string;
  title: string;
  /** One or two sentences for cards and menus. */
  summary: string;
  region: ProgramRegion;
  status: ProgramStatus;
  icon: ProgramIcon;
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
  needs?: NeedGroup[];
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

export type Home = {
  hero: {
    title: string;
    lead: string;
    image: Photo;
    /** CSS object-position for the photo, keeping the subject in view, e.g. "60% 30%". */
    imageFocus: string;
  };
  mission: {
    eyebrow: string;
    quote: string;
    /** Exact phrase inside `quote` to highlight (one phrase only, so it stands out). */
    emphasis?: string;
    attribution: string;
  };
  /** Donation box in the hero. */
  donate: DonationBoxContent;
  /** Ways to help today, beside the mission quote (in place of the globe for now, ADR 0007). */
  help: {
    title: string;
    options: { label: string; href: string }[];
    note: string;
    action: { label: string; href: string };
    secondaryAction: { label: string; href: string };
  };
  focusAreas: { eyebrow: string; title: string; lead: string };
  howWeWork: { eyebrow: string; title: string; lead: string };
  goals: { eyebrow: string; title: string; lead: string; items: Goal[]; note: string };
  partner: { title: string; body: string; action: { label: string; href: string } };
};

/** In-kind or sourced items, grouped, e.g. { category: "Mobility aids", items: ["Wheelchairs"] }. */
export type NeedGroup = { category: string; items: string[] };

/** What AWF does (focus areas) and how (the supply steps, what we supply). Used by home and /our-work. */
export type Work = {
  focusAreas: CardItem[];
  /** Steps from a facility's request to a reported delivery, in order. */
  howWeWork: CardItem[];
  supplies: NeedGroup[];
};

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
  programs: { intro: PageIntro };
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
    howWeWork: { eyebrow: string; title: string; lead: string };
    supplies: { eyebrow: string; title: string; lead: string };
    cta: Cta;
  };
  whoWeServe: {
    intro: PageIntro;
    groups: CardSection;
    base: { eyebrow: string; title: string; paragraphs: string[] };
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
    ways: CardSection;
    receipts: { title: string; body: string };
    cta: Cta;
  };
  contact: { intro: PageIntro; reasons: CardSection };
  faq: { intro: PageIntro; items: FaqItem[]; cta: Cta };
  privacy: { intro: PageIntro; updated: string; sections: ProseSection[] };
  accessibility: { intro: PageIntro; updated: string; sections: ProseSection[] };
};
