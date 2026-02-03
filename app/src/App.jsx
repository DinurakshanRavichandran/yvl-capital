import React from "react";
import AboutUs from "./components/aboutus";
import WhyUs from "./components/whyus";
import WhatWeBack from "./components/whatweback";
import HowWeInvest from "./components/howWeInvest";
import CapitalSnapshot from "./components/capitalSnapshot";
import PartnerWithYVLCapital from "./components/cta";
import TeamSection from "./components/team";

function App() {
  return (
    <main className="bg-[#030210] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* GLOBAL BACKGROUND ELEMENTS - These sit behind everything to create flow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Subtle top-right glow to start the journey */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-40" />
        
        {/* Mid-page accent glow */}
        <div className="absolute top-[40%] left-[-10%] w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full" />
        
        {/* Bottom-page warmth */}
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
      </div>

      {/* COMPONENT FLOW */}
      <div className="relative z-10">
        <AboutUs />
        
        {/* Subtle Separator: Soft Gold Fade */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <WhyUs />
        
        {/* Section Distinction: Texture Shift */}
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none" />
          <WhatWeBack />
        </div>

        <HowWeInvest />

        {/* The Transition to Data/Capital */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#030210]" />
        <CapitalSnapshot />

        <TeamSection />

        {/* Finale: The CTA with a solid distinction */}
        <section className="relative pt-20 pb-32 border-t border-white/5">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
           <PartnerWithYVLCapital />
        </section>
      </div>
    </main>
  );
}

export default App;