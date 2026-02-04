// import React from 'react';

// const PartnerWithYVLCapital = () => {
//   const ctaTracks = [
//     {
//       title: "For Founders",
//       description: "Building AI-native autonomous systems for critical infrastructure.",
//       buttonText: "Apply To Work With Us",
//       isPrimary: true
//     },
//     {
//       title: "For Founders",
//       description: "Building AI-native autonomous systems for critical infrastructure.",
//       buttonText: "Apply To Work With Us",
//       isPrimary: true
//     }
//   ];

//   return (
//     <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
//       {/* Background Ambient Depth Glows */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
//         <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full opacity-30" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-8 font-semibold">
//             Partner With YVL Capital
//           </h2>
//           <p className="text-xl md:text-2xl font-serif font-light max-w-3xl mx-auto leading-relaxed text-white/80">
//             From vision to defensible outcomes — YVL Capital guides founders to build autonomous systems that last
//           </p>
//         </div>

//         {/* The Two Rounded Glass CTA Boxes */}
//         <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-10">
//           {ctaTracks.map((track, index) => (
//             <div 
//               key={index} 
//               className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-700 rounded-[50px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] shadow-[0_40px_80px_rgba(0,0,0,0.4)] group hover:border-[#d4af37]/50 hover:shadow-[0_40px_90px_rgba(212,175,55,0.1)]"
//             >
//               {/* Specular Rim Lighting (The "Glass" Edge) */}
//               <div className="absolute inset-0 rounded-[50px] pointer-events-none border-t border-l border-white/20 opacity-40" />
//               <div className="absolute inset-0 rounded-[50px] pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)]" />

//               <h3 className="text-3xl font-serif font-medium mb-8 text-white/95">
//                 {track.title}
//               </h3>
              
//               <p className="text-white/50 text-[15px] leading-relaxed max-w-[240px] mb-12 font-light">
//                 {track.description}
//               </p>

//               {/* Solid Gold CTA Button */}
//               <button className="bg-[#d4af37] text-[#020212] font-bold text-[11px] uppercase tracking-[0.15em] px-10 py-4 rounded-[12px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_rgba(212,175,55,0.25)]">
//                 {track.buttonText}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PartnerWithYVLCapital;

import React from 'react';

const PartnerWithYVLCapital = () => {
  const ctaTracks = [
    {
      title: "For Founders",
      description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
      buttonText: "Apply To Work With Us",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", // Abstract connectivity/tech
      link: "#founders"
    },
    {
      title: "For Investors",
      description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
      buttonText: "Inquire About Access",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop", // Sleek industrial hardware
      link: "#investors"
    }
  ];

  return (
    <section className="relative bg-[#0D1B2A] text-white py-32 px-6 overflow-hidden font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/10 blur-[150px] rounded-full opacity-40" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[11px] uppercase tracking-[0.5em] text-[#E8A147] mb-8 font-semibold">
            Partner with YVL Capital
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-medium max-w-3xl mx-auto leading-[1.15] tracking-tight">
            From vision to defensible outcomes.
          </h2>
          <p className="mt-6 text-lg font-light text-white/40 max-w-xl mx-auto leading-relaxed">
            Guiding founders to build autonomous systems that last in the real world.
          </p>
        </div>

        {/* The Two Glass CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {ctaTracks.map((track, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden group min-h-[520px] flex flex-col items-center justify-end text-center p-12 transition-all duration-700 rounded-[40px] border border-white/[0.08] hover:border-[#E8A147]/40 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Background Image Layer */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={track.image} 
                  alt={track.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0"
                />
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent" />
              </div>

              {/* Content Layer */}
              <div className="relative z-10 w-full flex flex-col items-center">
                {/* Decorative Icon or Badge */}
                <div className="w-10 h-[1px] bg-[#E8A147] mb-8 group-hover:w-20 transition-all duration-500" />
                
                <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-white/95">
                  {track.title}
                </h3>
                
                <p className="text-white/50 text-base leading-relaxed max-w-[280px] mb-12 font-light">
                  {track.description}
                </p>

                {/* The "Power" Button */}
                <button className="relative w-full py-5 rounded-[15px] group/btn overflow-hidden transition-all duration-300">
                  {/* Button Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover/btn:scale-105" />
                  
                  {/* Shine effect */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
                  
                  <span className="relative z-10 text-[#0D1B2A] font-bold text-[12px] uppercase tracking-[0.2em]">
                    {track.buttonText}
                  </span>
                </button>
              </div>

              {/* Glass Rim Light Overlay */}
              <div className="absolute inset-0 rounded-[40px] pointer-events-none border-t border-l border-white/20 opacity-30 group-hover:opacity-60 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom Contact Link */}
        <div className="mt-20 text-center">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em]">
            General Inquiries: <a href="mailto:hello@yvl.capital" className="text-white/60 hover:text-[#E8A147] transition-colors border-b border-white/10 hover:border-[#E8A147] ml-2 pb-1 font-serif italic normal-case tracking-normal">hello@yvl.capital</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithYVLCapital;