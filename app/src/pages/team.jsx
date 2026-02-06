import React from "react";
import TeamHero from "../components/teamhero";
import TeamMember from "../components/team-members";
import OperatingDNA from "../components/team-operatingdna";
import GlobalFootprint from "../components/team-globalfootprint";
import TeamCTA from "../components/team-cta";

const Team = () => {
  return (
    <main className="bg-[#030210] text-white min-h-screen flex flex-col">
      {/* Main Content Area */}
      {/* pt-20 ensures the Hero content starts below the global fixed Header in App.jsx */}
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
    </main>
  );
};

export default Team;