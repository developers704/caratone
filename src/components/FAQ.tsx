"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FAQS = [
  {
    q: "What kind of businesses is CaratOne built for?",
    a: "Any multi-location retail operation with real-time sales, inventory, and pricing needs — not limited to one industry. The platform's rules engine adapts to your catalog and cost structure.",
  },
  {
    q: "How does CaratOne connect to our POS?",
    a: "We wire a direct live sync to your point-of-sale and payment systems during onboarding, so sales, payments, and inventory reflect in CaratOne continuously — no manual exports.",
  },
  {
    q: "Can we control what each role sees?",
    a: "Yes — permissions are granular down to the API route, not just hidden UI. Cost, margin, and vendor data can be restricted per role, store, or individual user.",
  },
  {
    q: "Does the AI assistant take actions, or just answer questions?",
    a: "Both. It can navigate the app, summarize live reports, and draft emails or calendar items — but always asks for confirmation before sending or writing anything sensitive.",
  },
  {
    q: "How long does rollout take?",
    a: "Most teams are live within two weeks — POS connection, role setup, and team onboarding run in parallel rather than as sequential phases.",
  },
  {
    q: "Is our data isolated from other customers?",
    a: "Yes. Each organization's data, rules, and permissions are fully isolated — nothing is shared or pooled across accounts.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />

        <div className="mt-14 divide-y divide-slate-100 rounded-2xl border border-slate-100">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-sm font-medium text-slate-800 sm:text-base">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-4.5 w-4.5 shrink-0 text-gold-soft transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden px-6 transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                  style={{ display: "grid" }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
