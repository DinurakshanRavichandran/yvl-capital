import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const VisionCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-32 relative">
      {/* Divider Line */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" /> */}

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
          If This Is Your
          <br />
          <span className="text-[#E8A147]">Vision Too</span>
        </h2>

        {/* Founders & Investors Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Founders Card */}
          <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <h3 className="text-2xl font-serif text-white mb-4">For Founders</h3>
            <p className="text-white/60 font-light mb-6">
              We provide capital, infrastructure, and operational leverage to build category-defining companies.
            </p>
            <a
              href="mailto:founders@yvl.capital"
              className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
            >
              Apply for Funding
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Investors Card */}
          <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
            <h3 className="text-2xl font-serif text-white mb-4">For Investors</h3>
            <p className="text-white/60 font-light mb-6">
              We offer exposure to a systematically constructed portfolio of AI-native infrastructure companies.
            </p>
            <a
              href="mailto:lp@yvl.capital"
              className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
            >
              LP Inquiries
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Portfolio / Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => navigate("/")}
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
              View Our Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <a
            href="#"
            className="group relative px-12 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
              <Download size={16} />
              Download Full Thesis
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default VisionCTASection;
