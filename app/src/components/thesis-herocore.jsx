// import React from "react";
// import { ShieldCheck, Database, Activity } from "lucide-react";

// const HeroCoreSection = () => {
//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
//       {/* Background Architectural Layer */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,_rgba(232,161,71,0.08)_0%,_transparent_50%)]" />
//         {/* Vertical Structural Lines */}
//         <div className="absolute inset-0 flex justify-center gap-64 opacity-[0.03]">
//           <div className="w-px h-full bg-white" />
//           <div className="w-px h-full bg-white" />
//           <div className="w-px h-full bg-white" />
//         </div>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Section Label / Identity */}
//         <div className="inline-flex items-center gap-4 mb-12">
//           <span className="text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
//             Investment Mandate
//           </span>
//           <span className="w-12 h-px bg-gradient-to-r from-[#E8A147] to-transparent" />
//         </div>

//         {/* Hero Title - High impact serif */}
//         <h1 className="font-serif text-[clamp(42px,7vw,84px)] font-medium leading-[1.05] tracking-tight text-white mb-10">
//           Autonomous Operational Control
//           <br />
//           <span className="italic text-[#E8A147]">in Eternal Industries</span>
//         </h1>

//         {/* Lead Text - Emphasized weight */}
//         <p className="text-white/80 text-xl md:text-3xl font-light leading-snug max-w-4xl mx-auto mb-12">
//           YVL Capital backs AI-native platforms that autonomously control
//           <span className="text-white"> mission-critical physical operations</span> in markets where demand is permanent and downtime is existential.
//         </p>

//         {/* Narrative Columns */}
//         <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto mb-24">
//           <p className="text-white/50 text-lg leading-relaxed font-light">
//             We invest in AI-native companies that govern the "hard" sectors: food production, water treatment, industrial process control, and healthcare. These are the systems that sustain civilization.
//           </p>
//           <p className="text-white/50 text-lg leading-relaxed font-light">
//             By owning the real-time operational data and compliance infrastructure, our portfolio builds compounding defensibility through physical integration, regulatory lock-in, and financial embedding.
//           </p>
//         </div>
//       </div>

//       {/* Core Thesis Box - Refined "Command Center" Aesthetic */}
//       <div className="relative w-full max-w-5xl mx-auto px-6">
//         <div className="relative group p-1 bg-[#030210] rounded-[40px] border border-white/10 transition-all duration-700 hover:border-[#E8A147]/50">
//           {/* Subtle Corner Accents */}
//           <div className="absolute -top-px -left-px w-8 h-8 border-t border-l border-[#E8A147] rounded-tl-[40px]" />
//           <div className="absolute -bottom-px -right-px w-8 h-8 border-b border-r border-[#E8A147] rounded-br-[40px]" />

//           <div className="relative p-10 md:p-16 rounded-[38px] bg-gradient-to-b from-white/[0.04] to-transparent backdrop-blur-sm text-center">
//             <div className="flex justify-center gap-8 mb-10 opacity-40">
//               <ShieldCheck size={20} className="text-[#E8A147]" />
//               <Database size={20} className="text-[#E8A147]" />
//               <Activity size={20} className="text-[#E8A147]" />
//             </div>

//             <p className="text-white text-2xl md:text-4xl font-serif font-medium leading-[1.3]">
//               "YVL invests where AI is{" "}
//               <span className="text-[#E8A147] font-italic">infrastructure, not a feature</span>—controlling operations that cannot fail, in industries that will never disappear."
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCoreSection;
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ShieldCheck, Database, Cpu, Zap, Globe, Activity, Terminal } from "lucide-react";

