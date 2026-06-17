"use client";

import Reveal from "@/app/components/animations/Reveal";

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-5xl">
        
        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            About Me
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-lg leading-relaxed text-zinc-300">
            I am a Software Engineer focused on building systems that sit at
            the intersection of technology, design, and real-world impact.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            My work spans AI systems, mobile applications, and full-stack web
            platforms. I care deeply about performance, user experience, and
            solving problems that matter in sectors like agriculture,
            logistics, and digital infrastructure.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg leading-relaxed text-zinc-500">
            Beyond engineering, I think in terms of product systems — how users
            interact with tools, how data flows through systems, and how design
            influences decision-making.
          </p>
        </Reveal>

      </div>
    </section>
  );
}