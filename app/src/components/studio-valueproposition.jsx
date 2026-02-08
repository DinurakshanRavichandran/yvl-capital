import React from "react";
import { Users, TrendingUp } from "lucide-react";

const valueProposition = {
  founders: [
    {
      title: "De-risked company creation",
      description: "We handle operational complexity"
    },
    {
      title: "Extended runway",
      description: "40–50% lower burn means more time to find product-market fit"
    },
    {
      title: "Focus on what matters",
      description: "You build product, talk to customers, and deepen defensibility"
    }
  ],
  lps: [
    {
      title: "De-risked experimentation",
      description: "Milestone-based funding and early kill rates prevent capital traps"
    },
    {
      title: "Higher ownership",
      description: "YVL typically retains 30–40% ownership through follow-ons"
    },
    {
      title: "Thesis validation at scale",
      description: "Systematic application creates repeatable playbooks and strengthens future selection"
    }
  ]
};

const ValueProposition = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Value Proposition
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Why the Studio Model <span className="text-[#E8A147]">Matters</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Founders */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-[#E8A147]" />
              <h3 className="text-2xl font-serif font-medium text-white">For Founders</h3>
            </div>

            <ul className="space-y-5">
              {valueProposition.founders.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm font-light">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* For LPs */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-[#E8A147]" />
              <h3 className="text-2xl font-serif font-medium text-white">For LPs</h3>
            </div>

            <ul className="space-y-5">
              {valueProposition.lps.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">{item.title}</p>
                    <p className="text-white/50 text-sm font-light">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
