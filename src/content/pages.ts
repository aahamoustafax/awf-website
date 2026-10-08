import type { SitePages } from "./types";

/**
 * Copy for every standalone page. Hrefs are site paths without the language prefix.
 * Only state facts the foundation has confirmed; anything pending is worded as such.
 */
export const pages: SitePages = {
  programs: {
    intro: {
      eyebrow: "Our programs",
      title: "Programs that build independence",
      lead: "Four programs, from weekend classrooms in Hamilton to humanitarian support in Afghanistan. Each one meets a concrete need and is designed for lasting impact, not dependency.",
    },
  },

  about: {
    intro: {
      eyebrow: "About us",
      title: "Who we are",
      lead: "A non-profit founded in Afghanistan and now building programs in Hamilton, Ontario, for newcomer families and the communities we began with.",
    },
    story: { eyebrow: "Our story", title: "From Afghanistan to Hamilton" },
    missionLabel: "Mission",
    visionLabel: "Vision",
    values: { eyebrow: "Our values", title: "How we work" },
    leadership: { eyebrow: "Leadership", title: "Who leads AWF" },
    cta: {
      title: "Work with us",
      body: "Whether you represent an institution, a company or a community organization, we'd welcome a conversation about supporting our programs.",
      action: { label: "Partner with us", href: "/partner" },
    },
  },

  governance: {
    intro: {
      eyebrow: "Governance & reports",
      title: "Transparency is part of the work",
      lead: "Partners and donors should be able to see exactly how AWF is run and how support is used. This page is where we publish it.",
    },
    commitments: {
      eyebrow: "Our commitments",
      title: "What we publish",
      items: [
        {
          title: "Annual report",
          description:
            "Our first annual report will follow our first full year of programs, with results measured against the goals published on this site.",
        },
        {
          title: "Financial accountability",
          description:
            "We will publish how funds are used across programs, logistics and administration.",
        },
        {
          title: "Leadership",
          description: "AWF is led by its founder and president, Nasratullah Rahim.",
          href: "/about",
          linkLabel: "About us",
        },
        {
          title: "Policies",
          description:
            "Our privacy and accessibility statements are published on this site. Further policies will be added here as they are adopted.",
          href: "/privacy",
          linkLabel: "Privacy statement",
        },
        // TODO(foundation): add registration details once confirmed.
        {
          title: "Registration details",
          description: "We will publish our registration details here once confirmed.",
        },
      ],
    },
    cta: {
      title: "Questions about how we work?",
      body: "We're happy to share more detail with partners and donors.",
      action: { label: "Contact us", href: "/contact" },
    },
  },

  whoWeServe: {
    intro: {
      eyebrow: "Who we serve",
      title: "People with the fewest opportunities",
      lead: "Our programs are open to people of every background, with a focus on newcomers, refugees and those who had little access to education.",
    },
    groups: {
      eyebrow: "Our communities",
      title: "Four groups at the heart of our work",
      items: [
        {
          title: "Newcomer & refugee children",
          description:
            "Weekend academic support in Hamilton to build confidence and ease integration into Canadian schools, plus essentials like food, clothing and school supplies.",
          href: "/programs/children-education",
          linkLabel: "Children's Education",
        },
        {
          title: "Women & girls",
          description:
            "Skills training and education designed to promote independence and opportunity.",
          href: "/programs/skills-livelihoods",
          linkLabel: "Skills & Livelihoods",
        },
        {
          title: "Seniors & men",
          description: "Practical vocational training to support employment and entrepreneurship.",
          href: "/programs/skills-livelihoods",
          linkLabel: "Skills & Livelihoods",
        },
        {
          title: "Communities in Afghanistan",
          description:
            "Humanitarian and healthcare support, including medical equipment for hospitals and clinics in underserved regions.",
          href: "/programs/healthcare-afghanistan",
          linkLabel: "Healthcare for Afghanistan",
        },
      ],
    },
    base: {
      eyebrow: "Based in Hamilton",
      title: "Rooted locally, reaching further",
      paragraphs: [
        "AWF is headquartered in Hamilton, Ontario, with programs serving the local newcomer community and extending humanitarian support to Afghanistan.",
        "Founded by Nasratullah Rahim, the organization works with a commitment to transparency, community-led programming and long-term impact.",
      ],
    },
    cta: {
      title: "Know a family who could use support?",
      body: "Schools, social workers and community organizations can refer families to our programs.",
      action: { label: "Contact us", href: "/contact" },
    },
  },

  partner: {
    intro: {
      eyebrow: "Partner with us",
      title: "Partner with a foundation built for lasting impact",
      lead: "AWF works with institutions, companies, diplomatic missions and community organizations to launch and sustain programs for newcomer families in Canada and communities in Afghanistan.",
    },
    why: {
      eyebrow: "Why partner with AWF",
      title: "What partners can expect",
      items: [
        {
          title: "Clear, published goals",
          description: "Every program has public targets, and we report against them openly.",
        },
        {
          title: "Transparent reporting",
          description:
            "Partners receive regular updates on how their support is used, and results are published in our annual report.",
        },
        {
          title: "Community-led programs",
          description:
            "Programs are designed with the families we serve, by people who share their languages and experiences.",
        },
        {
          title: "Reach across two countries",
          description:
            "Your support can strengthen newcomer families in Canada and communities in Afghanistan.",
        },
      ],
    },
    ways: {
      eyebrow: "Ways to partner",
      title: "Find the right partnership",
      items: [
        {
          title: "Program sponsor",
          description:
            "Fund a program, a classroom, a training track or a shipment of medical equipment, with dedicated reporting on outcomes.",
          href: "/programs",
          linkLabel: "See our programs",
        },
        {
          title: "In-kind partner",
          description:
            "Provide food, clothing, school supplies, hygiene products or medical equipment.",
          href: "/programs/kids-essentials-bank",
          linkLabel: "Most-needed items",
        },
        {
          title: "Institutional & diplomatic partner",
          description:
            "Collaborate on newcomer integration in Canada or humanitarian support in Afghanistan.",
        },
        {
          title: "Community partner",
          description:
            "Schools, social workers and community organizations can refer families and co-host activities.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "From first conversation to final report",
      items: [
        {
          title: "Conversation",
          description: "We learn about your priorities and share where support is needed most.",
        },
        {
          title: "Proposal",
          description:
            "We prepare a short proposal covering goals, budget and how results will be reported.",
        },
        { title: "Agreement", description: "We agree on scope, timeline and reporting together." },
        {
          title: "Reporting",
          description: "You receive regular updates and a final report on outcomes.",
        },
      ],
    },
    cta: {
      title: "Start a conversation",
      body: "Contact our team to discuss a partnership. We'll follow up to arrange a time to talk.",
      action: { label: "Contact our team", href: "/contact" },
    },
  },

  getInvolved: {
    intro: {
      eyebrow: "Get involved",
      title: "There's a place for you in this work",
      lead: "Teach, train, donate, refer a family or enroll your child. Every role helps families build a stable future.",
    },
    ways: {
      eyebrow: "Ways to help",
      title: "Choose how to get involved",
      items: [
        {
          title: "Volunteer",
          description:
            "Teach a weekend class, lead a training track or help coordinate distributions.",
          href: "/contact",
          linkLabel: "Contact us to volunteer",
        },
        {
          title: "Enroll a child",
          description:
            "Weekend classes for children from newcomer and refugee families in Hamilton.",
          href: "/programs/children-education",
          linkLabel: "Children's Education",
        },
        {
          title: "Join a training track",
          description:
            "Tailoring, cooking, barbering, computer skills, and life skills and financial literacy.",
          href: "/programs/skills-livelihoods",
          linkLabel: "Skills & Livelihoods",
        },
        {
          title: "Donate essentials",
          description: "Food, clothing, school supplies and hygiene items for children aged 1–14.",
          href: "/programs/kids-essentials-bank",
          linkLabel: "Most-needed items",
        },
        {
          title: "Donate medical equipment",
          description:
            "Equipment in working or restorable condition, for hospitals and clinics in Afghanistan.",
          href: "/programs/healthcare-afghanistan",
          linkLabel: "What we accept",
        },
        {
          title: "Refer a family",
          description:
            "Schools, social workers and community organizations can refer families to the Kids Essentials Bank.",
          href: "/contact",
          linkLabel: "Make a referral",
        },
      ],
    },
    roles: {
      eyebrow: "Volunteer roles",
      title: "Where volunteers make the biggest difference",
      items: [
        {
          title: "Weekend teacher",
          description:
            "Basic science, Islamic studies, or heritage languages such as Arabic, Dari and Pashto.",
        },
        {
          title: "Skills trainer",
          description:
            "Tailoring, cooking, barbering, computer skills, or life skills and financial literacy.",
        },
        {
          title: "Coordinator",
          description: "Help organize distributions, equipment collection and logistics.",
        },
      ],
    },
    cta: {
      title: "Ready to help?",
      body: "Tell us how you'd like to get involved and we'll be in touch.",
      action: { label: "Contact us", href: "/contact" },
    },
  },

  donate: {
    intro: {
      eyebrow: "Donate",
      title: "Support our work",
      lead: "Online giving is launching soon. Until then, here is how you can give today, and every contribution is reported transparently.",
    },
    ways: {
      eyebrow: "Ways to give",
      title: "How you can give today",
      items: [
        {
          title: "Donate essentials",
          description:
            "Food, clothing, school supplies and hygiene items for children in Hamilton.",
          href: "/programs/kids-essentials-bank",
          linkLabel: "See the most-needed list",
        },
        {
          title: "Donate medical equipment",
          description:
            "Equipment in working or restorable condition, for hospitals and clinics in Afghanistan.",
          href: "/programs/healthcare-afghanistan",
          linkLabel: "What we accept",
        },
        {
          title: "Financial support",
          description:
            "Contact us to make a financial contribution to our programs, or to cover shipping and logistics for medical equipment.",
          href: "/contact",
          linkLabel: "Contact us",
        },
        {
          title: "Sponsor a program",
          description: "Fund a program, a classroom or a shipment, with dedicated reporting.",
          href: "/partner",
          linkLabel: "Partner with us",
        },
      ],
    },
    receipts: {
      title: "About tax receipts",
      body: "AWF is not yet able to issue official tax receipts for donations. We will update this page as soon as that changes.",
    },
    cta: {
      title: "Have a question about giving?",
      body: "We're happy to talk through how your support will be used.",
      action: { label: "Contact us", href: "/contact" },
    },
  },

  contact: {
    intro: {
      eyebrow: "Contact",
      title: "Get in touch",
      lead: "We'd love to hear from you, whether you want to enroll a child, donate, volunteer or partner with us.",
    },
    reasons: {
      eyebrow: "How we can help",
      title: "Common reasons to reach out",
      items: [
        {
          title: "Enroll a child",
          description: "Weekend classes at the Azan Center for Child Programs in Hamilton.",
        },
        {
          title: "Donate equipment",
          description: "Medical equipment for healthcare facilities in Afghanistan.",
        },
        {
          title: "Volunteer",
          description: "As a teacher, trainer or coordinator.",
        },
        {
          title: "Support our work",
          description: "Financial support, sponsorship or partnership.",
        },
      ],
    },
  },

  faq: {
    intro: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      lead: "Answers to the questions families, donors and partners ask most.",
    },
    items: [
      {
        question: "Who can attend the weekend classes?",
        answer:
          "Children from newcomer and refugee families in Hamilton who would benefit from support alongside their regular Canadian schooling. Contact us to enroll.",
      },
      {
        question: "When do classes run?",
        answer:
          "Saturdays and Sundays, with a morning shift from 8:00 AM to 12:00 PM and an afternoon shift from 1:00 PM to 4:00 PM.",
      },
      {
        question: "What do children learn?",
        answer:
          "Basic science, Islamic studies, and heritage languages including Arabic, Dari and Pashto.",
      },
      {
        question: "Who can join the skills training?",
        answer:
          "Women, men and seniors from newcomer, refugee and underserved communities in Hamilton who want practical skills for employment or to start a small business.",
      },
      {
        question: "What items can I donate?",
        answer:
          "Food, clothing, school supplies and hygiene products for children aged 1–14. The Kids Essentials Bank page lists the items we need most.",
      },
      {
        question: "What medical equipment do you accept?",
        answer:
          "Equipment and supplies in working or restorable condition, including diagnostic equipment, mobility aids, wound care and surgical supplies, and general clinic consumables.",
      },
      {
        question: "Can I get a tax receipt?",
        answer:
          "Not yet. AWF is not currently able to issue official tax receipts. We will update this answer as soon as that changes.",
      },
      {
        question: "How is my support used?",
        answer:
          "Support goes to our programs in Hamilton and to collecting and shipping medical equipment to Afghanistan. We report how funds are used, and results will be published in our annual report.",
      },
      {
        question: "How can I volunteer?",
        answer:
          "We welcome volunteer teachers, skills trainers and coordinators. Contact us and tell us how you'd like to help.",
      },
      {
        question: "Where are you based?",
        answer:
          "Hamilton, Ontario, Canada. We run programs in Hamilton and support communities in Afghanistan.",
      },
    ],
    cta: {
      title: "Still have a question?",
      body: "Get in touch and we'll be glad to help.",
      action: { label: "Contact us", href: "/contact" },
    },
  },

  // TODO(foundation): have the privacy statement reviewed before launch.
  privacy: {
    intro: {
      eyebrow: "Privacy",
      title: "Privacy statement",
      lead: "How Azan Welfare Foundation collects, uses and protects your personal information.",
    },
    updated: "October 2026",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "We only collect the information you choose to send us, for example your name, email address, phone number and message when you contact us about enrolling, donating, volunteering or partnering.",
          "This website does not require an account and does not collect payment information.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your information to respond to you and to coordinate enrollment, donations, volunteering or partnerships. We do not sell or rent personal information.",
        ],
      },
      {
        heading: "Cookies and tracking",
        paragraphs: [
          "This website does not use advertising cookies or third-party tracking. If we add privacy-respecting analytics in the future, we will update this statement first.",
        ],
      },
      {
        heading: "Sharing and storage",
        paragraphs: [
          "We share information only with service providers needed to operate (for example, email delivery), and only as needed for that purpose. We keep information only as long as needed to respond to you and meet our obligations.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "You can ask to see, correct or delete the personal information we hold about you. Contact us using the details on our contact page.",
        ],
      },
    ],
  },

  accessibility: {
    intro: {
      eyebrow: "Accessibility",
      title: "Accessibility statement",
      lead: "We want everyone to be able to use this website, including people with disabilities.",
    },
    updated: "October 2026",
    sections: [
      {
        heading: "Our commitment",
        paragraphs: [
          "We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA, in line with Ontario's Accessibility for Ontarians with Disabilities Act (AODA).",
        ],
      },
      {
        heading: "What we've done",
        paragraphs: [
          "The site can be used with a keyboard and screen reader, text meets contrast requirements, images have text descriptions, and animations are turned off when your device asks for reduced motion.",
          "Every page is checked automatically for accessibility issues before it is published.",
        ],
      },
      {
        heading: "Feedback and alternate formats",
        paragraphs: [
          "If something on this site is hard to use, or you need information in another format, please contact us. We'll do our best to help.",
        ],
      },
    ],
  },
};

export type PageKey = keyof SitePages;
