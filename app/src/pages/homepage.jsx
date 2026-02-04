import React from "react";
import Header from "../components/header";
import HeroSection from "../components/hero";
import AboutUs from "../components/aboutus";
import WhyUs from "../components/whyus";
import WhatWeBack from "../components/whatweback";
import HowWeInvest from "../components/howWeInvest";
import CapitalSnapshot from "../components/capitalSnapshot";
import TeamSection from "../components/team";
import PartnerWithYVLCapital from "../components/cta";
import Footer from "../components/footer";

// This replaces the empty gaps with an active gold animation
const SectionDivider = ({ animate = false }) => (
  <div className="relative w-full max-w-7xl mx-auto px-6 h-px">
    <div className="absolute inset-x-6 h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent">
      {animate && (
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-transparent via-[#E8A147] to-transparent animate-scan" />
      )}
    </div>
    {/* Central gold node */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E8A147] shadow-[0_0_8px_#E8A147]" />
  </div>
);

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden">
      
      {/* 1. FIXED BACKGROUND OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#E8A147]/05 blur-[120px] rounded-full" />
      </div>

      <Header className="z-50" />

      <div className="relative z-10 flex flex-col">
        {/* HERO: Reduced bottom padding */}
        <div className="mb-0">
          <HeroSection />
        </div>

        <SectionDivider animate={true} />

        {/* COMPACT CONTENT BLOCKS */}
        <section id="about" className="py-12 md:py-16">
          <AboutUs />
        </section>

        <SectionDivider />

        <section id="why-us" className="py-12 md:py-16">
          <WhyUs />
        </section>

        <SectionDivider animate={true} />

        <section id="focus" className="py-12 md:py-16">
          <WhatWeBack />
        </section>

        <SectionDivider />

        <section id="investment" className="py-12 md:py-16">
          <HowWeInvest />
        </section>

        <SectionDivider animate={true} />

        <section id="snapshot" className="py-12 md:py-16">
          <CapitalSnapshot />
        </section>

        <SectionDivider />

        <section id="team" className="py-12 md:py-16">
          <TeamSection />
        </section>

        <SectionDivider animate={true} />

        {/* CTA SECTION: Tighter transition to Footer */}
        <section id="contact" className="pt-20 pb-10">
           <PartnerWithYVLCapital />
        </section>

        <Footer />
      </div>

      {/* Animation for the gold line scan effect */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(1000%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </main>
  );
};

export default HomePage;