import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-20">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div
            className="animate-rise inline-flex items-center rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-500"
            style={{ animationDelay: "0ms" }}
          >
            One System Solution
          </div>

          <h1
            className="animate-rise mt-7 text-balance text-5xl font-semibold leading-[1.1] tracking-tight text-slate-800 sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "90ms" }}
          >
Every Store, One Live View
            <br />
            No Spreadsheets Required
          </h1>

          <p
            className="animate-rise mt-7 max-w-2xl text-balance text-base leading-relaxed text-slate-600 sm:text-lg"
            style={{ animationDelay: "180ms" }}
          >
            CaratOne is an AI-powered operations system for multi-location
            retail. It syncs live with your POS — so your sales, pricing, and
            inventory run themselves, and your time goes into the business.
          </p>

          <div
            className="animate-rise mt-9"
            style={{ animationDelay: "270ms" }}
          >
            <a
              href="#demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-12px_rgba(15,23,42,0.5)] active:translate-y-0 active:scale-[0.98]"
            >
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Hero product frame */}
        <div
          className="animate-rise relative mx-auto mt-16 max-w-5xl"
          style={{ animationDelay: "380ms" }}
        >
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-5 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/60" />
              <span className="ml-3 font-mono text-[11px] text-slate-500">
                ai-assistant.caratone.ai/sales
              </span>
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-200 p-px sm:grid-cols-4">
              {[
                { label: "Net Sales", value: "$214,680", change: "+12.4% YoY" },
                { label: "Unique Transactions", value: "168", change: "Distinct tickets" },
                { label: "Qty Sold", value: "327", change: "Pieces sold" },
                { label: "Avg. Sale Value", value: "$656", change: "Net ÷ pieces" },
              ].map((kpi) => (
                <div key={kpi.label} className="bg-white p-5 sm:p-6">
                  <p className="text-[11px] uppercase tracking-wider text-slate-500">
                    {kpi.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-slate-800 sm:text-3xl">
                    {kpi.value}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">{kpi.change}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-px bg-slate-200 p-px sm:grid-cols-3">
              {["Paycodes", "Top Stores", "Top Departments"].map((col, i) => (
                <div key={col} className="bg-white p-5">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    {col}
                  </p>
                  <div className="space-y-2.5">
                    {[0, 1, 2].map((r) => (
                      <div key={r} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          {i === 0
                            ? ["CARD", "CASH", "FINANCE"][r]
                            : i === 1
                              ? ["Meridian Mall", "Lakeside Plaza", "Harbor View"][r]
                              : ["Category A", "Category B", "Category C"][r]}
                        </span>
                        <span className="font-mono text-slate-600">
                          {i === 0
                            ? ["$91,240", "$78,560", "$32,110"][r]
                            : i === 1
                              ? ["$18,420", "$16,980", "$14,250"][r]
                              : ["$72,340", "$38,900", "$24,610"][r]}
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
