import React from "react";
import { Cpu, Globe, Network, CheckCircle2 } from "lucide-react";

const DefensiblePortfolioSection = () => {
  const defensibility = [
    {
      icon: Cpu,
      title: "Operational Infrastructure Moat",
      description:
        "Nexa – YVL's proprietary operational platform – took years to build and now delivers:",
      items: [
        "6-week MVP cycles (vs. 12–18 weeks industry standard)",
        "40–50% burn reduction",
        "24/7 operational support",
      ],
      note: "This platform advantage compounds across our portfolio.",
    },
    {
      icon: Globe,
      title: "First-Mover Advantage in MENA",
      description:
        "Direct relationships with governments, ecosystem platforms, and top-tier VCs create a sourcing and execution edge that compounds over time.",
      note: "We are building the category before global capital arrives en masse.",
    },
    {
      icon: Network,
      title: "Network Effects from Data & Referrals",
      description:
        "As portfolio companies scale, they generate:",
      items: [
        "Proprietary operational data that improves our selection and support models",
        "Founder referrals that deepen our talent network",
        "Co-investment syndicates that strengthen our position",
      ],
      note: "This creates a self-reinforcing ecosystem that improves with scale.",
    },
  ];

  return (
    <section className="py-12 md:py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Competitive Advantage
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            How This Becomes a <span className="text-[#E8A147]">Defensible Portfolio</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {defensibility.map((item, index) => (
            <div
              key={index}
              className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#E8A147]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-medium text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Items List */}
              {item.items && (
                <ul className="space-y-3 mb-6 ml-20">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/60 font-light text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
                      <span>{listItem}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Note */}
              {item.note && (
                <div className="ml-20">
                  <p className="text-white/50 italic font-light text-sm">{item.note}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefensiblePortfolioSection;
