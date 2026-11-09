// Single source of truth for the work history. The Experience section
// renders it, and the page metadata derives the current role from it so
// the two can never drift apart.
export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  current?: boolean;
  description?: string;
  bullets?: string[];
  tools?: string[];
  skills?: string[];
};

export const experiences: Experience[] = [
  {
    role: "User Support Specialist",
    company: "Grantbook",
    period: "Oct 2026 - Present",
    location: "Remote · Kenya",
    current: true,
    description:
      "I provide Tier 1 helpdesk support for a global philanthropic foundation's Fluxx grants management system, working with Grantbook's support team.",
    bullets: [
      "Triage and investigate tickets in ServiceNow: partner and staff access, new user accounts, report submission errors, workflow routing and configuration requests.",
      "Troubleshoot sign-in and access issues across SSO (Microsoft Entra ID), user profiles and roles, organisation links and project connections.",
      "Follow and apply standard operating procedures (SOPs), document clear resolution notes, and escalate to L2 with evidence.",
      "Identify configuration gaps and permission issues by comparing records and themes and using user impersonation in a pre-production environment.",
      "Run daily queue triage: recategorise misfiled tickets and identify duplicate incidents to speed up team response.",
    ],
    tools: [
      "Fluxx",
      "ServiceNow",
      "Microsoft 365",
      "Windows 365 Cloud PC",
      "Slack",
      "Harvest",
      "Coda",
      "Google Workspace",
    ],
    skills: [
      "Ticket triage",
      "Access & identity troubleshooting (SSO, roles, permissions)",
      "Workflow & approval processes",
      "SOP-based support",
      "Root-cause investigation",
      "Technical documentation",
      "Stakeholder communication",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "AMREF Health Africa",
    period: "Sep 2026 - Present",
    location: "Remote",
    current: true,
    description:
      "Supporting development, testing and maintenance of the Ethics and Scientific Review Committee (ESRC) Portal, an enterprise platform that manages research ethics review and protocol workflows.",
    bullets: [
      "Work within an existing React application, examining system architecture, role-based functionality, API integrations and the protocol management lifecycle.",
      "Implement frontend improvements with JavaScript, React and Material UI, including fixing step-numbering inconsistencies in the invoice request flow and improving dark-mode styling across the FAQ and search components.",
      "Lead a six-member User Acceptance Testing team, coordinating test execution, monitoring progress and following up on issues, while serving as Administrator during testing.",
      "Test protocol workflows end to end: submissions, renewals, amendments, combined renewal and amendment cases, and the 90-day renewal window.",
      "Run role-based and edge-case testing across the Investigator, Secretariat, Administrator and Reviewer journeys.",
      "Investigate application build failures and dependency issues across npm, Yarn and out-of-sync lockfiles.",
      "Collaborate through Git and GitHub using feature branches, descriptive commits, pull requests and upstream synchronisation.",
      "Document development work, testing outcomes and technical progress to support ongoing platform maintenance.",
    ],
    tools: [
      "JavaScript",
      "React",
      "Material UI",
      "HTML5",
      "CSS3",
      "Sass",
      "REST APIs",
      "Swagger / OpenAPI",
      "Git",
      "GitHub",
      "npm",
      "Yarn",
      "Node.js",
    ],
    skills: [
      "Frontend development",
      "Functional and role-based testing",
      "Workflow testing",
      "User Acceptance Testing (UAT)",
      "UAT coordination and reporting",
      "Edge-case testing",
      "Debugging and dependency troubleshooting",
      "Branch and pull request workflows",
      "Technical documentation",
    ],
  },
  {
    role: "Graphic & UI/UX Designer (Internship)",
    company: "Electricity Sector Association of Kenya (ESAK)",
    period: "Feb 2026 - Apr 2026",
    location: "Kenya · Hybrid",
    description:
      "Managed the visual identity and digital presence of the association during the C&I Conference 2026.",
    bullets: [
      "Designed branding materials including posters, sponsor graphics, and promotional content.",
      "Created motion content for the association's social media channels.",
      "Maintained the WordPress website, keeping speaker profiles and event programs up to date.",
      "Rebuilt the brand identity system using Figma and Adobe tools.",
      "Contributed to design direction, informed by industry exposure in renewable energy finance workshops.",
    ],
    tools: [
      "Figma",
      "Adobe Creative Suite",
      "WordPress",
    ],
    skills: [
      "Brand identity design",
      "Visual identity systems",
      "Graphic design",
      "Motion graphics",
      "Social media content",
      "Event branding",
      "Web content management",
    ],
  },
];

/** Roles currently held, newest first, as ordered in the list above. */
export const currentRoles = experiences.filter((role) => role.current);

/**
 * Resolves a current employer by name. Looking the name up rather than
 * repeating it means renaming or ending a role fails the build instead of
 * quietly leaving a stale employer in the page description.
 */
function currentEmployer(company: string): string {
  const match = currentRoles.find((role) => role.company === company);
  if (!match) {
    throw new Error(
      `No current experience entry for "${company}". ` +
        "Update descriptionRoles in app/data/experience.ts to match.",
    );
  }
  return match.company;
}

/**
 * How the page description names the current roles, in the order it names
 * them. The wording is shorter than the formal job titles above because it
 * doubles as the text people search for.
 */
export const descriptionRoles = [
  { role: "software engineer", company: currentEmployer("AMREF Health Africa") },
  { role: "user support specialist", company: currentEmployer("Grantbook") },
];
