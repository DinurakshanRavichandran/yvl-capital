import React from "react";
import { CheckCircle2, Leaf, Droplets, Factory, Heart } from "lucide-react";

const PortfolioConstructionSection = () => {
  const verticals = [
    { icon: Leaf, name: "Agriculture", examples: "controlled-environment, irrigation, supply chain" },
    { icon: Droplets, name: "Water", examples: "treatment, distribution, quality monitoring" },
    { icon: Factory, name: "Industrial Systems", examples: "process control, emissions, energy" },
    { icon: Heart, name: "Healthcare", examples: "diagnostics, lab automation, facility management" },
  ];

  const dataDrivenPoints = [
    "Thesis alignment",
    "Founder-market fit",
    "Defensibility architecture",
    "MENA-global leverage potential",
  ];

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Strategy
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Portfolio Construction <span className="text-[#E8A147]">& Validation</span>
          </h2>
        </div>

        {/* Vertical-Agnostic */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-medium text-white mb-8 text-center">
            Vertical-Agnostic, <span className="text-[#E8A147]">Thesis-Focused</span>
          </h3>

          <p className="text-white/60 text-center mb-10 max-w-3xl mx-auto font-light">
            We apply the same four gates across multiple eternal industries:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verticals.map((vertical, index) => (
              <div
                key={index}
                className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
                  <vertical.icon className="w-7 h-7 text-[#E8A147]" />
                </div>
                <h4 className="text-lg font-serif font-medium text-white mb-3">{vertical.name}</h4>
                <p className="text-white/40 text-xs font-light">{vertical.examples}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual-Track Validation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <h3 className="text-xl font-serif font-medium text-white mb-4">Dual-Track Validation</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 font-light">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
                <span><span className="text-white font-medium">Studio track</span> – systematically tests and refines the thesis through company creation</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 font-light">
                <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
                <span><span className="text-white font-medium">External investment track</span> – validates thesis with proven founder-led companies</span>
              </li>
            </ul>
          </div>

          <div className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <h3 className="text-xl font-serif font-medium text-white mb-4">Data-Driven Selection</h3>
            <p className="text-white/60 font-light mb-4">Every investment decision is filtered through:</p>
            <ul className="space-y-3">
              {dataDrivenPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/60 font-light text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioConstructionSection;
