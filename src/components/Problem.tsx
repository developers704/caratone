import { FileWarning, Scale, Route, MessageSquareWarning } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PROBLEMS = [
  {
    icon: FileWarning,
    title: "POS data is huge and messy",
    body: "Daily exports mix repairs, financing memos, split salesperson rows, and payment legs that must reconcile to the cent.",
  },
  {
    icon: Scale,
    title: "Margin isn't in one column",
    body: "Whole-cost rules — UV gold, diamond divisors, fixed SKUs — have to beat raw CSV profit before leadership can trust it.",
  },
  {
    icon: Route,
    title: "Stores need movement, not spreadsheets",
    body: "On-hand by store, sell-through velocity, and who should donate stock for transfers — not another static export.",
  },
  {
    icon: MessageSquareWarning,
    title: "The floor needs instant answers",
    body: "SKU lookup, customer offer vs. cost floor, financing surcharges, and manager discount tiers — in seconds, not spreadsheets.",
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The problem"
          title="Jewelry retail runs on data that fights back"
          description="High-SKU inventory, financing-heavy tickets, and dozens of stores generate more data than any team can read by hand — let alone act on same-day."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="card-hover glass animate-rise rounded-2xl p-6"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                <p.icon className="h-5 w-5 text-rose" strokeWidth={1.8} />
              </div>
              <h3 className="mt-5 text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
