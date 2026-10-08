import type { About } from "./types";

export const about: About = {
  intro: [
    "Azan Welfare Foundation (AWF) is a non-profit organization dedicated to uplifting vulnerable people through education, skills training and healthcare initiatives.",
    "Founded in Afghanistan, AWF is now building programs in Hamilton, Ontario for newcomer and underserved communities, while continuing its humanitarian work in Afghanistan, including healthcare support. Our work centres on those with the fewest opportunities, including women, children, seniors and men who had little access to education, with a focus on newcomers and refugees.",
  ],
  mission:
    "To empower vulnerable individuals through inclusive education, life skills and humanitarian support, fostering dignity, opportunity and hope for a better future.",
  vision:
    "A world where every individual, regardless of background, has the tools to thrive through education, healthcare and economic opportunity.",
  values: [
    {
      title: "Inclusivity",
      description: "Programs open to all backgrounds, with special focus on the most marginalized.",
    },
    {
      title: "Dignity",
      description: "Every person deserves respect, opportunity and a path forward.",
    },
    {
      title: "Transparency",
      description: "We operate with full financial accountability to donors and partners.",
    },
    {
      title: "Community-led",
      description: "Programs are designed with, and for, the communities we serve.",
    },
    {
      title: "Long-term impact",
      description: "We build local capacity and resilience, not dependency.",
    },
  ],
  // TODO(foundation): short founder bio and any board members.
  leadership: [{ name: "Nasratullah Rahim", role: "Founder & President" }],
};
