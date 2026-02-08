// import React from "react";

// const ExternalTrack = () => {
//   return (
//     <section className="py-32 bg-[#0A0A1A] text-white">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium mb-4">
//             External Track: Seed & Early Growth Investment
//           </h2>
//           <p className="text-white/60 text-lg md:text-xl">
//             Total Allocation: <span className="font-semibold">$22–28M (44–56% of Fund)</span>
//           </p>
//           <p className="mt-4 text-white/50 max-w-3xl mx-auto">
//             YVL leads or co-leads pre-seed, seed, and early Series A rounds for founder-led companies that meet our four non-negotiable investment gates.
//           </p>
//         </div>

//         {/* Tracks Grid */}
//         <div className="grid gap-12 md:grid-cols-3">
//           {/* Seed Core */}
//           <div className="bg-white/5 rounded-2xl p-8">
//             <h3 className="text-xl font-semibold mb-4">Seed Core</h3>
//             <p className="text-white/60 mb-2"><strong>Allocation:</strong> $8–10M across 10–14 companies</p>
//             <p className="text-white/60 mb-2"><strong>Check Size:</strong> $500K–$1M</p>
//             <p className="text-white/60 mb-2"><strong>Thesis Fit:</strong> First institutional seed in AI-native autonomous control companies</p>
//             <p className="text-white/60"><strong>Return Expectation:</strong> 2–3x MOIC to Series A/B</p>
//           </div>

//           {/* Seed to Series A */}
//           <div className="bg-white/5 rounded-2xl p-8">
//             <h3 className="text-xl font-semibold mb-4">Seed to Series A</h3>
//             <p className="text-white/60 mb-2"><strong>Allocation:</strong> $10–12M across 6–10 companies</p>
//             <p className="text-white/60 mb-2"><strong>Check Size:</strong> $1M–$3M</p>
//             <p className="text-white/60 mb-2"><strong>Thesis Fit:</strong> High-conviction seed extension or early Series A for thesis winners</p>
//             <p className="text-white/60"><strong>Return Expectation:</strong> 2–3x MOIC at Series B/C stage</p>
//           </div>

//           {/* Strategic Secondary */}
//           <div className="bg-white/5 rounded-2xl p-8">
//             <h3 className="text-xl font-semibold mb-4">Strategic Secondary</h3>
//             <p className="text-white/60 mb-2"><strong>Allocation:</strong> $4–6M across 3–5 deals</p>
//             <p className="text-white/60 mb-2"><strong>Check Size:</strong> $1M–$3M</p>
//             <p className="text-white/60 mb-2"><strong>Model:</strong> Secondaries in thesis-aligned companies, structured deals, ecosystem bets</p>
//             <p className="text-white/60"><strong>Return Expectation:</strong> 1.5–2x MOIC, faster exit timelines</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExternalTrack;

// import React from "react";
// import { CheckCircle2 } from "lucide-react";

// const externalBenefits = [
//   "YVL leads or co-leads pre-seed, seed, and early Series A rounds for founder-led companies that meet our four non-negotiable investment gates.",
// ];

// const ExternalTrack = () => {
//   return (
//     <section className="py-24 md:py-32 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-20">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//             External Track
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//             External Track: <span className="text-[#E8A147]">Seed & Early Growth Investment</span>
//           </h2>

//           <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
//             <span className="text-[#E8A147] font-medium">Total Allocation: $22–28M (44–56% of Fund)</span>
//           </p>

//           <p className="text-white/50 font-light max-w-3xl mx-auto">
//             YVL leads or co-leads pre-seed, seed, and early Series A rounds for founder-led companies that meet our four non-negotiable investment gates.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-12">
//           {/* Seed Core */}
//           <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//             <div className="mb-8">
//               <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
//                 Seed Core
//               </span>
//               <h3 className="text-2xl font-serif font-medium text-white mb-4">$8–10M across 10–14 companies</h3>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
//                 <p className="text-white/70 font-light">$500K–$1M</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Thesis Fit</p>
//                 <p className="text-white/70 font-light">First institutional seed in AI-native autonomous control companies</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Return Expectation</p>
//                 <p className="text-[#E8A147] font-medium">2–3x MOIC to Series A/B</p>
//               </div>
//             </div>
//           </div>

