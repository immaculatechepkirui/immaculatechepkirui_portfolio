"use client";

import Reveal from "@/app/components/animations/Reveal";
import { experiences } from "@/app/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-10 md:scroll-mt-28 md:py-12">
      <div className="mx-auto max-w-5xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-10 space-y-10">
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

                <p className="mt-1 text-xs text-zinc-400">
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
                  <p className="mt-4 text-xs leading-relaxed text-zinc-400">
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
