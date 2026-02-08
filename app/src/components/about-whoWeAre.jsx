import React from "react";

const WhoWeAreSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Header */}
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
              The Fund
            </p>

            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
              A new kind of <span className="text-[#E8A147]">venture studio</span> for the AI era.
            </h2>

            <p className="text-white/50 text-lg leading-relaxed font-light">
              We are operators, builders, and investors who understand that the next
              decade belongs to companies that deploy AI where it matters most — in
              mission-critical systems that power the real world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
                <p className="text-3xl font-serif text-[#E8A147] mb-2">$50M</p>
                <p className="text-sm text-white/40 uppercase tracking-wider">
                  Fund Size
                </p>
              </div>

              <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
                <p className="text-3xl font-serif text-[#E8A147] mb-2">Studio</p>
                <p className="text-sm text-white/40 uppercase tracking-wider">
                  Backed Model
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                alt="Technology Infrastructure"
                className="w-full h-full object-cover opacity-40 grayscale"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/50 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[#E8A147] text-sm uppercase tracking-[0.3em] mb-3">
                  Our Approach
                </p>
                <p className="text-white/80 text-xl font-serif leading-relaxed">
                  “Originate. Build. Scale. We are hands-on partners from day zero.”
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
