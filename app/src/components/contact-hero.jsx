import React from "react";
import { motion } from "framer-motion";
import { TrendingUp,Shield , Activity, Globe, Zap } from "lucide-react";

const IntegratedHero = () => {
  return (
    <section className="relative min-h-screen bg-[#030210] flex flex-col items-center justify-center overflow-hidden font-['Inter']">
      
      {/* 1. THE "BETTER GRAPH" (The Control Field) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dubai Skyline Masked (Bottom) */}
        <div 
          className="absolute bottom-0 w-full h-full opacity-[0.15]"
          style={{
            background: `linear-gradient(to top, #030210 5%, transparent 60%), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            mixBlendMode: 'luminosity'
          }}
        />

        {/* The Animated Alpha Graph */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Baseline Market Growth (Dim) */}
          <motion.path
            d="M 0 600 Q 300 550 600 580 T 1200 520 T 1800 550"
            fill="none"
            stroke="rgba(232, 161, 71, 0.05)"
            strokeWidth="1"
          />
          {/* YVL "Control" Alpha (Glowing Gold) */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M 0 700 C 200 680 400 400 700 350 S 1100 150 1400 50"
            fill="none"
            stroke="url(#goldGradient)"
            strokeWidth="3"
            className="drop-shadow-[0_0_15px_rgba(232,161,71,0.5)]"
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#E8A147" />
              <stop offset="100%" stopColor="#E8A147" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 2. CORE MESSAGING */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-[#E8A147] text-[10px] tracking-[0.8em] font-bold uppercase mb-6"
        >
          Institutional Alpha — Dubai
        </motion.div>

        <h1 
          style={{ fontFamily: "'Hoefler Text', serif" }}
          className="text-[clamp(40px,8vw,100px)] leading-[0.95] text-white tracking-tighter mb-8 font-serif"
        >
          Systemic Alpha <br />
          <span className="italic font-light text-[#E8A147]">Through Control</span>
        </h1>

        <p className="text-white/40 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed border-b border-white/5 pb-12">
            A $50M studio & fund backing AI-native platforms for the world's most critical 
            physical infrastructure. From food production to water stability.
        </p>

        {/* 3. KEY METRICS BORDER (Replacing standard boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-16">
          {[
            { label: "Fund Size", value: "$50M", icon: Globe },
            { label: "Deployment", value: "24Mo", icon: Zap },
            { label: "Target Units", value: "33-42", icon: Shield },
            { label: "Alpha Target", value: "44%", icon: TrendingUp },
          ].map((item, i) => (
            <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="text-left"
            >
              <item.icon size={14} className="text-[#E8A147] mb-3 opacity-50" />
              <div style={{ fontFamily: "'Hoefler Text', serif" }} className="text-2xl text-white">{item.value}</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegratedHero;