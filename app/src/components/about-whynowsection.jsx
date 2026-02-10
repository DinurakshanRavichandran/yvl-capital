// // import React from "react";

// // const WhyNowSection = () => {
// //   return (
// //     <section className="py-24 md:py-32">
// //       <div className="max-w-6xl mx-auto px-6">
// //         <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">

// //           {/* LEFT HEADER */}
// //           <div className="space-y-8">
// //             <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
// //               <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
// //               Market Timing
// //             </p>

// //             <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
// //               Why <span className="text-[#E8A147]">Now</span>
// //             </h2>
// //           </div>

// //           {/* RIGHT CONTENT BOX */}
// //           <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
// //             <div className="absolute top-0 left-10 w-20 h-[2px] bg-gradient-to-r from-[#E8A147] to-transparent" />

// //             <p className="text-white/70 text-xl leading-relaxed font-light mb-6">
// //               We are at an inflection point. AI has moved from research labs to
// //               production systems. The companies that will define the next era are
// //               being built{" "}
// //               <span className="text-[#E8A147] font-medium">right now</span>.
// //             </p>

// //             <p className="text-white/50 leading-relaxed font-light">
// //               Foundation models are commoditizing. The value is shifting to
// //               application layers — companies that can deploy AI into regulated,
// //               high-stakes environments where failure isn't an option. This is our
// //               thesis, and this is our moment.
// //             </p>
// //           </div>

// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default WhyNowSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { Clock, Radio, Zap, ArrowRight } from "lucide-react";

// const WhyNowSection = () => {
//   const inflectionPoints = [
//     {
//       phase: "Phase 01",
//       title: "Commoditization",
//       desc: "Foundation models have peaked in accessibility. Intelligence is now a utility, not a moat.",
//       icon: <Radio size={16} />
//     },
//     {
//       phase: "Phase 02",
//       title: "Structural Shift",
//       desc: "Value is migrating from pure research to vertically integrated industrial applications.",
//       icon: <Zap size={16} />
//     }
//   ];

//   return (
//     <section className="relative py-32 bg-[#02010a] overflow-hidden">
//       {/* Background Radial Glow */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#E8A147]/5 blur-[120px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-20 items-start">
          
//           {/* LEFT: THE SIGNAL */}
//           <div className="space-y-12">
//             <div className="space-y-6">
//               <motion.div 
//                 initial={{ opacity: 0, x: -20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold"
//               >
//                 <Clock size={14} />
//                 Market Inflection
//               </motion.div>
              
//               <h2 className="font-serif text-6xl md:text-8xl text-white tracking-tighter leading-[0.9]">
//                 Why <br />
//                 <span className="italic text-[#E8A147]">Now?</span>
//               </h2>
//             </div>

//             {/* Inflection Point Cards */}
//             <div className="space-y-px bg-white/5 border border-white/10 rounded-sm overflow-hidden">
//               {inflectionPoints.map((point, i) => (
//                 <motion.div 
//                   key={i}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: i * 0.2 }}
//                   className="p-8 bg-[#02010a] hover:bg-white/[0.02] transition-colors group"
//                 >
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="font-sans text-[10px] text-white/30 uppercase tracking-widest font-bold">
//                       {point.phase}
//                     </span>
//                     <div className="text-[#E8A147] opacity-40 group-hover:opacity-100 transition-opacity">
//                       {point.icon}
//                     </div>
//                   </div>
//                   <h3 className="text-xl text-white font-serif italic mb-2">{point.title}</h3>
//                   <p className="text-sm text-white/40 leading-relaxed font-light">
//                     {point.desc}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: THE CORE THESIS */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             className="relative"
//           >
//             {/* Architectural Border Layer */}
//             <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 -z-10" />
            
//             <div className="relative p-12 md:p-16 bg-[#030210] border border-white/20 rounded-sm">
//               <div className="absolute top-0 right-10 flex gap-1 -translate-y-1/2">
//                 {[1, 2, 3].map(i => (
//                   <div key={i} className="w-1 h-4 bg-[#E8A147]" />
//                 ))}
//               </div>

//               <div className="space-y-8">
//                 <blockquote className="font-serif text-3xl md:text-4xl text-white leading-tight tracking-tight italic">
//                   “We have moved from research labs to <span className="text-[#E8A147]">production systems</span>. The next giants are being forged in the friction of the real world.”
//                 </blockquote>

