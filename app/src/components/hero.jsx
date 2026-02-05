// import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030210] pt-24 pb-20">
//       {/* Ambient Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         {/* Primary gold glow - top right */}
//         <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#E8A147]/8 blur-[180px] rounded-full" />

//         {/* Secondary subtle glow - bottom left */}
//         <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[150px] rounded-full" />

//         {/* Center soft light */}
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full" />

//         {/* Subtle grid pattern overlay */}
//         <div
//           className="absolute inset-0 opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(#E8A147 1px, transparent 1px), linear-gradient(90deg, #E8A147 1px, transparent 1px)`,
//             backgroundSize: '60px 60px'
//           }}
//         />
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
//         {/* Top Badge */}
//         <div className="inline-flex items-center gap-3 mb-10">
//           <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//           <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
//             Venture Capital
//           </span>
//           <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//         </div>

//         {/* Main Headline */}
//         <h1 className="font-serif text-[clamp(42px,8vw,90px)] font-medium leading-[1.05] tracking-tight text-white mb-8">
//           Building the Future
//           <br />
//           <span className="relative inline-block">
//             <span className="text-[#E8A147]">of Control</span>
//             <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8A147]/60 via-[#E8A147] to-[#E8A147]/60" />
//           </span>
//         </h1>

//         {/* Subheadline */}
//         <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-14">
//           We build and back AI-native platforms for critical systems.
//           Where autonomous systems meet real-world constraints.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
//           {/* Primary CTA */}
//           <a
//             href="#contact"
//             className="group relative px-10 py-5 rounded-full overflow-hidden"
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
//             <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//             <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
//               Partner With Us
//               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//             </span>
//           </a>

//           {/* Secondary CTA */}
//           <a
//             href="#about"
//             className="group relative px-10 py-5 rounded-full overflow-hidden"
//           >
//             <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
//             <span className="relative z-10 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
//               Learn More
//             </span>
//           </a>
//         </div>

//         {/* Stats Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//           {[
//             { icon: TrendingUp, value: "$500M+", label: "Assets Under Management" },
//             { icon: Shield, value: "25+", label: "Portfolio Companies" },
//             { icon: Zap, value: "10x", label: "Average Returns" },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="group relative p-8 rounded-[30px] bg-white/[0.03] border border-white/[0.06] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500"
//             >
//               {/* Corner accent */}
//               <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#E8A147]/20 rounded-tl-lg group-hover:border-[#E8A147]/40 transition-colors" />
//               <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#E8A147]/20 rounded-br-lg group-hover:border-[#E8A147]/40 transition-colors" />

//               <stat.icon className="w-6 h-6 text-[#E8A147]/60 mx-auto mb-4 group-hover:text-[#E8A147] transition-colors" />
//               <p className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 group-hover:text-[#E8A147] transition-colors">
//                 {stat.value}
//               </p>
//               <p className="text-[12px] uppercase tracking-[0.2em] text-white/40">
//                 {stat.label}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
//           <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
//           <div className="w-[1px] h-12 bg-gradient-to-b from-[#E8A147]/50 to-transparent relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-full h-4 bg-[#E8A147] animate-pulse" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const stats = [
    { value: 500, suffix: "M+", label: "AUM Growth" },
    { value: 25, suffix: "+", label: "Portfolio Units" },
    { value: 10, suffix: "x", label: "Target Alpha" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#030210] px-6 font-['Inter',_sans-serif]">
      
      {/* 1. DUBAI AMBIANCE PORTAL - Fixed for Nav Integration */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div 
          className="absolute w-full h-full opacity-30"
          style={{
            // Radial gradient creates the center focus
            // Linear gradient (to bottom) ensures the top is solid #030210 for the Nav
            background: `
              radial-gradient(circle at center, transparent 0%, #030210 80%),
              linear-gradient(to bottom, #030210 0%, transparent 15%, transparent 85%, #030210 100%),
              url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            mixBlendMode: 'luminosity'
          }}
        />
        
        {/* Secondary Center Glow */}
        <div className="absolute w-[1000px] h-[500px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      {/* 2. CENTERED MAIN CONTENT */}
      <div className="relative z-10 max-w-5xl text-center mt-20"> 
        {/* Added mt-20 to push content down away from the fixed nav */}
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-8 bg-[#E8A147]/30" />
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#E8A147] font-bold">
            Dubai — Montreal — London
          </span>
          <div className="h-px w-8 bg-[#E8A147]/30" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ fontFamily: "'Hoefler Text', 'Georgia', serif" }}
          className="text-[clamp(45px,7vw,92px)] font-medium leading-[1.05] tracking-tighter text-white mb-8"
        >
          Building the Future <br />
          <span className="text-[#E8A147] italic font-light">of Sovereign Control</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/50 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-12 tracking-wide"
        >
          Institutional capital for AI-native platforms. 
          Where autonomous systems meet real-world constraints.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href="#contact"
            className="group relative flex items-center gap-6 px-10 py-4 rounded-full border border-white/10 hover:border-[#E8A147]/50 transition-all duration-500"
          >
            <span className="text-[11px] uppercase tracking-[0.4em] font-black text-white group-hover:text-[#E8A147] transition-colors">
              Partner With Us
            </span>
            <ArrowRight size={16} className="text-[#E8A147] group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* 3. MINIMALIST BOTTOM-RIGHT COUNTERS */}
      <div 
        ref={ref}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-end gap-10"
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8 + (index * 0.1) }}
            className="text-right"
          >
            <div className="text-2xl text-white font-medium mb-1" style={{ fontFamily: "'Hoefler Text', serif" }}>
              {inView ? <CountUp end={stat.value} duration={2.5} separator="," /> : "0"}
              <span className="text-[#E8A147]">{stat.suffix}</span>
            </div>
            <div className="text-[9px] uppercase tracking-[0.3em] text-white/30 font-bold whitespace-nowrap">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 4. COORDINATE FOOTER */}
      <div className="absolute bottom-12 left-12 hidden md:flex items-center gap-6 opacity-20">
        <p className="text-[9px] uppercase tracking-[0.5em] text-white">25.2048° N, 55.2708° E</p>
        <div className="h-px w-12 bg-white" />
        <p className="text-[9px] uppercase tracking-[0.5em] text-white italic">Downtown Dubai</p>
      </div>

      {/* Center Grid (Subtle) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#E8A147 1px, transparent 1px), linear-gradient(90deg, #E8A147 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />
    </section>
  );
};

export default Hero;