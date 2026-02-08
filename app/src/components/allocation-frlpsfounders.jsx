import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ForLPsAndFounders = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-6">
            For <span className="text-[#E8A147]">LPs & Founders</span>
          </h2>
        </div>

        {/* LPs & Founders Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* For Limited Partners */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <h3 className="text-2xl font-serif text-white mb-4">For Limited Partners</h3>
            <p className="text-white/60 font-light mb-6">
              This allocation structure is designed to maximize returns while systematically managing risk through diversification, ownership protection, and platform effects.
            </p>
            <a
              href="mailto:lp@yvl.capital"
              className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
            >
              Become an LP
              <ArrowRight size={16} />
            </a>
          </div>

          {/* For Founders */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <h3 className="text-2xl font-serif text-white mb-4">For Founders</h3>
            <p className="text-white/60 font-light mb-6">
              Whether you're an early-career operator or a domain expert, YVL has a capital and support model designed for your stage.
            </p>
            <a
              href="mailto:founders@yvl.capital"
              className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
            >
              View Investment Criteria
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Download Allocation Deck */}
          <a
            href="#"
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
              <Download size={16} />
              Download Allocation Deck
            </span>
          </a>

          {/* Back to Home */}
          <button
            onClick={() => navigate("/")}
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
            <span className="relative z-10 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
              Back to Home
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForLPsAndFounders;
