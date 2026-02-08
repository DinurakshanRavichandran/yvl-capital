import React from "react";
import { Zap, Building2, Users } from "lucide-react";

const StudioOverview = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Overview
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-8">
            What the <span className="text-[#E8A147]">Studio Is</span>
          </h2>

          <p className="text-white/60 text-xl font-light max-w-4xl mx-auto mb-12">
            YVL's studio is a <span className="text-[#E8A147]">$10M, 10-company creation engine</span> inside YVL Capital Partners Fund I, designed to de-risk early-stage company formation in AI-native autonomous control.
          </p>
        </div>

        {/* Studio Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Nexa */}
          <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
              <Zap className="w-7 h-7 text-[#E8A147]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-white mb-3">Nexa</h3>
            <p className="text-white/50 text-sm font-light">YVL's AI-powered operational platform</p>
          </div>

          {/* Staff Technologies */}
          <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
              <Building2 className="w-7 h-7 text-[#E8A147]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-white mb-3">Staff Technologies</h3>
            <p className="text-white/50 text-sm font-light">Shared operational support</p>
          </div>

          {/* Hands-on GP Guidance */}
          <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
              <Users className="w-7 h-7 text-[#E8A147]" />
            </div>
            <h3 className="text-xl font-serif font-medium text-white mb-3">Hands-on GP Guidance</h3>
            <p className="text-white/50 text-sm font-light">Weekly working sessions with experienced operators</p>
          </div>
        </div>

        {/* Investment Gates Callout */}
        <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
          <p className="text-white/70 text-lg font-light leading-relaxed text-center">
            Studio companies follow the same four non-negotiable investment gates as our external investments:{" "}
            <span className="text-[#E8A147]">AI-nativism</span>,{" "}
            <span className="text-[#E8A147]">autonomous operational control</span>,{" "}
            <span className="text-[#E8A147]">transaction ownership</span>, and{" "}
            <span className="text-[#E8A147]">layered defensibility</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudioOverview;
