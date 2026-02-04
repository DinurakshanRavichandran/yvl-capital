import React from "react";

const locations = [
  {
    city: "Dubai",
    label: "Headquarters",
    description:
      "MENA-native base with direct access to regional founders, sovereign ecosystems, and government-backed innovation initiatives.",
    position: "top-[48%] left-[62%]",
  },
  {
    city: "London",
    label: "European Office",
    description:
      "Gateway to European capital markets, institutional investors, and cross-border operating talent.",
    position: "top-[38%] left-[48%]",
  },
  {
    city: "Montreal",
    label: "North America",
    description:
      "Deep technology and AI talent pool connecting North American founders with global expansion pathways.",
    position: "top-[36%] left-[30%]",
  },
];

const GlobalFootprint = () => {
  return (
    <section className="relative bg-[#030210] text-white overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* World map */}
        <img
          src="/maps/world-outline.svg"
          alt=""
          className="absolute top-1/2 left-1/2 w-[1200px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
        />

        {/* City markers */}
        {locations.map((loc, index) => (
          <div
            key={index}
            className={`absolute ${loc.position} w-2 h-2 bg-yellow-400 rounded-full`}
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping opacity-30" />
          </div>
        ))}

        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-yellow-400/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 py-[120px]">
        {/* Header */}
        <div className="max-w-[640px] mb-20">
          <p className="text-[13px] uppercase tracking-widest text-white/50">
            Global Footprint
          </p>
          <h2 className="mt-4 text-[36px] font-semibold tracking-tight">
            Built in MENA. Connected Globally.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/70">
            YVL operates from strategic global hubs, enabling cross-border
            capital formation, founder sourcing, and talent deployment across
            MENA, Europe, and North America.
          </p>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-14 gap-y-16">
          {locations.map((loc, index) => (
            <div key={index}>
              <div className="text-[14px] uppercase tracking-wide text-white/50">
                {loc.label}
              </div>
              <h3 className="mt-3 text-[26px] font-medium">
                {loc.city}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                {loc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-border reinforcement */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <p className="max-w-[820px] text-[16px] leading-relaxed text-white/65">
            This distributed operating model allows YVL to identify opportunities
            early, structure capital efficiently, and support portfolio companies
            as they scale across regions — without relying on intermediaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;
