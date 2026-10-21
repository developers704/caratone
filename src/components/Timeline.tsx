import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    tag: "Day 1–2",
    title: "Connect your POS",
    body: "We wire the live sync to your point-of-sale and payment systems — no exports, no manual steps.",
  },
  {
    tag: "Day 3–7",
    title: "Roles & rules configured",
    body: "Permissions mapped to your org chart, whole-cost rules tuned to your catalog, stores and users loaded.",
  },
  {
    tag: "Day 10–14",
    title: "Team onboarded",
    body: "Leadership, DMs, and floor staff trained on dashboard, calculator, and the AI assistant.",
  },
  {
    tag: "Live",
    title: "Running on real-time data",
    body: "Sales, inventory, and compliance updating continuously — the floor and the boardroom see the same numbers.",
  },
];

export default function Timeline() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Rollout"
          title="Live in under two weeks"
          description="A guided rollout, not a software project — your team is working inside CaratOne before the first invoice."
        />

        <div className="relative mt-20">
          <div className="absolute left-[18px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-gold/40 via-white/10 to-transparent sm:block" />
          <div className="grid grid-cols-1 gap-8 sm:gap-10">
            {STEPS.map((s, i) => (
              <div key={s.title} className="relative flex gap-6 sm:gap-8">
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-white font-mono text-xs text-gold-soft">
                  {i + 1}
                </div>
                <div className="glass card-hover flex-1 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {s.tag}
                    </span>
                    <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                  </div>
                  <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-slate-500">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
