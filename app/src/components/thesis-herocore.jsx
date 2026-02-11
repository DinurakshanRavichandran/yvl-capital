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
// import React, { useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { ShieldCheck, Database, Cpu, Zap, Globe, Activity, Terminal } from "lucide-react";

// const HeroCoreSection = () => {
//   const containerRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   // Mouse parallax effect
//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     setMousePos({ x: clientX, y: clientY });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 40, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] } 
//     },
//   };

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen flex flex-col items-center justify-center pt-40 pb-40 overflow-hidden bg-[#02010a] selection:bg-[#E8A147]/40"
//     >
//       {/* 1. CINEMATIC BACKGROUND LAYER */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         {/* Grain Texture Overlay */}
//         <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         {/* Dynamic Follower Glow */}
//         <motion.div 
//           animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
//           transition={{ type: "spring", damping: 50, stiffness: 200 }}
//           className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,161,71,0.08)_0%,transparent_70%)] blur-[120px]"
//         />

//         {/* Structural Watermark */}
//         <div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[22vw] text-white/[0.01] whitespace-nowrap italic tracking-tighter"
//           style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//         >
//           Institutional Alpha
//         </div>
        
//         {/* Vertical Rule system */}
//         <div className="absolute inset-0 flex justify-around opacity-[0.05]">
//           <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
//           <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
//           <div className="w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
//         </div>
//       </div>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="relative z-10 max-w-[1400px] mx-auto px-8"
//       >
//         {/* TOP META DATA */}
//         <motion.div variants={itemVariants} className="flex flex-col items-center mb-20">
//           <div className="flex items-center gap-6 mb-4">
//             <span className="h-px w-12 bg-[#E8A147]" />
//             <span className="font-sans text-[11px] uppercase tracking-[0.8em] text-[#E8A147] font-bold">
//               Investment Mandate // v2.026
//             </span>
//             <span className="h-px w-12 bg-[#E8A147]" />
//           </div>
//           <div className="flex gap-10 text-white/20 font-sans text-[9px] uppercase tracking-[0.2em]">
//             <span>Secured: True</span>
//             <span>Focus: Mission Critical</span>
//             <span>Alpha: Compounding</span>
//           </div>
//         </motion.div>

//         {/* MAIN HEADLINE */}
//         <div className="text-center mb-32">
//           <motion.h1 
//             variants={itemVariants}
//             className="font-serif text-[clamp(54px,9vw,110px)] font-medium leading-[0.9] tracking-tighter text-white"
//             style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//           >
//             Autonomous Operational Control
//             <br />
//             <span className="italic text-[#E8A147] font-normal tracking-tight">
//               in Eternal Industries
//             </span>
//           </motion.h1>
          
//           <motion.div 
//             variants={itemVariants}
//             className="mt-16 max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" 
//           />
          
//           <motion.p 
//             variants={itemVariants}
//             className="font-sans text-white/80 text-2xl md:text-4xl font-extralight leading-[1.3] max-w-5xl mx-auto mt-16 tracking-tight"
//           >
//             Backing AI-native platforms that <span className="text-white font-medium italic underline decoration-[#E8A147]/50 underline-offset-8">govern civilization's spine</span>: where demand is permanent and downtime is existential.
//           </motion.p>
//         </div>

//         {/* DUAL VECTOR CARDS - ASYMMETRIC */}
//         <div className="grid lg:grid-cols-2 gap-px bg-white/10 mb-40 border-x border-y border-white/10 overflow-hidden">
//           {/* Vector 01 */}
//           <motion.div 
//             variants={itemVariants}
//             className="group relative p-16 bg-[#02010a] hover:bg-[#050414] transition-colors duration-700"
//           >
//             <div className="absolute top-8 right-8 text-[#E8A147]/20 font-serif italic text-6xl group-hover:text-[#E8A147]/40 transition-colors">01</div>
//             <Cpu className="text-[#E8A147] mb-10" size={32} strokeWidth={1} />
//             <h3 className="font-serif text-white text-3xl mb-6 italic tracking-wide">Infrastructure-as-Agent</h3>
//             <p className="font-sans text-white/40 text-xl leading-relaxed font-light mb-10">
//               We move beyond "software aids" into systems that own the transaction. Platforms that govern food production, hydro-logics, and industrial throughput autonomously.
//             </p>
//             <div className="flex gap-4">
//               <span className="w-2 h-2 rounded-full bg-[#E8A147] animate-pulse" />
//               <span className="font-sans text-[10px] uppercase tracking-widest text-white/30">System Integrity: Verified</span>
//             </div>
//           </motion.div>

//           {/* Vector 02 */}
//           <motion.div 
//             variants={itemVariants}
//             className="group relative p-16 bg-[#02010a] hover:bg-[#050414] transition-colors duration-700"
//           >
//             <div className="absolute top-8 right-8 text-[#E8A147]/20 font-serif italic text-6xl group-hover:text-[#E8A147]/40 transition-colors">02</div>
//             <Terminal className="text-[#E8A147] mb-10" size={32} strokeWidth={1} />
//             <h3 className="font-serif text-white text-3xl mb-6 italic tracking-wide">Regulatory Embedding</h3>
//             <p className="font-sans text-white/40 text-xl leading-relaxed font-light mb-10">
//               Defensibility isn't just code; it's compliance. We invest in platforms that become the regulatory and financial standard for the industries they control.
//             </p>
//             <div className="flex gap-4">
//               <div className="px-3 py-1 border border-white/10 rounded-full font-sans text-[9px] text-white/40 group-hover:border-[#E8A147]/30 transition-colors">High Defensibility</div>
//               <div className="px-3 py-1 border border-white/10 rounded-full font-sans text-[9px] text-white/40 group-hover:border-[#E8A147]/30 transition-colors">Physical Integration</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* FINAL MANIFESTO BOX */}
//         <motion.div 
//           variants={itemVariants}
//           className="relative max-w-6xl mx-auto"
//         >
//           <div className="glass p-20 md:p-32 rounded-[2px] border border-white/10 relative overflow-hidden group">
//              {/* Corner Scanners */}
//             <div className="absolute top-0 left-0 w-[100px] h-px bg-gradient-to-r from-[#E8A147] to-transparent" />
//             <div className="absolute top-0 left-0 h-[100px] w-px bg-gradient-to-b from-[#E8A147] to-transparent" />
            
//             <div className="relative z-10">
//               <motion.div 
//                 whileHover={{ rotate: 90 }}
//                 className="mb-12 inline-block border border-[#E8A147]/40 p-4 rounded-full"
//               >
//                 <Activity className="text-[#E8A147]" size={24} />
//               </motion.div>
              
//               <h2 
//                 className="font-serif text-4xl md:text-6xl text-white leading-tight"
//                 style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//               >
//                 “YVL invests where AI is <span className="text-[#E8A147] italic">infrastructure, not a feature</span>—controlling operations that cannot fail, in industries that will never disappear.”
//               </h2>
              
//               <div className="mt-20 font-sans text-[11px] uppercase tracking-[0.5em] text-white/20 flex items-center justify-between">
//                 <span>// End Briefing</span>
//                 <span>Established 2026</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroCoreSection;

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { Cpu, Activity, Terminal } from "lucide-react";

// const HeroCoreSection = () => {
//   const containerRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     setMousePos({ x: clientX, y: clientY });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.2 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-40 overflow-hidden bg-[#02010a] selection:bg-[#E8A147]/40"
//     >
//       {/* BACKGROUND ELEMENTS */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         <motion.div 
//           animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
//           transition={{ type: "spring", damping: 50, stiffness: 200 }}
//           className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,161,71,0.06)_0%,transparent_70%)] blur-[120px]"
//         />

//         <div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-white/[0.01] whitespace-nowrap italic tracking-[ -0.05em]"
//           style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//         >
//           Institutional Alpha
//         </div>
//       </div>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="relative z-10 max-w-7xl mx-auto px-8"
//       >
//         {/* TOP META DATA - REFINED TRACKING */}
//         <motion.div variants={itemVariants} className="flex flex-col items-center mb-24">
//           <div className="flex items-center gap-6 mb-5">
//             <span className="h-[1px] w-8 bg-[#E8A147]/40" />
//             <span className="font-sans text-[10px] uppercase tracking-[0.6em] text-[#E8A147] font-bold">
//               Mandate // 2.026
//             </span>
//             <span className="h-[1px] w-8 bg-[#E8A147]/40" />
//           </div>
//           <div className="flex gap-8 text-white/30 font-mono text-[9px] uppercase tracking-[0.2em]">
//             <span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#E8A147] rounded-full" /> Secured</span>
//             <span>Focus: Mission Critical</span>
//             <span>Alpha: Compounding</span>
//           </div>
//         </motion.div>

//         {/* MAIN HEADLINE - OPTICAL REFINEMENT */}
//         <div className="text-center mb-32">
//           <motion.h1 
//             variants={itemVariants}
//             className="font-serif text-[clamp(44px,7.5vw,98px)] font-medium leading-[0.95] tracking-[-0.03em] text-white"
//             style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//           >
//             Autonomous Operational Control
//             <br />
//             <span className="italic text-[#E8A147] font-light tracking-tight">
//               in Eternal Industries
//             </span>
//           </motion.h1>
          
//           <motion.div 
//             variants={itemVariants}
//             className="mt-14 max-w-2xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" 
//           />
          
//           <motion.p 
//             variants={itemVariants}
//             className="font-sans text-white/60 text-lg md:text-2xl font-light leading-[1.5] max-w-3xl mx-auto mt-14 tracking-tight"
//           >
//             Backing AI-native platforms that <span className="text-white font-medium italic underline decoration-[#E8A147]/30 underline-offset-[10px]">govern civilization's spine</span>: where demand is permanent and downtime is existential.
//           </motion.p>
//         </div>

//         {/* DUAL VECTOR CARDS - ARCHITECTURAL LOOK */}
//         <div className="grid lg:grid-cols-2 gap-px bg-white/10 mb-40 border border-white/10 overflow-hidden rounded-sm">
//           {/* Vector 01 */}
//           <motion.div 
//             variants={itemVariants}
//             className="group relative p-12 md:p-16 bg-[#02010a] hover:bg-[#050414] transition-all duration-700"
//           >
//             <div className="absolute top-10 right-10 text-white/[0.03] font-serif italic text-7xl group-hover:text-[#E8A147]/10 transition-colors">01</div>
//             <Cpu className="text-[#E8A147] mb-10 opacity-80" size={28} strokeWidth={1} />
//             <h3 className="font-serif text-white text-2xl mb-5 italic tracking-wide">Infrastructure-as-Agent</h3>
//             <p className="font-sans text-white/40 text-base md:text-lg leading-relaxed font-light mb-10 max-w-md">
//               Moving beyond "software aids" into systems that own the transaction. Platforms that govern food production, hydro-logics, and industrial throughput.
//             </p>
//             <div className="flex items-center gap-3">
//               <span className="w-1.5 h-1.5 rounded-full bg-[#E8A147] animate-pulse shadow-[0_0_8px_#E8A147]" />
//               <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">Status: Verified</span>
//             </div>
//           </motion.div>

//           {/* Vector 02 */}
//           <motion.div 
//             variants={itemVariants}
//             className="group relative p-12 md:p-16 bg-[#02010a] hover:bg-[#050414] transition-all duration-700"
//           >
//             <div className="absolute top-10 right-10 text-white/[0.03] font-serif italic text-7xl group-hover:text-[#E8A147]/10 transition-colors">02</div>
//             <Terminal className="text-[#E8A147] mb-10 opacity-80" size={28} strokeWidth={1} />
//             <h3 className="font-serif text-white text-2xl mb-5 italic tracking-wide">Regulatory Embedding</h3>
//             <p className="font-sans text-white/40 text-base md:text-lg leading-relaxed font-light mb-10 max-w-md">
//               Defensibility is compliance. We invest in platforms that become the regulatory and financial standard for the industries they control.
//             </p>
//             <div className="flex gap-4">
//               <div className="px-4 py-1.5 border border-white/5 rounded-full font-mono text-[8px] text-white/30 group-hover:border-[#E8A147]/20 transition-colors">High Defensibility</div>
//               <div className="px-4 py-1.5 border border-white/5 rounded-full font-mono text-[8px] text-white/30 group-hover:border-[#E8A147]/20 transition-colors">Physical Integration</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* FINAL MANIFESTO BOX - MAX DENSITY */}
//         <motion.div 
//           variants={itemVariants}
//           className="relative max-w-5xl mx-auto"
//         >
//           <div className="p-16 md:p-24 rounded-sm border border-white/10 bg-white/[0.01] backdrop-blur-3xl relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#E8A147]" />
//             <div className="absolute top-0 left-0 h-16 w-[1px] bg-[#E8A147]" />
            
//             <div className="relative z-10 text-center">
//               <motion.div 
//                 whileHover={{ scale: 1.1 }}
//                 className="mb-10 inline-block border border-[#E8A147]/20 p-5 rounded-full"
//               >
//                 <Activity className="text-[#E8A147]" size={20} />
//               </motion.div>
              
//               <h2 
//                 className="font-serif text-3xl md:text-5xl text-white leading-[1.3] max-w-3xl mx-auto"
//                 style={{ fontFamily: "'Hoefler Text', 'serif'" }}
//               >
//                 “YVL invests where AI is <span className="text-[#E8A147] italic">infrastructure, not a feature</span>—controlling operations that cannot fail, in industries that will never disappear.”
//               </h2>
              
//               <div className="mt-16 pt-8 border-t border-white/5 font-mono text-[9px] uppercase tracking-[0.4em] text-white/20 flex items-center justify-between">
//                 <span>Ref: Briefing_01</span>
//                 <span>Established 2026</span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroCoreSection;

// import React, { useRef, useState } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { Cpu, Activity, Terminal, Shield, Boxes, ChevronRight } from "lucide-react";

// const HeroCoreSection = () => {
//   const containerRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"],
//   });

//   // Parallax for the "Institutional Alpha" watermark
//   const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 200]);

//   const handleMouseMove = (e) => {
//     const { clientX, clientY } = e;
//     setMousePos({ x: clientX, y: clientY });
//   };

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.15, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1, 
//       transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
//     },
//   };

//   return (
//     <section 
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       className="relative min-h-screen flex flex-col items-center justify-start pt-48 pb-48 overflow-hidden bg-[#030210] selection:bg-[#E8A147]/40"
//     >
//       {/* 1. ATMOSPHERIC BACKGROUND */}
//       <div className="absolute inset-0 pointer-events-none select-none">
//         {/* Grain Overlay */}
//         <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
//         {/* Dynamic Glow */}
//         <motion.div 
//           animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
//           transition={{ type: "spring", damping: 50, stiffness: 200 }}
//           className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,161,71,0.08)_0%,transparent_70%)] blur-[120px]"
//         />

//         {/* Structural Grid Lines */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

//         {/* Parallax Watermark */}
//         <motion.div 
//           style={{ y: watermarkY }}
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-white/[0.02] whitespace-nowrap italic tracking-tighter"
//         >
//           Institutional Alpha
//         </motion.div>
//       </div>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="relative z-10 max-w-7xl mx-auto px-8 w-full"
//       >
//         {/* 2. REFINED BENTO HEADER */}
//         <motion.div variants={itemVariants} className="flex flex-col items-center mb-20">
//           <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8">
//             <span className="flex h-2 w-2 rounded-full bg-[#E8A147] animate-pulse" />
//             <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#E8A147] font-bold">
//               Mandate 2.026 // System Active
//             </span>
//           </div>

//           <h1 className="font-serif text-[clamp(40px,7vw,90px)] font-medium leading-[1.05] tracking-tight text-white text-center max-w-5xl">
//             Autonomous Operational Control
//             <br />
//             <span className="italic text-[#E8A147] font-light">
//               for Eternal Industries
//             </span>
//           </h1>

//           <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
//             {[
//               { icon: <Shield size={14} />, label: "Secured", val: "Protocol v.4" },
//               { icon: <Boxes size={14} />, label: "Focus", val: "Critical Infra" },
//               { icon: <Activity size={14} />, label: "Yield", val: "Compound Alpha" }
//             ].map((meta, i) => (
//               <div key={i} className="flex flex-col items-center p-4 border border-white/5 rounded-lg bg-white/[0.01]">
//                 <div className="text-[#E8A147]/50 mb-2">{meta.icon}</div>
//                 <span className="text-[8px] uppercase tracking-widest text-white/30 mb-1">{meta.label}</span>
//                 <span className="text-[10px] font-mono text-white/70 uppercase tracking-tighter">{meta.val}</span>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* 3. CORE VECTORS - REDESIGNED FOR "FULLNESS" */}
//         <div className="grid lg:grid-cols-2 gap-6 mb-32">
//           {/* Vector 01 */}
//           <motion.div 
//             variants={itemVariants}
//             whileHover={{ y: -5 }}
//             className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E8A147]/30"
//           >
//             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
//             <div className="flex justify-between items-start mb-12">
//               <div className="p-4 rounded-xl bg-[#E8A147]/10 border border-[#E8A147]/20">
//                 <Cpu className="text-[#E8A147]" size={24} strokeWidth={1.5} />
//               </div>
//               <span className="font-serif italic text-4xl text-white/5">01</span>
//             </div>
            
//             <h3 className="font-serif text-white text-2xl mb-4 italic">Infrastructure-as-Agent</h3>
//             <p className="font-sans text-white/40 text-base leading-relaxed font-light mb-8 max-w-sm">
//               We back platforms that move beyond "SaaS" into systems that own the transaction. 
//               Autonomous governance for civilization's essential throughput.
//             </p>
            
//             <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#E8A147]/60 group-hover:text-[#E8A147] transition-colors cursor-pointer">
//               View Architecture <ChevronRight size={12} />
//             </div>
//           </motion.div>

//           {/* Vector 02 */}
//           <motion.div 
//             variants={itemVariants}
//             whileHover={{ y: -5 }}
//             className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E8A147]/30"
//           >
//             <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
//             <div className="flex justify-between items-start mb-12">
//               <div className="p-4 rounded-xl bg-[#E8A147]/10 border border-[#E8A147]/20">
//                 <Terminal className="text-[#E8A147]" size={24} strokeWidth={1.5} />
//               </div>
//               <span className="font-serif italic text-4xl text-white/5">02</span>
//             </div>
            
//             <h3 className="font-serif text-white text-2xl mb-4 italic">Regulatory Embedding</h3>
//             <p className="font-sans text-white/40 text-base leading-relaxed font-light mb-8 max-w-sm">
//               Investing in platforms that become the regulatory and financial standard 
//               for the legacy industries they digitize and control.
//             </p>
            
//             <div className="flex gap-2">
//               <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[8px] text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-widest">High Defensibility</div>
//               <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[8px] text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-widest">Physical Moat</div>
//             </div>
//           </motion.div>
//         </div>

//         {/* 4. FINAL MANIFESTO - THE "CLOSER" */}
//         <motion.div 
//           variants={itemVariants}
//           className="relative max-w-5xl mx-auto"
//         >
//           <div className="p-16 md:p-24 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-3xl relative overflow-hidden group">
//             {/* Animated accent corners */}
//             <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#E8A147]/40 rounded-tl-2xl transition-all group-hover:w-20 group-hover:h-20" />
//             <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#E8A147]/40 rounded-br-2xl transition-all group-hover:w-20 group-hover:h-20" />
            
//             <div className="relative z-10 text-center">
//               <h2 className="font-serif text-3xl md:text-5xl text-white/90 leading-[1.3] max-w-3xl mx-auto italic font-light">
//                 “YVL invests where AI is <span className="text-[#E8A147]">infrastructure</span>—controlling operations that cannot fail, in industries that will never disappear.”
//               </h2>
//             </div>
//           </div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroCoreSection;

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Activity, Terminal, Shield, Boxes, ChevronRight } from "lucide-react";

