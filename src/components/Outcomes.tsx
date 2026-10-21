const STATS = [
  { value: "31", label: "Stores on one console" },
  { value: "20+", label: "Role-permissioned modules" },
  { value: "100K+", label: "Sale lines unified live" },
  { value: "Real-time", label: "POS sync to live dashboard" },
];

export default function Outcomes() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="glass-strong grid grid-cols-2 gap-8 rounded-3xl px-8 py-12 sm:grid-cols-4 sm:px-12">
          {STATS.map((s, i) => (
            <div key={s.label} className="animate-rise text-center" style={{ animationDelay: `${i * 90}ms` }}>
              <p className="font-display text-3xl text-gradient-gold sm:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
