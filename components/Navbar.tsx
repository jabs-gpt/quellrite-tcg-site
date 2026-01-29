"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/20 shadow-lg">
      <div className="w-full px-6 lg:px-12 xl:px-16 py-4 flex justify-between items-center">
        {/* LOGO - LEFT */}
        <button
          onClick={() => scrollToSection("hero")}
          className="hover:opacity-80 transition"
        >
          <img
            src="/images/logo-icon.png"
            alt="Quellrite Logo"
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
          />
        </button>

        {/* DESKTOP MENU - CENTER */}
        <div className="hidden lg:flex items-center gap-10 text-lg xl:text-xl text-white/90 font-medium tracking-wide">
          <a
            href="https://www.notion.com"
            target="_blank"
            className="hover:text-[var(--gold)] transition drop-shadow-lg"
          >
            The Lore
          </a>

          <span className="h-5 w-px bg-white/30" />

          <button
            onClick={() => scrollToSection("simulator")}
            className="hover:text-[var(--gold)] transition drop-shadow-lg"
          >
            Online Simulator
          </button>

          <span className="h-5 w-px bg-white/30" />

          <a
            href="https://www.notion.com"
            target="_blank"
            className="hover:text-[var(--gold)] transition drop-shadow-lg"
          >
            How to Play
          </a>

          <span className="h-5 w-px bg-white/30" />

          <button
            onClick={() => scrollToSection("faq")}
            className="hover:text-[var(--gold)] transition drop-shadow-lg"
          >
            FAQs
          </button>
        </div>

        {/* KICKSTARTER - RIGHT */}
        <a
          href="https://www.kickstarter.com"
          target="_blank"
          className="hidden lg:flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition rounded font-medium shadow-lg"
        >
          <img
            src="/images/kickstarter.png"
            alt="Kickstarter"
            className="w-5 h-5"
          />
          Kickstarter
        </a>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white text-3xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-t border-white/20 shadow-lg">
          <div className="flex flex-col gap-4 px-6 py-6 text-white/90 text-base">
            <a
              href="https://www.notion.com"
              target="_blank"
              className="hover:text-[var(--gold)] transition"
              onClick={() => setIsOpen(false)}
            >
              The Lore
            </a>

            <button
              onClick={() => scrollToSection("simulator")}
              className="text-left hover:text-[var(--gold)] transition"
            >
              Play Online
            </button>

            <a
              href="https://www.notion.com"
              target="_blank"
              className="hover:text-[var(--gold)] transition"
              onClick={() => setIsOpen(false)}
            >
              How to Play
            </a>

            <button
              onClick={() => scrollToSection("faq")}
              className="text-left hover:text-[var(--gold)] transition"
            >
              FAQs
            </button>

            <a
              href="https://www.kickstarter.com"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition rounded w-fit font-medium"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/images/kickstarter.png"
                alt="Kickstarter"
                className="w-5 h-5"
              />
              Kickstarter
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
