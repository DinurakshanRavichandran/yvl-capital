import React from 'react';

const PartnerWithYVLCapital = () => {
  const ctaTracks = [
    {
      title: "For Founders",
      description: "Building AI-native autonomous systems for critical infrastructure.",
      buttonText: "Apply To Work With Us",
      isPrimary: true
    },
    {
      title: "For Founders",
      description: "Building AI-native autonomous systems for critical infrastructure.",
      buttonText: "Apply To Work With Us",
      isPrimary: true
    }
  ];

  return (
    <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
      {/* Background Ambient Depth Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] rounded-full opacity-40" />
        <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-8 font-semibold">
            Partner With YVL Capital
          </h2>
          <p className="text-xl md:text-2xl font-serif font-light max-w-3xl mx-auto leading-relaxed text-white/80">
            From vision to defensible outcomes — YVL Capital guides founders to build autonomous systems that last
          </p>
        </div>

        {/* The Two Rounded Glass CTA Boxes */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-10">
          {ctaTracks.map((track, index) => (
            <div 
              key={index} 
              className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-700 rounded-[50px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] shadow-[0_40px_80px_rgba(0,0,0,0.4)] group hover:border-[#d4af37]/50 hover:shadow-[0_40px_90px_rgba(212,175,55,0.1)]"
            >
              {/* Specular Rim Lighting (The "Glass" Edge) */}
              <div className="absolute inset-0 rounded-[50px] pointer-events-none border-t border-l border-white/20 opacity-40" />
              <div className="absolute inset-0 rounded-[50px] pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)]" />

              <h3 className="text-3xl font-serif font-medium mb-8 text-white/95">
                {track.title}
              </h3>
              
              <p className="text-white/50 text-[15px] leading-relaxed max-w-[240px] mb-12 font-light">
                {track.description}
              </p>

              {/* Solid Gold CTA Button */}
              <button className="bg-[#d4af37] text-[#020212] font-bold text-[11px] uppercase tracking-[0.15em] px-10 py-4 rounded-[12px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_rgba(212,175,55,0.25)]">
                {track.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerWithYVLCapital;