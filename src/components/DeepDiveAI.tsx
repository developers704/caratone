import { CheckCircle2, Sparkles, Mic } from "lucide-react";

const POINTS = [
  "Introduces as the CaratOne assistant — never a third-party assistant brand — across chat and voice.",
  "Section-aware: knows the current page, active filters, and loaded report.",
  "Tool calling into sales, calendar, email, stores, and documents — not a chat window bolted on.",
  "Confirms before every send or sensitive write — built for an executive's trust, not a demo.",
];

export default function DeepDiveAI() {
  return (
    <section id="intelligence" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 animate-rise [animation-delay:120ms] lg:order-1">
            <div className="absolute -inset-8 -z-10 rounded-[2.5rem] bg-violet/10 blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-2xl shadow-[0_30px_70px_-30px_rgba(15,23,42,0.2)]">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet">
                    <Sparkles className="h-3 w-3 text-white" />
                  </span>
                  <p className="text-xs font-semibold text-slate-900">CaratOne Assistant</p>
                </div>
                <Mic className="h-4 w-4 text-slate-500" />
              </div>
              <div className="space-y-4 p-5">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-100 px-4 py-2.5 text-xs text-slate-600">
                  How did Meridian Mall do today compared to last Saturday?
                </div>
                <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-violet/20 bg-violet/[0.06] px-4 py-3 text-xs leading-relaxed text-slate-600">
                  Meridian Mall did{" "}
                  <span className="font-mono text-teal">$18,420</span> today,
                  up <span className="text-gold-soft">+12.4%</span> vs. the same
                  Saturday last year. Category A and Category B led the
                  department mix. Want me to open the Sales Dashboard filtered
                  to this store?
                </div>
                <div className="flex gap-2">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] text-slate-500">
                    Open Sales Dashboard
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[10px] text-slate-500">
                    Draft summary email
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <div className="flex gap-1">
                    {[3, 5, 2, 6, 4].map((h, i) => (
                      <span
                        key={i}
                        className="w-0.5 rounded-full bg-violet/70"
                        style={{ height: `${h * 3}px` }}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">Listening — ask about any store</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 animate-rise lg:order-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-violet">
              Deep dive — AI &amp; Voice
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              One assistant, every module, real numbers
            </h3>
            <p className="mt-4 text-slate-500">
              Chat and realtime voice share the same tool-calling architecture —
              opening the right screen, reading the loaded report, and speaking
              from the exact intelligence layer behind the dashboard.
            </p>
            <ul className="mt-7 space-y-3.5">
              {POINTS.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-slate-500">
                  <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-violet" strokeWidth={1.8} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
