import type { Program } from "./types";

/**
 * Program content. Order here is the order shown in menus, cards and the programs page.
 * All programs are launching: copy describes what we are building and its goals, not past results.
 */
export const programs: Program[] = [
  {
    slug: "children-education",
    title: "Children's Education",
    summary:
      "Weekend classes at the Azan Center for Child Programs (ACCP), helping newcomer and refugee children build academic confidence while keeping their language and heritage.",
    region: "hamilton",
    status: "launching",
    focus: ["Weekend classes", "Heritage languages", "Newcomer children"],
    overview: [
      "Children who arrive in Canada as newcomers or refugees often start school while still learning the language, adjusting to a new system and, for many, catching up on interrupted education.",
      "AWF is establishing the Azan Center for Child Programs (ACCP) in Hamilton: weekend classes that complement regular schooling, strengthen core skills and help children stay connected to their language and cultural identity, so they can settle into Canadian classrooms with confidence.",
    ],
    audience:
      "Children from newcomer and refugee families in Hamilton who benefit from supplemental academic support alongside their regular Canadian schooling.",
    offerings: {
      heading: "What children learn",
      items: [
        {
          title: "Basic science",
          description: "Foundations that reinforce the Ontario curriculum.",
        },
        {
          title: "Islamic studies",
          description: "Values, ethics and identity taught in a supportive setting.",
        },
        {
          title: "Heritage languages",
          description: "Arabic, Dari, Pashto and more, so children keep their mother tongue.",
        },
      ],
    },
    facts: [
      { label: "Days", value: "Saturdays and Sundays" },
      { label: "Morning shift", value: "8:00 AM – 12:00 PM" },
      { label: "Afternoon shift", value: "1:00 PM – 4:00 PM" },
      { label: "Location", value: "Hamilton, Ontario" },
    ],
    goals: [
      { value: "2", label: "weekend shifts, every Saturday and Sunday" },
      { value: "14", label: "hours of classes offered each week" },
      { value: "3+", label: "heritage languages taught" },
    ],
    action: {
      heading: "Enroll your child",
      body: "Registration is opening for the first cohort. Contact us to reserve a place or learn about available shifts.",
    },
  },
  {
    slug: "skills-livelihoods",
    title: "Skills & Livelihoods",
    summary:
      "Practical training in tailoring, cooking, barbering, computer skills and financial literacy, helping women, men and seniors move toward employment and economic independence.",
    region: "hamilton",
    status: "launching",
    focus: ["Vocational training", "Employment", "Entrepreneurship"],
    overview: [
      "Many newcomer adults arrive with determination and experience but without Canadian credentials, formal schooling or a network. Without practical, recognized skills, the path to stable income is long.",
      "AWF's Skills & Livelihoods program offers hands-on training that leads directly to work or a small business. It is designed for people who have had little access to education, including women and seniors, and focuses on independence, not dependency.",
    ],
    audience:
      "Women, men and seniors from newcomer, refugee and underserved communities in Hamilton who want practical skills for employment or to start a small business.",
    offerings: {
      heading: "Training tracks",
      items: [
        {
          title: "Tailoring & sewing",
          description:
            "Garment construction, alterations and the foundations of a home-based or small-business sewing practice.",
        },
        {
          title: "Cooking & food preparation",
          description:
            "Professional food handling and preparation for catering, food service or a home-based business.",
        },
        {
          title: "Barbering & personal grooming",
          description:
            "Barbering techniques that lead to employment in the personal care industry.",
        },
        {
          title: "Basic computer skills",
          description:
            "Email, internet and word processing: the digital literacy needed for work and daily life in Canada.",
        },
        {
          title: "Life skills & financial literacy",
          description:
            "Budgeting, banking and navigating Canadian systems to build lasting self-reliance.",
        },
      ],
    },
    goals: [
      { value: "5", label: "vocational and life-skills tracks" },
      { value: "3", label: "groups served: women, men and seniors" },
    ],
    action: {
      heading: "Register or teach",
      body: "Contact us to register for a training track, or to volunteer as an instructor in your field.",
    },
  },
  {
    slug: "kids-essentials-bank",
    title: "Kids Essentials Bank",
    summary:
      "Food, clothing, school supplies and hygiene kits for children aged 1–14 from low-income, newcomer and refugee families in Hamilton.",
    region: "hamilton",
    status: "launching",
    focus: ["Child nutrition", "Clothing", "School supplies", "Hygiene"],
    overview: [
      "In Hamilton, many children from low-income, newcomer and vulnerable families face several barriers at once: hunger, a lack of proper clothing, no school supplies and poor access to hygiene essentials. Each one affects their health, their confidence and their ability to succeed in school.",
      "The Kids Essentials Bank is designed around children's specific needs, from child-appropriate food boxes to winter gear and backpacks. It eases the pressure on families so they can focus on education and stability.",
    ],
    audience:
      "Children aged 1–14 from low-income, newcomer, refugee and vulnerable families in Hamilton. Priority goes to families referred by schools, social workers and community organizations.",
    offerings: {
      heading: "What the bank provides",
      items: [
        {
          title: "Kids food bank",
          description:
            "Weekly or biweekly boxes of healthy, balanced food designed for children's nutritional needs.",
        },
        {
          title: "Clothing bank",
          description: "Clean, season-appropriate clothing, shoes and winter gear.",
        },
        {
          title: "School stationery & learning kits",
          description:
            "Backpacks, notebooks, pencils, crayons and lunch kits so every child arrives ready to learn.",
        },
        {
          title: "Hygiene kits for kids",
          description: "Age-appropriate personal care products that support health and confidence.",
        },
      ],
    },
    needs: [
      {
        category: "Food",
        items: [
          "Nut butters",
          "Canned tuna, chicken or salmon",
          "Beans and lentils",
          "Milk, yogurt cups and cheese sticks",
          "Whole grain bread and cereals",
          "Fresh fruit and vegetables",
          "Applesauce and healthy snacks",
          "Baby formula",
        ],
      },
      {
        category: "Clothing",
        items: [
          "Jackets and shoes",
          "Socks, hats and gloves",
          "School-appropriate clothing",
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
          "Wipes and feminine hygiene products",
        ],
      },
    ],
    goals: [
      { value: "50–100", label: "children supported every month" },
      { value: "4", label: "essentials covered: food, clothing, school and hygiene" },
    ],
    action: {
      heading: "Help stock the bank",
      body: "Donate items from the most-needed list, contribute financially, or volunteer at a distribution. Contact us to arrange a drop-off.",
    },
  },
  {
    slug: "healthcare-afghanistan",
    title: "Healthcare for Afghanistan",
    summary:
      "Medical equipment collected from donors across Canada and shipped to hospitals and clinics in underserved regions of Afghanistan.",
    region: "afghanistan",
    status: "launching",
    focus: ["Medical equipment", "Logistics", "Trusted local partners"],
    overview: [
      "Hospitals and clinics in underserved regions of Afghanistan face critical shortages of basic medical equipment. At the same time, usable equipment in Canada is often retired or stored unused.",
      "AWF's Health Equipment Collection and Donation Initiative connects the two. We gather equipment from individuals, clinics and organizations across Canada, handle the logistics, and work with trusted partners on the ground to make sure it reaches the facilities and patients who need it most.",
    ],
    audience:
      "Hospitals, clinics and patients in underserved regions of Afghanistan, and Canadian donors with medical equipment to give.",
    offerings: {
      heading: "How it works",
      items: [
        {
          title: "Collect",
          description:
            "We gather used and unused medical equipment and supplies donated by individuals, clinics and organizations across Canada.",
        },
        {
          title: "Coordinate",
          description:
            "We safely package, document and ship equipment to healthcare facilities in Afghanistan.",
        },
        {
          title: "Distribute",
          description:
            "Trusted local partners ensure safe, ethical distribution to the facilities most in need.",
        },
      ],
    },
    needs: [
      {
        category: "Diagnostic equipment",
        items: ["Blood pressure monitors", "Glucometers", "Stethoscopes"],
      },
      { category: "Mobility aids", items: ["Wheelchairs", "Crutches", "Walkers"] },
      { category: "Clinical supplies", items: ["Wound care supplies", "Surgical supplies"] },
      { category: "Consumables", items: ["General clinic and hospital consumables"] },
    ],
    action: {
      heading: "Donate equipment or fund a shipment",
      body: "Have medical equipment in working or restorable condition? Get in touch. Financial support covers packaging, shipping and logistics.",
    },
  },
];
