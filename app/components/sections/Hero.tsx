"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 via-transparent to-transparent" />

      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold md:text-8xl"
        >
          Immaculate
          <br />
          Chepkirui
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
          }}
          className="mt-6 text-xl text-zinc-400"
        >
          Software Engineer • Graphic Designer • Product Designer • QA Engineer • AI/ML Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="relative z-10 mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="/Immaculate_Full_Stack_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            View Resume →
          </a>

          <a
            href="#projects"
            className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-white/10"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}