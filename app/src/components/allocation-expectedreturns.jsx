import React from "react";

const ExpectedReturns = () => {
  const returnsTable = [
    {
      track: "Studio",
      moic: "4–6x",
      timeframe: "3–5 years",
      ownership: "30–40%",
      risk: "Medium-High"
    },
    {
      track: "Seed Core",
      moic: "2–3x",
      timeframe: "4–6 years",
      ownership: "20–30%",
      risk: "Medium"
    },
    {
      track: "Seed to Series A",
      moic: "2–3x",
      timeframe: "3–5 years",
      ownership: "15–25%",
      risk: "Medium-Low"
    },
    {
      track: "Strategic Secondary",
      moic: "1.5–2x",
      timeframe: "2–4 years",
      ownership: "10–20%",
      risk: "Low"
    },
    {
      track: "Portfolio Blend",
      moic: "3–4x",
      timeframe: "5–7 years",
      ownership: "20–25%",
      risk: "Balanced",
      highlight: true
    }
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Returns
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Expected Returns <span className="text-[#E8A147]">by Track</span>
          </h2>

          <p className="text-white/50 font-light text-sm">
            *Net to LPs = after 2% management fee, 20% carry (8% hurdle)*
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header */}
            <div className="grid grid-cols-5 gap-4 p-6 rounded-t-[24px] bg-[#E8A147]/10 border border-[#E8A147]/30">
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">
                Track
              </div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">
                Target MOIC
              </div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">
                Timeframe
              </div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">
                Ownership Target
              </div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">
                Risk Profile
              </div>
            </div>

            {/* Rows */}
            {returnsTable.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-4 p-6 border-x border-b ${
                  index === returnsTable.length - 1 ? "rounded-b-[24px]" : ""
                } ${
                  row.highlight
                    ? "bg-gradient-to-r from-[#E8A147]/10 to-transparent border-[#E8A147]/30"
                    : "bg-white/[0.03] border-white/[0.08]"
                }`}
              >
                <div
                  className={`font-medium text-sm ${
                    row.highlight ? "text-[#E8A147]" : "text-white"
                  }`}
                >
                  {row.track}
                </div>
                <div className="text-white font-semibold">{row.moic}</div>
                <div className="text-white/70">{row.timeframe}</div>
                <div className="text-white/70">{row.ownership}</div>
                <div className="text-white/70">{row.risk}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedReturns;
