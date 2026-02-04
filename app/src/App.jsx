import React from "react";
import Header from "./components/header";
import HeroSection from "./components/hero";
import AboutUs from "./components/aboutus";
import WhyUs from "./components/whyus";
import WhatWeBack from "./components/whatweback";
import HowWeInvest from "./components/howWeInvest";
import CapitalSnapshot from "./components/capitalSnapshot";
import TeamSection from "./components/team";
import PartnerWithYVLCapital from "./components/cta";
import Footer from "./components/footer";

function App() {
  return (
    <main className="bg-[#030210] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* GLOBAL BACKGROUND ELEMENTS - Provides visual depth across all sections */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top-right ambient gold glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-40" />
        
        {/* Mid-page subtle white glow */}
        <div className="absolute top-[40%] left-[-10%] w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full" />
        
        {/* Bottom-page warm gold glow */}
        <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
      </div>

      {/* FIXED NAVIGATION */}
      <Header />

      {/* COMPONENT FLOW */}
      <div className="relative z-10">
        {/* HERO - Entry Point */}
        <HeroSection />

        {/* NARRATIVE SECTION */}
        <div className="relative pt-10">
          <AboutUs />
        </div>
        
        {/* Soft Gold Gradient Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        
        <WhyUs />
        
        {/* Radial Glow Transition for Portfolio Strategy */}
        <div className="relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none" />
          <WhatWeBack />
        </div>

        <HowWeInvest />

        {/* Smooth dark transition into Capital Data */}
        <div className="h-24 bg-gradient-to-b from-transparent to-[#030210]" />
        <CapitalSnapshot />

        <TeamSection />

        {/* FINALE - CTA & FOOTER */}
        <section className="relative pt-20 border-t border-white/5">
           {/* Architectural Gold Top-Border */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
           <PartnerWithYVLCapital />
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default App;