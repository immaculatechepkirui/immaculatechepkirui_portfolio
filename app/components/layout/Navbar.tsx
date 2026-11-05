"use client";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 max-w-[calc(100vw-1rem)] -translate-x-1/2 md:top-6">
      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 shadow-lg backdrop-blur-2xl sm:gap-5 sm:px-6 sm:py-3 md:gap-10 md:px-8 md:py-4">
        <div className="text-sm font-semibold tracking-wider md:text-base">
          IC
        </div>

        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="whitespace-nowrap text-xs text-zinc-400 transition hover:scale-105 hover:text-white sm:text-[13px] md:text-sm"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
