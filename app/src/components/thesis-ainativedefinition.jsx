// import React from "react";

// const AiNativeDefinitionSection = () => {
//   const aiNativePoints = [
//     {
//       number: "01",
//       title: "AI as Infrastructure, Not a Feature",
//       description:
//         "We back platforms where AI is the core decision engine for real-time operations, not a bolt-on to existing workflows. The AI must be fundamental to the product's value proposition and operational integrity.",
//     },
//     {
//       number: "02",
//       title: "Direct Control of Physical Systems",
//       description:
//         "Our companies control equipment and resources in the real world – greenhouse climate, water dosing, bioreactors, emissions, construction workflows – rather than just tracking tasks or digitizing administration.",
//     },
//     {
//       number: "03",
//       title: "Continuous, Mission-Critical Processes",
//       description:
//         "We target operations that run continuously or multiple times per day, where failure is unacceptable and switching costs are high. These are not discretionary tools – they are essential operational infrastructure.",
//     },
//   ];

//   return (
//     <section className="py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//             Definition
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
//             What We Mean By{" "}
//             <span className="text-[#E8A147]">"AI-Native Autonomous Control"</span>
//           </h2>
//         </div>

//         {/* Points */}
//         <div className="space-y-6">
//           {aiNativePoints.map((point) => (
//             <div
//               key={point.number}
//               className="group relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
//             >
//               {/* Number */}
//               <div className="absolute top-6 right-6 text-[#E8A147]/20 text-6xl font-serif font-bold group-hover:text-[#E8A147]/40 transition-colors">
//                 {point.number}
//               </div>

//               {/* Title & Description */}
//               <div className="relative z-10">
//                 <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                   {point.title}
//                 </h3>
//                 <p className="text-white/60 leading-relaxed font-light">
//                   {point.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AiNativeDefinitionSection;


import React from "react";
import { motion } from "framer-motion";
import { Zap, Cpu, Activity } from "lucide-react";

const AiNativeDefinitionSection = () => {
  const aiNativePoints = [
    {
      number: "01",
      icon: <Cpu className="w-5 h-5" />,
      title: "AI as Infrastructure, Not a Feature",
      description:
        "We back platforms where AI is the core decision engine for real-time operations, not a bolt-on to existing workflows. The AI must be fundamental to the product's value proposition and operational integrity.",
    },
    {
      number: "02",
      icon: <Zap className="w-5 h-5" />,
      title: "Direct Control of Physical Systems",
      description:
        "Our companies control equipment and resources in the real world – greenhouse climate, water dosing, bioreactors, emissions, construction workflows – rather than just tracking tasks or digitizing administration.",
    },
    {
      number: "03",
      icon: <Activity className="w-5 h-5" />,
      title: "Continuous, Mission-Critical Processes",
      description:
        "We target operations that run continuously or multiple times per day, where failure is unacceptable and switching costs are high. These are not discretionary tools – they are essential operational infrastructure.",
    },
  ];

  return (
    <section className="relative py-24 md:py-40 overflow-hidden bg-[#030210]">
      {/* Structural Background Detail */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#E8A147] font-bold">
              Operational Mandate
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#E8A147]/40 to-transparent" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-white max-w-3xl"
          >
            Defining{" "}
            <span className="italic text-[#E8A147]">AI-Native</span>
            <br />
            Autonomous Control
          </motion.h2>
        </div>

        {/* Points - Interactive Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {aiNativePoints.map((point, idx) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative"
            >
              {/* The "Box" */}
              <div className="relative h-full p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.04] group-hover:border-[#E8A147]/30 group-hover:-translate-y-2">
                
                {/* Visual Identity: Icon & Number */}
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 rounded-lg bg-[#E8A147]/10 text-[#E8A147] border border-[#E8A147]/20 group-hover:scale-110 transition-transform duration-500">
                    {point.icon}
                  </div>
                  <span className="font-mono text-xs text-white/20 group-hover:text-[#E8A147]/40 transition-colors tracking-widest">
                    SYS_REQ_{point.number}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-serif text-white group-hover:text-[#E8A147] transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed font-light group-hover:text-white/60 transition-colors duration-300">
                    {point.description}
                  </p>
                </div>

                {/* Corner Accent for Hover */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-[#E8A147] opacity-0 group-hover:opacity-100 group-hover:w-4 group-hover:h-4 transition-all duration-500 rounded-br-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiNativeDefinitionSection;