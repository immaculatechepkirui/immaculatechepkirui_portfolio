"use client";

import Reveal from "@/app/components/animations/Reveal";

const skills = [
  "Frontend Web",
  "Frontend Mobile",
  "Backend Development",
  "AI & ML",
  "UI/UX Design",
  "Product Management",
  "Quality Assurance",
  "Data Structures & Algorithms",
  "Graphic Design",
  "Devops",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-5xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Skills
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={i}>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-300 backdrop-blur-xl transition hover:scale-105">
                {skill}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}