//           {/* Seed to Series A */}
//           <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//             <div className="mb-8">
//               <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
//                 Seed to Series A
//               </span>
//               <h3 className="text-2xl font-serif font-medium text-white mb-4">$10–12M across 6–10 companies</h3>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
//                 <p className="text-white/70 font-light">$1M–$3M</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Thesis Fit</p>
//                 <p className="text-white/70 font-light">High-conviction seed extension or early Series A for thesis winners</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Return Expectation</p>
//                 <p className="text-[#E8A147] font-medium">2–3x MOIC at Series B/C stage</p>
//               </div>
//             </div>
//           </div>

//           {/* Strategic Secondary */}
//           <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//             <div className="mb-8">
//               <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
//                 Strategic Secondary
//               </span>
//               <h3 className="text-2xl font-serif font-medium text-white mb-4">$4–6M across 3–5 deals</h3>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
//                 <p className="text-white/70 font-light">$1M–$3M</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Model</p>
//                 <p className="text-white/70 font-light">Secondaries in thesis-aligned companies, structured deals, ecosystem bets</p>
//               </div>
//               <div>
//                 <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Return Expectation</p>
//                 <p className="text-[#E8A147] font-medium">1.5–2x MOIC, faster exit timelines</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Why External Track Matters */}
//         <div className="p-10 rounded-[40px] bg-gradient-to-br from-[#E8A147]/5 to-transparent border border-[#E8A147]/20">
//           <h3 className="text-xl font-serif font-medium text-white mb-6 text-center">Why the External Track Matters</h3>
//           <ul className="space-y-3">
//             {externalBenefits.map((benefit, index) => (
//               <li key={index} className="flex items-start gap-3 text-white/70 font-light">
//                 <CheckCircle2 className="w-5 h-5 text-[#E8A147] flex-shrink-0 mt-0.5" />
//                 <span>{benefit}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExternalTrack;

import React from "react";

const ExternalTrack = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            External Track
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            External Track: <span className="text-[#E8A147]">Seed & Early Growth Investment</span>
          </h2>

          <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
            <span className="text-[#E8A147] font-medium">Total Allocation: $22–28M (44–56% of Fund)</span>
          </p>

          <p className="text-white/50 font-light max-w-3xl mx-auto">
            YVL leads or co-leads pre-seed, seed, and early Series A rounds for founder-led companies that meet our four non-negotiable investment gates.
          </p>
        </div>

        <div className="space-y-8">
          {/* Seed Core */}
          <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-2">Seed Core</h3>
                <p className="text-[#E8A147] font-medium">$8–10M across 10–14 companies</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                <p className="text-white text-lg font-semibold">$500K–$1M</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Thesis Fit</p>
                <p className="text-white/70 font-light text-sm">First institutional seed in AI-native autonomous control companies</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                <p className="text-[#E8A147] font-medium">2–3x MOIC to Series A/B</p>
              </div>
            </div>
          </div>

          {/* Seed to Series A */}
          <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-2">Seed to Series A</h3>
                <p className="text-[#E8A147] font-medium">$10–12M across 6–10 companies</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                <p className="text-white text-lg font-semibold">$1M–$3M</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Thesis Fit</p>
                <p className="text-white/70 font-light text-sm">High-conviction seed extension or early Series A for thesis winners</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                <p className="text-[#E8A147] font-medium">2–3x MOIC at Series B/C stage</p>
              </div>
            </div>
          </div>

          {/* Strategic Secondary */}
          <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-serif font-medium text-white mb-2">Strategic Secondary</h3>
                <p className="text-[#E8A147] font-medium">$4–6M across 3–5 deals</p>
              </div>
              <div className="text-right">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                <p className="text-white text-lg font-semibold">$1M–$3M</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Model</p>
                <p className="text-white/70 font-light text-sm">Secondaries in thesis-aligned companies, structured deals, ecosystem bets</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                <p className="text-[#E8A147] font-medium">1.5–2x MOIC, faster exit timelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExternalTrack;
