import React from "react";

const AnchorSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Soft background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-white/[0.1] bg-[#030210]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Eternal Industries"
                className="w-full h-full object-cover opacity-50 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-[#030210]/60 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-[24px] bg-[#030210] border border-[#E8A147]/30 shadow-2xl">
              <p className="text-[#E8A147] text-sm uppercase tracking-[0.2em] mb-1">
                Backed By
              </p>
              <p className="text-white text-2xl font-serif">
                Eternal Industries
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-8 order-1 lg:order-2">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
              Our Anchor
            </p>

            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
              Why <span className="text-[#E8A147]">Eternal Industries</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed font-light">
              YVL Capital is anchored by Eternal Industries, a multi-generational
              holding company with deep roots in industrial infrastructure, real
              estate, and regional commerce.
            </p>

            <p className="text-white/40 leading-relaxed font-light">
              This partnership provides us with patient capital, strategic
              relationships across MENA, and an operator's understanding of
              building businesses that endure. We think in decades, not quarters.
            </p>

            {/* Quote */}
            <div className="flex items-center gap-4 pt-4">
              <div className="w-1 h-12 bg-gradient-to-b from-[#E8A147] to-transparent rounded-full" />
              <p className="text-white/60 italic font-serif text-lg">
                “Long-term thinking. Real-world outcomes.”
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnchorSection;
