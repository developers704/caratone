import DemoButton from "./DemoButton";

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_0%,rgba(201,154,74,0.08)_0%,transparent_60%),radial-gradient(50%_45%_at_85%_100%,rgba(14,165,160,0.08)_0%,transparent_60%)]" />
          <div className="relative animate-rise">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              See CaratOne on your own store data
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-500">
              Connect your POS and watch CaratOne turn it into sales
              intelligence, pricing, and transfers — live.
            </p>
            <div id="contact" className="mt-9 flex items-center justify-center">
              <DemoButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
