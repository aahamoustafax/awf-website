import type { About } from "./types";

// The vision is quoted word for word from the Organization Profile. The mission is the short version
// agreed with the owner (ADR 0011) and matches the home page.
export const about: About = {
  intro: [
    "Azan International Organization (AIO) is an independent, non-profit humanitarian initiative established in 2020. Headquartered in Hamilton, Ontario, Canada, AIO works to improve the well-being of vulnerable people and underserved communities, with a primary program focus on Afghanistan.",
    "The Foundation seeks to connect people, hospitals and community organizations with essential resources, partnerships and practical support. Our work has four areas: healthcare in Afghanistan, and in Hamilton, education, support for newcomer families and essentials for children.",
  ],
  mission:
    "We work to help people in need get healthcare, education and everyday essentials: medical supplies for hospitals in Afghanistan, and schooling, English support and food for children and families in Hamilton.",
  vision:
    "A world in which children, women, men and families—regardless of their circumstances or background—can access essential care, education and opportunities, live with dignity, and build a safer and healthier future.",
  values: [
    {
      title: "Dignity",
      description: "Every person deserves care and respect, whatever their circumstances.",
    },
    {
      title: "Compassion",
      description: "Our work starts with the people who are going without.",
    },
    {
      title: "Fairness",
      description:
        "Assistance is intended to be needs-based, without distinction based on age, gender, disability, ethnicity, religion or political belief.",
    },
    {
      title: "Led by need",
      description:
        "We aim to send what hospitals, clinics and communities have identified as needed.",
    },
    {
      title: "Accountability",
      description:
        "We aim to keep appropriate records of donations, spending and donated goods, with appropriate oversight.",
    },
  ],
  // TODO(foundation): short founder bio and any board members.
  leadership: [{ name: "Nasratullah Rahim", role: "Founder & President" }],
};
