// import React from 'react';
// import { Diamond, Lightbulb, Hammer } from 'lucide-react'; // Example icons

// const WhatWeBack = () => {
//   const cards = [
//     {
//       title: "Physical World Control",
//       description: "Our companies actuate the real world: climate systems, water dosing, industrial processes, diagnostics, not just dashboards.",
//       icon: <Diamond className="w-6 h-6 text-yellow-500" />,
//     },
//     {
//       title: "AI-Native by Design",
//       description: "AI is the decision engine, not a feature. Models operate continuously, in real time, embedded directly into operational workflows.",
//       icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
//     },
//     {
//       title: "Mission-Critical Operations",
//       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
//       icon: <Hammer className="w-6 h-6 text-yellow-500" />,
//     },
//   ];

//   return (
//     <section className="bg-[#020817] text-white py-20 px-6 font-sans">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Header Section */}
//         <div className="mb-16">
//           <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 border-b border-yellow-500 inline-block pb-1">
//             What We Back
//           </h3>
//           <h2 className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
//             AI-native platforms that autonomously control mission-critical physical operations.
//           </h2>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {cards.map((card, index) => (
//             <div 
//               key={index} 
//               className="bg-[#0a101f] border border-gray-800 p-8 rounded-lg flex flex-col items-center text-center transition-all hover:border-gray-600 group"
//             >
//               {/* Icon Container */}
//               <div className="mb-6 p-3 border border-yellow-500/30 rounded-md bg-yellow-500/5">
//                 {card.icon}
//               </div>
              
//               <h4 className="text-lg font-semibold mb-4 group-hover:text-yellow-500 transition-colors">
//                 {card.title}
//               </h4>
              
//               <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
//                 {card.description}
//               </p>
              
//               <button className="text-xs font-semibold uppercase tracking-widest border border-yellow-500 px-6 py-2 rounded-sm hover:bg-yellow-500 hover:text-black transition-all">
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeBack;

import React from 'react';

const WhatWeBack = () => {
  const cards = [
    {
      title: "Physical World Control",
      description: "Our companies actuate the real world: climate systems, water dosing, industrial processes, diagnostics, not just dashboards.",
      // Diamond Icon SVG
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L12 3l6 9-6 9-6-9z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M6 12h12" />
        </svg>
      ),
    },
    {
      title: "AI-Native by Design",
      description: "AI is the decision engine, not a feature. Models operate continuously, in real time, embedded directly into operational workflows.",
      // Lightbulb Icon SVG
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v1m0-12V4m6.364 1.636l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 015 5 5 5 0 01-5 5 5 5 0 01-5-5 5 5 0 015-5z" />
        </svg>
      ),
    },
    {
      title: "Mission-Critical Operations",
      description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
      // Hammer/Gavel Icon SVG
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10zM8 14v3m4-3v3m4-3v3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-[#0D1B2A] text-white py-24 px-6 overflow-hidden font-sans">
      {/* Background Depth Effects */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
        <div className="absolute bottom-[20%] left-[-5%] w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h3 className="text-[11px] uppercase tracking-[0.4em] text-[#d4af37] mb-6 font-semibold flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-[#d4af37]/30"></span>
            What We Back
            <span className="w-8 h-px bg-[#d4af37]/30"></span>
          </h3>
          <h2 className="text-xl md:text-3xl font-serif font-light max-w-3xl mx-auto leading-relaxed text-white/90">
            AI-native platforms that autonomously control mission-critical physical operations.
          </h2>
        </div>

        {/* The Three Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="relative group p-10 flex flex-col items-center text-center transition-all duration-700 rounded-[40px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:border-[#d4af37]/40 hover:shadow-[0_30px_70px_rgba(212,175,55,0.08)]"
            >
              {/* Specular Edge Lighting (Glass Surface Simulation) */}
              <div className="absolute inset-0 rounded-[40px] pointer-events-none border-t border-l border-white/20 opacity-30" />
              <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container with Floating Glass Effect */}
              <div className="mb-10 p-5 bg-[#E8A147]/5 rounded-[20px] border border-[#d4af37]/20 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm shadow-inner shadow-white/5">
                {card.icon}
              </div>
              
              <h4 className="text-xl font-serif font-medium mb-5 text-white/95 tracking-wide">
                {card.title}
              </h4>
              
              <p className="text-white/50 text-[14px] leading-relaxed mb-10 flex-grow font-light">
                {card.description}
              </p>
              
              {/* Refined Glass Button */}
              <button className="bg-white/[0.03] border border-[#d4af37]/30 text-white font-semibold text-[11px] uppercase tracking-[0.2em] px-10 py-3.5 rounded-[15px] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 hover:translate-y-[-2px] transition-all duration-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBack;