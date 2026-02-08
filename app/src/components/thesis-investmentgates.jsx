import React from "react";

const InvestmentGatesSection = () => {
  const investmentGates = [
    {
      gate: "1. AI-Nativism",
      requirement:
        "AI must be core infrastructure for autonomous control, not a thin wrapper around legacy systems.",
      why: "Ensures architectural defensibility and scalability beyond simple automation.",
    },
    {
      gate: "2. Autonomous Operational Control",
      requirement:
        "The platform must make real-time decisions and actuate physical systems without human-in-the-loop micromanagement.",
      why: "Delivers the operational efficiency and reliability that defines our thesis.",
    },
    {
      gate: "3. Transaction Ownership",
      requirement:
        "The company must own the underlying economic transaction – commodity sales, inputs, resource allocation, or compliance payments – not just a UI on top of someone else's rails.",
      why: "Creates direct monetization and deeper integration with customer operations.",
    },
    {
      gate: "4. Layered Defensibility",
      requirement:
        "Each company must have at least two moats, including physical/sensor integration or autonomous process control plus an additional layer such as proprietary data, regulatory lock-in, or financial embedding.",
      why: "Builds compounding barriers to entry that protect margins and market position.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Investment Framework
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            The Four Non-Negotiable <span className="text-[#E8A147]">Investment Gates</span>
          </h2>

          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
            Every company must pass all four gates before YVL invests.
          </p>
        </div>

        {/* Gates List */}
        <div className="space-y-6">
          {investmentGates.map((gate, index) => (
            <div
              key={index}
              className="group p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="grid lg:grid-cols-[200px_1fr_1fr] gap-8 items-start">
                <div>
                  <h3 className="text-xl font-serif font-medium text-[#E8A147] mb-2">{gate.gate}</h3>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Requirement</p>
                  <p className="text-white/70 font-light leading-relaxed">{gate.requirement}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Why It Matters</p>
                  <p className="text-white/70 font-light leading-relaxed">{gate.why}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentGatesSection;