const HeroCoreSection = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax for the "Institutional Alpha" watermark
  const watermarkY = useTransform(scrollYProgress, [0, 1], [0, 200]);

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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-20 overflow-hidden bg-[#030210] selection:bg-[#E8A147]/40"
    >
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        {/* Dynamic Glow */}
        <motion.div 
          animate={{ x: mousePos.x - 400, y: mousePos.y - 400 }}
          transition={{ type: "spring", damping: 50, stiffness: 200 }}
          className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(232,161,71,0.08)_0%,transparent_70%)] blur-[120px]"
        />

        {/* Structural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Parallax Watermark */}
        <motion.div 
          style={{ y: watermarkY }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[18vw] text-white/[0.02] whitespace-nowrap italic tracking-tighter"
        >
          Institutional Alpha
        </motion.div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-8 w-full"
      >
        {/* 2. REFINED BENTO HEADER */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-16">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#E8A147] animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-[#E8A147] font-bold">
              Mandate 2.026 // System Active
            </span>
          </div>

          <h1 className="font-serif text-[clamp(40px,7vw,90px)] font-medium leading-[1.05] tracking-tight text-white text-center max-w-5xl">
            Autonomous Operational Control
            <br />
            <span className="italic text-[#E8A147] font-light">
              for Eternal Industries
            </span>
          </h1>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              { icon: <Shield size={14} />, label: "Secured", val: "Protocol v.4" },
              { icon: <Boxes size={14} />, label: "Focus", val: "Critical Infra" },
              { icon: <Activity size={14} />, label: "Yield", val: "Compound Alpha" }
            ].map((meta, i) => (
              <div key={i} className="flex flex-col items-center p-4 border border-white/5 rounded-lg bg-white/[0.01]">
                <div className="text-[#E8A147]/50 mb-2">{meta.icon}</div>
                <span className="text-[8px] uppercase tracking-widest text-white/30 mb-1">{meta.label}</span>
                <span className="text-[10px] font-mono text-white/70 uppercase tracking-tighter">{meta.val}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 3. CORE VECTORS */}
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Vector 01 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E8A147]/30"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-xl bg-[#E8A147]/10 border border-[#E8A147]/20">
                <Cpu className="text-[#E8A147]" size={24} strokeWidth={1.5} />
              </div>
              <span className="font-serif italic text-4xl text-white/5">01</span>
            </div>
            
            <h3 className="font-serif text-white text-2xl mb-4 italic">Infrastructure-as-Agent</h3>
            <p className="font-sans text-white/40 text-base leading-relaxed font-light mb-8 max-w-sm">
              We back platforms that move beyond "SaaS" into systems that own the transaction. 
              Autonomous governance for civilization's essential throughput.
            </p>
            
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#E8A147]/60 group-hover:text-[#E8A147] transition-colors cursor-pointer">
              View Architecture <ChevronRight size={12} />
            </div>
          </motion.div>

          {/* Vector 02 */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group relative p-12 bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-[#E8A147]/30"
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 rounded-xl bg-[#E8A147]/10 border border-[#E8A147]/20">
                <Terminal className="text-[#E8A147]" size={24} strokeWidth={1.5} />
              </div>
              <span className="font-serif italic text-4xl text-white/5">02</span>
            </div>
            
            <h3 className="font-serif text-white text-2xl mb-4 italic">Regulatory Embedding</h3>
            <p className="font-sans text-white/40 text-base leading-relaxed font-light mb-8 max-w-sm">
              Investing in platforms that become the regulatory and financial standard 
              for the legacy industries they digitize and control.
            </p>
            
            <div className="flex gap-2">
              <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[8px] text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-widest">High Defensibility</div>
              <div className="px-3 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-[8px] text-white/30 group-hover:text-white/60 transition-colors uppercase tracking-widest">Physical Moat</div>
            </div>
          </motion.div>
        </div>

        {/* 4. FINAL MANIFESTO - TWO COLUMN REDESIGN */}
        <motion.div 
          variants={itemVariants}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-3xl overflow-hidden group">
            {/* Background Glows for the Box */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#E8A147]/10 blur-[80px] rounded-full" />
            
            <div className="grid lg:grid-cols-2 items-center">
              {/* Text Content */}
              <div className="p-10 md:p-16 relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-[1px] w-8 bg-[#E8A147]/50" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#E8A147]">Strategic Thesis</span>
                </div>
                
                <h2 className="font-serif text-3xl md:text-4xl text-white/90 leading-tight italic font-light mb-8">
                  “We back the systems that govern the physical world—where intelligence meets <span className="text-[#E8A147]">sovereign control</span>.”
                </h2>
                
                <p className="text-white/40 text-sm leading-relaxed max-w-md font-light">
                  YVL identifies the intersection of autonomous logic and critical throughput, 
                  investing in the digital steel that supports global infrastructure.
                </p>
              </div>

              {/* Image / Visual Side */}
              <div className="relative h-full min-h-[350px] bg-white/[0.03] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Architectural Infrastructure"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000"
                />
                
                {/* Overlay Gradients to blend */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-transparent to-transparent lg:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent lg:hidden block" />
                
                {/* Animated Corner accent on image */}
                <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-[#E8A147]/40 rounded-br-xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroCoreSection;