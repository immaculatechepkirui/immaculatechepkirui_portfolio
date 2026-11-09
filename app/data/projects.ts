type ProjectLinks = {
  website?: string;
  frontend?: string;
  backend?: string;
  mobile?: string;
  design?: string;
  docs?: string;
};

export type Project = {
  title: string;
  category: string;
  featured?: boolean;
  description: string;
  links?: ProjectLinks;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "Jumia Kenya QA Portfolio",
    category: "QA",
    featured: true,
    description:
      "Designed and executed a complete end-to-end Quality Assurance project for Jumia Kenya. Produced 50 exploratory test cases across 10 functional areas, authored a formal test plan, documented production bugs, automated critical user journeys using Playwright (Python), validated APIs with Postman, performed Lighthouse performance audits, and packaged the complete QA workflow into a production-ready GitHub repository.",
    links: {
      backend: "https://github.com/immaculatechepkirui/jumia_qa_portfolio",
      docs:
        "https://github.com/immaculatechepkirui/jumia_qa_portfolio#readme",
    },
    tech: [
      "Playwright",
      "Python",
      "Pytest",
      "Postman",
      "Lighthouse",
      "Git",
    ],
  },

  {
    title: "Planta",
    category: "AI",
    featured: true,
    description:
      "AI-powered farming assistant for crop monitoring, yield prediction, and intelligent seed recommendations.",
    links: {
      frontend: "https://github.com/immaculatechepkirui/planta-frontend",
      website:
        "https://github.com/immaculatechepkirui/planta-informational-website",
      design:
        "https://www.figma.com/design/JR1Fm7y7iBNhcBnE5xmUe1/Planta",
    },
    tech: [
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
    ],
  },

  {
    title: "Library Management System",
    category: "Web",
    description:
      "Production-grade Django REST API for managing books, members, borrowing, overdue fines, and library operations using Docker and PostgreSQL.",
    links: {
      backend: "https://github.com/immaculatechepkirui/library_system",
    },
    tech: [
      "Django",
      "Django REST",
      "Python",
      "PostgreSQL",
      "Docker",
    ],
  },

  {
    title: "Kilimanjaro Fuels",
    category: "Mobile",
    description:
      "Mobile loyalty application featuring rewards, promotions, station locator, user profiles, and customer engagement experiences.",
    links: {
      design:
        "https://www.figma.com/design/47W8XP8GvozulDCcrwsBq7/KFC--Fuel-Company",
    },
    tech: [
      "Figma",
      "UI Design",
      "UX Research",
      "Prototyping",
    ],
  },

  {
    title: "CraftCrest",
    category: "Web",
    featured: true,
    description:
      "Marketplace platform connecting Kenyan artisans with buyers through secure payments, logistics tracking, and M-Pesa integration.",
    links: {
      website: "https://craftcrestapp.vercel.app/",
      design:
        "https://www.figma.com/design/7ccb3RQK9UpQ4ykpAgCPf4/CRAFT-CREST",
      docs:
        "https://github.com/immaculatechepkirui/CraftCrest-Technical-Documentation",
    },
    tech: [
      "React",
      "Django",
      "PostgreSQL",
      "M-Pesa API",
      "Figma",
    ],
  },

  {
    title: "CoopConnect",
    category: "Mobile",
    description:
      "Digital platform helping cooperative farmers access agricultural training through gamified rewards, web services, and mobile experiences.",
    links: {
      website: "https://coopconnect.netlify.app/",
    },
    tech: [
      "Flutter",
      "Django",
      "REST API",
      "Gamification",
    ],
  },
];