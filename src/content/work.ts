import type { Work } from "./types";

/**
 * The programs. The first seven follow the Organization Profile (section 5), which is the source of
 * truth, and keep its careful wording ("may", "aims to", "where lawful"). The Kids Essentials Bank
 * comes from the foundation's Hamilton program proposal (ADR 0009). Operations are launching, so
 * never claim shipments or results that haven't happened yet.
 */
export const work: Work = {
  programs: [
    {
      slug: "healthcare",
      icon: "care",
      title: "Healthcare and medical resource support",
      summary: "Medical equipment and supplies for hospitals and clinics with identified needs.",
      description:
        "We seek donations of new or gently used medical equipment and supplies, and aim to connect donors and medical institutions with healthcare facilities that have identified needs. Medical items are assessed for safety, condition and suitability before distribution wherever reasonably practicable.",
      steps: [
        {
          title: "Identify needs",
          description:
            "Hospitals, clinics and community organizations tell us what they need most.",
        },
        {
          title: "Source and assess",
          description: "We seek donated and purchased supplies and check them for safety.",
        },
        {
          title: "Ship",
          description:
            "We arrange packaging, documents and shipping, directly or through partners.",
        },
        {
          title: "Deliver and record",
          description: "Supplies reach recipient facilities, and we aim to keep records of it.",
        },
      ],
      // TODO(foundation): confirm the specific items. The categories come from the Organization Profile.
      needs: {
        id: "what-we-supply",
        title: "What we source and accept",
        note: "Medicines are handled only where the law permits. We will not knowingly accept expired items, and unsafe, damaged, recalled, counterfeit or improperly stored items must not be distributed.",
        groups: [
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
      },
    },
    {
      slug: "thalassemia",
      icon: "blood",
      title: "Thalassemia and blood disorder support",
      summary: "Help for patients and institutions treating thalassemia and other blood disorders.",
      description:
        "We may support patients and healthcare institutions addressing thalassemia and other blood disorders.",
      includes: [
        "Patient assistance",
        "Diagnostic resources",
        "Treatment-related support and equipment",
        "Medicines, where lawful",
        "Education and public awareness",
      ],
    },
    {
      slug: "womens-and-childrens-health",
      icon: "family",
      title: "Women's, newborn and children's health",
      summary: "Supplies, nutrition and health education for mothers, newborns and children.",
      description:
        "We may promote maternal, newborn, child and adolescent health, subject to professional guidance and applicable laws.",
      includes: [
        "Essential medical supplies",
        "Nutrition support and vitamins",
        "Health education",
      ],
    },
    {
      slug: "education",
      icon: "education",
      title: "Education and child well-being",
      summary: "School supplies, learning support and care for vulnerable children.",
      description:
        "We aim to improve access to learning for children and young people, and to support orphans and vulnerable children through safe, caring and appropriately safeguarded initiatives.",
      includes: [
        "Learning support and school supplies",
        "Educational and awareness programs",
        "Life skills and vocational opportunities",
        "Support for orphans and children at risk",
      ],
    },
    {
      slug: "family-support",
      icon: "home",
      title: "Poverty relief and family support",
      summary: "Food, clothing and other essentials for families facing hardship.",
      description:
        "Depending on available resources, we may provide or coordinate basic necessities for individuals and families facing hardship, including seasonal and emergency support.",
      includes: [
        "Food and clothing",
        "Baby essentials and hygiene items",
        "Shelter-related assistance",
        "Food assistance during Ramadan",
        "Eid gifts for families in need",
      ],
    },
    {
      slug: "womens-skills",
      icon: "skills",
      title: "Women's skills and community development",
      summary: "Practical skills training that builds confidence and income.",
      description:
        "We may support skills training and practical learning to help women and families strengthen their capabilities, confidence and economic resilience.",
      includes: ["Sewing", "Cooking", "Other livelihood skills"],
    },
    {
      slug: "emergency-response",
      icon: "shelter",
      title: "Emergency and humanitarian response",
      summary: "Relief for communities hit by earthquakes, floods, conflict and displacement.",
      description:
        "We may assist communities affected by earthquakes, floods, conflict, displacement, disease outbreaks and other emergencies.",
      includes: [
        "Medical resources",
        "Essential relief items",
        "Coordination with partners",
        "Help for affected healthcare facilities",
      ],
    },
    // From the Kids Essentials Bank proposal. Budget and named partners are left out on purpose:
    // there are no signed agreements yet (ADR 0009).
    {
      slug: "kids-essentials-bank",
      icon: "essentials",
      title: "Kids Essentials Bank",
      summary: "Food, clothing, school supplies and hygiene kits for children in Hamilton.",
      place: "Hamilton, Ontario",
      description:
        "A program we are setting up for children aged 1 to 14 from low-income, newcomer, refugee and vulnerable families in Hamilton. Families referred by schools, social workers and community organizations come first.",
      parts: [
        {
          title: "Kids food bank",
          description: "Healthy food boxes made for children, weekly or every two weeks.",
        },
        {
          title: "Clothing bank",
          description: "Clean, season-appropriate clothing, shoes and winter gear.",
        },
        {
          title: "School kits",
          description: "Backpacks, notebooks, pencils, lunch kits and other supplies.",
        },
        {
          title: "Hygiene kits",
          description: "Age-appropriate personal care products.",
        },
      ],
      needs: {
        title: "Most needed items",
        groups: [
          {
            category: "Food",
            items: [
              "Nut butters",
              "Canned tuna, chicken and salmon",
              "Beans and lentils",
              "Milk, yogurt cups and cheese sticks",
              "Whole grain bread and cereal",
              "Fresh fruit and vegetables",
              "Baby formula",
            ],
          },
          {
            category: "Clothing",
            items: [
              "Jackets, hats and gloves",
              "Shoes and socks",
              "School clothes",
              "New undergarments",
            ],
          },
          {
            category: "School supplies",
            items: [
              "Backpacks",
              "Notebooks",
              "Pencils, crayons and markers",
              "Lunch kits and water bottles",
            ],
          },
          {
            category: "Hygiene",
            items: [
              "Toothbrushes and toothpaste",
              "Soap and shampoo",
              "Hairbrushes and deodorant",
              "Wipes",
              "Feminine hygiene products",
            ],
          },
        ],
      },
      goal: { value: "50–100", label: "children supported each month once the program is running" },
    },
  ],
};
