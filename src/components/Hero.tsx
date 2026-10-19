import { ArrowRight, Sparkles, TrendingUp, Store, Boxes } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center animate-rise">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-slate-300">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Powering multi-store jewelry retail with live AI intelligence
          </div>

          <h1 className="mt-7 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-6xl">
            The AI executive platform
            <br />
            built for{" "}
            <span className="text-gradient-gold italic">jewelry retail.</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base text-slate-400 sm:text-lg">
            CaratOne turns daily POS exports into live sales intelligence, floor
            pricing, inventory transfers, and compliance — with a built-in AI
            assistant that knows every store, SKU, and ticket.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-gold-soft to-gold px-6 py-3.5 text-sm font-semibold text-[#1a1306] shadow-[0_12px_32px_-10px_rgba(212,175,106,0.7)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              See the Platform
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#modules"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-white/[0.06]"
            >
              Explore Modules
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Store className="h-3.5 w-3.5 text-teal" /> 31 stores, one console
            </span>
            <span className="flex items-center gap-1.5">
              <Boxes className="h-3.5 w-3.5 text-violet" /> Daily CSV → live dashboard
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-gold" /> Role-based, audit-ready
            </span>
          </div>
        </div>

        {/* Hero product frame */}
        <div className="relative mx-auto mt-20 max-w-5xl animate-rise [animation-delay:150ms]">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-gradient-to-tr from-violet/10 via-teal/10 to-gold/10 blur-3xl" />
          <div className="glass-strong animate-float overflow-hidden rounded-2xl shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">
                ai-assistant.caratone.app/sales
              </span>
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/5 p-px sm:grid-cols-4">
              {[
                { label: "Net Sales", value: "$329,222", change: "+15.0% YoY", color: "text-teal" },
                { label: "Unique Transactions", value: "203", change: "Distinct tickets", color: "text-violet" },
                { label: "Qty Sold", value: "410", change: "Pieces sold", color: "text-gold-soft" },
                { label: "Avg. Sale Value", value: "$803", change: "Net ÷ pieces", color: "text-rose" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-[#0a0b13] p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500">
                    {kpi.label}
                  </p>
                  <p className={`mt-2 font-display text-2xl sm:text-3xl ${kpi.color}`}>
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">{kpi.change}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-px bg-white/5 p-px sm:grid-cols-3">
              {["Paycodes", "Top Stores", "Top Departments"].map((col, i) => (
                <div key={col} className="bg-[#0a0b13] p-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {col}
                  </p>
                  <div className="space-y-2.5">
                    {[0, 1, 2].map((r) => (
                      <div key={r} className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">
                          {i === 0
                            ? ["IDDEAL", "CC", "SYNC"][r]
                            : i === 1
                              ? ["VJ-PALM", "VJ-MOD", "DBC-STOCK"][r]
                              : ["LADYS RING", "GOLD CHAIN", "PENDANT"][r]}
                        </span>
                        <span className="font-mono text-slate-200">
                          {i === 0
                            ? ["$135,836", "$128,398", "$49,917"][r]
                            : i === 1
                              ? ["$26,392", "$24,802", "$20,457"][r]
                              : ["$116,145", "$54,199", "$36,512"][r]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
