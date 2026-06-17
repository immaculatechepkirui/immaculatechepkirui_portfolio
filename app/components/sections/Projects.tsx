"use client";

import { useState } from "react";
import { projects } from "@/app/data/projects";

const categories = ["All", "Mobile", "AI", "Web"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold md:text-6xl">
          Selected Projects
        </h2>

        <p className="mt-4 text-zinc-400">
          Mobile, AI, and Web systems I’ve built
        </p>

        {/* Filters */}
        <div className="mt-10 flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === cat
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-[1.02]"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative">
                <span className="text-xs text-zinc-500">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-zinc-400">
                  {project.description}
                </p>

                {/* hover line */}
                <div className="mt-6 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}