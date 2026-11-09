import type { About } from "./types";

// Mission and vision are quoted word for word from the Organization Profile. Do not paraphrase them.
export const about: About = {
  intro: [
    "Azan Welfare Foundation (AWF) is an independent, non-profit humanitarian initiative established in 2020. Headquartered in Hamilton, Ontario, Canada, AWF works to improve the well-being of vulnerable people and underserved communities, with a primary program focus on Afghanistan.",
    "The Foundation seeks to connect people, hospitals and community organizations with essential resources, partnerships and practical support. Healthcare comes first, alongside education, poverty relief, child and family well-being, women's skills and emergency response.",
  ],
  mission:
    "To improve access to essential healthcare and humanitarian assistance by mobilizing donations, partnerships, medical resources and community support for hospitals and vulnerable communities throughout Afghanistan, while also advancing education, poverty relief, child and family well-being, and sustainable community development.",
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
