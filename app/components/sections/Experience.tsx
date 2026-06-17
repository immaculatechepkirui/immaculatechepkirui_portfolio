"use client";

import Reveal from "@/app/components/animations/Reveal";

const experiences = [
  {
    role: "Graphic & UI/UX Designer (Internship)",
    company: "Electricity Sector Association of Kenya (ESAK)",
    period: "Feb 2026 – Apr 2026",
    location: "Kenya · Hybrid",
    description:
      "Managed visual identity and digital presence during the C&I Conference 2026. Designed branding materials including posters, sponsor graphics, and promotional content. Created motion content for social media and maintained the WordPress website with updated speaker profiles and event programs. Rebuilt the brand identity system using Figma and Adobe tools, and contributed to design direction through industry exposure in renewable energy finance workshops.",
  },
  {
    role: "Freelance Web Developer",
    company: "Gecity Surveys",
    period: "May 2026 – Present",
    location: "Remote",
    description:
      "Developed a fully responsive Next.js website, deployed and currently maintaining and updating the platform. Responsible for ongoing improvements, bug fixes, and feature updates in production.",
  },
  {
    role: "Freelance Graphic Designer & Builder",
    company: "Independent Clients",
    period: "2026",
    location: "Remote",
    description:
      "Designed banners and visual assets for a clean energy association. Worked iteratively using Figma and HTML/CSS prototyping to validate layout decisions. Debugged rendering issues including image loading and CORS-related bugs. After delivery, independently built a Next.js invoice generator tool with TypeScript to automate client billing workflows, including PDF and DOCX export logic.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-20 md:py-24">
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
                <div className="absolute -left-1 top-2 h-2 w-2 rounded-full bg-violet-500" />

                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>

                <p className="text-sm text-zinc-400">
                  {exp.company}
                </p>

                <p className="mt-1 text-xs text-zinc-500">
                  {exp.period} · {exp.location}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {exp.description}
                </p>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}