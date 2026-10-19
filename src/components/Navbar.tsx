"use client";

import { useEffect, useState } from "react";
import { Gem, Menu, X } from "lucide-react";

const LINKS = [
  { href: "#modules", label: "Modules" },
  { href: "#product", label: "Product" },
  { href: "#intelligence", label: "AI" },
  { href: "#security", label: "Security" },
  { href: "#stack", label: "Stack" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-gold-soft via-gold to-[#8a6a2e] shadow-[0_0_24px_-4px_rgba(212,175,106,0.6)]">
              <Gem className="h-4.5 w-4.5 text-[#1a1306]" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg tracking-wide text-white">
              Carat<span className="text-gradient-gold">One</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              Contact
            </a>
            <a
              href="#demo"
              className="rounded-xl bg-gradient-to-r from-gold-soft to-gold px-4 py-2 text-sm font-semibold text-[#1a1306] shadow-[0_8px_24px_-8px_rgba(212,175,106,0.7)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Request a Demo
            </a>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4.5 w-4.5" /> : <Menu className="h-4.5 w-4.5" />}
          </button>
        </div>

        {open && (
          <div className="glass-strong mt-2 rounded-2xl p-4 lg:hidden animate-rise">
            <nav className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-gold-soft to-gold px-4 py-2.5 text-center text-sm font-semibold text-[#1a1306]"
              >
                Request a Demo
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
