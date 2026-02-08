import React from "react";
import { Building2, Users, Globe, Rocket } from "lucide-react";

const supportItems = [
  {
    icon: Building2,
    title: "Entity Setup & Governance",
    description:
      "Full legal structuring across UAE, Saudi, and regional jurisdictions."
  },
  {
    icon: Users,
    title: "Talent & GTM Support",
    description:
      "Access to curated hiring pipelines and regional go-to-market strategy."
  },
  {
    icon: Globe,
    title: "Sovereign & Enterprise Intros",
    description:
      "Direct introductions to government entities and enterprise buyers."
  },
  {
    icon: Rocket,
    title: "Follow-On Syndication",
    description:
      "Preferred access to co-investment from aligned regional LPs."
  }
];

const HowWePartnerSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Our Platform
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            How We <span className="text-[#E8A147]">Partner</span>
          </h2>

          <p className="text-white/50 text-lg font-light max-w-3xl mx-auto">
            Through <span className="text-[#E8A147]">Nexa</span>, our operational
            support arm, portfolio companies receive end-to-end support from
            incorporation to scale.
          </p>
        </div>

        {/* Support Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportItems.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                <item.icon className="w-6 h-6 text-[#E8A147]" />
              </div>

              <h3 className="text-lg font-serif font-medium text-white mb-3 group-hover:text-[#E8A147] transition-colors">
                {item.title}
              </h3>

              <p className="text-white/40 text-sm leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWePartnerSection;
