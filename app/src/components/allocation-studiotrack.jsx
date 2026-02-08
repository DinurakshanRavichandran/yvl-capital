// import React from "react";

// const studioSections = [
//   {
//     title: "Internal Ideation",
//     allocation: "$4M across 4 companies",
//     checkSize: "$1M per company, tranched on milestones",
//     model: "YVL ideates, validates market, recruits early-career EIRs to found",
//     outcomeTarget: "$1M ARR, proof of autonomous control, paying pilots by month 12–18",
//     exitTarget: "4–6x within 3 years",
//   },
//   {
//     title: "Founder-First",
//     allocation: "$6M across 6 companies",
//     checkSize: "$1M per company, milestone-based",
//     model: "Partners with domain-expert founders (10+ years ops experience)",
//     outcomeTarget: "Same milestone gates; 4–6x exit targets at Series A/B within 3–5 years",
//     ownership: "YVL retains 30–40%",
//   },
// ];

// const whyStudio = [
//   "De-risks company creation by handling operational complexity",
//   "Compresses time-to-MVP from 12–18 weeks to 6 weeks via Nexa",
//   "Reduces burn by 40–50%, extending runway",
//   "Founders focus on product, customers, defensibility – not back-office",
//   "Milestone gates kill underperformers early and reallocate capital to winners",
// ];

// const StudioTrack = () => {
//   return (
//     <section className="py-24 md:py-32 bg-[#030210] text-white">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium mb-4">
//             Studio Track: <span className="text-[#E8A147]">De-Risk Company Creation</span>
//           </h2>
//           <p className="text-white/60 text-lg">
//             Total Allocation: <span className="font-semibold">$10M (20% of Fund)</span>
//           </p>
//           <p className="mt-4 text-white/60 max-w-3xl mx-auto">
//             The studio originates and funds companies from ideation through to Series A readiness, using milestone-based vesting and rigorous gates at months 6, 12, and 18 to eliminate underperformers early and concentrate capital on winners.
//           </p>
//         </div>

//         {/* Studio Sections */}
//         {studioSections.map((section, idx) => (
//           <div
//             key={idx}
//             className="mb-12 p-6 md:p-10 bg-white/5 rounded-2xl border border-white/10"
//           >
//             <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-[#E8A147]">
//               {section.title}
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-white/70 text-sm md:text-base">
//               <div>
//                 <p className="font-semibold">Allocation</p>
//                 <p>{section.allocation}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Check Size</p>
//                 <p>{section.checkSize}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Model</p>
//                 <p>{section.model}</p>
//               </div>
//               <div>
//                 <p className="font-semibold">Outcome Target</p>
//                 <p>{section.outcomeTarget}</p>
//               </div>
//               {section.exitTarget && (
//                 <div>
//                   <p className="font-semibold">Exit Target</p>
//                   <p>{section.exitTarget}</p>
//                 </div>
//               )}
//               {section.ownership && (
//                 <div>
//                   <p className="font-semibold">Ownership</p>
//                   <p>{section.ownership}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {/* Why Studio Model Matters */}
//         <div className="mt-16">
//           <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
//             Why the Studio Model Matters
//           </h3>
//           <ul className="space-y-3 text-white/70 text-sm md:text-base">
//             {whyStudio.map((point, idx) => (
//               <li key={idx} className="flex items-start gap-3">
//                 <span className="text-[#E8A147] font-bold">✓</span>
//                 <span>{point}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StudioTrack;

import React from "react";
import { CheckCircle2 } from "lucide-react";

const studioBenefits = [
  "De-risks company creation by handling operational complexity",
  "Compresses time-to-MVP from 12–18 weeks to 6 weeks via Nexa",
  "Reduces burn by 40–50%, extending runway",
  "Founders focus on product, customers, defensibility – not back-office",
  "Milestone gates kill underperformers early and reallocate capital to winners",
];

const StudioTracks = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Studio Track
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Studio Track: <span className="text-[#E8A147]">De-Risk Company Creation</span>
          </h2>

          <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
            <span className="text-[#E8A147] font-medium">Total Allocation: $10M (20% of Fund)</span>
          </p>

          <p className="text-white/50 font-light max-w-3xl mx-auto">
            The studio originates and funds companies from ideation through to Series A readiness, using milestone-based vesting and rigorous gates at months 6, 12, and 18 to eliminate underperformers early and concentrate capital on winners.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Internal Ideation */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
                Internal Ideation
              </span>
              <h3 className="text-2xl font-serif font-medium text-white mb-4">$4M across 4 companies</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
                <p className="text-white/70 font-light">$1M per company, tranched on milestones</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Model</p>
                <p className="text-white/70 font-light">YVL ideates, validates market, recruits early-career EIRs to found</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Outcome Target</p>
                <p className="text-white/70 font-light">$1M ARR, proof of autonomous control, paying pilots by month 12–18</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Exit Target</p>
                <p className="text-[#E8A147] font-medium">4–6x within 3 years</p>
              </div>
            </div>
          </div>

          {/* Founder-First */}
          <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
                Founder-First
              </span>
              <h3 className="text-2xl font-serif font-medium text-white mb-4">$6M across 6 companies</h3>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
                <p className="text-white/70 font-light">$1M per company, milestone-based</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Model</p>
                <p className="text-white/70 font-light">Partners with domain-expert founders (10+ years ops experience)</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Outcome Target</p>
                <p className="text-white/70 font-light">Same milestone gates; 4–6x exit targets at Series A/B within 3–5 years</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Ownership</p>
                <p className="text-[#E8A147] font-medium">YVL retains 30–40%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Studio Matters */}
        <div className="p-10 rounded-[40px] bg-gradient-to-br from-[#E8A147]/5 to-transparent border border-[#E8A147]/20">
          <h3 className="text-xl font-serif font-medium text-white mb-6 text-center">Why the Studio Model Matters</h3>
          <ul className="space-y-3">
            {studioBenefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-white/70 font-light">
                <CheckCircle2 className="w-5 h-5 text-[#E8A147] flex-shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StudioTracks;
