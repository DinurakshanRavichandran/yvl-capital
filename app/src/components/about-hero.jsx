import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mb-10 text-sm text-white/40">
          <button
            onClick={() => navigate("/")}
            className="hover:text-[#E8A147] transition-colors"
          >
            Home
          </button>
          <ChevronRight size={14} />
          <span className="text-[#E8A147]">About Us</span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-4 mb-10">
          <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#E8A147]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
            Who We Are
          </span>
          <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#E8A147]" />
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
          Building the Future of
          <br />
          <span className="text-[#E8A147]">Autonomous Control</span>
        </h1>

        {/* Subtext */}
        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
          YVL Capital is a studio-backed venture fund focused on AI-native
          infrastructure, autonomous systems, and mission-critical technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
