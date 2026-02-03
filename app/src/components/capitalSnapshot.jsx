// import React from "react";

// const CapitalSnapshot = () => {
//   return (
//     <div className="bg-[#030210] text-white">
//       {/* ===============================
//          Capital Snapshot (Top Section)
//          =============================== */}
//       <section className="max-w-[1100px] mx-auto px-6 pt-[120px] pb-[80px] text-center">
//         <h2 className="text-[42px] font-semibold mb-3">
//           Capital Snapshot
//         </h2>

//         <p className="text-[18px] text-gray-500 max-w-[700px] mx-auto mb-12">
//           A $50M fund deploying early, reserving deep, and scaling conviction over time.
//         </p>

//         <div className="text-[22px] font-semibold mb-[60px]">
//           $50M Total Capital
//         </div>

//         {/* Timeline */}
//         <div className="relative my-[100px] hidden md:block">
//           {/* Line */}
//           <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-gradient-to-r from-slate-300 to-gray-800" />

//           {/* Stage 1 */}
//           <div className="absolute top-1/2 left-[5%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <span className="block text-[14px] font-semibold mb-[14px] whitespace-nowrap">
//               Pre-Seed
//             </span>
//             <div className="w-[10px] h-[10px] bg-gray-800 rounded-full mx-auto" />
//             <span className="block text-[13px] text-gray-500 mt-[14px] whitespace-nowrap">
//               Studio
//             </span>
//           </div>

//           {/* Stage 2 */}
//           <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <span className="block text-[14px] font-semibold mb-[14px] whitespace-nowrap">
//               Seed
//             </span>
//             <div className="w-[10px] h-[10px] bg-gray-800 rounded-full mx-auto" />
//             <span className="block text-[13px] text-gray-500 mt-[14px] whitespace-nowrap">
//               Core VC
//             </span>
//           </div>

//           {/* Stage 3 */}
//           <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <span className="block text-[14px] font-semibold mb-[14px] whitespace-nowrap">
//               Series A
//             </span>
//             <div className="w-[10px] h-[10px] bg-gray-800 rounded-full mx-auto" />
//             <span className="block text-[13px] text-gray-500 mt-[14px] whitespace-nowrap">
//               High Conviction
//             </span>
//           </div>

//           {/* Stage 4 */}
//           <div className="absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 text-center">
//             <span className="block text-[14px] font-semibold mb-[14px] whitespace-nowrap">
//               Series B–D
//             </span>
//             <div className="w-[10px] h-[10px] bg-gray-800 rounded-full mx-auto" />
//             <span className="block text-[13px] text-gray-500 mt-[14px] whitespace-nowrap">
//               Follow-On
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ===============================
//          Supporting Rationale (Bottom)
//          =============================== */}
//       <section className="max-w-[1000px] mx-auto px-6 mb-[80px]">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px] md:gap-[56px] text-center">
//           <div>
//             <h4 className="text-[18px] font-semibold mb-[10px]">
//               Early Where It Matters
//             </h4>
//             <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[300px] mx-auto">
//               We invest at pre-seed and seed, where ownership and platform direction are established.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-[18px] font-semibold mb-[10px]">
//               Reserved to Scale Winners
//             </h4>
//             <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[300px] mx-auto">
//               Significant follow-on capital protects ownership through Series A, B, and beyond.
//             </p>
//           </div>

//           <div>
//             <h4 className="text-[18px] font-semibold mb-[10px]">
//               Built for Conviction
//             </h4>
//             <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[300px] mx-auto">
//               Studio creation and early VC investing feed a concentrated, high-conviction portfolio.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <div className="text-center mb-[120px]">
//         <a
//           href="/investment-allocation"
//           className="text-[16px] font-medium text-gray-800"
//         >
//           View Full Investment Allocation →
//         </a>
//       </div>
//     </div>
//   );
// };

// export default CapitalSnapshot;


import React from "react";

