import { Gem } from "lucide-react";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Sales Dashboard", href: "#modules" },
      { label: "Inventory", href: "#modules" },
      { label: "Price Calculator", href: "#modules" },
      { label: "AI Chat & Voice", href: "#intelligence" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Security & Roles", href: "#security" },
      { label: "Tech Stack", href: "#stack" },
      { label: "Discounting", href: "#modules" },
      { label: "Data Analyst", href: "#modules" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      {
        label: "Contact",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=demo@caratone.ai&su=Demo%20request%20%E2%80%94%20CaratOne",
      },
      { label: "Request a Demo", href: "#demo" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-100 py-16">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy">
                <Gem className="h-4.5 w-4.5 text-white" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg text-slate-900">
                Carat<span className="text-gold-soft">One</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              The AI executive platform for multi-location retail.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-slate-500 transition-colors hover:text-slate-600"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center border-t border-slate-100 pt-8">
          <p className="text-xs text-slate-500">
            © 2026 CaratOne. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
