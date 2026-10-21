"use client";

import { useState } from "react";
import { BarChart3, Boxes, Calculator, ShieldCheck, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    n: "01",
    icon: BarChart3,
    eyebrow: "Sales",
    title: "See every location,\nin one live view.",
    body: "Filter by store, date, category, or salesperson. Rankings, paycodes, and YoY compare update as sales happen — not the next morning.",
  },
  {
    n: "02",
    icon: Boxes,
    eyebrow: "Inventory",
    title: "Know what to move,\nbefore it's urgent.",
    body: "Ranked transfer suggestions between locations, full on-hand snapshots, and automatic cost rollups that never strip a store's last unit.",
  },
  {
    n: "03",
    icon: Calculator,
    eyebrow: "Pricing",
    title: "Price with confidence\non the floor.",
    body: "Instant cost-floor calculations, payment-method surcharges, and manager discount tiers — without exposing wholesale cost to staff.",
  },
  {
    n: "04",
    icon: ShieldCheck,
    eyebrow: "Compliance",
    title: "Catch overages\nbefore the audit does.",
    body: "Discount and financing packages are checked against payment ceilings automatically, flagged the moment they don't add up.",
  },
  {
    n: "05",
    icon: Sparkles,
    eyebrow: "AI",
    title: "Ask, don't dig.\nGet answers, not reports.",
    body: "A built-in assistant that reads your live data, opens the right screen, and drafts the follow-up — in chat or by voice.",
  },
];

export default function WhyCaratOne() {
  const [active, setActive] = useState(0);
  const item = ITEMS[active];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Why CaratOne"
          title="Everything your business needs to run itself"
          description="Five systems, one intelligence layer. Step through what each one does for an executive team on the move."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="flex flex-row gap-2 overflow-x-auto pb-2 lg:col-span-2 lg:flex-col lg:gap-2 lg:overflow-visible lg:pb-0">
            {ITEMS.map((it, i) => (
              <button
                key={it.n}
                onClick={() => setActive(i)}
                className={`group flex shrink-0 items-center gap-4 rounded-xl border px-4 py-3.5 text-left transition-all lg:shrink ${
                  i === active
                    ? "border-gold-soft/40 bg-gold-soft/[0.07] shadow-[0_6px_16px_-10px_rgba(201,154,74,0.35)]"
                    : "border-slate-100 bg-slate-50 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    i === active ? "text-gold-soft" : "text-slate-500"
                  }`}
                >
                  {it.n}
                </span>
                <it.icon
                  className={`h-4 w-4 shrink-0 ${
                    i === active ? "text-gold-soft" : "text-slate-500"
                  }`}
                  strokeWidth={1.8}
                />
                <span
                  className={`whitespace-nowrap text-sm font-medium lg:whitespace-normal ${
                    i === active ? "text-slate-900" : "text-slate-500"
                  }`}
                >
                  {it.eyebrow}
                </span>
              </button>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:p-10 lg:col-span-3">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <span className="font-mono text-xs text-slate-500">
              {item.n} / 05
            </span>
            <h3 className="mt-4 whitespace-pre-line font-display text-2xl font-semibold text-slate-900 sm:text-3xl">
              {item.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-500">
              {item.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
