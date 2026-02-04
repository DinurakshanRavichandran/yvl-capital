import React from "react";
import Header from "../components/header"
import TeamHero from "../components/teamhero";
import TeamMember from "../components/team-members";
import OperatingDNA from "../components/team-operatingdna";
import GlobalFootprint from "../components/team-globalfootprint";
import TeamCTA from "../components/team-cta";
import Footer from "../components/footer";

const Team = () => {
  return (
    <main className="bg-[#030210] text-white min-h-screen flex flex-col">
      {/* Navigation */}
      <Header />

      {/* Main Content Area */}
      {/* pt-20 or pt-24 ensures the Hero content starts below the fixed Header */}
      <div className="flex-grow pt-20">
        {/* Hero / Positioning */}
        <TeamHero />

        {/* Leadership Sections (one per partner) */}
        <TeamMember />

        {/* Operating DNA */}
        <OperatingDNA />

        {/* Global Footprint */}
        <GlobalFootprint />

        {/* CTA */}
        <TeamCTA />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default Team;