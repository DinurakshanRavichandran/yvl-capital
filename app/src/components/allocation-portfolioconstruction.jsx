// import React from "react";

// const PortfolioConstruction = () => {
//   return (
//     <section className="py-24 md:py-32">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//             Portfolio Construction <span className="text-[#E8A147]">Visual</span>
//           </h2>
//         </div>

//         {/* ASCII Table */}
//         <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] overflow-x-auto">
//           <pre className="text-[#E8A147] text-xs md:text-sm font-mono leading-relaxed whitespace-pre">
// {`YVL $50M Fund Structure:

// ┌─────────────────────────────────────────────────────────────┐
// │                     $50M TOTAL FUND                         │
// ├────────────┬────────────┬────────────┬────────────┬─────────┤
// │  Studio    │   Seed     │ Seed→A     │ Reserves   │ Strategic│
// │   $10M     │   $8-10M   │ $10-12M    │   $20M     │   $5M   │
// │  (20%)     │  (16-20%)  │ (20-24%)   │   (40%)    │  (10%)  │
// ├────────────┼────────────┼────────────┼────────────┼─────────┤
// │ Internal   │ Seed Core  │ Seed→A     │ Follow-On  │ Ecosystem│
// │ Ideation   │ First      │ High       │ Reserves   │ Bets    │
// │ $4M/4 cos  │ Inst. Seed │ Conviction │ $15M       │ $5M     │
// │            │ $8-10M/    │ $10-12M/   │ (30%)      │         │
// │ Founder-   │ 10-14 cos  │ 6-10 cos   │ Operating  │         │
// │ First      │            │            │ Budget $1M │         │
// │ $6M/6 cos  │            │            │ (2%)       │         │
// └────────────┴────────────┴────────────┴────────────┴─────────┘`}
//           </pre>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioConstruction;

import React from "react";
import { motion } from "framer-motion";
import { Layers, PieChart, Activity, ShieldCheck, Target } from "lucide-react";

const PortfolioConstruction = () => {
  const allocationData = [
    { 
      label: "Studio Block", 
      amount: "$10M", 
      percentage: "20%", 
      color: "#E8A147", 
      details: ["Internal Ideation ($4M)", "Founder-First ($6M)"],
      description: "Direct company creation from day zero."
    },
    { 
      label: "Seed Core", 
      amount: "$10M", 
      percentage: "20%", 
      color: "rgba(255,255,255,0.8)", 
      details: ["10–14 Companies", "First Institutional Check"],
      description: "Backing established AI-native founders."
    },
    { 
      label: "Seed → A", 
      amount: "$12M", 
      percentage: "24%", 
      color: "rgba(255,255,255,0.6)", 
      details: ["6–10 Companies", "High Conviction"],
      description: "Bridging structural AI platforms to scale."
    },
    { 
      label: "Reserves", 
      amount: "$15M", 
      percentage: "30%", 
      color: "rgba(255,255,255,0.4)", 
      details: ["Follow-on Protection", "Ownership Defense"],
      description: "Capital set aside to defend equity in winners."
    },
    { 
      label: "Strategic", 
      amount: "$3M", 
      percentage: "6%", 
      color: "rgba(255,255,255,0.2)", 
      details: ["Ecosystem Bets", "Operational Alpha"],
      description: "Peripheral bets on infra and distribution."
    }
  ];

  return (
    <section className="relative py-32 bg-[#02010a] overflow-hidden">
      {/* Structural Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_100px,white_101px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 mb-6">
              <PieChart size={14} className="text-[#E8A147]" />
              <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
                Portfolio Architecture
              </span>
            </div>
            <h2 
              className="font-serif text-5xl md:text-7xl text-white leading-tight tracking-tighter"
              style={{ fontFamily: "'Hoefler Text', 'serif'" }}
            >
              Strategic <span className="italic">Deployment</span> <br />
              of $50M Capital
            </h2>
          </div>
          
          <div className="hidden md:block text-right">
             <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-white/20">Fiscal Version 2.0.26</span>
             <div className="h-px w-32 bg-[#E8A147]/30 mt-2 ml-auto" />
          </div>
        </div>

        {/* INTERACTIVE ALLOCATION STACK */}
        <div className="grid lg:grid-cols-5 gap-px bg-white/10 border border-white/10 rounded-sm overflow-hidden">
          {allocationData.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#02010a] p-8 min-h-[400px] flex flex-col justify-between hover:bg-white/[0.02] transition-colors duration-500"
            >
              {/* Top Meta */}
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-sans text-[9px] text-[#E8A147] font-bold tracking-[0.2em]">0{index + 1}</span>
                  <Activity size={12} className="text-white/10 group-hover:text-[#E8A147] transition-colors" />
                </div>
                
                <h3 className="font-serif text-3xl text-white italic mb-2" style={{ fontFamily: "'Hoefler Text', 'serif'" }}>
                  {item.label}
                </h3>
                <p className="font-sans text-[11px] text-white/40 leading-relaxed uppercase tracking-widest mb-10">
                  {item.description}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  {item.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full bg-[#E8A147]" />
                      <span className="font-sans text-[10px] text-white/60 tracking-tight uppercase">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Large Data */}
              <div className="mt-12">
                <div className="font-serif text-4xl text-white mb-1">{item.amount}</div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/10 group-hover:bg-[#E8A147]/50 transition-colors" />
                  <span className="font-sans text-[10px] font-bold text-[#E8A147]">{item.percentage}</span>
                </div>
              </div>

              {/* Accent corner effect on hover */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[10px] border-r-[10px] border-t-[#E8A147]/0 border-r-[#E8A147]/0 group-hover:border-t-[#E8A147]/40 group-hover:border-r-[#E8A147]/40 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM SUMMARY RIBBON */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-10 border border-white/5 bg-white/[0.02] rounded-sm gap-8"
        >
          <div className="flex items-center gap-8">
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mb-2">Portfolio Density</span>
              <span className="font-serif text-2xl text-white italic">33–42 Total Assets</span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 mb-2">Operating Reserve</span>
              <span className="font-serif text-2xl text-white italic">2% Budgeted Cap</span>
            </div>
          </div>

          <div className="flex items-center gap-6 group cursor-default">
             <ShieldCheck size={20} className="text-[#E8A147]" />
             <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/40 leading-relaxed max-w-[240px]">
               Ownership defense protocol active across all internal and core tranches.
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioConstruction;