import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Upload, 
  Send, 
  ArrowLeft, 
  Globe, 
  Briefcase, 
  Layers, 
  DollarSign, 
  TrendingUp,
  User,
  Mail,
  Building
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const FounderPitchForm = () => {
  const navigate = useNavigate();
  const [dragActive, setDragActive] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative min-h-screen bg-[#02010a] flex flex-col items-center justify-center py-24 px-6 overflow-hidden z-[999]">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,_rgba(232,161,71,0.05)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Back Navigation
        <button 
          // onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/40 hover:text-[#E8A147] transition-colors mb-12 font-sans text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button> */}

        {/* Header Block */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#E8A147]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">For Founders</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight" style={{ fontFamily: "'Hoefler Text', 'serif'" }}>
            Submit Your Pitch
          </h1>
          <p className="font-sans text-white/50 text-xl font-light leading-relaxed max-w-2xl">
            Share your vision with us. Upload your pitch deck and tell us about your company.
          </p>
        </div>

        {/* Form Architecture */}
        <form className="space-y-10">
          
          {/* 1. PDF DROPZONE */}
          <motion.div variants={itemVariants} className="space-y-4">
            <label className="font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">
              Pitch Deck (PDF)
            </label>
            <div 
              onDragOver={() => setDragActive(true)}
              onDragLeave={() => setDragActive(false)}
              className={`relative border-2 border-dashed rounded-sm py-12 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer ${
                dragActive ? "border-[#E8A147] bg-[#E8A147]/5" : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <Upload size={24} className="text-[#E8A147] mb-4 opacity-60" />
              <p className="font-sans text-sm text-white/40 tracking-tight">
                Click to upload or <span className="text-white/60">drag and drop</span>
              </p>
              <p className="font-sans text-[9px] text-white/20 uppercase tracking-widest mt-2">PDF format preferred (Max 20MB)</p>
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf" />
            </div>
          </motion.div>

          {/* 2. COMPANY & REPRESENTATIVE GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><Building size={12}/> Company Name *</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all outline-none placeholder:text-white/5" placeholder="Enterprise AI Inc." />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><User size={12}/> Representative Name *</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all outline-none" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><Briefcase size={12}/> Representative Title *</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all outline-none" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><Mail size={12}/> Email *</label>
              <input type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all outline-none" />
            </motion.div>
          </div>

          {/* 3. TECHNICAL DETAILS GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><Globe size={12}/> Website</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 transition-all outline-none" placeholder="https://" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><Layers size={12}/> Industry *</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 transition-all outline-none" />
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">Stage *</label>
              <select className="w-full bg-[#030210] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 outline-none appearance-none cursor-pointer">
                <option>Select stage</option>
                <option>Pre-seed</option>
                <option>Seed</option>
                <option>Series A</option>
              </select>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><DollarSign size={12}/> Ticket Size *</label>
              <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 transition-all outline-none" placeholder="e.g., $500K - $2M" />
            </motion.div>
          </div>

          {/* 4. VALUATION FULL WIDTH */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1"><TrendingUp size={12}/> Company Valuation *</label>
            <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:border-[#E8A147]/50 transition-all outline-none" placeholder="e.g., $10M" />
          </motion.div>

          {/* SUBMIT BUTTON */}
          <motion.div variants={itemVariants} className="pt-6">
            <button 
              type="submit"
              className="w-full flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#E8A147] to-[#D4893D] rounded-sm text-[#030210] font-sans text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_40px_rgba(232,161,71,0.2)] transition-all duration-500 active:scale-[0.98]"
            >
              Submit Pitch <Send size={14} />
            </button>
          </motion.div>
        </form>

        {/* Technical Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 opacity-30">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9px] uppercase tracking-widest">Sovereign Encryption</span>
            <span className="font-sans text-[10px]">Transmission: End-to-End SSL</span>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="font-sans text-[9px] uppercase tracking-widest">Confidentiality</span>
            <span className="font-sans text-[10px]">Proprietary Data Protection Protocol active</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FounderPitchForm;