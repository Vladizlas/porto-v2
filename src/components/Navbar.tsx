"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#051424]/80 backdrop-blur-md">

      <div className="mx-auto flex h-16 max-w-1200px items-center justify-between px-6">

        {/* Logo */}
        <a
          href="#"
          className="font-mono text-sm font-bold tracking-tighter text-[#7bd0ff]"
        >
          Irfan Nabilla Arifin
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 md:flex">

          <a
            href="#"
            className="rounded px-3 py-2 text-[#c6c6cd] transition hover:bg-white/5 hover:text-[#7bd0ff]"
          >
            Home
          </a>

          <a
            href="#projects"
            className="rounded px-3 py-2 text-[#c6c6cd] transition hover:bg-white/5 hover:text-[#7bd0ff]"
          >
            Projects
          </a>

          <a
            href="#about"
            className="rounded px-3 py-2 text-[#c6c6cd] transition hover:bg-white/5 hover:text-[#7bd0ff]"
          >
            About
          </a>

          <a
            href="#contact"
            className="rounded px-3 py-2 text-[#c6c6cd] transition hover:bg-white/5 hover:text-[#7bd0ff]"
          >
            Contact
          </a>

        </div>

        {/* Resume */}
        <button
          className="
            hidden rounded
            bg-[#7bd0ff]
            px-4 py-2
            font-mono text-xs font-bold
            text-[#0f172a]
            transition
            hover:opacity-90
            md:block
          "
        >
          Resume
        </button>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl text-[#7bd0ff] md:hidden"
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-[#0d1c2d] px-6 py-5 md:hidden">

          <div className="flex flex-col gap-4">

            {[
              ["Home", "#"],
              ["Projects", "#projects"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-[#c6c6cd] transition hover:text-[#7bd0ff]"
              >
                {label}
              </a>
            ))}

          </div>

        </div>
      )}

    </nav>
  );
}