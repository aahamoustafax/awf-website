import type { Program } from "./types";

/** Order here is the order shown in menus and on the programs page. */
export const programs: Program[] = [
  {
    slug: "children-education",
    title: "Children's Education",
    summary:
      "Weekend educational support for newcomer and refugee children through the Azan Center for Child Programs (ACCP) in Hamilton.",
    region: "hamilton",
  },
  {
    slug: "skills-livelihoods",
    title: "Skills & Livelihoods",
    summary:
      "Practical skills training (tailoring, cooking, computer skills, and financial literacy) empowering women, men, and seniors toward economic independence.",
    region: "hamilton",
  },
  {
    slug: "kids-essentials-bank",
    title: "Kids Essentials Bank",
    summary:
      "Food, clothing, school supplies, and hygiene kits for children aged 1–14 from vulnerable and newcomer families in Hamilton.",
    region: "hamilton",
  },
  {
    slug: "healthcare-afghanistan",
    title: "Healthcare for Afghanistan",
    summary:
      "Medical equipment collected from donors across Canada and shipped to hospitals and clinics in underserved regions of Afghanistan.",
    region: "afghanistan",
  },
];
