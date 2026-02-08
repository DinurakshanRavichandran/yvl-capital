import React from "react";
import { CheckCircle2 } from "lucide-react";

const internalIdeationItems = [
  "Early-career operators, engineers, or product leaders",
  "Strong execution skills",
  "Willing to be matched with a validated problem in an eternal industry",
  "Based in or willing to relocate to MENA"
];

const founderFirstItems = [
  "Domain experts with 10+ years in agriculture, water, industrial systems, or healthcare",
  "Deep customer/regulatory networks",
  "Operational experience in mission-critical environments",
  "Ready to build an AI-native control platform, not just digitize workflows"
];

const IdealCandidates = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Ideal Candidates
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Who Should <span className="text-[#E8A147]">Apply?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Internal Ideation Track */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="flex items-center gap-3 mb-8">
              <div className="px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider">
                Internal Ideation Track
              </div>
            </div>

            <ul className="space-y-4">
              {internalIdeationItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-white/60 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Founder-First Track */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="flex items-center gap-3 mb-8">
              <div className="px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider">
                Founder-First Track
              </div>
            </div>

            <ul className="space-y-4">
              {founderFirstItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 text-white/60 font-light">
                  <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdealCandidates;
