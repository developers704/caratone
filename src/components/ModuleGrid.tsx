import {
  BarChart3,
  Newspaper,
  Boxes,
  Brain,
  MessagesSquare,
  Mail,
  CalendarDays,
  MapPin,
  Calculator,
  ShieldCheck,
  DatabaseZap,
  Users,
  Search,
  ImageIcon,
  Share2,
  Contact2,
  Settings,
  Mic,
  BookOpenText,
  UserCog,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const MODULES = [
  { icon: BarChart3, name: "Sales Dashboard", route: "/sales", desc: "Net sales, filters, rankings, Top Products, paycodes, YoY." },
  { icon: BookOpenText, name: "The Edition", route: "/brief", desc: "Executive narrative brief — week, month, season vs. last year." },
  { icon: Boxes, name: "Inventory", route: "/inventory", desc: "Transfer suggestions plus full on-hand by store." },
  { icon: Brain, name: "Intelligence", route: "/intelligence", desc: "Stores, departments, designs, forecast, and issue signals." },
  { icon: MessagesSquare, name: "AI Chat", route: "/chat", desc: "Natural language assistant with tools and section context." },
  { icon: Newspaper, name: "News & Markets", route: "/news", desc: "Industry news, live metals, curated feeds." },
  { icon: Mail, name: "E-Mails", route: "/valliani-mail", desc: "Branded inbox assistant — summaries and draft replies." },
  { icon: CalendarDays, name: "Calendar & Tasks", route: "/calendar", desc: "Meetings, reminders, and tasks via assistant." },
  { icon: MapPin, name: "Stores Map & Info", route: "/stores", desc: "Map, hours, reviews, and store-to-store distance." },
  { icon: Calculator, name: "Price Calculator", route: "/calculator", desc: "SKU pricing, customer offer, and payment methods." },
  { icon: ShieldCheck, name: "Discounting", route: "/discounting", desc: "Discount policy vs. payment ceiling, flagged automatically." },
  { icon: DatabaseZap, name: "Data Analyst", route: "/analyst", desc: "Query live synced data with SQL, chart, and explore." },
  { icon: Users, name: "HR Management", route: "/hr", desc: "Attendance and employee sales, scoped by role." },
  { icon: Search, name: "SKU Lookup", route: "/sku-lookup", desc: "Fast SKU search, role-gated for the floor." },
  { icon: ImageIcon, name: "Image Generation", route: "/images", desc: "Create, compose, and enhance product visuals." },
  { icon: Share2, name: "Social", route: "/social", desc: "Instagram-oriented marketing and ops workflows." },
  { icon: Contact2, name: "Contacts", route: "/contacts", desc: "Business contact directory for call and message prep." },
  { icon: UserCog, name: "Users & Roles", route: "/admin/roles", desc: "Employees and a granular permission matrix." },
  { icon: Mic, name: "Voice", route: "/voice", desc: "Realtime voice assistant with tool execution." },
  { icon: Settings, name: "Settings", route: "/settings", desc: "Profile, integrations, and connection status." },
];

export default function ModuleGrid() {
  return (
    <section id="modules" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Platform"
          title="Twenty modules. One executive console."
          description="Every surface your business needs — sales, inventory, pricing, compliance, HR, and AI — built on the same permissioned data layer."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MODULES.map((m, i) => (
            <div
              key={m.name}
              className="card-hover glass group animate-rise relative overflow-hidden rounded-2xl p-5"
              style={{ animationDelay: `${(i % 8) * 60}ms` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/10 transition-colors group-hover:ring-gold/30">
                  <m.icon className="h-4.5 w-4.5 text-slate-300 transition-colors group-hover:text-gold-soft" strokeWidth={1.7} />
                </div>
                <span className="font-mono text-[10px] text-slate-600">{m.route}</span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-white">{m.name}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
