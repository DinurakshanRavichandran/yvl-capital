import React from "react";

const allocationTable = [
  {
    track: "Studio: Internal Ideation",
    capital: "$4M",
    percent: "8%",
    companies: "4",
    checkSize: "$1M each",
    strategy: "YVL ideates, validates, recruits early-career EIRs; milestone-based vesting",
  },
  {
    track: "Studio: Founder-First",
    capital: "$6M",
    percent: "12%",
    companies: "6",
    checkSize: "$1M each",
    strategy: "Domain-expert founders with 10+ year ops experience; 10-year partner commitment",
  },
  {
    track: "Seed Core",
    capital: "$8–10M",
    percent: "16–20%",
    companies: "10–14",
    checkSize: "$500K–$1M",
    strategy: "First institutional seed in AI-native autonomous control companies",
  },
  {
    track: "Seed to Series A",
    capital: "$10–12M",
    percent: "20–24%",
    companies: "6–10",
    checkSize: "$1M–$3M",
    strategy: "High-conviction seed extension or early Series A in thesis winners",
  },
  {
    track: "Strategic Secondary",
    capital: "$4–6M",
    percent: "8–12%",
    companies: "3–5",
    checkSize: "$1M–$3M",
    strategy: "Secondaries, structured deals, ecosystem bets aligned with thesis",
  },
  {
    track: "Follow-On Reserves",
    capital: "$15M",
    percent: "30%",
    companies: "Mixed",
    checkSize: "Pro-rata",
    strategy: "Pro-rata participation across portfolio; ownership protection to 20% threshold",
  },
  {
    track: "Strategic Investments",
    capital: "$5M",
    percent: "10%",
    companies: "3–5",
    checkSize: "$500K–$2M",
    strategy: "Ecosystem amplification, partnerships, secondaries in thesis-aligned companies",
  },
  {
    track: "Operating Budget",
    capital: "$1M",
    percent: "2%",
    companies: "—",
    checkSize: "—",
    strategy: "Management fee, legal, Nexa platform, LP administration",
  },
];

const FundBreakdown = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Capital Allocation <span className="text-[#E8A147]">at a Glance</span>
          </h2>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Track the deployment of YVL's $50M fund across strategies, check sizes, and company targets.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[1000px]">
            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-6 rounded-t-[24px] bg-[#E8A147]/10 border border-[#E8A147]/30">
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Track</div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Capital</div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">% of Fund</div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Companies</div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Check Size</div>
              <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Strategy</div>
            </div>

            {/* Table Rows */}
            {allocationTable.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-6 gap-4 p-6 border-x border-b ${
                  index === allocationTable.length - 1 ? "rounded-b-[24px]" : ""
                } ${
                  row.track.includes("Studio") || row.track === "Follow-On Reserves"
                    ? "bg-white/[0.05] border-white/[0.1]"
                    : "bg-white/[0.03] border-white/[0.08]"
                }`}
              >
                <div className="text-white font-medium text-sm">{row.track}</div>
                <div className="text-[#E8A147] font-semibold text-sm">{row.capital}</div>
                <div className="text-white/70 text-sm">{row.percent}</div>
                <div className="text-white/70 text-sm">{row.companies}</div>
                <div className="text-white/70 text-sm">{row.checkSize}</div>
                <div className="text-white/60 text-xs font-light leading-relaxed">{row.strategy}</div>
              </div>
            ))}

            {/* Total Row */}
            <div className="grid grid-cols-6 gap-4 p-6 mt-2 rounded-[24px] bg-gradient-to-r from-[#E8A147]/10 to-transparent border border-[#E8A147]/30">
              <div className="text-white font-bold uppercase tracking-wider text-sm">TOTAL</div>
              <div className="text-[#E8A147] font-bold text-lg">$50M</div>
              <div className="text-white font-semibold">100%</div>
              <div className="text-white font-semibold">33–42</div>
              <div className="text-white/70 text-sm">—</div>
              <div className="text-white/60 text-xs font-light">18–24 month deployment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundBreakdown;
