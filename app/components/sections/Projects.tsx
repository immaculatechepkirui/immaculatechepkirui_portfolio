"use client";

import { useState } from "react";
import { projects } from "@/app/data/projects";

const categories = ["All", "AI", "Web", "Mobile", "QA"];

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
          Mobile, AI, Web, and Quality Assurance projects I've built and tested.
        </p>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap gap-4">
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

        {/* Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-300 hover:scale-[1.02]"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute right-0 top-0">
                    <span className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-xs font-semibold text-black shadow-lg">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Category */}
                <span className="text-xs uppercase tracking-widest text-violet-400">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-2xl font-semibold">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {project.description}
                </p>

                {/* Technology Badges */}
                {project.tech && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300 transition hover:border-violet-400 hover:bg-violet-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project Links */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.links?.website && (
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-violet-500 hover:bg-violet-500/10"
                    >
                      🌐 Website
                    </a>
                  )}

                  {project.links?.frontend && (
                    <a
                      href={project.links.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-cyan-500 hover:bg-cyan-500/10"
                    >
                      💻 Frontend
                    </a>
                  )}

                  {project.links?.backend && (
                    <a
                      href={project.links.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-green-500 hover:bg-green-500/10"
                    >
                      ⚙️ Backend
                    </a>
                  )}

                  {project.links?.mobile && (
                    <a
                      href={project.links.mobile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-orange-500 hover:bg-orange-500/10"
                    >
                      📱 Mobile
                    </a>
                  )}

                  {project.links?.design && (
                    <a
                      href={project.links.design}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-pink-500 hover:bg-pink-500/10"
                    >
                      🎨 Figma
                    </a>
                  )}

                  {project.links?.docs && (
                    <a
                      href={project.links.docs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 px-3 py-1 text-xs transition hover:border-yellow-500 hover:bg-yellow-500/10"
                    >
                      📄 Docs
                    </a>
                  )}
                </div>

                {/* Hover Line */}
                <div className="mt-6 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}