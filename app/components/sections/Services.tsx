"use client";

import Reveal from "@/app/components/animations/Reveal";

const services = [
  {
    title: "Frontend Development",
    description: "Responsive, high-performance web interfaces using React & Next.js.",
  },
  {
    title: "Backend Systems",
    description: "Scalable APIs using Django REST Framework and Node-based services.",
  },
  {
    title: "AI & ML Solutions",
    description: "Data-driven models for prediction, classification, and automation.",
  },
  {
    title: "UI/UX Design",
    description: "Clean, user-centered interfaces with strong product thinking.",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and native mobile applications with modern UX.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">

        <Reveal>
          <h2 className="text-4xl font-bold md:text-6xl">
            Services
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={i}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:scale-[1.02]">
                
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 opacity-0 blur-xl transition group-hover:opacity-100" />

                <div className="relative">
                  <h3 className="text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400">
                    {service.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}