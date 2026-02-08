import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const HeroCoreSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-20 space-y-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/40">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#E8A147] transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} />
          <span className="text-[#E8A147]">Thesis</span>
        </div>

        {/* Section Label */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
            Investment Thesis
          </span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
          Autonomous Operational Control
          <br />
          in <span className="text-[#E8A147]">Eternal Industries</span>
        </h1>

        {/* Hero Text */}
        <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
          YVL Capital backs AI-native platforms that autonomously control
          mission-critical physical operations in markets where demand is
          permanent and downtime is existential.
        </p>

        <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
          We invest in AI-native companies that autonomously control
          mission-critical operational processes in "eternal industries" –
          sectors like food production, water treatment, industrial process
          control, and healthcare. These companies own the transaction, the
          real-time operational data, and the compliance infrastructure,
          building compounding defensibility through proprietary data
          flywheels, physical integration, regulatory lock-in, and financial
          embedding.
        </p>
      </div>

      {/* Core Thesis Box */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative p-12 rounded-[48px] bg-gradient-to-br from-[#E8A147]/10 to-transparent border border-[#E8A147]/30 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8A147] via-[#E8A147]/50 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#E8A147] via-[#E8A147]/50 to-transparent" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#E8A147] mb-6 text-center">
            Core Thesis
          </p>

          <p className="text-white text-2xl md:text-3xl font-serif font-medium leading-relaxed text-center">
            YVL invests where AI is{" "}
            <span className="text-[#E8A147]">infrastructure, not a feature</span>{" "}
            – in platforms that autonomously control physical operations that
            cannot fail, in industries that will never disappear.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroCoreSection;
