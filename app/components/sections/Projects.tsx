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
    <section id="projects" className="px-6 py-20 md:py-24">
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
              className={`rounded-full border px-5 py-2 text-sm transition ${active === cat
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

                {/* Project Links */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Website ↗
                    </a>
                  )}

                  {project.links?.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Frontend ↗
                    </a>
                  )}

                  {project.links?.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Backend ↗
                    </a>
                  )}

                  {project.links?.mobile && (
                    <a
                      href={project.links.mobile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Mobile ↗
                    </a>
                  )}

                  {project.links?.design && (
                    <a
                      href={project.links.design}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Figma ↗
                    </a>
                  )}

                  {project.links?.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:bg-white/10"
                    >
                      Docs ↗
                    </a>
                  )}
                </div>

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