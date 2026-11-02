import heroKabulGirls from "./images/hero-kabul-girls.jpg";
import type { Home } from "./types";

/**
 * Home page copy. Hrefs are site paths without the language prefix; components add it.
 * Goals are targets for work that is launching. Never present them as results.
 */
export const home: Home = {
  hero: {
    title: "Essential medicines and medical supplies for people in need",
    lead: "We source medicines, medical supplies and equipment from around the world and deliver them to hospitals, clinics and patients who need them most, with a focus on Afghanistan.",
    // Stock photo until AWF has consented photos of its own work. Credit kept for records.
    image: {
      src: heroKabulGirls,
      alt: "A young girl in a red embroidered dress smiles broadly, with a friend behind her, in Kabul.",
      credit: {
        name: "Sohaib Ghyasi",
        url: "https://unsplash.com/photos/zCjn_psp7Qw",
        source: "Unsplash",
      },
    },
    imageFocus: "55% 35%",
  },
  mission: {
    eyebrow: "Our mission",
    quote:
      "To source quality medicines and medical supplies from around the world and deliver them, through trusted partners, to the people who need them most.",
    // Highlight the outcome, not the activity: who receives the care is what sponsors respond to.
    emphasis: "the people who need them most",
    attribution: "Azan Welfare Foundation",
  },
  help: {
    title: "Choose how to help",
    options: [
      { label: "Donate supplies", href: "/our-work#what-we-supply" },
      { label: "Fund medicines", href: "/donate" },
      { label: "Volunteer", href: "/get-involved" },
      { label: "Sponsor a shipment", href: "/partner" },
    ],
    note: "Every contribution, in money or in kind, is reported transparently.",
    action: { label: "Partner with us", href: "/partner" },
    secondaryAction: { label: "See how we work", href: "/our-work" },
  },
  // No "$50 buys X" lines until the foundation confirms real costs.
  donate: {
    title: "Give today",
    lead: "Your gift pays for medicines, medical supplies and the cost of shipping them.",
    frequency: { legend: "How often", once: "One-time", monthly: "Monthly" },
    amounts: { legend: "Amount", presets: [25, 50, 100, 250], other: "Other amount" },
    action: { label: "Donate", monthlySuffix: "monthly", href: "/donate" },
    note: "Online giving opens soon. Until then, we'll show you how to give today.",
    locale: "en-CA",
    currency: "CAD",
  },
  focusAreas: {
    eyebrow: "Core objectives",
    title: "Our focus areas",
    lead: "Everything we do serves one purpose: getting medical care to people who would otherwise go without.",
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "From need to delivery",
    lead: "Every shipment starts with a request from the people who will use it, and ends with a report to the people who paid for it.",
  },
  // Goals without figures until the foundation sets targets. Each `value` is a short headline.
  goals: {
    eyebrow: "Our first-year goals",
    title: "What we're building toward",
    lead: "Our operations are launching now. These are the commitments we are working to meet, and we will report against them openly.",
    items: [
      {
        value: "First shipment",
        label: "of medicines and supplies delivered to partner facilities in Afghanistan",
      },
      {
        value: "Partner network",
        label: "of hospitals and clinics that tell us exactly what they need",
      },
      {
        value: "Trusted suppliers",
        label: "around the world for quality medicines and equipment",
      },
      {
        value: "Open reporting",
        label: "of every shipment: what was sent, where it went and what it cost",
      },
    ],
    note: "Goals for our launch year. Results will be published in our annual report.",
  },
  partner: {
    title: "Help us get medicines where they're needed",
    body: "We are seeking institutional, corporate and diplomatic partners to fund shipments, supply medicines and strengthen healthcare in Afghanistan. Every partnership is reported transparently.",
    action: { label: "Partner with us", href: "/partner" },
  },
};
