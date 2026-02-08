import React from "react";

const WhyNowSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

          {/* LEFT HEADER */}
          <div className="space-y-8">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
              Market Timing
            </p>

            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
              Why <span className="text-[#E8A147]">Now</span>
            </h2>
          </div>

          {/* RIGHT CONTENT BOX */}
          <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="absolute top-0 left-10 w-20 h-[2px] bg-gradient-to-r from-[#E8A147] to-transparent" />

            <p className="text-white/70 text-xl leading-relaxed font-light mb-6">
              We are at an inflection point. AI has moved from research labs to
              production systems. The companies that will define the next era are
              being built{" "}
              <span className="text-[#E8A147] font-medium">right now</span>.
            </p>

            <p className="text-white/50 leading-relaxed font-light">
              Foundation models are commoditizing. The value is shifting to
              application layers — companies that can deploy AI into regulated,
              high-stakes environments where failure isn't an option. This is our
              thesis, and this is our moment.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
