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
      lead: "A non-profit established in 2020 and based in Hamilton, Ontario, getting medicines and medical supplies to people in need, with a focus on Afghanistan.",
    },
    story: { eyebrow: "Our story", title: "One clear purpose" },
    missionLabel: "Mission",
    visionLabel: "Vision",
    values: { eyebrow: "Our values", title: "How we work" },
    leadership: { eyebrow: "Leadership", title: "Who leads AWF" },
    cta: {
      title: "Work with us",
      body: "Whether you represent an institution, a company, a supplier or a healthcare organization, we'd welcome a conversation about supporting our work.",
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
            "Our first annual report will follow our first full year of operations, with results measured against the goals published on this site.",
        },
        {
          title: "Financial accountability",
          description:
            "We will publish how funds are used across medicines and supplies, shipping and administration.",
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

  ourWork: {
    intro: {
      eyebrow: "Our work",
      title: "Medicines and supplies, from around the world to people in need",
      lead: "How we get medicines, medical supplies and equipment to the hospitals, clinics and patients who need them most, with a focus on Afghanistan.",
    },
    story: {
      eyebrow: "Why it matters",
      title: "Medicine only helps when it arrives",
      paragraphs: [
        "In Afghanistan, many hospitals and clinics struggle to get basic medicines, supplies and equipment. Patients go without treatment that would be routine elsewhere.",
        "AWF connects that need with supply. We source quality medicines and medical supplies from around the world, take care of shipping and documentation, and work with trusted partners on the ground, so supplies reach the facilities and patients who need them most.",
      ],
    },
    howWeWork: {
      eyebrow: "How we work",
      title: "From need to delivery",
      lead: "Four steps, each one documented, so donors and partners can see where their support went.",
    },
    supplies: {
      eyebrow: "What we supply",
      title: "What we source and accept",
      lead: "Medicines are bought from licensed suppliers. Medical equipment and unopened supplies can be donated in working condition.",
    },
    cta: {
      title: "Donate supplies or fund a shipment",
      body: "Have equipment or supplies to give, or want to cover the cost of medicines and shipping? Get in touch and we'll arrange it.",
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
      lead: "AWF works with institutions, companies, diplomatic missions, suppliers and healthcare organizations to get medicines and medical supplies to people in need, with a focus on Afghanistan.",
    },
    why: {
      eyebrow: "Why partner with AWF",
      title: "What partners can expect",
      items: [
        {
          title: "Clear, published goals",
          description: "Our goals are public, and we report against them openly.",
        },
        {
          title: "Every shipment documented",
          description:
            "Partners see what was sent, where it went and what it cost, and results are published in our annual report.",
        },
        {
          title: "Supplies matched to need",
          description:
            "We source what hospitals and clinics ask for, not what happens to be available.",
        },
        {
          title: "Trusted partners on the ground",
          description:
            "Local partners in Afghanistan make sure supplies reach the facilities and patients they were sent for.",
        },
      ],
    },
    ways: {
      eyebrow: "Ways to partner",
      title: "Find the right partnership",
      items: [
        {
          title: "Shipment sponsor",
          description:
            "Fund medicines, supplies or the cost of a shipment, with dedicated reporting on where it went.",
          href: "/our-work",
          linkLabel: "See how we work",
        },
        {
          title: "Supplier & in-kind partner",
          description:
            "Manufacturers, distributors and healthcare organizations can supply medicines, equipment and consumables.",
          href: "/our-work#what-we-supply",
          linkLabel: "What we supply",
        },
        {
          title: "Institutional & diplomatic partner",
          description:
            "Collaborate on humanitarian and healthcare support for communities in Afghanistan.",
        },
        {
          title: "Healthcare partner",
          description:
            "Hospitals and clinics in Afghanistan can work with us to receive the supplies their patients need.",
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
      lead: "Donate supplies, fund medicines, volunteer or partner with us. Every role helps get medical care to people who need it.",
    },
    ways: {
      eyebrow: "Ways to help",
      title: "Choose how to get involved",
      items: [
        {
          title: "Donate equipment & supplies",
          description:
            "Medical equipment and unopened supplies in working condition, for hospitals and clinics in Afghanistan.",
          href: "/our-work#what-we-supply",
          linkLabel: "What we supply",
        },
        {
          title: "Fund medicines",
          description: "Financial support pays for medicines, supplies and the cost of shipping.",
          href: "/donate",
          linkLabel: "Ways to give",
        },
        {
          title: "Volunteer",
          description: "Help with packing, documentation, logistics or outreach.",
          href: "/contact",
          linkLabel: "Contact us to volunteer",
        },
        {
          title: "Partner or sponsor",
          description: "Sponsor a shipment or supply medicines, with dedicated reporting.",
          href: "/partner",
          linkLabel: "Partner with us",
        },
      ],
    },
    roles: {
      eyebrow: "Volunteer roles",
      title: "Where volunteers make the biggest difference",
      items: [
        {
          title: "Logistics coordinator",
          description: "Help collect, pack, document and ship supplies.",
        },
        {
          title: "Healthcare professional",
          description:
            "Advise on what to source, and check that donated equipment is safe and in working condition.",
        },
        {
          title: "Outreach & fundraising",
          description: "Connect us with donors, suppliers and partners in your community.",
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
          title: "Fund medicines & shipping",
          description:
            "Contact us to make a financial contribution toward medicines, supplies and the cost of shipping them.",
          href: "/contact",
          linkLabel: "Contact us",
        },
        {
          title: "Donate equipment & supplies",
          description:
            "Medical equipment and unopened supplies in working condition, for hospitals and clinics in Afghanistan.",
          href: "/our-work#what-we-supply",
          linkLabel: "What we supply",
        },
        {
          title: "Sponsor a shipment",
          description: "Fund a full shipment, with dedicated reporting on where it went.",
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
      lead: "We'd love to hear from you, whether you want to donate, supply, volunteer or partner with us.",
    },
    reasons: {
      eyebrow: "How we can help",
      title: "Common reasons to reach out",
      items: [
        {
          title: "Donate supplies",
          description: "Medical equipment and supplies for healthcare facilities in Afghanistan.",
        },
        {
          title: "Fund medicines",
          description: "Financial support for medicines, supplies and shipping.",
        },
        {
          title: "Volunteer",
          description: "In logistics, healthcare or outreach.",
        },
        {
          title: "Partner with us",
          description: "As a sponsor, supplier, institution or healthcare organization.",
        },
      ],
    },
  },

  faq: {
    intro: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      lead: "Answers to the questions donors, suppliers and partners ask most.",
    },
    items: [
      {
        question: "What does AWF do?",
        answer:
          "We source medicines, medical supplies and equipment from around the world and deliver them to hospitals, clinics and patients in need, with a focus on Afghanistan.",
      },
      {
        question: "Where do the supplies go?",
        answer:
          "To hospitals, clinics and patients in Afghanistan, delivered through trusted local partners. We send what facilities tell us they need most.",
      },
      {
        question: "Where do the medicines come from?",
        answer:
          "Medicines are bought from licensed suppliers around the world. Medical equipment and unopened supplies can also be donated.",
      },
      {
        question: "What can I donate?",
        answer:
          "Medical equipment and unopened supplies in working condition, such as diagnostic equipment, mobility aids and wound care supplies. Our work page lists what we supply.",
      },
      {
        question: "Why thalassemia?",
        answer:
          "Thalassemia is an inherited blood disorder that needs regular, lifelong treatment. Supporting patients' access to that treatment is one of our focus areas.",
      },
      {
        question: "Can I get a tax receipt?",
        answer:
          "Not yet. AWF is not currently able to issue official tax receipts. We will update this answer as soon as that changes.",
      },
      {
        question: "How is my support used?",
        answer:
          "Support pays for medicines, supplies and the cost of shipping them. We document every shipment, and results will be published in our annual report.",
      },
      {
        question: "How can I volunteer?",
        answer:
          "We welcome help with logistics, healthcare advice and outreach. Contact us and tell us how you'd like to help.",
      },
      {
        question: "Where are you based?",
        answer:
          "Our head office is in Hamilton, Ontario, Canada. Our work is focused on Afghanistan.",
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
    updated: "November 2026",
    sections: [
      {
        heading: "What we collect",
        paragraphs: [
          "We only collect the information you choose to send us, for example your name, email address, phone number and message when you contact us about donating, volunteering or partnering.",
          "This website does not require an account and does not collect payment information.",
        ],
      },
      {
        heading: "How we use it",
        paragraphs: [
          "We use your information to respond to you and to coordinate donations, volunteering or partnerships. We do not sell or rent personal information.",
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
