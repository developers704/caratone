import { FileSpreadsheet, Cpu, LayoutDashboard, Calculator, Boxes, Mic } from "lucide-react";
import SectionHeading from "./SectionHeading";

const OUTPUTS = [
  { icon: LayoutDashboard, label: "Sales Dashboard", color: "text-teal" },
  { icon: Calculator, label: "Price Calculator", color: "text-gold-soft" },
  { icon: Boxes, label: "Inventory & Transfers", color: "text-violet" },
  { icon: Mic, label: "AI Chat & Voice", color: "text-rose" },
];

export default function Solution() {
  return (
    <section id="product" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The solution"
          title="One daily upload. A living operating picture."
          description="Point-of-sale exports flow into a single intelligence layer that every module reads from — so the numbers on the floor match the numbers in the boardroom."
        />

        <div className="relative mt-20">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {/* Input */}
            <div className="glass card-hover flex w-full max-w-xs flex-col items-center rounded-2xl p-6 text-center lg:w-64">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                <FileSpreadsheet className="h-6 w-6 text-slate-300" strokeWidth={1.7} />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">POS CSV Exports</p>
              <p className="mt-1.5 text-xs text-slate-500">
                Sales report, payment transactions, inventory on-hand
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center lg:w-16">
              <svg
                className="h-10 w-10 rotate-90 text-slate-700 lg:h-6 lg:w-10 lg:rotate-0"
                viewBox="0 0 40 24"
                fill="none"
              >
                <path
                  d="M0 12H34M34 12L26 4M34 12L26 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Core */}
            <div className="relative flex w-full max-w-xs flex-col items-center rounded-2xl border border-gold/30 bg-gradient-to-b from-[#19140a] to-[#0b0d16] p-6 text-center shadow-[0_0_60px_-20px_rgba(212,175,106,0.5)] lg:w-64">
              <span className="absolute -top-3 rounded-full bg-gradient-to-r from-gold-soft to-gold px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#1a1306]">
                Core engine
              </span>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 ring-1 ring-gold/30">
                <Cpu className="h-6 w-6 text-gold-soft animate-pulse-dot" strokeWidth={1.7} />
              </div>
              <p className="mt-4 text-sm font-semibold text-white">
                Unified Sales Intelligence
              </p>
              <p className="mt-1.5 text-xs text-slate-500">
                Whole-cost rules, paycode mapping, role-based permissions
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center lg:w-16">
              <svg
                className="h-10 w-10 rotate-90 text-slate-700 lg:h-6 lg:w-10 lg:rotate-0"
                viewBox="0 0 40 24"
                fill="none"
              >
                <path
                  d="M0 12H34M34 12L26 4M34 12L26 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Outputs */}
            <div className="grid w-full max-w-xs grid-cols-2 gap-3 lg:w-72">
              {OUTPUTS.map((o) => (
                <div
                  key={o.label}
                  className="glass card-hover flex flex-col items-center justify-center gap-2 rounded-xl p-4 text-center"
                >
                  <o.icon className={`h-5 w-5 ${o.color}`} strokeWidth={1.8} />
                  <p className="text-[11px] font-medium leading-tight text-slate-300">
                    {o.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
