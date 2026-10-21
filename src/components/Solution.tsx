import { Plug, Cpu, LayoutDashboard, Calculator, Boxes, Mic } from "lucide-react";
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
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="The solution"
          title="Direct live sync. A living operating picture."
          description="CaratOne connects straight into your POS so every module reads from one continuously updated intelligence layer — the numbers on the floor match the numbers in the boardroom, in real time."
        />

        <div className="relative mt-20">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-stretch lg:justify-between lg:gap-4">
            {/* Input */}
            <div className="glass card-hover flex w-full max-w-xs flex-col items-center rounded-2xl p-6 text-center lg:w-64">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 ring-1 ring-slate-200">
                <Plug className="h-6 w-6 text-slate-500" strokeWidth={1.7} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">Live POS Connection</p>
              <p className="mt-1.5 text-xs text-slate-500">
                Sales, payment, and inventory data streamed in real time
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center lg:w-16">
              <svg
                className="h-10 w-10 rotate-90 text-slate-600 lg:h-6 lg:w-10 lg:rotate-0"
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
            <div className="relative flex w-full max-w-xs flex-col items-center rounded-2xl border-2 border-gold-soft/40 bg-white p-6 text-center shadow-[0_16px_36px_-20px_rgba(201,154,74,0.35)] lg:w-64">
              <span className="absolute -top-3 rounded-full bg-gold-soft px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                Core engine
              </span>
              <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft/10 ring-1 ring-gold-soft/25">
                <Cpu className="h-6 w-6 text-gold-soft animate-pulse-dot" strokeWidth={1.7} />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                Unified Sales Intelligence
              </p>
              <p className="mt-1.5 text-xs text-slate-500">
                Whole-cost rules, paycode mapping, role-based permissions
              </p>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center lg:w-16">
              <svg
                className="h-10 w-10 rotate-90 text-slate-600 lg:h-6 lg:w-10 lg:rotate-0"
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
                  <p className="text-[11px] font-medium leading-tight text-slate-500">
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