const CapitalSnapshot = () => {
  const stages = [
    { label: "Pre-Seed", sub: "Studio", pos: "5%" },
    { label: "Seed", sub: "Core VC", pos: "35%" },
    { label: "Series A", sub: "High Conviction", pos: "65%" },
    { label: "Series B–D", sub: "Follow-On", pos: "95%" },
  ];

  const rationales = [
    {
      title: "Early Where It Matters",
      desc: "We invest at pre-seed and seed, where ownership and platform direction are established.",
    },
    {
      title: "Reserved to Scale Winners",
      desc: "Significant follow-on capital protects ownership through Series A, B, and beyond.",
    },
    {
      title: "Built for Conviction",
      desc: "Studio creation and early VC investing feed a concentrated, high-conviction portfolio.",
    },
  ];

  return (
    <div className="bg-[#030210] text-white font-sans overflow-hidden">
      {/* ===============================
          Capital Snapshot (Top Section)
          =============================== */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 text-center">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

        <p className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] mb-6 font-semibold">
          Fund Strategy
        </p>
        
        <h2 className="text-[clamp(32px,5vw,52px)] font-serif font-medium mb-6 tracking-tight leading-tight">
          Capital Snapshot
        </h2>

        <p className="text-lg text-white/50 max-w-[700px] mx-auto mb-16 font-light leading-relaxed">
          A $50M fund deploying early, reserving deep, and scaling conviction over time.
        </p>

        {/* Total Capital Highlight */}
        <div className="inline-block relative px-10 py-4 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-20 shadow-2xl">
           <div className="absolute inset-0 rounded-full border-t border-white/20 pointer-events-none" />
           <span className="text-2xl md:text-3xl font-serif text-[#D4AF37] tracking-wider">$50M <span className="text-white/80 font-sans text-lg ml-2">Total Capital</span></span>
        </div>

        {/* Timeline Visual */}
        <div className="relative max-w-[900px] mx-auto my-24 hidden md:block">
          {/* Main Track */}
          <div className="absolute top-1/2 left-0 w-full h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* Active Progress Shadow */}
          <div className="absolute top-1/2 left-0 w-[65%] h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/40 to-[#D4AF37]" />

          {stages.map((stage, idx) => (
            <div 
              key={idx}
              className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 text-center group"
              style={{ left: stage.pos }}
            >
              <span className="block text-[12px] font-bold tracking-[0.1em] uppercase mb-5 text-white/40 group-hover:text-[#D4AF37] transition-colors duration-300">
                {stage.label}
              </span>
              
              {/* Node */}
              <div className="relative w-4 h-4 rounded-full bg-[#030210] border border-[#D4AF37] mx-auto group-hover:scale-125 transition-transform duration-500">
                <div className="absolute inset-[3px] rounded-full bg-[#D4AF37] shadow-[0_0_15px_#D4AF37]" />
              </div>

              <span className="block text-[13px] text-white/60 mt-5 font-serif italic whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                {stage.sub}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
          Supporting Rationale (Bottom)
          =============================== */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rationales.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-10 rounded-[35px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] group hover:border-[#D4AF37]/30 transition-all duration-500"
            >
              {/* Specular edge light */}
              <div className="absolute inset-0 rounded-[35px] border-t border-l border-white/10 pointer-events-none" />
              
              <div className="w-8 h-[1px] bg-[#D4AF37] mb-8 group-hover:w-16 transition-all duration-500" />
              
              <h4 className="text-xl font-serif font-medium mb-4 text-white/90">
                {item.title}
              </h4>
              <p className="text-[15px] text-white/50 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pb-32">
        <a
          href="/investment-allocation"
          className="group relative inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/40 hover:text-[#D4AF37] transition-colors duration-300"
        >
          View Full Investment Allocation 
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          <div className="absolute -bottom-2 left-0 w-0 h-px bg-[#D4AF37]/40 group-hover:w-full transition-all duration-500" />
        </a>
      </div>
    </div>
  );
};

export default CapitalSnapshot;