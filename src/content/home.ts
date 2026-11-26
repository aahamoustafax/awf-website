import heroKabulGirls from "./images/hero-kabul-girls.jpg";
import type { Home } from "./types";

/**
 * Home page copy. Hrefs are site paths without the language prefix; components add it.
 */
export const home: Home = {
  hero: {
    title: "Healthcare, education and the basics, for the people who need them most.",
    lead: "A non-profit based in Hamilton, Ontario, working in Afghanistan and here at home.",
    // Stock photo until AIO has consented photos of its own work. Credit kept for records.
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
  actions: {
    primary: { label: "Our programs", href: "/our-work" },
    secondary: { label: "Contact us", href: "/contact" },
  },
  mission: {
    eyebrow: "Our mission",
    // Short mission agreed with the owner (ADR 0011), matching the About page.
    quote:
      "We work to help people in need get healthcare, education and everyday essentials: medical supplies for hospitals in Afghanistan, and schooling, English support and food for children and families in Hamilton.",
    // Highlight the streams of work: they are what a first-time reader needs to take away.
    emphasis: "healthcare, education and everyday essentials",
    attribution: "Azan International Organization",
  },
  programs: {
    eyebrow: "What we do",
    title: "Our programs",
    lead: "Four areas of work: healthcare in Afghanistan, and education, newcomer support and children's essentials in Hamilton.",
  },
  contact: {
    title: "Get in touch",
    body: "Want to donate supplies, volunteer or partner with us? We'd love to hear from you.",
    action: { label: "Contact us", href: "/contact" },
  },
};