const HeroCoreSection = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePos({ x: clientX, y: clientY });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-40 overflow-hidden bg-[#02010a] selection:bg-[#E8A147]/40"
    >
      {/* 1. CINEMATIC BACKGROUND LAYER */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Dynamic Follower Glow */}
        <motion.div 
          animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
          transition={{ type: "spring", damping: 50, stiffness: 200 }}
          className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,161,71,0.08)_0%,transparent_70%)] blur-[120px]"
        />

        {/* Structural Watermark */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[22vw] text-white/[0.01] whitespace-nowrap italic tracking-tighter"
          style={{ fontFamily: "'Hoefler Text', 'serif'" }}
        >
          Institutional Alpha
        </div>
        
        {/* Vertical Rule system */}
        <div className="absolute inset-0 flex justify-around opacity-[0.05]">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-[1400px] mx-auto px-8"
      >
        {/* TOP META DATA */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-6 mb-4">
            <span className="h-px w-12 bg-[#E8A147]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.8em] text-[#E8A147] font-bold">
              Investment Mandate // v2.026
            </span>
            <span className="h-px w-12 bg-[#E8A147]" />
          </div>
          <div className="flex gap-10 text-white/20 font-sans text-[9px] uppercase tracking-[0.2em]">
            <span>Secured: True</span>
            <span>Focus: Mission Critical</span>
            <span>Alpha: Compounding</span>
          </div>
        </motion.div>

        {/* MAIN HEADLINE */}
        <div className="text-center mb-32">
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-[clamp(54px,9vw,110px)] font-medium leading-[0.9] tracking-tighter text-white"
            style={{ fontFamily: "'Hoefler Text', 'serif'" }}
          >
            Autonomous Operational Control
            <br />
            <span className="italic text-[#E8A147] font-normal tracking-tight">
              in Eternal Industries
            </span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-sans text-white/80 text-2xl md:text-4xl font-extralight leading-[1.3] max-w-5xl mx-auto mt-16 tracking-tight"
          >
            Backing AI-native platforms that <span className="text-white font-medium italic underline decoration-[#E8A147]/50 underline-offset-8">govern civilization's spine</span>: where demand is permanent and downtime is existential.
          </motion.p>
        </div>

        {/* DUAL VECTOR CARDS - ASYMMETRIC */}
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 mb-40 border-x border-y border-white/10 overflow-hidden">
          {/* Vector 01 */}
          <motion.div 
            variants={itemVariants}
            className="group relative p-16 bg-[#02010a] hover:bg-[#050414] transition-colors duration-700"
          >
            <div className="absolute top-8 right-8 text-[#E8A147]/20 font-serif italic text-6xl group-hover:text-[#E8A147]/40 transition-colors">01</div>
            <Cpu className="text-[#E8A147] mb-10" size={32} strokeWidth={1} />
            <h3 className="font-serif text-white text-3xl mb-6 italic tracking-wide">Infrastructure-as-Agent</h3>
            <p className="font-sans text-white/40 text-xl leading-relaxed font-light mb-10">
              We move beyond "software aids" into systems that own the transaction. Platforms that govern food production, hydro-logics, and industrial throughput autonomously.
            </p>
            <div className="flex gap-4">
              <span className="w-2 h-2 rounded-full bg-[#E8A147] animate-pulse" />
              <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">System Integrity: Verified</span>
            </div>
          </motion.div>

          {/* Vector 02 */}
          <motion.div 
            variants={itemVariants}
            className="group relative p-16 bg-[#02010a] hover:bg-[#050414] transition-colors duration-700"
          >
            <div className="absolute top-8 right-8 text-[#E8A147]/20 font-serif italic text-6xl group-hover:text-[#E8A147]/40 transition-colors">02</div>
            <Terminal className="text-[#E8A147] mb-10" size={32} strokeWidth={1} />
            <h3 className="font-serif text-white text-3xl mb-6 italic tracking-wide">Regulatory Embedding</h3>
            <p className="font-sans text-white/40 text-xl leading-relaxed font-light mb-10">
              Defensibility isn't just code; it's compliance. We invest in platforms that become the regulatory and financial standard for the industries they control.
            </p>
            <div className="flex gap-4">
              <div className="px-3 py-1 border border-white/10 rounded-full font-sans text-[9px] text-white/40 group-hover:border-[#E8A147]/30 transition-colors">High Defensibility</div>
              <div className="px-3 py-1 border border-white/10 rounded-full font-sans text-[9px] text-white/40 group-hover:border-[#E8A147]/30 transition-colors">Physical Integration</div>
            </div>
          </motion.div>
        </div>

        {/* FINAL MANIFESTO BOX */}
        <motion.div 
          variants={itemVariants}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass p-20 md:p-32 rounded-[2px] border border-white/10 relative overflow-hidden group">
             {/* Corner Scanners */}
            <div className="absolute top-0 left-0 w-[100px] h-px bg-gradient-to-r from-[#E8A147] to-transparent" />
            <div className="absolute top-0 left-0 h-[100px] w-px bg-gradient-to-b from-[#E8A147] to-transparent" />
            
            <div className="relative z-10">
              <motion.div 
                whileHover={{ rotate: 90 }}
                className="mb-12 inline-block border border-[#E8A147]/40 p-4 rounded-full"
              >
                <Activity className="text-[#E8A147]" size={24} />
              </motion.div>
              
              <h2 
                className="font-serif text-4xl md:text-6xl text-white leading-tight"
                style={{ fontFamily: "'Hoefler Text', 'serif'" }}
              >
                “YVL invests where AI is <span className="text-[#E8A147] italic">infrastructure, not a feature</span>—controlling operations that cannot fail, in industries that will never disappear.”
              </h2>
              
              <div className="mt-20 font-sans text-[11px] uppercase tracking-[0.5em] text-white/20 flex items-center justify-between">
                <span>// End Briefing</span>
                <span>Established 2026</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroCoreSection;