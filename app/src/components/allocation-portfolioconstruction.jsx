import React from "react";

const PortfolioConstruction = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Portfolio Construction <span className="text-[#E8A147]">Visual</span>
          </h2>
        </div>

        {/* ASCII Table */}
        <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] overflow-x-auto">
          <pre className="text-[#E8A147] text-xs md:text-sm font-mono leading-relaxed whitespace-pre">
{`YVL $50M Fund Structure:

┌─────────────────────────────────────────────────────────────┐
│                     $50M TOTAL FUND                         │
├────────────┬────────────┬────────────┬────────────┬─────────┤
│  Studio    │   Seed     │ Seed→A     │ Reserves   │ Strategic│
│   $10M     │   $8-10M   │ $10-12M    │   $20M     │   $5M   │
│  (20%)     │  (16-20%)  │ (20-24%)   │   (40%)    │  (10%)  │
├────────────┼────────────┼────────────┼────────────┼─────────┤
│ Internal   │ Seed Core  │ Seed→A     │ Follow-On  │ Ecosystem│
│ Ideation   │ First      │ High       │ Reserves   │ Bets    │
│ $4M/4 cos  │ Inst. Seed │ Conviction │ $15M       │ $5M     │
│            │ $8-10M/    │ $10-12M/   │ (30%)      │         │
│ Founder-   │ 10-14 cos  │ 6-10 cos   │ Operating  │         │
│ First      │            │            │ Budget $1M │         │
│ $6M/6 cos  │            │            │ (2%)       │         │
└────────────┴────────────┴────────────┴────────────┴─────────┘`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default PortfolioConstruction;
