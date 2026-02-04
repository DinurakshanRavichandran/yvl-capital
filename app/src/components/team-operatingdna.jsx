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
      "The team brings a repeatable venture-building system with proven MVP velocity, capital efficiency, and Series A conversion.",
  },
  {
    title: "Institutional Discipline",
    copy:
      "YVL applies institutional-grade governance, risk management, and capital allocation standards across fund construction.",
  },
  {
    title: "Global + MENA-Native",
    copy:
      "With leadership embedded in Dubai and networks across Europe and NA, we bridge local access with global capital and talent.",
  },
];

const OperatingDNA = () => {
  return (
    <section className="bg-[#030210] py-32 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8A147]/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-24">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#E8A147]" />
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#E8A147]">
                Operating DNA
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              The Architecture <br /> of Our Execution
            </h2>
          </div>
          <p className="text-lg text-white/50 font-light leading-relaxed max-w-xl lg:border-l lg:border-white/10 lg:pl-12">
            YVL is built around a shared operating philosophy that aligns
            company-builders, investors, and capital partners around execution,
            discipline, and long-term value creation.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="group relative bg-[#030210] p-10 md:p-16 transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#E8A147]/5 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <span className="text-5xl font-serif italic text-white/05 group-hover:text-[#E8A147]/10 transition-colors duration-500 font-bold">
                    0{index + 1}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-[#E8A147]/20 flex items-center justify-center group-hover:border-[#E8A147]/50 transition-all duration-500">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] group-hover:scale-150 transition-transform" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-5 group-hover:text-[#E8A147] transition-colors duration-300">
                  {pillar.title}
                </h3>
                
                <p className="text-white/50 leading-relaxed font-light group-hover:text-white/70 transition-colors duration-300">
                  {pillar.copy}
                </p>
              </div>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E8A147] group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OperatingDNA;