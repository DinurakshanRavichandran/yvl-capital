import React from "react";

const pillars = [
  {
    title: "Operator-Led",
    copy:
      "Every partner has built, scaled, and operated companies in real markets. Decisions are informed by execution experience, not theory.",
  },
  {
    title: "Venture Studio Execution",
    copy:
      "The team brings a repeatable venture-building system with proven MVP velocity, capital efficiency, and Series A conversion across multiple platforms.",
  },
  {
    title: "Institutional Discipline",
    copy:
      "YVL applies institutional-grade governance, risk management, and capital allocation standards across fund construction and portfolio oversight.",
  },
  {
    title: "Global + MENA-Native",
    copy:
      "With leadership embedded in Dubai and networks across Europe and North America, the team bridges MENA-native access with global capital and talent.",
  },
];

const OperatingDNA = () => {
  return (
    <section className="bg-[#030210] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-[120px]">
        {/* Section Header */}
        <div className="max-w-[640px] mb-16">
          <p className="text-[13px] uppercase tracking-widest text-white/50">
            Operating DNA
          </p>
          <h2 className="mt-4 text-[36px] font-semibold tracking-tight">
            Why This Team Works
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/70">
            YVL is built around a shared operating philosophy that aligns
            company-builders, investors, and capital partners around execution,
            discipline, and long-term value creation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-14">
          {pillars.map((pillar, index) => (
            <div key={index} className="relative">
              <div className="text-[15px] uppercase tracking-wide text-white/50">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-[22px] font-medium">
                {pillar.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/70 max-w-[460px]">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingDNA;
