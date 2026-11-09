import heroKabulGirls from "./images/hero-kabul-girls.jpg";
import type { Home } from "./types";

/**
 * Home page copy. Hrefs are site paths without the language prefix; components add it.
 * Goals are targets for work that is launching. Never present them as results.
 */
export const home: Home = {
  hero: {
    title: "Bridging the gap. Supporting healthcare. Changing lives.",
    lead: "We work to connect hospitals, clinics and vulnerable communities with essential medical resources and humanitarian support, with a primary focus on Afghanistan.",
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
    // Word for word from the Organization Profile, matching the About page.
    quote:
      "To improve access to essential healthcare and humanitarian assistance by mobilizing donations, partnerships, medical resources and community support for hospitals and vulnerable communities throughout Afghanistan, while also advancing education, poverty relief, child and family well-being, and sustainable community development.",
    // Highlight the outcome, not the activity: who receives the care is what sponsors respond to.
    emphasis: "hospitals and vulnerable communities throughout Afghanistan",
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
    note: "Contributions, in money or in kind, are recorded and used for the foundation's purposes.",
    action: { label: "Partner with us", href: "/partner" },
    secondaryAction: { label: "See how we work", href: "/our-work" },
  },
  // No "$50 buys X" lines until the foundation confirms real costs.
  donate: {
    title: "Give today",
    lead: "Your gift supports healthcare and humanitarian assistance for people in need.",
    frequency: { legend: "How often", once: "One-time", monthly: "Monthly" },
    amounts: { legend: "Amount", presets: [25, 50, 100, 250], other: "Other amount" },
    action: { label: "Donate", monthlySuffix: "monthly", href: "/donate" },
    note: "Online giving opens soon. Until then, we'll show you how to give today.",
    locale: "en-CA",
    currency: "CAD",
  },
  programs: {
    eyebrow: "What we do",
    title: "Our programs",
    lead: "Healthcare comes first, alongside support for education, families and communities. What we take on depends on available resources and applicable law.",
  },
  howWeWork: {
    eyebrow: "How we work",
    title: "From need to delivery",
    lead: "We start with what hospitals and communities tell us they need, and aim to keep appropriate records of what was given and who received it.",
  },
  // Goals without figures until the foundation sets targets. Each `value` is a short headline.
  goals: {
    eyebrow: "Our first-year goals",
    title: "What we're building toward",
    lead: "Our operations are launching now. These are the goals we are working toward.",
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
        value: "Sound records",
        label: "of donations, spending, donated goods and the institutions that receive them",
      },
    ],
    note: "Goals for our launch year, not results.",
  },
  partner: {
    title: "Help us get medicines where they're needed",
    body: "We are seeking institutional, corporate and diplomatic partners to fund shipments, supply medicines and strengthen healthcare in Afghanistan.",
    action: { label: "Partner with us", href: "/partner" },
  },
};
