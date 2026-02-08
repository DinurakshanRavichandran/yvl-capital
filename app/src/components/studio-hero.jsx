import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Eyebrow / Label */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
            YVL Venture Studio
          </span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
        </div>

        {/* Heading */}
        <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
          Build Your AI-Native Company
          <br />
          <span className="text-[#E8A147]">with YVL's Venture Studio</span>
        </h1>

        {/* Description */}
        <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-6">
          YVL's studio builds AI-native autonomous control companies from day zero, pairing entrepreneurial talent with proprietary operational infrastructure and a proven playbook.
        </p>

        <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
          The studio model compresses MVP cycles to 6 weeks, cuts burn by 40–50%, and applies hard gates at months 6, 12, and 18 so only the most defensible companies graduate to scale. We combine capital, hands-on guidance, and our AI-powered operational platform Nexa to turn structural inefficiencies in eternal industries into scalable, defensible businesses.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
