import React from "react";
import { DollarSign, Rocket, Target } from "lucide-react";

const CapitalOverview = () => {
  return (
    <section className="py-32 bg-[#030210]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Headline */}
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-tight text-white mb-6">
          How We Deploy <span className="text-[#E8A147]">$50M</span>
          <br />
          Across Stages & Strategies
        </h2>

        <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto mb-12">
          A clear breakdown of YVL's capital allocation, showing how we balance venture studio creation, seed and early growth investment, ownership protection, and strategic ecosystem bets.
        </p>

        <p className="text-white/50 text-md md:text-lg font-light leading-relaxed max-w-4xl mx-auto mb-16">
          YVL's $50M fund is deployed strategically across three core tracks and supporting reserves to maximize founder success and LP returns. We combine venture studio origination – where we create and build companies from the ground up – with traditional VC seed and Series A deployment, all backed by follow-on reserves to protect ownership and amplify network effects.
        </p>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-[28px] bg-gradient-to-br from-[#E8A147]/10 to-transparent border border-[#E8A147]/30 text-center">
            <DollarSign className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
            <p className="text-4xl font-serif text-[#E8A147] mb-2">$50M</p>
            <p className="text-sm text-white/40 uppercase tracking-wider">Total Fund Size</p>
          </div>

          <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
            <Rocket className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
            <p className="text-4xl font-serif text-white mb-2">18–24</p>
            <p className="text-sm text-white/40 uppercase tracking-wider">Month Deployment</p>
          </div>

          <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
            <Target className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
            <p className="text-4xl font-serif text-white mb-2">33–42</p>
            <p className="text-sm text-white/40 uppercase tracking-wider">Target Companies</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalOverview;
