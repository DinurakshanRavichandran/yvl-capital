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

import React, { useState } from 'react';
import LPform from './lpform';
import FounderForm from './founder-form';

const PartnerWithYVLCapital = () => {
  const [openModal, setOpenModal] = useState(null); 

  const ctaTracks = [
    {
      title: "For Founders",
      description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
      buttonText: "Apply To Work With Us",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "For Investors",
      description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
      buttonText: "Inquire About Access",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section className="relative bg-[#030210] text-white py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {ctaTracks.map((track, index) => (
              <div key={index} className="relative overflow-hidden group min-h-[520px] flex flex-col items-center justify-end text-center p-12 rounded-[40px] border border-white/[0.08]">
                <div className="absolute inset-0 z-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif mb-4">{track.title}</h3>
                  <p className="text-white/50 mb-10">{track.description}</p>

                  <button
                    onClick={() => {
                      if (index === 0) setOpenModal("founder");
                      if (index === 1) setOpenModal("lp");
                    }}
                    className="relative w-full py-5 rounded-[15px] overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D]" />
                    <span className="relative z-10 text-[#030210] font-bold text-[12px] uppercase tracking-[0.2em]">
                      {track.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {openModal && (
        <div 
          className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setOpenModal(null)}
          />
          <div className="relative bg-[#030210] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 z-50 shadow-2xl">
            {/* I have added the x button instead of the back to home, i removed the back to home because if you click on the bg the modal will 
            close automatically */}
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-[#E8A147] text-2xl"
            >
              ✕
            </button>
            {openModal === "founder" && <FounderForm />}
            {openModal === "lp" && <LPform />}
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerWithYVLCapital;