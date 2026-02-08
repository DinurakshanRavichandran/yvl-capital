// import React from "react";

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 px-6">
//       <div className="max-w-5xl mx-auto text-center">
//         {/* Eyebrow / Label */}
//         <div className="inline-flex items-center gap-3 mb-6">
//           <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//           <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
//             YVL Venture Studio
//           </span>
//           <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//         </div>

//         {/* Heading */}
//         <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
//           Build Your AI-Native Company
//           <br />
//           <span className="text-[#E8A147]">with YVL's Venture Studio</span>
//         </h1>

//         {/* Description */}
//         <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-6">
//           YVL's studio builds AI-native autonomous control companies from day zero, pairing entrepreneurial talent with proprietary operational infrastructure and a proven playbook.
//         </p>

//         <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
//           The studio model compresses MVP cycles to 6 weeks, cuts burn by 40–50%, and applies hard gates at months 6, 12, and 18 so only the most defensible companies graduate to scale. We combine capital, hands-on guidance, and our AI-powered operational platform Nexa to turn structural inefficiencies in eternal industries into scalable, defensible businesses.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import { Zap, Shield, Timer, BarChart } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 px-6 overflow-hidden bg-[#02010a]">
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* SVG Noise Texture for a tactile feel */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Subtle Focal Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(232,161,71,0.05)_0%,_transparent_60%)]" />
        
        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 border-x border-white/[0.03] mx-auto max-w-7xl" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto text-center"
      >
        {/* EYEBROW ASSEMBLY */}
        <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-10">
          <div className="flex -space-x-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8A147] opacity-40 animate-pulse" />
            ))}
          </div>
          <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-[#E8A147] font-bold">
            Venture Studio // Engine 01
          </span>
          <div className="w-12 h-px bg-gradient-to-r from-[#E8A147] to-transparent" />
        </motion.div>

        {/* MAIN HEADLINE - HOEFLER STYLE */}
        <motion.h1 
          variants={itemVariants}
          className="font-serif text-[clamp(42px,7.5vw,88px)] font-medium leading-[0.95] tracking-tight text-white mb-12"
          style={{ fontFamily: "'Hoefler Text', 'Baskerville', 'serif'" }}
        >
          Architect Your <span className="italic text-[#E8A147]">Day Zero</span>
          <br />
          AI-Native Powerhouse
        </motion.h1>

        {/* DUAL-TIER DESCRIPTION */}
        <div className="max-w-4xl mx-auto space-y-8 mb-20">
          <motion.p 
            variants={itemVariants}
            className="font-sans text-white/90 text-2xl md:text-3xl font-light leading-snug tracking-tight"
          >
            We pair elite founders with <span className="text-white border-b border-[#E8A147]/30">proprietary infrastructure</span> to build autonomous control companies that govern the industries civilization cannot live without.
          </motion.p>

          <motion.p 
            variants={itemVariants}
            className="font-sans text-white/40 text-lg leading-relaxed max-w-3xl mx-auto font-light"
          >
            By integrating our AI-powered operational platform <span className="text-white/60 font-medium">Nexa</span>, we compress the 12-month R&D cycle into 6 weeks of high-velocity execution.
          </motion.p>
        </div>

        {/* PERFORMANCE KPI BAR */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border-y border-white/10 py-10 max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center group">
            <Timer className="text-[#E8A147]/40 mb-3 group-hover:text-[#E8A147] transition-colors" size={18} />
            <span className="font-serif text-2xl text-white italic">6 Weeks</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mt-1">To MVP</span>
          </div>
          <div className="flex flex-col items-center group border-l border-white/10">
            <Zap className="text-[#E8A147]/40 mb-3 group-hover:text-[#E8A147] transition-colors" size={18} />
            <span className="font-serif text-2xl text-white italic">40-50%</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mt-1">Burn Reduction</span>
          </div>
          <div className="flex flex-col items-center group border-l border-white/10">
            <Shield className="text-[#E8A147]/40 mb-3 group-hover:text-[#E8A147] transition-colors" size={18} />
            <span className="font-serif text-2xl text-white italic">Hard Gate</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mt-1">Validation</span>
          </div>
          <div className="flex flex-col items-center group border-l border-white/10">
            <BarChart className="text-[#E8A147]/40 mb-3 group-hover:text-[#E8A147] transition-colors" size={18} />
            <span className="font-serif text-2xl text-white italic">Day Zero</span>
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mt-1">Equity Density</span>
          </div>
        </motion.div>
      </motion.div>

      {/* CALL TO ACTION BUTTON - INTEGRATED */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-12 bg-gradient-to-b from-[#E8A147] to-transparent" />
          <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/20">Scroll to Explore Studio Stack</span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;