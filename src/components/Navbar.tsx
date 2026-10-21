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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass-strong shadow-[0_8px_30px_-16px_rgba(15,23,42,0.25)]" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-navy">
              <Gem className="h-4.5 w-4.5 text-white" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg tracking-wide text-slate-900">
              Carat<span className="text-gold-soft">One</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 transition-colors hover:text-slate-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="text-sm text-slate-500 transition-colors hover:text-slate-900"
            >
              Contact
            </a>
            <a
              href="#demo"
              className="rounded-xl bg-navy px-4 py-2 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.5)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Request a Demo
            </a>
          </div>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 lg:hidden"
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
                  className="rounded-lg px-3 py-2.5 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-navy px-4 py-2.5 text-center text-sm font-semibold text-white"
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
