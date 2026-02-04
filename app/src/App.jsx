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
    // min-h-screen ensures the background color covers the full viewport even on short pages
    <main className="min-h-screen bg-[#030210] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden">
      
      {/* 1. GLOBAL BACKGROUND - Fixed position stays behind as you scroll */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top-right ambient gold glow */}
        <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-40" />
        
        {/* Mid-page subtle white glow - positioned roughly near "What We Back" */}
        <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
        
        {/* Bottom-page warm gold glow - near the Team/CTA */}
        <div className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] bg-[#D4AF37]/5 blur-[100px] rounded-full opacity-60" />
      </div>

      {/* 2. FIXED HEADER - Highest z-index to stay on top */}
      <Header className="z-50" />

      {/* 3. CONTENT FLOW - z-10 puts content above background but below header */}
      <div className="relative z-10 flex flex-col">
        
        {/* Hero Section: Usually 100vh */}
        <HeroSection />

        {/* Narrative Flow: Consistent vertical spacing (py-24 or py-32) */}
        <section id="about" className="py-20 md:py-32">
          <AboutUs />
        </section>
        
        {/* Architectural Divider */}
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
        
        <section id="why-us" className="py-20 md:py-32">
          <WhyUs />
        </section>
        
        {/* Section with specialized background transition */}
        <section id="focus" className="relative py-20 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.03)_0%,_transparent_70%)] pointer-events-none" />
          <WhatWeBack />
        </section>

        <section id="investment" className="py-20 md:py-32">
          <HowWeInvest />
        </section>

        {/* Transition area for Data sections */}
        <div className="h-32 bg-gradient-to-b from-transparent to-[#030210]/50" />
        
        <section id="snapshot" className="py-20">
          <CapitalSnapshot />
        </section>

        <section id="team" className="py-20 md:py-32">
          <TeamSection />
        </section>

        {/* Finale Section */}
        <section id="contact" className="relative pt-32 pb-20">
           {/* Top Border Detail */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
           <PartnerWithYVLCapital />
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default App;