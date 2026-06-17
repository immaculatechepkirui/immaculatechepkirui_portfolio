"use client";

const links = ["About", "Projects", "Services", "Contact"];

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-10 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-2xl shadow-lg">
        <div className="font-semibold tracking-wider">
          IC
        </div>

        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm text-zinc-400 transition hover:text-white hover:scale-105"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}