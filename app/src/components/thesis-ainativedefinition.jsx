import React from "react";

const AiNativeDefinitionSection = () => {
  const aiNativePoints = [
    {
      number: "01",
      title: "AI as Infrastructure, Not a Feature",
      description:
        "We back platforms where AI is the core decision engine for real-time operations, not a bolt-on to existing workflows. The AI must be fundamental to the product's value proposition and operational integrity.",
    },
    {
      number: "02",
      title: "Direct Control of Physical Systems",
      description:
        "Our companies control equipment and resources in the real world – greenhouse climate, water dosing, bioreactors, emissions, construction workflows – rather than just tracking tasks or digitizing administration.",
    },
    {
      number: "03",
      title: "Continuous, Mission-Critical Processes",
      description:
        "We target operations that run continuously or multiple times per day, where failure is unacceptable and switching costs are high. These are not discretionary tools – they are essential operational infrastructure.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Definition
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
            What We Mean By{" "}
            <span className="text-[#E8A147]">"AI-Native Autonomous Control"</span>
          </h2>
        </div>

        {/* Points */}
        <div className="space-y-6">
          {aiNativePoints.map((point) => (
            <div
              key={point.number}
              className="group relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 text-[#E8A147]/20 text-6xl font-serif font-bold group-hover:text-[#E8A147]/40 transition-colors">
                {point.number}
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
                  {point.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiNativeDefinitionSection;
