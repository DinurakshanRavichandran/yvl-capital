import React from "react";

const LongTermVisionSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Vision
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-8">
            The <span className="text-[#E8A147]">Long-Term Vision</span>
          </h2>
        </div>

        {/* Vision Statement */}
        <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
          <p className="text-white/70 text-xl font-light leading-relaxed text-center">
            We are building the defining portfolio of AI-native infrastructure companies in eternal industries – starting in MENA, scaling globally. Our thesis is not about picking winners in existing markets, but about creating new categories where <span className="text-[#E8A147]">autonomous control becomes the default operational standard</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LongTermVisionSection;
