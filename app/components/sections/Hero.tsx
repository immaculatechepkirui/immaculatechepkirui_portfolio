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
          Software Engineer • Graphic Designer • Product Designer • QA Engineer •  AI/ML Engineer 
        </motion.p>
      </div>
    </section>
  );
}