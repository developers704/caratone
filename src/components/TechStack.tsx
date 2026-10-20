import SectionHeading from "./SectionHeading";

const STACK = [
  {
    group: "Framework",
    items: ["Next.js 15 (App Router)", "React 19", "TypeScript"],
  },
  {
    group: "Interface",
    items: ["Tailwind CSS", "Lucide Icons", "Dark executive theme", "PWA"],
  },
  {
    group: "Data",
    items: ["Live POS sync pipelines", "Versioned intelligence store", "DuckDB WASM"],
  },
  {
    group: "AI",
    items: ["OpenAI chat + realtime voice", "Google GenAI", "Tool-calling architecture"],
  },
  {
    group: "Integrations",
    items: ["Google Gmail / Calendar", "IMAP mail parsing", "Leaflet maps"],
  },
  {
    group: "Ops & QA",
    items: ["Vitest rule suites", "Real-time sync pipeline", "Query caching"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Engineering"
          title="Built on a rules engine, not guesswork"
          description="A single source of truth for whole cost, sales totals, and paycode mapping drives the calculator, inventory, and Top Products alike."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STACK.map((s, i) => (
            <div
              key={s.group}
              className="glass card-hover animate-rise rounded-2xl p-6"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gold-soft">
                {s.group}
              </p>
              <ul className="mt-4 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm text-slate-300">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 glass animate-rise rounded-2xl p-5 text-center font-mono text-xs text-slate-500">
          repo · <span className="text-gradient-gold">caratone</span>
        </div>
      </div>
    </section>
  );
}