//                 <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />

//                 <div className="space-y-6">
//                   <p className="text-white/60 text-lg leading-relaxed font-light">
//                     Foundation models are commoditizing. The alpha has migrated to the 
//                     <span className="text-white font-medium"> application layers</span>—companies 
//                     deploying intelligence into regulated, high-stakes environments where failure 
//                     isn’t an option.
//                   </p>
                  
//                   <div className="flex flex-wrap gap-4">
//                     {['Aerospace', 'Energy', 'Sovereign Infra'].map((tag) => (
//                       <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full font-sans text-[9px] uppercase tracking-widest text-white/40 bg-white/5">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>

//                   <motion.div 
//                     whileHover={{ x: 10 }}
//                     className="pt-8 flex items-center gap-3 text-[#E8A147] font-sans text-[11px] uppercase tracking-[0.3em] font-bold cursor-pointer"
//                   >
//                     Explore the Thesis <ArrowRight size={14} />
//                   </motion.div>
//                 </div>
//               </div>

//               {/* Decorative Tech Specs */}
//               <div className="absolute bottom-4 right-6 font-mono text-[8px] text-white/10 uppercase tracking-[0.5em]">
//                 Ref: Industrial_Cycle_2026
//               </div>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyNowSection;
import React from "react";
import { motion } from "framer-motion";
import { Clock, Radio, Zap, ArrowRight, TrendingUp } from "lucide-react";

const WhyNowSection = () => {
  const inflectionPoints = [
    {
      phase: "01",
      title: "Utility Shift",
      desc: "Intelligence has moved from a rare luxury to a foundational utility.",
      icon: <Radio size={16} />
    },
    {
      phase: "02",
      title: "Value Migration",
      desc: "Capital is flowing away from general labs toward specific industrial moats.",
      icon: <TrendingUp size={16} />
    }
  ];

  return (
    <section className="relative py-24 bg-[#02010a] overflow-hidden">
      {/* Ambient Depth */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8A147]/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
          
          {/* LEFT: REFINED HEADER & CARDS */}
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#E8A147]/20 bg-[#E8A147]/5"
              >
                <Clock size={12} className="text-[#E8A147]" />
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#E8A147] font-bold">Market Timing</span>
              </motion.div>

              <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-tight">
                The <span className="italic">Inflection</span> <br /> 
                is <span className="text-[#E8A147]">Now.</span>
              </h2>
            </div>

            <div className="space-y-3">
              {inflectionPoints.map((point, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 rounded-[24px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#02010a] border border-white/10 flex items-center justify-center text-[#E8A147] shadow-sm">
                    {point.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-white italic mb-0.5">{point.title}</h3>
                    <p className="text-xs text-white/40 leading-relaxed font-light">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: REFINED CONTENT CONTAINER */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="relative p-10 md:p-12 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden">
              
              <div className="space-y-8 relative z-10">
                <blockquote className="font-serif text-2xl md:text-3xl text-white leading-snug tracking-tight">
                  “We have moved from the lab to the <span className="italic text-[#E8A147]">foundry</span>. The next giants are being forged in the friction of the real world.”
                </blockquote>

                <p className="text-white/50 text-base leading-relaxed font-light max-w-xl font-sans">
                  The era of general AI is ending. We are entering the era of 
                  <span className="text-white font-medium"> vertical execution</span>—where failure 
                  is not an option and precision is the only moat.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Aerospace', 'Energy', 'Sovereign Infra'].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/5 font-sans text-[8px] uppercase tracking-widest text-white/30 bg-white/[0.02]">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  whileHover={{ y: -2 }}
                  className="group px-6 py-3 bg-[#E8A147] rounded-full text-[#02010a] font-sans text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 transition-all hover:shadow-[0_8px_20px_rgba(232,161,71,0.2)]"
                >
                  Explore the Thesis 
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* HUD Element */}
              <div className="absolute bottom-6 right-8 flex items-center gap-3 opacity-10">
                <div className="h-0.5 w-8 rounded-full bg-white" />
                <span className="font-mono text-[7px] text-white tracking-[0.3em]">TS.2026</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;