import React from "react";
import { motion } from "framer-motion";
import { Send, FileText, ArrowLeft, Building2, User, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LPInquiryForm = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative min-h-screen bg-[#02010a] flex flex-col items-center justify-center py-24 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_50%_0%,_rgba(232,161,71,0.05)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-3xl"
      >
        {/* Back Navigation */}
        <button 
          onClick={() => navigate(-1)}
          className="group flex items-center gap-2 text-white/40 hover:text-[#E8A147] transition-colors mb-12 font-sans text-[10px] uppercase tracking-[0.3em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>

        {/* Header Block */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#E8A147]" />
            <span className="font-sans text-[11px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">For LPs</span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 tracking-tight" style={{ fontFamily: "'Hoefler Text', 'serif'" }}>
            LP Inquiries
          </h1>
          <p className="font-sans text-white/50 text-xl font-light leading-relaxed max-w-2xl">
            Interested in partnering with YVL Capital? <br />
            Connect with our investment relations team below.
          </p>
        </div>

        {/* Form Architecture */}
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Name Input */}
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">
                <User size={12} className="text-[#E8A147]/50" /> Your Name *
              </label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:outline-none focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-white/10"
              />
            </motion.div>

            {/* Company Input */}
            <motion.div variants={itemVariants} className="space-y-3">
              <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">
                <Building2 size={12} className="text-[#E8A147]/50" /> Company *
              </label>
              <input 
                type="text" 
                placeholder="Institutional Group"
                className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:outline-none focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-white/10"
              />
            </motion.div>
          </div>

          {/* Email Input */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">
              <Mail size={12} className="text-[#E8A147]/50" /> Institutional Email *
            </label>
            <input 
              type="email" 
              placeholder="name@firm.com"
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:outline-none focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all duration-300 placeholder:text-white/10"
            />
          </motion.div>

          {/* Message Input */}
          <motion.div variants={itemVariants} className="space-y-3">
            <label className="font-sans text-[10px] uppercase tracking-widest text-white/30 font-bold ml-1">
              Investment Interest
            </label>
            <textarea 
              rows={5}
              placeholder="Tell us about your interest in YVL Capital..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-sm px-5 py-4 text-white font-sans focus:outline-none focus:border-[#E8A147]/50 focus:bg-white/[0.05] transition-all duration-300 resize-none placeholder:text-white/10"
            />
          </motion.div>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <button 
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#E8A147] to-[#D4893D] rounded-sm text-[#030210] font-sans text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(232,161,71,0.3)] transition-all duration-500 active:scale-95"
            >
              Send Inquiry <Send size={14} />
            </button>

            <button 
              type="button"
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 border border-[#E8A147]/30 text-[#E8A147] rounded-sm font-sans text-[11px] font-black uppercase tracking-[0.2em] hover:bg-[#E8A147]/5 hover:border-[#E8A147] transition-all duration-500"
            >
              <FileText size={14} /> Request Pitch Deck
            </button>
          </motion.div>
        </form>

        {/* Footer Metadata */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/20">Secure Channel</span>
            <span className="font-sans text-[10px] text-white/40">Encryption: AES-256</span>
          </div>
          <div className="flex flex-col gap-1 md:text-right">
            <span className="font-sans text-[9px] uppercase tracking-widest text-white/20">Response Time</span>
            <span className="font-sans text-[10px] text-white/40">Typically within 24 business hours</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LPInquiryForm;