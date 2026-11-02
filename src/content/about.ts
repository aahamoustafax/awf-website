import type { About } from "./types";

export const about: About = {
  intro: [
    "Azan Welfare Foundation (AWF) is a non-profit organization, established in 2020, with its head office in Hamilton, Ontario, Canada.",
    "We source medicines, medical supplies and equipment from around the world and deliver them to people in need, with a focus on Afghanistan. Our work covers healthcare and medical support, specialized care for thalassemia, women's and children's health, emergency response, health education, and the partnerships and logistics that make delivery possible.",
  ],
  mission:
    "To source quality medicines and medical supplies from around the world and deliver them, through trusted partners, to the people who need them most.",
  vision:
    "A world where no one goes without essential medicines or basic medical care because of where they live.",
  values: [
    {
      title: "Inclusivity",
      description:
        "Care for people of every background, with special focus on the most vulnerable.",
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
      title: "Led by need",
      description: "We send what hospitals, clinics and communities tell us they need most.",
    },
    {
      title: "Long-term impact",
      description: "We build local capacity and resilience, not dependency.",
    },
  ],
  // TODO(foundation): short founder bio and any board members.
  leadership: [{ name: "Nasratullah Rahim", role: "Founder & President" }],
};
