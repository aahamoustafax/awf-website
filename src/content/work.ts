import type { Work } from "./types";

/**
 * What AWF does and how, following the foundation's own outline (Nov 2026): six focus areas, the
 * supply process, and what we supply. Operations are launching, so this describes the approach and
 * never claims shipments or results that haven't happened yet.
 */
export const work: Work = {
  focusAreas: [
    {
      title: "Healthcare & medical support",
      description:
        "Medicines, medical supplies and equipment for hospitals and clinics, matched to what each facility tells us it needs.",
    },
    {
      title: "Specialized care: thalassemia",
      description:
        "Support for patients living with thalassemia and other blood disorders, who depend on regular treatment and the supplies that go with it.",
    },
    {
      title: "Women's & children's health",
      description:
        "Supplies for maternal, newborn and child health, where shortages put the most vulnerable patients at risk.",
    },
    {
      title: "Emergency & humanitarian response",
      description:
        "Medical and humanitarian relief for communities facing crises, disasters and emergencies.",
    },
    {
      title: "Education & community development",
      description:
        "Health awareness campaigns, training, and work that helps communities move out of poverty.",
    },
    {
      title: "Partnerships & logistics",
      description:
        "Procurement, international shipping and cooperation with institutions, so supplies arrive safely and are put to good use.",
    },
  ],

  howWeWork: [
    {
      title: "Identify needs",
      description:
        "Hospitals, clinics and partners in Afghanistan tell us which medicines and supplies they need most.",
    },
    {
      title: "Source",
      description:
        "We procure quality medicines and supplies from trusted suppliers around the world, and accept donated equipment.",
    },
    {
      title: "Ship",
      description:
        "We handle packaging, documentation and international shipping, so supplies arrive safely and on time.",
    },
    {
      title: "Deliver & report",
      description:
        "Trusted local partners deliver to facilities and patients, and we report each shipment to our donors.",
    },
  ],

  // TODO(foundation): confirm this list, and whether donated medicines are ever accepted.
  supplies: [
    {
      category: "Medicines",
      items: [
        "Essential medicines, bought from licensed suppliers",
        "Treatment for thalassemia and other blood disorders",
      ],
    },
    {
      category: "Medical supplies",
      items: ["Wound care and dressings", "Surgical supplies", "Gloves, syringes and consumables"],
    },
    {
      category: "Equipment",
      items: ["Blood pressure monitors", "Glucometers", "Stethoscopes"],
    },
    { category: "Mobility aids", items: ["Wheelchairs", "Crutches", "Walkers"] },
  ],
};
