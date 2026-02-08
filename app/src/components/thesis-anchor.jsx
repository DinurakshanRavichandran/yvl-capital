import React from "react";
import { Target, Shield, CheckCircle2 } from "lucide-react";

const AnchorSection = () => {
  const eternalReasons = [
    {
      icon: Target,
      title: "Permanent TAM, Structural Inefficiencies",
      description:
        "Sectors like controlled-environment agriculture, water resources, industrial processes, diagnostics, and construction face 20–50 year problems that traditional automation has failed to solve. These are not passing trends – they are foundational human needs.",
    },
    {
      icon: Shield,
      title: "Mission-Critical, Non-Discretionary Demand",
      description:
        "Businesses in these sectors cannot operate without reliable control of assets and resources. This creates infrastructure-level moats for successful platforms that become embedded in daily operations.",
    },
    {
      icon: CheckCircle2,
      title: "Evolving Regulatory & ESG Pressure",
      description:
        "Climate, resource, and compliance requirements are pushing operators toward autonomous systems that provide auditable, real-time control. Early movers capture regulatory advantage.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Market Focus
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Why We Focus on <span className="text-[#E8A147]">"Eternal Industries"</span>
          </h2>
        </div>

        {/* Reasons Cards */}
        <div className="space-y-8">
          {eternalReasons.map((reason, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-[#E8A147]" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnchorSection;
