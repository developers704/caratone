export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">
        {eyebrow}
      </span>
      <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-500 ${align === "center" ? "max-w-xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
