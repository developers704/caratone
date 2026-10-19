import { ShieldCheck, Lock, Eye, KeyRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    icon: Lock,
    title: "Session-based auth",
    body: "JWT-cookie sessions, individual logins per user — no shared passwords on the floor.",
  },
  {
    icon: KeyRound,
    title: "Granular permissions",
    body: "sales_dashboard, price_calculator, discounting, data_analyst, hr_sales, vendor_info, and more — keyed per role.",
  },
  {
    icon: Eye,
    title: "Row-level UX hiding",
    body: "Vendor columns, CP margin, and wholesale cost hidden for floor staff — visible only where policy allows.",
  },
  {
    icon: ShieldCheck,
    title: "Guarded API routes",
    body: "Every permission is mirrored at the API layer — not just a hidden link in the UI.",
  },
];

const ROLES = [
  { name: "Admin", desc: "Full platform, roles, and user administration." },
  { name: "Owner / Executive", desc: "Company-wide sales, discount risk, briefings." },
  { name: "District Manager", desc: "Store-scoped sales and calculator, cost-limited." },
  { name: "Store Leadership", desc: "Inventory cost, transfers, margin on vendor models." },
  { name: "HR", desc: "Attendance and employee sales views." },
  { name: "Employee", desc: "Sales dashboard — no wholesale or cost exposure." },
];

export default function Security() {
  return (
    <section id="security" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Security & roles"
          title="Built for a real org chart"
          description="Not a single shared password — permissions that mirror how a multi-store jewelry operator actually works, down to the API route."
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-3">
            {PILLARS.map((p, i) => (
              <div
                key={p.title}
                className="card-hover glass animate-rise rounded-2xl p-6"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10">
                  <p.icon className="h-5 w-5 text-teal" strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-sm font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.body}</p>
              </div>
            ))}
          </div>

          <div className="glass-strong animate-rise rounded-2xl p-6 lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Permission matrix
            </p>
            <div className="mt-4 space-y-1">
              {ROLES.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.03]"
                >
                  <span className="shrink-0 rounded-md bg-white/[0.05] px-2.5 py-1 text-[10px] font-semibold text-slate-200">
                    {r.name}
                  </span>
                  <span className="text-right text-[11px] text-slate-500">{r.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
