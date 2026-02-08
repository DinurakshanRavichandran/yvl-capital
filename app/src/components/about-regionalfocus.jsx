import React from "react";
import { Globe } from "lucide-react";

const RegionalFocusSection = () => {
  const points = [
    "Sovereign AI initiatives driving $100B+ in regional investment",
    "Greenfield opportunities in critical infrastructure modernization",
    "Strategic location bridging Europe, Asia, and Africa",
    "Young, tech-forward population with rising digital adoption",
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
              Regional Focus
            </p>

            <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
              Why <span className="text-[#E8A147]">MENA</span>
            </h2>

            <p className="text-white/50 text-lg leading-relaxed font-light">
              The Middle East and North Africa represent one of the fastest-growing technology markets in the world. Governments are investing billions in AI, automation, and sovereign infrastructure.
            </p>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4 text-white/60 font-light">
                  <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147]/60 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#E8A147]/5 to-transparent">
              {/* Centered Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-48 h-48 text-[#E8A147]/20" />
              </div>

              {/* Stats at bottom */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                    <p className="text-2xl font-serif text-[#E8A147]">$100B+</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Regional AI Investment</p>
                  </div>
                  <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                    <p className="text-2xl font-serif text-[#E8A147]">450M+</p>
                    <p className="text-xs text-white/40 uppercase tracking-wider">Population</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegionalFocusSection;
