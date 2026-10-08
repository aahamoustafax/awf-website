import heroKabulGirls from "./images/hero-kabul-girls.jpg";
import type { Home } from "./types";

/**
 * Home page copy. Hrefs are site paths without the language prefix; components add it.
 * Goals are targets for programs that are launching. Never present them as results.
 */
export const home: Home = {
  hero: {
    eyebrow: "Canada · Afghanistan",
    title: "Education, skills and care for families building a new life",
    lead: "We help newcomer and refugee families in Canada build their future, and stand with communities in Afghanistan through humanitarian and healthcare support.",
    // Stock photo until AWF has consented photos of its own programs. Credit kept for records.
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
    giveCard: {
      title: "Choose how to help",
      options: [
        { label: "Donate essentials", href: "/programs/kids-essentials-bank" },
        { label: "Support Afghanistan", href: "/programs/healthcare-afghanistan" },
        { label: "Volunteer", href: "/get-involved" },
        { label: "Sponsor a program", href: "/partner" },
      ],
      note: "Online giving is launching soon. Every contribution is reported transparently.",
      action: { label: "Partner with us", href: "/partner" },
      secondaryAction: { label: "Explore our programs", href: "/programs" },
    },
  },
  connection: {
    label: "Afghanistan and Canada: the two countries AWF serves",
    // Left to right: where AWF began → where it is today. The line fills in this direction.
    from: { name: "Afghanistan", note: "Where we began" },
    to: { name: "Canada", note: "Our home today" },
  },
  mission: {
    eyebrow: "Our mission",
    quote:
      "To empower vulnerable individuals through inclusive education, life skills and humanitarian support, fostering dignity, opportunity and hope for a better future.",
    attribution: "Azan Welfare Foundation",
  },
  programs: {
    eyebrow: "Our programs",
    title: "Four programs, one purpose: a fair start",
    lead: "From weekend classrooms in Hamilton to communities in Afghanistan, each program meets a concrete need and builds lasting independence.",
  },
  goals: {
    eyebrow: "Our first-year goals",
    title: "What we're building toward",
    lead: "Our Hamilton programs are launching now. These are the commitments we are working to meet, and we will report against them openly.",
    items: [
      { value: "50–100", label: "children supported every month by the Kids Essentials Bank" },
      { value: "14", label: "hours of weekend classes each week at ACCP" },
      { value: "5", label: "vocational and life-skills training tracks" },
      { value: "2", label: "countries served: Canada and Afghanistan" },
    ],
    note: "Targets for our launch year. Results will be published in our annual report.",
  },
  geographies: {
    eyebrow: "Where we work",
    title: "Two places, one mission",
    places: [
      {
        name: "Hamilton, Ontario",
        title: "Helping newcomer families take root",
        body: "Our home base. We support children, women, men and seniors from newcomer, refugee and low-income families as they build stable lives in Canada.",
        points: [
          "Weekend classes for children",
          "Vocational training for adults",
          "Food, clothing and school essentials",
        ],
      },
      {
        name: "Afghanistan",
        title: "Standing with the communities where we began",
        body: "AWF was founded in Afghanistan, and our commitment there continues. We mobilize donors across Canada to support underserved communities, working with trusted partners on the ground.",
        points: [
          "Humanitarian support for families in need",
          "Medical equipment for hospitals and clinics",
          "Ethical distribution through local partners",
        ],
      },
    ],
  },
  give: {
    eyebrow: "Get involved",
    title: "Ways to help today",
    lead: "Online giving is coming soon. In the meantime, there are four ways to make a difference right now.",
    ways: [
      {
        title: "Donate essentials",
        description: "Food, clothing, school supplies and hygiene items for children aged 1–14.",
        href: "/programs/kids-essentials-bank",
        linkLabel: "See the most-needed list",
      },
      {
        title: "Support Afghanistan",
        description:
          "Help communities in underserved regions, from humanitarian support to donating medical equipment.",
        href: "/programs/healthcare-afghanistan",
        linkLabel: "How you can help",
      },
      {
        title: "Volunteer your skills",
        description:
          "Teach a weekend class, lead a training track or help coordinate distributions.",
        href: "/get-involved",
        linkLabel: "Volunteer with us",
      },
      {
        title: "Partner or sponsor",
        description: "Fund a program, a classroom or a shipment, and see exactly where it goes.",
        href: "/partner",
        linkLabel: "Partner with us",
      },
    ],
  },
  values: { eyebrow: "Our values", title: "How we work" },
  partner: {
    title: "Help us build programs that last",
    body: "We are seeking institutional, corporate and community partners to launch and sustain our programs in Hamilton and Afghanistan. Every partnership is reported transparently.",
    action: { label: "Partner with us", href: "/partner" },
  },
};
