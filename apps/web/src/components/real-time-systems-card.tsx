'use client';

export const RealTimeSystemsCard = () => {
  const steps = [
    'Operational Events',
    'Google Cloud Pub/Sub',
    'TypeScript / Node.js',
    'Business Rules & State',
    'MongoDB · Redis · BigQuery'
  ];

  return (
    <article className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-blue-950/80 via-slate-800/95 to-slate-900 shadow-2xl shadow-blue-950/20 motion-safe:transition-transform motion-safe:hover:-translate-y-1">
      {/* Decorative radial gradient glow */}
      <div
        className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle top-right glow */}
      <div
        className="absolute -top-20 -right-16 h-40 w-40 rounded-full bg-blue-500/8 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content wrapper */}
      <div className="relative z-10 p-6 lg:p-8">
        <header className="mb-8">
          <p className="text-xs font-semibold tracking-widest text-blue-300 mb-2">
            SYSTEMS THINKING
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
            Real-Time Systems
          </h2>
        </header>

        <ol className="space-y-5 mb-8">
          {steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <div className="flex flex-col items-center gap-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/15 border border-blue-400/50 text-blue-200 text-xs font-semibold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-12 bg-gradient-to-b from-blue-400/70 to-blue-900/20 mt-0"></div>
                )}
              </div>
              <div className="pt-1">
                <p className="text-sm md:text-base text-slate-100 leading-relaxed">
                  {step}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="border-t border-blue-400/15 pt-6">
          <p className="text-sm md:text-base text-slate-200">
            Designing reliable systems for changing real-world operations.
          </p>
        </div>
      </div>
    </article>
  );
};
