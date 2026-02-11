// import React from "react";

// const investmentGates = [
//   {
//     number: "01",
//     title: "Mission-Critical AI",
//     description:
//       "Autonomous systems for infrastructure that can't fail — energy, defense, logistics, industrial."
//   },
//   {
//     number: "02",
//     title: "Vertical AI Platforms",
//     description:
//       "Purpose-built AI operating systems for underserved industries with proprietary workflows."
//   },
//   {
//     number: "03",
//     title: "Frontier Compute Infrastructure",
//     description:
//       "The picks-and-shovels layer: inference, edge compute, sovereign cloud, and AI middleware."
//   },
//   {
//     number: "04",
//     title: "AI-Native Enterprise Software",
//     description:
//       "Next-gen ERP, procurement, and workflow tools rebuilt from the ground up with AI at the core."
//   }
// ];

// const InvestmentGatesSection = () => {
//   return (
//     <section className="py-24 md:py-32 relative">
//       {/* Background glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//             Investment Thesis
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//             What We <span className="text-[#E8A147]">Invest In</span>
//           </h2>

//           <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
//             We back founders building at the intersection of AI and critical
//             infrastructure through four investment gates.
//           </p>
//         </div>

//         {/* Gates Grid */}
//         <div className="grid md:grid-cols-2 gap-6">
//           {investmentGates.map((gate) => (
//             <div
//               key={gate.number}
//               className="group relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
//             >
//               {/* Number */}
//               <div className="absolute top-6 right-6 text-[#E8A147]/20 text-6xl font-serif font-bold group-hover:text-[#E8A147]/40 transition-colors">
//                 {gate.number}
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                   {gate.title}
//                 </h3>
//                 <p className="text-white/50 leading-relaxed font-light">
//                   {gate.description}
//                 </p>
//               </div>

//               {/* Bottom glow */}
//               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/0 to-transparent group-hover:via-[#E8A147]/60 transition-all duration-500" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InvestmentGatesSection;


import React from "react";
import { motion } from "framer-motion";

const investmentGates = [
  {
    number: "01",
    title: "Mission-Critical AI",
    description:
      "Autonomous systems for infrastructure that can't fail — energy, defense, logistics, industrial."
  },
  {
    number: "02",
    title: "Vertical AI Platforms",
    description:
      "Purpose-built AI operating systems for underserved industries with proprietary workflows."
  },
  {
    number: "03",
    title: "Frontier Compute Infrastructure",
    description:
      "The picks-and-shovels layer: inference, edge compute, sovereign cloud, and AI middleware."
  },
  {
    number: "04",
    title: "AI-Native Enterprise Software",
    description:
      "Next-gen ERP, procurement, and workflow tools rebuilt from the ground up with AI at the core."
  }
];

const InvestmentGatesSection = () => {
  return (
    <section className="py-24 md:py-32 bg-[#030210] relative overflow-hidden">
      {/* Central glow to tie the grid together */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(232,161,71,0.05)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* REFINED HEADER */}
        <div className="text-center mb-20 space-y-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#E8A147] font-bold"
          >
            <span className="block w-8 h-px bg-[#E8A147]/30" />
            The Mandate
            <span className="block w-8 h-px bg-[#E8A147]/30" />
          </motion.p>

          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">
            Investment <span className="italic text-[#E8A147]">Gates.</span>
          </h2>

          <p className="text-white/40 text-sm font-light max-w-lg mx-auto leading-relaxed">
            Four strategic entry points where we deploy capital to build the next generation of industrial intelligence.
          </p>
        </div>

        {/* CLEAN 2X2 GRID */}
        <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-[40px] overflow-hidden">
          {investmentGates.map((gate, i) => (
            <motion.div
              key={gate.number}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 md:p-14 bg-[#030210] hover:bg-white/[0.02] transition-colors duration-700"
            >
              {/* Subtle light streak on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8A147]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="font-serif text-sm italic text-[#E8A147] opacity-60">
                    Gate_{gate.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-[#E8A147] transition-colors shadow-[0_0_10px_rgba(232,161,71,0)] group-hover:shadow-[0_0_10px_rgba(232,161,71,0.5)]" />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#E8A147] transition-colors duration-500">
                    {gate.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 leading-relaxed font-light group-hover:text-white/60 transition-colors duration-500">
                    {gate.description}
                  </p>
                </div>
              </div>

              {/* Decorative Corner (Inner focus) */}
              <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-20 transition-opacity">
                <div className="w-8 h-8 border-r border-b border-[#E8A147]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentGatesSection;