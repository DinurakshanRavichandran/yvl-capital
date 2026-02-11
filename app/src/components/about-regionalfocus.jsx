// import React from "react";
// import { Globe } from "lucide-react";

// const RegionalFocusSection = () => {
//   const points = [
//     "Sovereign AI initiatives driving $100B+ in regional investment",
//     "Greenfield opportunities in critical infrastructure modernization",
//     "Strategic location bridging Europe, Asia, and Africa",
//     "Young, tech-forward population with rising digital adoption",
//   ];

//   return (
//     <section className="py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
//               <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
//               Regional Focus
//             </p>

//             <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
//               Why <span className="text-[#E8A147]">MENA</span>
//             </h2>

//             <p className="text-white/50 text-lg leading-relaxed font-light">
//               The Middle East and North Africa represent one of the fastest-growing technology markets in the world. Governments are investing billions in AI, automation, and sovereign infrastructure.
//             </p>

//             <ul className="space-y-4">
//               {points.map((point, index) => (
//                 <li key={index} className="flex items-start gap-4 text-white/60 font-light">
//                   <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147]/60 flex-shrink-0" />
//                   {point}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="relative">
//             <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#E8A147]/5 to-transparent">
//               {/* Centered Globe */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <Globe className="w-48 h-48 text-[#E8A147]/20" />
//               </div>

//               {/* Stats at bottom */}
//               <div className="absolute inset-0 p-10 flex flex-col justify-end">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
//                     <p className="text-2xl font-serif text-[#E8A147]">$100B+</p>
//                     <p className="text-xs text-white/40 uppercase tracking-wider">Regional AI Investment</p>
//                   </div>
//                   <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
//                     <p className="text-2xl font-serif text-[#E8A147]">450M+</p>
//                     <p className="text-xs text-white/40 uppercase tracking-wider">Population</p>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default RegionalFocusSection;

import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const RegionalFocusSection = () => {
  const points = [
    "Sovereign AI initiatives driving $100B+ in regional investment",
    "Greenfield opportunities in critical infrastructure modernization",
    "Strategic location bridging Europe, Asia, and Africa",
    "Young, tech-forward population with rising digital adoption",
  ];

  return (
    <section className="py-24 md:py-32 bg-[#030210] relative overflow-hidden">
      {/* Background radial glow to simulate a "hotspot" */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT: REFINED LIST */}
          <div className="space-y-10">
            <div className="space-y-4">
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold"
              >
                <span className="block w-12 h-px bg-[#E8A147]" />
                Regional Focus
              </motion.p>

              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight">
                Why <span className="italic text-[#E8A147]">MENA</span>
              </h2>
            </div>

            <p className="text-white/50 text-base md:text-lg leading-relaxed font-light font-sans max-w-xl">
              The Middle East and North Africa represent one of the fastest-growing technology markets in the world. Governments are investing billions in AI, automation, and sovereign infrastructure.
            </p>

            <ul className="space-y-6">
              {points.map((point, index) => (
                <motion.li 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(232,161,71,0.6)]" />
                  </div>
                  <span className="text-sm md:text-base text-white/40 group-hover:text-white/80 transition-colors duration-300 font-light leading-snug">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* RIGHT VISUAL: THE COMMAND CENTER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[60px] overflow-hidden border border-white/10 bg-[#030210] relative group">
              
              {/* Radar Grid Overlay */}
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />
              
              {/* Animated Pulsing Globe */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <motion.div 
                    animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-[#E8A147] rounded-full blur-2xl"
                  />
                  <Globe className="w-40 h-40 text-[#E8A147] opacity-20 relative z-10" />
                </div>
              </div>

              {/* Data Overlays */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-1 opacity-40 font-mono text-[8px] text-[#E8A147] tracking-widest uppercase">
                <span>Coord_25.276987</span>
                <span>Alt_Active_Sovereign</span>
              </div>

              {/* Stats Grid - Unified with the Visual */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md">
                  <div className="bg-[#030210]/60 p-6 flex flex-col gap-1">
                    <p className="text-2xl md:text-3xl font-serif text-[#E8A147] tracking-tighter">$100B+</p>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">AI Investment</p>
                  </div>
                  <div className="bg-[#030210]/60 p-6 flex flex-col gap-1 border-l border-white/10">
                    <p className="text-2xl md:text-3xl font-serif text-[#E8A147] tracking-tighter">450M+</p>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">Population</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default RegionalFocusSection;