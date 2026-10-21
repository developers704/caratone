const POINTS = [8, 14, 11, 19, 24, 21, 30, 27, 36, 42, 38, 48];

function buildPath(points: number[], w: number, h: number) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const step = w / (points.length - 1);
  return points
    .map((p, i) => {
      const x = i * step;
      const y = h - ((p - min) / (max - min)) * h;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
}

export default function Growth() {
  const w = 560;
  const h = 180;
  const linePath = buildPath(POINTS, w, h);
  const areaPath = `${linePath} L${w},${h} L0,${h} Z`;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="glass-strong grid grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal">
              ROI
            </span>
            <h3 className="mt-5 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">
              Better operations today.
              <br />
              Bigger business tomorrow.
            </h3>
            <p className="mt-4 max-w-md text-slate-500">
              Operators switching to live data typically see faster transfer
              cycles, fewer discount overages, and net sales growth that
              compounds quarter over quarter.
            </p>
            <div className="mt-8 flex gap-10">
              <div>
                <p className="font-display text-3xl text-gradient-gold">+18%</p>
                <p className="mt-1 text-xs text-slate-500">Avg. net sales lift</p>
              </div>
              <div>
                <p className="font-display text-3xl text-gradient-gold">3.2×</p>
                <p className="mt-1 text-xs text-slate-500">Faster stock transfers</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full overflow-visible">
              <defs>
                <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0ea5a0" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0ea5a0" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d={areaPath} fill="url(#growthFill)" />
              <path
                d={linePath}
                fill="none"
                stroke="#0ea5a0"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {POINTS.map((p, i) => {
                const max = Math.max(...POINTS);
                const min = Math.min(...POINTS);
                const step = w / (POINTS.length - 1);
                const x = i * step;
                const y = h - ((p - min) / (max - min)) * h;
                return i === POINTS.length - 1 ? (
                  <circle key={i} cx={x} cy={y} r="5" fill="#0ea5a0" stroke="#ffffff" strokeWidth="2" />
                ) : null;
              })}
            </svg>
            <div className="mt-2 flex justify-between text-[10px] text-slate-500">
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
