// import React from "react";

// const ReservesSupport = () => {
//   return (
//     <section className="py-32 bg-[#0A0A1A] text-white">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium mb-4">
//             Reserves & Strategic Support
//           </h2>
//           <p className="text-white/60 text-lg md:text-xl">
//             Total Allocation: <span className="font-semibold">$20M (40% of Fund)</span>
//           </p>
//         </div>

//         {/* Follow-On Reserves */}
//         <div className="bg-white/5 rounded-2xl p-8 mb-12">
//           <h3 className="text-xl font-semibold mb-4">Follow-On Reserves</h3>
//           <p className="text-white/60 mb-2"><strong>Allocation:</strong> $15M (30% of fund)</p>
//           <p className="text-white/60 mb-2"><strong>Purpose:</strong> Pro-rata participation across all studio and external portfolio companies</p>
//           <p className="text-white/60 mb-2"><strong>Mechanism:</strong> Deployed at Series A, B, and secondary stages</p>
//           <p className="text-white/60 mb-2"><strong>Ownership Protection:</strong> Prevents dilution below YVL's 20% ownership threshold</p>
//           <p className="text-white/60"><strong>Impact:</strong> Ensures YVL compounds returns, deepens founder relationships, and maintains board position and voting rights across exits</p>
//         </div>

//         {/* Strategic Investments & Ecosystem */}
//         <div className="bg-white/5 rounded-2xl p-8">
//           <h3 className="text-xl font-semibold mb-4">Strategic Investments & Ecosystem</h3>
//           <p className="text-white/60 mb-2"><strong>Allocation:</strong> $5M (10% of fund)</p>
//           <p className="text-white/60 mb-2"><strong>Uses:</strong></p>
//           <ul className="list-disc list-inside text-white/50 space-y-1 ml-2">
//             <li>Secondaries in thesis-aligned companies entering Series B or scaling phase</li>
//             <li>Structured deals with companies seeking operational infrastructure capital</li>
//             <li>Ecosystem amplification (founder referrals, meetups, research grants)</li>
//             <li>Strategic partnerships with government programs or corporate venture arms</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ReservesSupport;


import React from "react";

const ReservesSupport = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Reserves & Support
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Reserves & <span className="text-[#E8A147]">Strategic Support</span>
          </h2>

          <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
            <span className="text-[#E8A147] font-medium">Total Allocation: $20M (40% of Fund)</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Follow-On Reserves */}
          <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-medium text-white mb-2">
                Follow-On Reserves
              </h3>
              <p className="text-[#E8A147] font-medium">$15M (30% of fund)</p>
            </div>

            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                  Purpose
                </p>
                <p className="text-white/70 font-light">
                  Pro-rata participation across all studio and external portfolio companies
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                  Mechanism
                </p>
                <p className="text-white/70 font-light">
                  Deployed at Series A, B, and secondary stages
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                  Ownership Protection
                </p>
                <p className="text-white/70 font-light">
                  Prevents dilution below YVL's 20% ownership threshold
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-white/40 mb-1">
                  Impact
                </p>
                <p className="text-white/70 font-light">
                  Ensures YVL compounds returns, deepens founder relationships, and maintains board position and voting rights across exits
                </p>
              </div>
            </div>
          </div>

          {/* Strategic Investments & Ecosystem */}
          <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-medium text-white mb-2">
                Strategic Investments & Ecosystem
              </h3>
              <p className="text-[#E8A147] font-medium">$5M (10% of fund)</p>
            </div>

            <div className="space-y-4">
              <p className="text-white/70 font-light">
                Secondaries in thesis-aligned companies entering Series B or scaling phase
              </p>
              <p className="text-white/70 font-light">
                Structured deals with companies seeking operational infrastructure capital
              </p>
              <p className="text-white/70 font-light">
                Ecosystem amplification (founder referrals, meetups, research grants)
              </p>
              <p className="text-white/70 font-light">
                Strategic partnerships with government programs or corporate venture arms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservesSupport;
