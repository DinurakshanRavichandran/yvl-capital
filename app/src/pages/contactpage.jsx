import React, { useEffect } from "react";
// Import the components we built
import ContactHero from "../components/contact-hero";
import ContactThesis from "../components/contact-eternalSector";
import ContactOperation from "../components/contact-operation";
import ContactGlobal from "../components/contact-globalaccess";  // The Footprint section
import ContactCTA from "../components/contact-cta";

const Contact = () => {
  // Optional: Scroll to top on mount to ensure the user starts at the Hero
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#030210] text-white min-h-screen selection:bg-[#E8A147]/30">
      {/* 1. HERO SECTION: The "Sovereign Control" entry point */}
      <ContactHero />

      {/* 2. THESIS SECTION: The "Eternal Sectors" (Food, Water, Industrial, Health) */}
      <ContactThesis />

      {/* 3. OPERATION SECTION: The "Nexa Platform" & Studio Advantage */}
      <ContactOperation />

      {/* 4. GLOBAL FOOTPRINT: Dubai, London, Montreal & Strategic Networks */}
      <ContactGlobal />

      {/* 5. DUAL-TRACK CTA: The split entry for LPs and Founders */}
      <ContactCTA />
    </main>
  );
};

export default Contact;