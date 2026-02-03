import React from 'react';
import AndreaImage from "../assets/andrea.jpg";
import RabihImage from "../assets/Rabih.jpg";
import TommyImage from "../assets/Tommyy.jpg";
import MathewImage from "../assets/Mathew.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Andrea",
      role: "Managing Partner",
      bio: "Built and scaled AI-led infrastructure markets across emerging markets.",
      former: "Former: Energy, Industrial Systems",
      image: AndreaImage
    },
    {
      name: "Rabih",
      role: "Managing Partner",
      bio: "Built and scaled AI-led infrastructure markets across emerging markets.",
      former: "Former: Energy, Industrial Systems",
      image: RabihImage
    },
    {
      name: "Tommy",
      role: "Managing Partner",
      bio: "Built and scaled AI-led infrastructure markets across emerging markets.",
      former: "Former: Energy, Industrial Systems",
      image: TommyImage
    },
    {
      name: "Mathew",
      role: "Managing Partner",
      bio: "Built and scaled AI-led infrastructure markets across emerging markets.",
      former: "Former: Energy, Industrial Systems",
      image: MathewImage
    }
  ];

  return (
    <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
      {/* Background Depth Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6 tracking-tight">
            Team
          </h2>
          <p className="text-white/70 text-lg font-light max-w-2xl mx-auto leading-relaxed">
            Operators and Investors with first-hand experience building critical infrastructure.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="relative group p-8 flex flex-col items-center text-center rounded-[30px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.08] transition-all duration-500 hover:border-[#d4af37]/40 shadow-2xl"
            >
              {/* Specular Edge Lighting */}
              <div className="absolute inset-0 rounded-[30px] pointer-events-none border-t border-l border-white/10 opacity-50" />

              <h3 className="text-xl font-serif font-medium mb-6 text-white/95">
                {member.name}
              </h3>

              {/* Circular Image Container */}
              <div className="relative w-full aspect-square mb-8 overflow-hidden rounded-full border border-[#d4af37]/30 bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                {/* Inner Glow */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full" />
              </div>

              <div className="w-full">
                <h4 className="text-sm font-medium tracking-[0.1em] uppercase mb-2 text-white/90">
                  {member.role}
                </h4>

                <div className="w-full border-t border-white/20 mb-4"></div>

                <p className="text-white/50 text-[13px] leading-relaxed mb-6 font-light">
                  {member.bio}
                </p>

                <div className="w-12 border-t border-white/20 mx-auto mb-4"></div>

                <p className="text-white/40 text-[11px] italic tracking-wider uppercase font-light">
                  {member.former}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
