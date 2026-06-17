"use client";

import Reveal from "@/app/components/animations/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-4xl text-center">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Reach Me
          </h2>
        </Reveal>

        <Reveal>
          <p className="mt-6 text-zinc-400">
            Have a project, idea, or opportunity? Let's build something impactful.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-center gap-4">
            
            <a
              href="mailto:chepkiruiimmaculatekogo@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm transition hover:scale-105"
            >
              Email Me
            </a>

            <a
              href="https://github.com/immaculatechepkirui"
              target="_blank"
              className="text-sm text-zinc-400 hover:text-white"
            >
              GitHub
            </a> <a
              href="https://www.linkedin.com/in/immaculate-chepkirui-b775b1355"
              target="_blank"
              className="text-sm text-zinc-400 hover:text-white"
            >
              LinkedIn
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  );
}