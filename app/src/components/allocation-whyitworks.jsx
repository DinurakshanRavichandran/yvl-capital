import React from "react";
import { Shield, Zap, Award, Users, Target } from "lucide-react";

const WhyItWorks = () => {
  const whyWorks = [
    {
      icon: Shield,
      title: "Risk Balancing",
      description:
        "Studio and external split founders across different founder types (YVL-backed EIRs vs. proven operators), reducing portfolio concentration risk.",
    },
    {
      icon: Zap,
      title: "Execution Leverage",
      description:
        "Nexa operational infrastructure compounds as portfolio grows; later companies benefit from earlier successes and founder referrals.",
    },
    {
      icon: Award,
      title: "Ownership Protection",
      description:
        "30% follow-on reserves ensure YVL maintains board seats and voting rights, increasing probability of achieving target MOIC and securing favorable exit terms.",
    },
    {
      icon: Users,
      title: "Founder Fit",
      description:
        "Different check sizes and support models (studio weekly coaching, external quarterly guidance) match founder stage and operational maturity.",
    },
    {
      icon: Target,
      title: "MENA First-Mover Positioning",
      description:
        "70% MENA deployment with 18–24 month execution window locks in government relationships, regulatory fast-track access, and founder network before global capital arrives.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Why It Works
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Why This Allocation <span className="text-[#E8A147]">Structure Works</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {whyWorks.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-[#E8A147]" />
                </div>
                <h3 className="text-xl font-serif font-medium text-white">{item.title}</h3>
              </div>
              <p className="text-white/60 font-light text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
