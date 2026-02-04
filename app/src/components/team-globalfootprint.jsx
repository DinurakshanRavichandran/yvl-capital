import React from "react";

const locations = [
  {
    city: "Dubai",
    label: "Headquarters",
    description: "MENA-native base with direct access to regional founders and sovereign ecosystems.",
    position: "top-[64%] left-[64%]",
  },
  {
    city: "London",
    label: "European Office",
    description: "Gateway to European capital markets and cross-border operating talent.",
    position: "top-[38%] left-[49%]",
  },
  {
    city: "Montreal",
    label: "North America",
    description: "Deep technology and AI talent pool connecting NA founders with global pathways.",
    position: "top-[42%] left-[26%]",
  },
];

const GlobalFootprint = () => {
  return (
    <section className="relative bg-[#030210] py-32 overflow-hidden">
      {/* THE MAP CONTAINER */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-full max-w-[1400px] aspect-[2/1] animate-float opacity-40">
          
          {/* Detailed SVG World Map */}
          <svg
            viewBox="0 0 1000 500"
            className="w-full h-full fill-white/[0.08] stroke-[#E8A147]/20 stroke-[0.5]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M156.4,171.1c-1.3,0.1-2.6,0.2-3.8,0.5c-1.7,0.4-3.4,1.1-4.8,2.2c-1.2,1-1.9,2.4-2.1,3.9c-0.2,1.5,0.2,3.1,1,4.4c1,1.5,2.6,2.6,4.3,3c1.3,0.3,2.6,0.3,3.9,0.1c1.7-0.2,3.4-0.8,4.9-1.8c1.2-0.8,2.1-1.9,2.6-3.2c0.5-1.3,0.6-2.7,0.3-4.1c-0.3-1.6-1.2-3.1-2.5-4.1C162.1,171.2,159.2,170.8,156.4,171.1z M224.2,185.7c-0.8-1.1-2-1.9-3.4-2.2c-1.4-0.3-2.9-0.1-4.2,0.6c-1.3,0.7-2.3,1.8-2.7,3.2c-0.4,1.4-0.3,2.9,0.4,4.2c0.7,1.3,1.8,2.3,3.2,2.7c1.4,0.4,2.9,0.3,4.2-0.4c1.3-0.7,2.3-1.8,2.7-3.2C224.8,189.2,224.8,187.3,224.2,185.7z M484.3,101.4c-4.2-1.2-8.7-1.3-12.9-0.2c-4.2,1.1-7.9,3.6-10.6,7c-2.7,3.4-4.2,7.7-4.3,12c-0.1,4.3,1.3,8.6,4,12c2.7,3.4,6.4,5.9,10.6,7.1c4.2,1.2,8.7,1.3,12.9,0.2c4.2-1.1,7.9-3.6,10.6-7c2.7-3.4,4.2-7.7,4.3-12c0.1-4.3-1.3-8.6-4-12C492.2,105.1,488.5,102.6,484.3,101.4z" />
            {/* ... Simplified for code readability, imagine the full GeoPath here ... */}
            {/* Fallback for Map Visuals */}
            <circle cx="500" cy="250" r="300" fill="url(#mapGradient)" opacity="0.1" />
            <defs>
              <radialGradient id="mapGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#E8A147" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#E8A147" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          {/* ACTIVE LOCATION MARKERS */}
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`absolute ${loc.position} flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group/marker`}
            >
              <div className="relative flex items-center justify-center">
                {/* Core Dot */}
                <div className="w-3 h-3 bg-[#E8A147] rounded-full shadow-[0_0_20px_#E8A147]" />
                {/* Radar Rings */}
                <div className="absolute w-10 h-10 border border-[#E8A147]/40 rounded-full animate-ping" />
                <div className="absolute w-16 h-16 border border-[#E8A147]/10 rounded-full animate-[ping_3s_linear_infinite]" />
                
                {/* Location Label (Floating) */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/marker:opacity-100 transition-all duration-500 transform group-hover/marker:-top-12">
                   <div className="bg-[#E8A147] text-[#030210] text-[10px] font-black px-3 py-1 rounded-md whitespace-nowrap uppercase tracking-widest">
                    {loc.city}
                   </div>
                   <div className="w-2 h-2 bg-[#E8A147] rotate-45 mx-auto -mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title Content */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-[#E8A147]" />
            <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#E8A147]">Global Connectivity</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            Built in MENA. <br />
            <span className="text-white/40 italic">Connected Globally.</span>
          </h2>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div 
              key={index} 
              className="group relative p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:bg-white/[0.04] hover:border-[#E8A147]/40 transition-all duration-700"
            >
              <div className="absolute top-0 right-0 p-6 opacity-[0.05] group-hover:opacity-20 transition-opacity">
                <span className="text-7xl font-serif font-bold">0{index + 1}</span>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{loc.city}</h3>
              <p className="text-[10px] text-[#E8A147] font-black tracking-[0.3em] mb-6 uppercase">{loc.label}</p>
              
              <p className="text-white/50 leading-relaxed font-light group-hover:text-white/80 transition-colors duration-500">
                {loc.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2">
                <div className="w-1 h-1 bg-[#E8A147] rounded-full" />
                <div className="h-[1px] w-0 group-hover:w-12 bg-[#E8A147]/50 transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.02); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default GlobalFootprint;