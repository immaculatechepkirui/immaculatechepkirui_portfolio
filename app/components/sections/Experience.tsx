"use client";

import Reveal from "@/app/components/animations/Reveal";

type Experience = {
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

const experiences: Experience[] = [
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
      "Supporting the development and maintenance of AMREF's ESRC platform as part of the in-house software team.",
    bullets: [
      "Explore the existing system architecture and codebases to understand how the platform's modules fit together.",
      "Contribute to feature development and bug fixes across the platform.",
      "Debug and test changes before they are released.",
      "Participate in User Acceptance Testing (UAT) with stakeholders ahead of releases.",
      "Write and maintain technical documentation for the work I deliver.",
      "Work in Agile cycles alongside the in-house development team.",
    ],
    tools: [
      "C#",
      ".NET",
      "REST APIs",
      "JavaScript",
      "TypeScript",
      "React",
      "HTML5",
      "CSS3",
      "Sass",
      "SQL Server",
      "Git",
      "GitHub",
      "Visual Studio",
      "VS Code",
    ],
    skills: [
      "Software development",
      "Debugging",
      "Software testing",
      "User Acceptance Testing (UAT)",
      "Codebase and architecture analysis",
      "Technical documentation",
      "Agile workflows",
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

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-12 md:py-16">
      <div className="mx-auto max-w-5xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-12 space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={i}>
              <div className="relative border-l border-white/10 pl-6">

                {/* dot */}
                <div
                  className={`absolute -left-1 top-2 h-2 w-2 rounded-full ${
                    exp.current ? "bg-violet-500" : "bg-zinc-600"
                  }`}
                />

                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold">
                    {exp.role}
                  </h3>

                  {exp.current && (
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-violet-300">
                      Current
                    </span>
                  )}
                </div>

                <p className="text-sm text-zinc-400">
                  {exp.company}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {exp.period} · {exp.location}
                </p>

                {exp.description && (
                  <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                    {exp.description}
                  </p>
                )}

                {exp.bullets && (
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-sm leading-relaxed text-zinc-400"
                      >
                        <span className="absolute left-0 top-[9px] h-1 w-1 rounded-full bg-violet-500/60" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {exp.tools && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {exp.skills && (
                  <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                    <span className="text-zinc-400">Skills: </span>
                    {exp.skills.join(" · ")}
                  </p>
                )}

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
