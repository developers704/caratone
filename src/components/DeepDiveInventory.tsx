import { CheckCircle2 } from "lucide-react";

const POINTS = [
  "Suggested transfers ranked Rush, High, and Fill — never strips a store's last piece.",
  "Donor stores need spare stock and slow sell-through before they're surfaced at all.",
  "Full on-hand snapshot by store, with Individual Cost for leadership and Whole Cost elsewhere.",
  "On-hand syncs continuously from the POS — whole cost fills automatically from the rules engine.",
];

export default function DeepDiveInventory() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
              Deep dive — Inventory
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
              From static export to actionable transfers
            </h3>
            <p className="mt-4 text-slate-400">
              Keep one piece at every selling store and move slow surplus where
              it sells — turning a live on-hand feed into a ranked restock and
              inter-store transfer list.
            </p>
            <ul className="mt-7 space-y-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-soft" strokeWidth={1.8} />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative animate-rise [animation-delay:120ms]">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-gold/10 blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-2xl shadow-[0_30px_90px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
                <p className="text-xs font-semibold text-white">Inventory · Transfers</p>
                <span className="rounded-md bg-rose/10 px-2 py-0.5 text-[10px] font-medium text-rose">
                  3 Rush
                </span>
              </div>
              <div className="divide-y divide-white/5">
                {[
                  { sku: "SKU-A1024", desc: "Best-selling item, Category A", need: "Meridian Mall", from: "Harbor View", qty: "7 pcs" },
                  { sku: "SKU-B2210", desc: "Flagship item, Category B", need: "Meridian Mall", from: "Lakeside Plaza", qty: "2 pcs" },
                  { sku: "SKU-C3087", desc: "Seasonal item, Category C", need: "Oakwood Center", from: "Harbor View", qty: "3 pcs" },
                ].map((r) => (
                  <div key={r.sku} className="flex items-center gap-3 px-5 py-3.5">
                    <span className="rounded-md bg-rose/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-rose">
                      Rush
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-mono text-[11px] text-slate-200">{r.sku}</p>
                      <p className="truncate text-[10px] text-slate-500">{r.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-slate-400">
                        {r.need} ← {r.from}
                      </p>
                      <p className="font-mono text-[10px] text-gold-soft">{r.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
