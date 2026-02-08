import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const StudioModelSection = () => {
  const cards = [
    {
      title: "For Founders",
      description:
        "Building an AI-native company for critical infrastructure? We want to hear from you.",
      linkText: "Apply to Studio",
      href: "#founders",
    },
    {
      title: "For Investors",
      description:
        "Seeking exposure to AI infrastructure and autonomous systems in emerging markets.",
      linkText: "LP Inquiries",
      href: "#investors",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Our Studio
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            The <span className="text-[#E8A147]">Studio Model</span>
          </h2>

          <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
            We don't wait for great companies to find us. We originate, validate, and build them from the ground up.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-serif text-white group-hover:text-[#E8A147] transition-colors">
                  {card.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#E8A147] transition-colors" />
              </div>

              <p className="text-white/40 leading-relaxed font-light mb-6">
                {card.description}
              </p>

              <span className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider">
                {card.linkText}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioModelSection;
