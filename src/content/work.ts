import type { Work } from "./types";

/**
 * What AWF does and how. The seven programs follow the Organization Profile (section 5), which is
 * the source of truth, and keep its careful wording ("may", "aims to", "where lawful"). Operations
 * are launching, so never claim shipments or results that haven't happened yet.
 */
export const work: Work = {
  programs: [
    {
      title: "Healthcare and medical resource support",
      description:
        "We seek donations of new or gently used medical equipment and supplies, and aim to connect donors and medical institutions with healthcare facilities that have identified needs.",
    },
    {
      title: "Thalassemia and blood disorder support",
      description:
        "We may support patients and institutions addressing thalassemia and other blood disorders through patient assistance, diagnostics, treatment-related support, medicines where lawful, and public awareness.",
    },
    {
      title: "Women's, newborn and children's health",
      description:
        "We may promote maternal, newborn, child and adolescent health through essential medical supplies, nutrition support, vitamins and health education, subject to professional guidance and applicable laws.",
    },
    {
      title: "Education and child well-being",
      description:
        "We aim to improve access to learning through school supplies, awareness programs and life skills, and to support orphans and vulnerable children through safe, appropriately safeguarded initiatives.",
    },
    {
      title: "Poverty relief and family support",
      description:
        "Depending on available resources, we may provide or coordinate food, clothing, baby essentials, hygiene items and other necessities, including food assistance during Ramadan and Eid gifts for families in need.",
    },
    {
      title: "Women's skills and community development",
      description:
        "We may support skills training and practical learning, such as sewing and cooking, to help women and families strengthen their capabilities, confidence and economic resilience.",
    },
    {
      title: "Emergency and humanitarian response",
      description:
        "We may assist communities affected by earthquakes, floods, conflict, displacement and disease outbreaks with medical resources, essential relief items and coordination with partners.",
    },
  ],

  howWeWork: [
    {
      title: "Identify needs",
      description:
        "Hospitals, clinics and community organizations in Afghanistan tell us what they need most.",
    },
    {
      title: "Source and assess",
      description:
        "We seek donated and purchased supplies, and assess medical items for safety, condition and suitability wherever reasonably practicable.",
    },
    {
      title: "Ship",
      description:
        "We arrange packaging, documentation and shipping, directly or through qualified service providers and partners.",
    },
    {
      title: "Deliver and record",
      description:
        "Supplies go to recipient facilities with our partners, and we aim to keep appropriate records of what was given and who received it.",
    },
  ],

  // TODO(foundation): confirm the specific items. The categories come from the Organization Profile.
  supplies: [
    {
      category: "Diagnostic and monitoring",
      items: [
        "Diagnostic and laboratory equipment",
        "Blood pressure monitors",
        "Glucometers",
        "Stethoscopes",
      ],
    },
    {
      category: "Surgical and treatment",
      items: [
        "Surgical supplies",
        "Treatment equipment",
        "Wound care and dressings",
        "Gloves, syringes and consumables",
      ],
    },
    {
      category: "Rehabilitation and patient care",
      items: ["Wheelchairs", "Crutches", "Walkers", "Patient-care items"],
    },
    {
      category: "Medicines",
      items: [
        "Essential medicines, only where the law permits",
        "Treatment for blood disorders, only where the law permits",
      ],
    },
  ],
};
