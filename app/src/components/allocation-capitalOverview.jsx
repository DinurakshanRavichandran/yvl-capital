// import React from "react";
// import { DollarSign, Rocket, Target } from "lucide-react";

// const CapitalOverview = () => {
//   return (
//     <section className="py-32 bg-[#030210]">
//       <div className="max-w-5xl mx-auto px-6 text-center">
//         {/* Headline */}
//         <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-tight text-white mb-6">
//           How We Deploy <span className="text-[#E8A147]">$50M</span>
//           <br />
//           Across Stages & Strategies
//         </h2>

//         <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
//           A clear breakdown of YVL's capital allocation, showing how we balance venture studio creation, seed and early growth investment, ownership protection, and strategic ecosystem bets.
//         </p>

//         <p className="text-white/50 text-md md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-16">
//           YVL's $50M fund is deployed strategically across three core tracks and supporting reserves to maximize founder success and LP returns. We combine venture studio origination – where we create and build companies from the ground up – with traditional VC seed and Series A deployment, all backed by follow-on reserves to protect ownership and amplify network effects.
//         </p>

//         {/* Overview Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           <div className="p-8 rounded-[28px] bg-gradient-to-br from-[#E8A147]/10 to-transparent border border-[#E8A147]/30 text-center">
//             <DollarSign className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
//             <p className="text-4xl font-serif text-[#E8A147] mb-2">$50M</p>
//             <p className="text-sm text-white/40 uppercase tracking-wider">Total Fund Size</p>
//           </div>

//           <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
//             <Rocket className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
//             <p className="text-4xl font-serif text-white mb-2">18–24</p>
//             <p className="text-sm text-white/40 uppercase tracking-wider">Month Deployment</p>
//           </div>

//           <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
//             <Target className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
//             <p className="text-4xl font-serif text-white mb-2">33–42</p>
//             <p className="text-sm text-white/40 uppercase tracking-wider">Target Companies</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CapitalOverview;


import React from "react";
import { motion } from "framer-motion";
import { DollarSign, Rocket, Target, BarChart3, ShieldCheck, PieChart } from "lucide-react";

const CapitalOverview = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
    <section className="relative py-40 bg-[#02010a] overflow-hidden border-t border-white/5">
      {/* Background Technical Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(232,161,71,0.05)_0%,transparent_70%)] blur-[100px]" />
        {/* Horizontal Micro-Lines */}
        <div className="absolute w-full h-px top-1/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute w-full h-px top-3/4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        {/* Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
            <BarChart3 size={14} className="text-[#E8A147]" />
            <span className="font-sans text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">
              Capital Structure & Allocation
            </span>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="font-serif text-[clamp(40px,6vw,80px)] font-medium leading-[0.95] tracking-tighter text-white mb-10"
            style={{ fontFamily: "'Hoefler Text', 'serif'" }}
          >
            Deploying <span className="italic text-[#E8A147]">$50.00M</span>
            <br />
            Institutional Liquidity
          </motion.h2>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-10 text-left pt-10 border-t border-white/10">
            <p className="font-sans text-white/70 text-lg font-light leading-relaxed">
              YVL's capital is deployed with surgical precision across three core tracks. We balance <span className="text-white">Studio Origination</span> with traditional Seed-to-Growth deployment to maximize equity density.
            </p>
            <p className="font-sans text-white/40 text-lg font-light leading-relaxed italic">
              Our follow-on reserves are mathematically structured to protect ownership and amplify winners throughout the 24-month deployment cycle.
            </p>
          </motion.div>
        </div>

        {/* FINANCIAL MODULES */}
        <div className="grid lg:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden mb-24">
          
          {/* Module: Total Fund */}
          <motion.div variants={itemVariants} className="bg-[#02010a] p-12 relative group">
            <div className="flex justify-between items-start mb-16">
              <div className="p-3 rounded-lg bg-[#E8A147]/5 border border-[#E8A147]/20">
                <DollarSign size={20} className="text-[#E8A147]" />
              </div>
              <span className="font-sans text-[9px] text-white/20 tracking-widest uppercase">Registry: 001</span>
            </div>
            <div className="mb-2 transition-transform duration-500 group-hover:-translate-y-1">
               <span className="font-serif text-6xl text-white tracking-tighter">$50M</span>
            </div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#E8A147] font-bold mb-6">Total Committed Capital</h4>
            <div className="w-full h-1 bg-white/5 relative overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 transition={{ duration: 1.5, ease: "circOut" }}
                 className="absolute h-full bg-[#E8A147]" 
               />
            </div>
          </motion.div>

          {/* Module: Timeline */}
          <motion.div variants={itemVariants} className="bg-[#02010a] p-12 relative group">
            <div className="flex justify-between items-start mb-16">
              <div className="p-3 rounded-lg bg-[#E8A147]/5 border border-[#E8A147]/20">
                <Rocket size={20} className="text-[#E8A147]" />
              </div>
              <span className="font-sans text-[9px] text-white/20 tracking-widest uppercase">Vesting: Standard</span>
            </div>
            <div className="mb-2 transition-transform duration-500 group-hover:-translate-y-1">
               <span className="font-serif text-6xl text-white tracking-tighter">18-24</span>
               <span className="font-serif text-2xl text-white/40 italic ml-2">Mo</span>
            </div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#E8A147] font-bold mb-6">Deployment Window</h4>
            <div className="flex gap-1">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`h-1 flex-1 ${i < 8 ? 'bg-[#E8A147]' : 'bg-white/5'}`} />
              ))}
            </div>
          </motion.div>

          {/* Module: Targets */}
          <motion.div variants={itemVariants} className="bg-[#02010a] p-12 relative group">
            <div className="flex justify-between items-start mb-16">
              <div className="p-3 rounded-lg bg-[#E8A147]/5 border border-[#E8A147]/20">
                <Target size={20} className="text-[#E8A147]" />
              </div>
              <span className="font-sans text-[9px] text-white/20 tracking-widest uppercase">Scope: Diversified</span>
            </div>
            <div className="mb-2 transition-transform duration-500 group-hover:-translate-y-1">
               <span className="font-serif text-6xl text-white tracking-tighter">33-42</span>
            </div>
            <h4 className="font-sans text-[11px] uppercase tracking-[0.3em] text-[#E8A147] font-bold mb-6">Target Portfolio Units</h4>
            <div className="flex items-center gap-3">
               <div className="h-1 w-1/2 bg-[#E8A147]" />
               <span className="font-sans text-[9px] text-white/20 tracking-widest">ACTIVE ACQUISITION</span>
            </div>
          </motion.div>

        </div>

        {/* Strategic Allocation Footnote */}
        <motion.div 
          variants={itemVariants}
          className="p-12 border border-white/5 rounded-[2px] bg-gradient-to-r from-white/[0.02] to-transparent flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex items-center gap-6">
            <PieChart className="text-[#E8A147]/40" size={40} strokeWidth={1} />
            <div>
              <p className="font-serif text-xl text-white italic">Asset Class Distribution</p>
              <p className="font-sans text-sm text-white/40">Allocated across Studio Origination, Direct Seed, and Series A Reserves.</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="text-center">
              <p className="font-serif text-2xl text-white">40%</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#E8A147]">Studio</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-white">35%</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#E8A147]">Seed</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-2xl text-white">25%</p>
              <p className="font-sans text-[9px] uppercase tracking-widest text-[#E8A147]">Reserve</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CapitalOverview;