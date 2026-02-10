// // import React from "react";
// // import { ArrowDown } from "lucide-react";

// // const HeroSection = () => {
// //   return (
// //     <section className="relative min-h-[85vh] flex items-center justify-center pt-20 pb-32 overflow-hidden">
// //       {/* Background Architectural Elements */}
// //       <div className="absolute inset-0 z-0">
// //         {/* Subtle Grid - Creates an "engineering" feel */}
// //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
// //         {/* Animated Glow */}
// //         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#E8A147]/10 blur-[120px] rounded-full animate-pulse" />
// //       </div>

// //       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
// //         {/* Eyebrow with enhanced spacing */}
// //         <div className="inline-flex items-center gap-4 mb-8">
// //           <span className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8A147]/50 to-[#E8A147]" />
// //           <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
// //             Establishment & Thesis
// //           </span>
// //           <span className="w-12 h-px bg-gradient-to-l from-transparent via-[#E8A147]/50 to-[#E8A147]" />
// //         </div>

// //         {/* Headline - Larger and more dramatic */}
// //         <h1 className="font-serif text-[clamp(40px,8vw,88px)] font-medium leading-[1.05] tracking-tight text-white mb-10">
// //           Building the Future of
// //           <span className="block mt-2 bg-gradient-to-b from-[#E8A147] via-[#E8A147] to-[#D4893D] bg-clip-text text-transparent italic">
// //             Autonomous Control
// //           </span>
// //         </h1>

// //         {/* Subtext - Balanced for readability */}
// //         <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-16">
// //           YVL Capital is a <span className="text-white font-normal">studio-backed venture fund</span> focused on AI-native 
// //           infrastructure and mission-critical systems designed for the real world.
// //         </p>

// //         {/* Visual Anchor / Scroll Indicator */}
// //         <div className="flex flex-col items-center gap-4 animate-bounce opacity-40">
// //            <span className="text-[10px] uppercase tracking-[0.3em] text-white">Discover</span>
// //            <ArrowDown size={16} className="text-[#E8A147]" />
// //         </div>
// //       </div>

// //       {/* Decorative Border Bottom */}
// //       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
// //     </section>
// //   );
// // };

// // export default HeroSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowDown, Cpu, ShieldCheck } from "lucide-react";

// const HeroSection = () => {
//   // Animation variants for staggered reveal
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
//     })
//   };

//   return (
//     <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#02010a]">
      
//       {/* BACKGROUND ELEMENTS */}
//       <div className="absolute inset-0 z-0 pointer-events-none">
//         {/* Softened Grid with radial fade */}
//         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
//         {/* Floating "Data Orbs" */}
//         <motion.div 
//           animate={{ 
//             scale: [1, 1.2, 1],
//             opacity: [0.05, 0.1, 0.05] 
//           }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//           className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8A147] blur-[160px] rounded-full" 
//         />
//       </div>

//       {/* MAIN CONTENT */}
//       <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
//         {/* EYEBROW - Animated reveal */}
//         <motion.div 
//           custom={0}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="flex items-center gap-3 mb-10 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md"
//         >
//           <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] animate-pulse" />
//           <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">
//             System Protocol 2026 // Active
//           </span>
//         </motion.div>

//         {/* HEADLINE - Controlled size, staggered lines */}
//         <motion.h1 
//           custom={1}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-white mb-8"
//         >
//           Building the Future <br />
//           <span className="italic text-[#E8A147]">of Autonomous Control</span>
//         </motion.h1>

//         {/* SUBTEXT - Smaller and more refined */}
//         <motion.p 
//           custom={2}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 font-sans"
//         >
//           YVL Capital is a <span className="text-white/80 font-normal">studio-backed venture fund</span> specializing in AI-native 
//           infrastructure for mission-critical systems.
//         </motion.p>

//         {/* CTA SECTION */}
//         <motion.div 
//           custom={3}
//           initial="hidden"
//           animate="visible"
//           variants={fadeInUp}
//           className="flex flex-col sm:flex-row items-center gap-6"
//         >
//           <button className="px-8 py-4 bg-[#E8A147] rounded-full text-[#02010a] font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform hover:shadow-[0_0_30px_rgba(232,161,71,0.3)]">
//             Explore Strategy
//           </button>
          
//           <div className="flex items-center gap-6 px-6 py-3 border border-white/10 rounded-full bg-white/[0.02]">
//             <div className="flex items-center gap-2">
//               <ShieldCheck size={14} className="text-[#E8A147]" />
//               <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">Secure Infra</span>
//             </div>
//             <div className="w-px h-4 bg-white/10" />
//             <div className="flex items-center gap-2">
//               <Cpu size={14} className="text-[#E8A147]" />
//               <span className="text-[9px] text-white/40 uppercase tracking-widest font-bold">AI Native</span>
//             </div>
//           </div>
//         </motion.div>
//       </div>

//       {/* SCROLL ANCHOR - Fixed to bottom */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.5, duration: 1 }}
//         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
//       >
//         <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold">Scroll to Origin</span>
//         <motion.div 
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//         >
//           <ArrowDown size={14} className="text-[#E8A147]/50" />
//         </motion.div>
//       </motion.div>

//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Cpu, ShieldCheck } from "lucide-react";

const HeroSection = () => {
  // Animation variants for staggered reveal
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#02010a]">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Softened Grid with radial fade */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Floating "Data Orbs" */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#E8A147] blur-[160px] rounded-full" 
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* EYEBROW - Animated reveal */}
        <motion.div 
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center gap-3 mb-10 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">
            System Protocol 2026 // Active
          </span>
        </motion.div>

        {/* HEADLINE */}
        <motion.h1 
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight text-white mb-8"
        >
          Building the Future <br />
          <span className="italic text-[#E8A147]">of Autonomous Control</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p 
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-white/50 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-12 font-sans"
        >
          YVL Capital is a <span className="text-white/80 font-normal">studio-backed venture fund</span> specializing in AI-native 
          infrastructure for mission-critical systems.
        </motion.p>

        {/* CTA SECTION (Button Removed) */}
        <motion.div 
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="flex items-center gap-6"
        >
          <div className="flex items-center gap-6 px-8 py-4 border border-white/10 rounded-full bg-white/[0.02] backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#E8A147]" />
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Secure Infra</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-2">
              <Cpu size={14} className="text-[#E8A147]" />
              <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">AI Native</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL ANCHOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold">Scroll to Origin</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-[#E8A147]/50" />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default HeroSection;