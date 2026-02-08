import React from "react";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid - Creates an "engineering" feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Animated Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8A147]/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow with enhanced spacing */}
        <div className="inline-flex items-center gap-4 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8A147]/50 to-[#E8A147]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
            Establishment & Thesis
          </span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent via-[#E8A147]/50 to-[#E8A147]" />
        </div>

        {/* Headline - Larger and more dramatic */}
        <h1 className="font-serif text-[clamp(40px,8vw,88px)] font-medium leading-[1.05] tracking-tight text-white mb-10">
          Building the Future of
          <span className="block mt-2 bg-gradient-to-b from-[#E8A147] via-[#E8A147] to-[#D4893D] bg-clip-text text-transparent italic">
            Autonomous Control
          </span>
        </h1>

        {/* Subtext - Balanced for readability */}
        <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-16">
          YVL Capital is a <span className="text-white font-normal">studio-backed venture fund</span> focused on AI-native 
          infrastructure and mission-critical systems designed for the real world.
        </p>

        {/* Visual Anchor / Scroll Indicator */}
        <div className="flex flex-col items-center gap-4 animate-bounce opacity-40">
           <span className="text-[10px] uppercase tracking-[0.3em] text-white">Discover</span>
           <ArrowDown size={16} className="text-[#E8A147]" />
        </div>
      </div>

      {/* Decorative Border Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default HeroSection;