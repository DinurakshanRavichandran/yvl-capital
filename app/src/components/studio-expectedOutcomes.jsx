import React from "react";

const outcomes = [
  { metric: "MVP Timeline", target: "6 weeks" },
  { metric: "Burn Reduction", target: "40–50%" },
  { metric: "Series A Readiness", target: "18–24 months" },
  { metric: "Ownership Retention", target: "30–40%" },
  { metric: "MOIC Target", target: "4–6x at Series A/B" },
  { metric: "Graduation Rate", target: "70%+ reach Series A" }
];

const ExpectedOutcomes = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Performance Metrics
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Expected <span className="text-[#E8A147]">Outcomes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] text-center"
            >
              <p className="text-3xl font-serif text-[#E8A147] mb-3">{outcome.target}</p>
              <p className="text-sm text-white/40 uppercase tracking-wider">{outcome.metric}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpectedOutcomes;
