import React from "react";
import {
  Factory,
  Users,
  Shield,
  Network,
  Settings
} from "lucide-react";

const allocationPrinciples = [
  {
    title: "Studio De-risks Creation",
    description:
      "20% of capital funds 10 companies created from the ground up. Eliminates execution risk for founders unfamiliar with operational infrastructure.",
    icon: Factory,
  },
  {
    title: "External Provides Proven Founder Optionality",
    description:
      "44–56% backs founder-led companies with traction. Raises the quality bar while maintaining founder agency.",
    icon: Users,
  },
  {
    title: "Reserves Protect Long-Term Value",
    description:
      "30% reserved for pro-rata follow-ons ensures YVL compounds returns and maintains ownership through exit.",
    icon: Shield,
  },
  {
    title: "Strategic Capital Amplifies Network",
    description:
      "10% strategic allocation deepens ecosystem ties, creates co-investor validation, and builds referral moats.",
    icon: Network,
  },
  {
    title: "Operating Budget = Platform Durability",
    description:
      "2% Nexa investment directly strengthens all portfolio companies, creating a self-reinforcing advantage.",
    icon: Settings,
  },
];

const AllocationPrinciples = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Principles
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Key Allocation <span className="text-[#E8A147]">Principles</span>
          </h2>
        </div>

        <div className="space-y-6">
          {allocationPrinciples.map((principle, index) => (
            <div
              key={index}
              className="group p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                  <principle.icon className="w-7 h-7 text-[#E8A147]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-[#E8A147] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">
                    {principle.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllocationPrinciples;
