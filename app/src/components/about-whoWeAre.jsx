// import React from "react";

// const WhoWeAreSection = () => {
//   return (
//     <section className="py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div className="space-y-8">
//             {/* Header */}
//             <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
//               <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
//               The Fund
//             </p>

//             <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
//               A new kind of <span className="text-[#E8A147]">venture studio</span> for the AI era.
//             </h2>

//             <p className="text-white/50 text-lg leading-relaxed font-light">
//               We are operators, builders, and investors who understand that the next
//               decade belongs to companies that deploy AI where it matters most — in
//               mission-critical systems that power the real world.
//             </p>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-6 pt-4">
//               <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
//                 <p className="text-3xl font-serif text-[#E8A147] mb-2">$50M</p>
//                 <p className="text-sm text-white/40 uppercase tracking-wider">
//                   Fund Size
//                 </p>
//               </div>

//               <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
//                 <p className="text-3xl font-serif text-[#E8A147] mb-2">Studio</p>
//                 <p className="text-sm text-white/40 uppercase tracking-wider">
//                   Backed Model
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <div className="relative">
//             <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent">
//               <img
//                 src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
//                 alt="Technology Infrastructure"
//                 className="w-full h-full object-cover opacity-40 grayscale"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/50 to-transparent" />

//               <div className="absolute bottom-8 left-8 right-8">
//                 <p className="text-[#E8A147] text-sm uppercase tracking-[0.3em] mb-3">
//                   Our Approach
//                 </p>
//                 <p className="text-white/80 text-xl font-serif leading-relaxed">
//                   “Originate. Build. Scale. We are hands-on partners from day zero.”
//                 </p>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoWeAreSection;


import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Globe, Cpu } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <section className="relative py-32 bg-[#030210] overflow-hidden">
      {/* 1. BLUEPRINT BACKGROUND PATTERN */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* LEFT CONTENT: THE MANIFESTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <p className="flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
                <span className="block w-12 h-px bg-[#E8A147]" />
                Identity / Protocol 01
              </p>
              <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] tracking-tighter">
                A venture studio <br />
                for the <span className="italic text-[#E8A147]">AI Industrial</span> era.
              </h2>
            </div>

            <p className="text-white/50 text-xl leading-relaxed font-light max-w-xl font-sans">
              We operate at the intersection of raw compute and physical systems. 
              We don't just invest in software; we build the <span className="text-white font-medium">autonomous infrastructure</span> 
              that makes the next decade of industry possible.
            </p>

            {/* UPGRADED STATS CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-sm">
              <div className="p-8 bg-[#030210] group hover:bg-white/[0.02] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Cpu size={18} className="text-[#E8A147] opacity-50" />
                  <span className="text-[9px] text-white/20 font-mono">01_CAPITAL</span>
                </div>
                <p className="text-5xl font-serif text-white mb-2 tracking-tighter">$50M</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                  Deployable Fund
                </p>
              </div>

              <div className="p-8 bg-[#030210] group hover:bg-white/[0.02] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <Shield size={18} className="text-[#E8A147] opacity-50" />
                  <span className="text-[9px] text-white/20 font-mono">02_MODEL</span>
                </div>
                <p className="text-5xl font-serif text-white mb-2 tracking-tighter">Studio</p>
                <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold">
                  Hands-On Origin
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL: THE "LENS" */}
          <div className="relative group">
            {/* Decorative Gold Frame Corner */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#E8A147]/30 group-hover:border-[#E8A147] transition-all duration-700" />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                alt="Technology Infrastructure"
                className="w-full h-full object-cover opacity-60 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-1000"
              />

              {/* Laser Scanning Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/10 to-transparent h-1/2 w-full -translate-y-full animate-[scan_4s_linear_infinite]" />
              
              <div className="absolute inset-0 bg-[#030210]/40 group-hover:bg-transparent transition-colors duration-700" />

              {/* Visual Metadata Overlay */}
              <div className="absolute top-8 left-8 flex flex-col gap-2">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 border border-white/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] animate-pulse" />
                  <span className="font-mono text-[9px] text-white uppercase tracking-tighter">System Live: Origin Build</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#030210] to-transparent">
                <p className="font-serif text-2xl text-white italic leading-snug max-w-xs">
                  “We provide the architecture for those who build the physical future.”
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="h-px w-8 bg-[#E8A147]" />
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#E8A147]">YVL Philosophy</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Background Element */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#E8A147]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#E8A147]/20 transition-all duration-700" />
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default WhoWeAreSection;