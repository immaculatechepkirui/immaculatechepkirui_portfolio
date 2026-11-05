"use client";

import Reveal from "@/app/components/animations/Reveal";

type SkillGroup = {
  title: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Engineering & AI",
    skills: [
      "Frontend Web",
      "Frontend Mobile",
      "Backend Development",
      "AI & ML",
      "DevOps",
      "Data Structures & Algorithms",
    ],
  },
  {
    title: "Design & Product",
    skills: [
      "UI/UX Design",
      "Graphic Design",
      "Product Management",
    ],
  },
  {
    title: "Quality & Support",
    skills: [
      "Quality Assurance",
      "User Support",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 px-6 py-10 md:scroll-mt-28 md:py-12">
      <div className="mx-auto max-w-5xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 space-y-10">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <div>
                <div className="flex items-center gap-4">
                  <h3 className="text-sm font-medium uppercase tracking-widest text-violet-400">
                    {group.title}
                  </h3>
                  <div className="h-[1px] flex-1 bg-white/10" />
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300 backdrop-blur-xl transition hover:scale-105 hover:border-violet-500/40"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
