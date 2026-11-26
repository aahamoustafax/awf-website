import type { Work } from "./types";

/**
 * The four streams of work, each one panel (ADR 0011). Healthcare follows the Organization Profile
 * and keeps its careful wording ("may", "aims to", "where lawful"). Education and Newcomer families
 * come from the owner's voice note; the Kids Essentials Bank from its Hamilton proposal (ADR 0009).
 * Operations are launching, so never claim shipments or results that haven't happened yet.
 */
export const work: Work = {
  programs: [
    {
      slug: "healthcare",
      icon: "care",
      title: "Healthcare",
      summary:
        "Medicines, medical equipment and supplies for hospitals and clinics in Afghanistan.",
      place: "Afghanistan",
      description:
        "We seek donations of new or gently used medical equipment and supplies, and aim to connect donors and medical institutions with healthcare facilities that have identified needs. Medical items are assessed for safety, condition and suitability before distribution wherever reasonably practicable.",
      parts: [
        {
          title: "Medical supplies and equipment",
          description: "For hospitals, clinics and laboratories with identified needs.",
        },
        {
          title: "Medicines",
          description: "Essential medicines, only where the law permits.",
        },
        {
          title: "Thalassemia and blood disorders",
          description: "Support for patients and the institutions that treat them.",
        },
        {
          title: "Women's and children's health",
          description: "Supplies, nutrition and health education for mothers and children.",
        },
      ],
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
    // From the owner's voice note (2026-11-26). Details are not set yet: keep "plan to" wording.
    {
      slug: "education",
      icon: "education",
      title: "Education",
      summary: "A weekend Islamic school for Muslim children in Hamilton.",
      place: "Hamilton, Ontario",
      description:
        "We plan to open a weekend Islamic school in Hamilton for Muslim children, both Arab and non-Arab. Families in the city have asked for one, and classes are planned for Saturdays and Sundays.",
      // TODO(foundation): ages, subjects, location and start date once they are set.
    },
    {
      slug: "newcomer-families",
      icon: "family",
      title: "Newcomer families",
      summary: "English and career support for newcomer parents in Hamilton.",
      place: "Hamilton, Ontario",
      description:
        "Many newcomer parents in Hamilton trained as engineers, doctors and other professionals, but language holds them back from working in their field. We plan a program to help them improve their English and take the next steps toward their careers.",
      // TODO(foundation): what the program offers, and who runs it, once it is planned.
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
