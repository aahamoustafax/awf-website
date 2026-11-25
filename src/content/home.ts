import heroKabulGirls from "./images/hero-kabul-girls.jpg";
import type { Home } from "./types";

/**
 * Home page copy. Hrefs are site paths without the language prefix; components add it.
 */
export const home: Home = {
  hero: {
    title: "Bridging the gap. Supporting healthcare. Changing lives.",
    lead: "We work to connect hospitals, clinics and vulnerable communities with essential medical resources and humanitarian support, with a primary focus on Afghanistan.",
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
    // Word for word from the Organization Profile, matching the About page.
    quote:
      "To improve access to essential healthcare and humanitarian assistance by mobilizing donations, partnerships, medical resources and community support for hospitals and vulnerable communities throughout Afghanistan, while also advancing education, poverty relief, child and family well-being, and sustainable community development.",
    // Highlight the outcome, not the activity: who receives the care is what sponsors respond to.
    emphasis: "hospitals and vulnerable communities throughout Afghanistan",
    attribution: "Azan International Organization",
  },
  programs: {
    eyebrow: "What we do",
    title: "Our programs",
    lead: "Healthcare comes first, with a primary focus on Afghanistan, alongside support for children and families, including in Hamilton.",
  },
  contact: {
    title: "Get in touch",
    body: "Want to donate supplies, volunteer or partner with us? We'd love to hear from you.",
    action: { label: "Contact us", href: "/contact" },
  },
};
