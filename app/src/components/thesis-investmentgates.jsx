// import React from "react";

// const InvestmentGatesSection = () => {
//   const investmentGates = [
//     {
//       gate: "1. AI-Nativism",
//       requirement:
//         "AI must be core infrastructure for autonomous control, not a thin wrapper around legacy systems.",
//       why: "Ensures architectural defensibility and scalability beyond simple automation.",
//     },
//     {
//       gate: "2. Autonomous Operational Control",
//       requirement:
//         "The platform must make real-time decisions and actuate physical systems without human-in-the-loop micromanagement.",
//       why: "Delivers the operational efficiency and reliability that defines our thesis.",
//     },
//     {
//       gate: "3. Transaction Ownership",
//       requirement:
//         "The company must own the underlying economic transaction – commodity sales, inputs, resource allocation, or compliance payments – not just a UI on top of someone else's rails.",
//       why: "Creates direct monetization and deeper integration with customer operations.",
//     },
//     {
//       gate: "4. Layered Defensibility",
//       requirement:
//         "Each company must have at least two moats, including physical/sensor integration or autonomous process control plus an additional layer such as proprietary data, regulatory lock-in, or financial embedding.",
//       why: "Builds compounding barriers to entry that protect margins and market position.",
//     },
//   ];

//   return (
//     <section className="py-24 md:py-32 relative">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//             Investment Framework
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//             The Four Non-Negotiable <span className="text-[#E8A147]">Investment Gates</span>
//           </h2>

//           <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
//             Every company must pass all four gates before YVL invests.
//           </p>
//         </div>

//         {/* Gates List */}
//         <div className="space-y-6">
//           {investmentGates.map((gate, index) => (
//             <div
//               key={index}
//               className="group p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
//             >
//               <div className="grid lg:grid-cols-[200px_1fr_1fr] gap-8 items-start">
//                 <div>
//                   <h3 className="text-xl font-serif font-medium text-[#E8A147] mb-2">{gate.gate}</h3>
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Requirement</p>
//                   <p className="text-white/70 font-light leading-relaxed">{gate.requirement}</p>
//                 </div>

//                 <div>
//                   <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Why It Matters</p>
//                   <p className="text-white/70 font-light leading-relaxed">{gate.why}</p>
//                 </div>
//               </div>
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
import { ShieldCheck, Workflow, Landmark, Layers } from "lucide-react";

const InvestmentGatesSection = () => {
  const investmentGates = [
    {
      gate: "AI-Nativism",
      icon: <Workflow className="w-5 h-5" />,
      requirement: "AI must be core infrastructure for autonomous control, not a thin wrapper around legacy systems.",
      why: "Ensures architectural defensibility and scalability beyond simple automation.",
      tag: "CORE_ARCH"
    },
    {
      gate: "Autonomous Operational Control",
      icon: <ShieldCheck className="w-5 h-5" />,
      requirement: "The platform must make real-time decisions and actuate physical systems without human-in-the-loop micromanagement.",
      why: "Delivers the operational efficiency and reliability that defines our thesis.",
      tag: "OP_INTEL"
    },
    {
      gate: "Transaction Ownership",
      icon: <Landmark className="w-5 h-5" />,
      requirement: "The company must own the underlying economic transaction – commodity sales, inputs, or compliance payments.",
      why: "Creates direct monetization and deeper integration with customer operations.",
      tag: "ECON_MOAT"
    },
    {
      gate: "Layered Defensibility",
      icon: <Layers className="w-5 h-5" />,
      requirement: "At least two moats: physical/sensor integration plus proprietary data or regulatory lock-in.",
      why: "Builds compounding barriers to entry that protect margins and market position.",
      tag: "SEC_BARRIER"
    },
  ];

  return (
    <section className="py-32 md:py-48 bg-[#030210] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#E8A14715_0%,transparent_50%)]" />

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-[#E8A147]/30 bg-[#E8A147]/5 mb-6"
          >
            <div className="w-1 h-1 rounded-full bg-[#E8A147] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#E8A147] font-bold">Standard Protocol</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-[clamp(32px,5vw,64px)] text-white leading-[1.1] mb-8"
          >
            The Four <span className="italic text-[#E8A147]">Investment Gates</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 text-lg font-light border-l border-white/10 pl-6"
          >
            Strict adherence to these gates ensures we only back platforms capable of governing the spine of civilization.
          </motion.p>
        </div>

        {/* The Gates Sequence */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[#E8A147]/50 via-white/5 to-transparent hidden md:block" />

          <div className="space-y-12">
            {investmentGates.map((gate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative md:pl-20"
              >
                {/* Visual Indicator (The Dot/Icon) */}
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#030210] border border-white/10 flex items-center justify-center z-20 group-hover:border-[#E8A147] transition-colors duration-500 hidden md:flex">
                  <div className="text-white/20 group-hover:text-[#E8A147] transition-colors">
                    {gate.icon}
                  </div>
                </div>

                {/* The Content Card */}
                <div className="relative p-8 md:p-12 rounded-sm border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:border-[#E8A147]/20 transition-all duration-700">
                  {/* Gate Number Label */}
                  <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/10 tracking-[0.4em] uppercase">
                    Gate_0{index + 1} // {gate.tag}
                  </div>

                  <div className="grid lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-4">
                      <h3 className="text-2xl font-serif text-white mb-2 italic">
                        {gate.gate}
                      </h3>
                      <div className="h-px w-12 bg-[#E8A147]/40 group-hover:w-full transition-all duration-1000" />
                    </div>

                    <div className="lg:col-span-4">
                      <span className="block text-[10px] uppercase tracking-widest text-[#E8A147] mb-3 font-bold opacity-60">Requirement</span>
                      <p className="text-white/60 font-light text-sm leading-relaxed italic">
                        "{gate.requirement}"
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <span className="block text-[10px] uppercase tracking-widest text-white/30 mb-3 font-bold">Strategic Alpha</span>
                      <p className="text-white/40 font-light text-sm leading-relaxed">
                        {gate.why}
                      </p>
                    </div>
                  </div>
                  
                  {/* Subtle Scanning Light Effect */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-full h-20 bg-gradient-to-b from-transparent via-[#E8A147]/5 to-transparent"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentGatesSection;