"use client";

import Reveal from "@/app/components/animations/Reveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-10 md:scroll-mt-28 md:py-12">
      <div className="mx-auto max-w-5xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            About Me
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-8 text-lg leading-relaxed text-zinc-300">
            I am Immaculate Chepkirui, a software developer and QA engineer
            who enjoys building
            things that work well for real people. I build web applications
            with React, .NET, Django, and Node.js, and I test them carefully
            so problems are found early. I also have a background in UI and UX
            design, which helps me think about how a person will actually use
            what I build.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            I am moving into user support, where I help people get unstuck
            with software, answer their questions in plain words, and write
            clear guides so the same problems do not come up again.
          </p>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-lg leading-relaxed text-zinc-400">
            Outside work, I enjoy bowling, watching F1 races, and exploring
            hidden gems.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
