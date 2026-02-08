import React from "react";
import { Zap, Users, Network, Building2, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Nexa & Staff Technologies",
    items: [
      "6-week MVP velocity",
      "40–50% burn reduction",
      "24/7 support across finance, HR, legal ops, analytics, and GTM"
    ]
  },
  {
    icon: Users,
    title: "Hands-on GP Involvement",
    items: [
      "Weekly working sessions with GPs",
      "Deep experience in Agtech, Water systems, Industrial automation",
      "Healthcare infrastructure & Venture building expertise"
    ]
  },
  {
    icon: Network,
    title: "Embedded Networks",
    items: [
      "Government programs (MENA food/water security initiatives)",
      "Strategic buyers (Siemens, John Deere, ADNOC, etc.)",
      "Co-investors (Accel, Index, Lightspeed, Founders Fund)",
      "Ecosystem platforms (Microsoft for Startups MENA, Ignyte, Sheraa)"
    ]
  },
  {
    icon: Building2,
    title: "Portfolio Founder Community",
    items: [
      "Access to a growing network of YVL founders",
      "Peer learning and knowledge sharing",
      "Referrals and partnership opportunities"
    ]
  }
];

const FounderBenefits = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Founder Benefits
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            What Founders Get from the <span className="text-[#E8A147]">Studio</span>
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-[#E8A147]" />
                </div>
                <h3 className="text-xl font-serif font-medium text-white">{benefit.title}</h3>
              </div>

              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/60 font-light text-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderBenefits;
