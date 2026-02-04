import React from "react";

import TeamHero from "../components/teamhero";
import TeamMember from "../components/team-members";
import OperatingDNA from "../components/team-operatingdna";
import GlobalFootprint from "../components/team-globalfootprint";
import TeamCTA from "../components/team-cta";

const Team = () => {
  return (
    <main className="bg-[#030210] text-white">
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
    </main>
  );
};

export default Team;
