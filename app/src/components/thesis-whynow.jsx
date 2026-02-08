import React from "react";
import { Zap, Globe, TrendingUp } from "lucide-react";

const WhyNowSection = () => {
  const whyNow = [
    {
      icon: Zap,
      title: "Technology Readiness",
      description:
        "Edge computing, cheaper sensors, and mature AI agents now make real-time autonomous control technically and economically viable at scale for the first time.",
    },
    {
      icon: Globe,
      title: "Acute MENA Resource Gap",
      description:
        "Water stress, food import dependence, and industrial efficiency needs make autonomy a survival requirement, not an optimization exercise. The region faces structural pressures that create urgent, well-funded demand.",
    },
    {
      icon: TrendingUp,
      title: "Regulatory & Capital Tailwinds",
      description:
        "Regional governments are actively funding and regulating food security, water technology, and industrial automation, creating strong demand pull and clear frameworks for autonomous systems.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Market Timing
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Why Now, Especially in <span className="text-[#E8A147]">MENA</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {whyNow.map((item, index) => (
            <div
              key={index}
              className="group p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-14 h-14 mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                <item.icon className="w-7 h-7 text-[#E8A147]" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
