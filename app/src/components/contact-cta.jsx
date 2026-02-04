import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, briefcase, Target } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="relative bg-[#030210] py-32 px-6 border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[400px] bg-[#E8A147]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 
            style={{ fontFamily: "'Hoefler Text', serif" }} 
            className="text-4xl md:text-7xl text-white mb-6"
          >
            The Future is <span className="italic font-light text-[#E8A147]">Autonomous.</span>
          </h2>
          <p className="text-white/40 text-lg font-light max-w-2xl mx-auto">
            Whether you are deploying institutional capital or building the next 
            critical infrastructure platform, let’s align on the alpha of control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. LP / INVESTOR TRACK */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <briefcase size={120} className="text-[#E8A147]" />
            </div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-[#E8A147] text-[10px] tracking-[0.4em] font-bold uppercase mb-8 block">
                  Institutional Capital
                </span>
                <h3 
                  style={{ fontFamily: "'Hoefler Text', serif" }} 
                  className="text-4xl text-white mb-6"
                >
                  Limited <br /> Partners
                </h3>
                <p className="text-white/50 font-light leading-relaxed max-w-xs mb-10">
                  Access a 10-year hybrid fund targeting 44% alpha through AI-native 
                  autonomous control platforms in eternal industries.
                </p>
              </div>

              <a 
                href="/contact#lp"
                className="inline-flex items-center gap-4 text-white group-hover:text-[#E8A147] transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-black">Inquire for Allocation</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E8A147] transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>
          </motion.div>

          {/* 2. FOUNDER / STUDIO TRACK */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="group relative p-12 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target size={120} className="text-[#E8A147]" />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-[#E8A147] text-[10px] tracking-[0.4em] font-bold uppercase mb-8 block">
                  Venture Studio
                </span>
                <h3 
                  style={{ fontFamily: "'Hoefler Text', serif" }} 
                  className="text-4xl text-white mb-6"
                >
                  Visionary <br /> Founders
                </h3>
                <p className="text-white/50 font-light leading-relaxed max-w-xs mb-10">
                  Leverage the Nexa platform for 6-week MVP velocity and 50% burn reduction. 
                  Build the foundational infrastructure of tomorrow.
                </p>
              </div>

              <a 
                href="/contact#founder"
                className="inline-flex items-center gap-4 text-white group-hover:text-[#E8A147] transition-colors"
              >
                <span className="text-[11px] uppercase tracking-[0.3em] font-black">Submit Platform Thesis</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#E8A147] transition-all">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinalCTA;