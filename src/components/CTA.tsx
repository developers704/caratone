import DemoButton from "./DemoButton";

export default function CTA() {
  return (
    <section id="demo" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#14101f] via-[#0b0d16] to-[#0c1612] px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />
          <div className="relative animate-rise">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold text-white sm:text-4xl">
              See CaratOne on your own store data
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
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
