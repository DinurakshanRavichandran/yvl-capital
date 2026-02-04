import React from "react";
import { motion } from "framer-motion";
import { Cpu, Rocket, BarChart3, ShieldCheck } from "lucide-react";

const OperationalAlpha = () => {
  const pillars = [
    {
      title: "Nexa Platform",
      value: "6-Week",
      label: "MVP Velocity",
      desc: "Our proprietary AI-powered infrastructure that accelerates development from concept to deployment.",
      icon: <Cpu size={20} />
    },
    {
      title: "Efficiency",
      value: "50%",
      label: "Burn Reduction",
      desc: "Battle-tested operational playbooks that significantly lower the cost of early-stage scaling.",
      icon: <BarChart3 size={20} />
    },
    {
      title: "Network",
      value: "14K+",
      label: "Founder Access",
      desc: "Direct pipelines through Sheraa, Ignyte, and Microsoft for Startups MENA for day-one advantage.",
      icon: <Rocket size={20} />
    },
    {
      title: "Security",
      value: "Gate",
      label: "Institutional Grade",
      desc: "Four non-negotiable investment gates ensuring every platform is defensible and mission-critical.",
      icon: <ShieldCheck size={20} />
    }
  ];

  return (
    <section className="relative bg-[#030210] py-24 px-6 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[#E8A147]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5">
            <span className="text-[#E8A147] text-[10px] tracking-[0.6em] font-bold uppercase mb-6 block">
              The Venture Studio Model
            </span>
            <h2 
              style={{ fontFamily: "'Hoefler Text', serif" }} 
              className="text-4xl md:text-5xl text-white leading-[1.1] mb-8"
            >
              We don’t just deploy capital. <br />
              <span className="italic font-light">We deploy infrastructure.</span>
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-10">
              YVL Capital combines a 50M fund with a proprietary operational engine. 
              We turn structural inefficiencies in eternal industries into durable, 
              compounding value by reducing the friction of building AI-native platforms.
            </p>
            
            <div className="flex gap-4">
               <button className="px-8 py-3 bg-white text-black text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-[#E8A147] transition-colors">
                 Explore Nexa
               </button>
            </div>
          </div>

          {/* Right Side: Operational Stats Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#E8A147]/30 transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#E8A147]/10 rounded-lg text-[#E8A147] group-hover:bg-[#E8A147] group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div className="text-right">
                    <div 
                      style={{ fontFamily: "'Hoefler Text', serif" }} 
                      className="text-3xl text-white group-hover:text-[#E8A147] transition-colors"
                    >
                      {item.value}
                    </div>
                    <div className="text-[9px] uppercase tracking-[0.2em] text-white/30 font-bold">
                      {item.label}
                    </div>
                  </div>
                </div>
                <h4 className="text-white text-sm font-bold uppercase tracking-widest mb-3">
                  {item.title}
                </h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OperationalAlpha;