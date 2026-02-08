import React from "react";
import { ArrowRight, Download, Video } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
          Ready to Build
          <br />
          <span className="text-[#E8A147]">with Us?</span>
        </h2>

        <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-12">
          If you're an operator ready to build an AI-native company in eternal industries, we provide the capital, infrastructure, and guidance to help you succeed.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          <a
            href="mailto:studio@yvl.capital"
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
              Apply Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          <a
            href="#"
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
              <Download size={16} />
              Download Playbook
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-8">
          <a href="#" className="flex items-center gap-2 text-white/40 hover:text-[#E8A147] transition-colors text-sm">
            <Video size={18} />
            <span>Watch Founder Testimonials</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
