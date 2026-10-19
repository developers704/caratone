import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Net sales equal the full CSV total — repairs, SPO, and memos stay in, nothing is quietly cleaned away.",
  "Multi-filter by store, department, design, vendor, class, subclass, paycode, and salesperson.",
  "Top Vendor Models ranked by quantity, with photos, on-hand rollup, and SKU-level drill-down.",
  "Whole-cost margin engine — leadership sees true cost, the floor never sees wholesale.",
];

export default function DeepDiveSales() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
              Deep dive — Sales
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
              The operational heart of the business
            </h3>
            <p className="mt-4 text-slate-400">
              Fed by real POS sales and payment exports — not demo numbers. Filter
              by store, date, pay method, or salesperson, and watch rankings,
              paycodes, and YoY compare update instantly.
            </p>
            <ul className="mt-7 space-y-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal" strokeWidth={1.8} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-teal/10 blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-2xl shadow-[0_30px_90px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
                <p className="text-xs font-semibold text-white">Store Sales</p>
                <span className="rounded-md bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">
                  Live
                </span>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center gap-2">
                  {["All stores", "All employees", "All departments"].map((f) => (
                    <span
                      key={f}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] text-slate-400"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="space-y-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Top Vendor Models
                  </p>
                  {[
                    { name: "ER-LGE+RBC2.00", dept: "Earrings · Novello Collection", val: "$26,995" },
                    { name: "EVEBS050VK5W0", dept: "Earrings · Ultimate-Value", val: "$3,299" },
                    { name: "UKPH000035-1", dept: "Gold Chain · D/C Rope", val: "$20,497" },
                  ].map((r) => (
                    <div
                      key={r.name}
                      className="flex items-center justify-between rounded-lg bg-white/[0.02] px-3 py-2.5"
                    >
                      <div>
                        <p className="font-mono text-[11px] text-slate-200">{r.name}</p>
                        <p className="text-[10px] text-slate-500">{r.dept}</p>
                      </div>
                      <p className="font-mono text-xs text-gold-soft">{r.val}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { l: "Net Sales", v: "$329,222" },
                    { l: "Qty Sold", v: "410" },
                    { l: "Avg Sale", v: "$803" },
                  ].map((k) => (
                    <div key={k.l} className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
                      <p className="text-[9px] uppercase tracking-wider text-slate-500">{k.l}</p>
                      <p className="mt-1 font-mono text-sm text-white">{k.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
