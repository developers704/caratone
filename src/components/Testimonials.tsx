"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "./SectionHeading";

const QUOTES = [
  {
    quote:
      "We used to wait until the next morning to know how yesterday went across all our locations. Now it's on screen before the register closes.",
    name: "Regional Operations Director",
    org: "12-location specialty retailer",
  },
  {
    quote:
      "The transfer suggestions alone paid for the platform — we stopped sitting on dead stock in stores that never sell it.",
    name: "VP of Merchandising",
    org: "Multi-brand retail group",
  },
  {
    quote:
      "Our floor team stopped guessing at pricing. The calculator gives a straight answer in seconds, every time.",
    name: "District Manager",
    org: "Franchise retail network",
  },
  {
    quote:
      "Permissions finally match how we actually run the business — not a shared login everyone has to trust.",
    name: "Head of IT",
    org: "Private retail holding company",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const q = QUOTES[i];
  const next = () => setI((v) => (v + 1) % QUOTES.length);
  const prev = () => setI((v) => (v - 1 + QUOTES.length) % QUOTES.length);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Trusted on the floor"
          title="Built with operators, not around them"
        />

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="glass-strong rounded-3xl p-8 text-center sm:p-12">
            <Quote className="mx-auto h-8 w-8 text-gold/40" strokeWidth={1.5} />
            <p className="mt-6 font-display text-xl leading-relaxed text-slate-800 sm:text-2xl">
              “{q.quote}”
            </p>
            <div className="mt-7">
              <p className="text-sm font-semibold text-slate-900">{q.name}</p>
              <p className="text-xs text-slate-500">{q.org}</p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:text-slate-900"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs text-slate-500">
              {String(i + 1).padStart(2, "0")} / {String(QUOTES.length).padStart(2, "0")}
            </span>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors hover:text-slate-900"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
