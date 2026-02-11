// // import React from 'react';

// // const PartnerWithYVLCapital = () => {
// //   const ctaTracks = [
// //     {
// //       title: "For Founders",
// //       description: "Building AI-native autonomous systems for critical infrastructure.",
// //       buttonText: "Apply To Work With Us",
// //       isPrimary: true
// //     },
// //     {
// //       title: "For Founders",
// //       description: "Building AI-native autonomous systems for critical infrastructure.",
// //       buttonText: "Apply To Work With Us",
// //       isPrimary: true
// //     }
// //   ];

// //   return (
// //     <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
// //       {/* Background Ambient Depth Glows */}
// //       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
// //         <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
// //         <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full opacity-30" />
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-[11px] uppercase tracking-[0.4em] text-white/50 mb-8 font-semibold">
// //             Partner With YVL Capital
// //           </h2>
// //           <p className="text-xl md:text-2xl font-serif font-light max-w-3xl mx-auto leading-relaxed text-white/80">
// //             From vision to defensible outcomes — YVL Capital guides founders to build autonomous systems that last
// //           </p>
// //         </div>

// //         {/* The Two Rounded Glass CTA Boxes */}
// //         <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-10">
// //           {ctaTracks.map((track, index) => (
// //             <div 
// //               key={index} 
// //               className="relative w-full max-w-[420px] aspect-square flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-700 rounded-[50px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] shadow-[0_40px_80px_rgba(0,0,0,0.4)] group hover:border-[#d4af37]/50 hover:shadow-[0_40px_90px_rgba(212,175,55,0.1)]"
// //             >
// //               {/* Specular Rim Lighting (The "Glass" Edge) */}
// //               <div className="absolute inset-0 rounded-[50px] pointer-events-none border-t border-l border-white/20 opacity-40" />
// //               <div className="absolute inset-0 rounded-[50px] pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.05),_transparent_60%)]" />

// //               <h3 className="text-3xl font-serif font-medium mb-8 text-white/95">
// //                 {track.title}
// //               </h3>
              
// //               <p className="text-white/50 text-[15px] leading-relaxed max-w-[240px] mb-12 font-light">
// //                 {track.description}
// //               </p>

// //               {/* Solid Gold CTA Button */}
// //               <button className="bg-[#d4af37] text-[#020212] font-bold text-[11px] uppercase tracking-[0.15em] px-10 py-4 rounded-[12px] hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_15px_30px_rgba(212,175,55,0.25)]">
// //                 {track.buttonText}
// //               </button>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PartnerWithYVLCapital;

// import React, { useState } from 'react';
// import LPform from './lpform';
// import FounderForm from './founder-form';

// const PartnerWithYVLCapital = () => {
//   const [openModal, setOpenModal] = useState(null); 

//   const ctaTracks = [
//     {
//       title: "For Founders",
//       description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
//       buttonText: "Apply To Work With Us",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//       title: "For Investors",
//       description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
//       buttonText: "Inquire About Access",
//       image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <>
//       <section className="relative bg-[#030210] text-white py-32 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//             {ctaTracks.map((track, index) => (
//               <div key={index} className="relative overflow-hidden group min-h-[520px] flex flex-col items-center justify-end text-center p-12 rounded-[40px] border border-white/[0.08]">
//                 <div className="absolute inset-0 z-0">
//                   <img
//                     src={track.image}
//                     alt={track.title}
//                     className="w-full h-full object-cover opacity-20"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/80 to-transparent" />
//                 </div>
//                 <div className="relative z-10">
//                   <h3 className="text-3xl font-serif mb-4">{track.title}</h3>
//                   <p className="text-white/50 mb-10">{track.description}</p>

//                   <button
//                     onClick={() => {
//                       if (index === 0) setOpenModal("founder");
//                       if (index === 1) setOpenModal("lp");
//                     }}
//                     className="relative w-full py-5 rounded-[15px] overflow-hidden"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D]" />
//                     <span className="relative z-10 text-[#030210] font-bold text-[12px] uppercase tracking-[0.2em]">
//                       {track.buttonText}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {openModal && (
//         <div 
//           className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 overflow-hidden"
//         >
//           <div
//             className="absolute inset-0 bg-black/80 backdrop-blur-xl"
//             onClick={() => setOpenModal(null)}
//           />
//           <div className="relative bg-[#030210] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 z-50 shadow-2xl">
//             {/* I have added the x button instead of the back to home, i removed the back to home because if you click on the bg the modal will 
//             close automatically */}
//             <button
//               onClick={() => setOpenModal(null)}
//               className="absolute top-4 right-4 text-white/60 hover:text-[#E8A147] text-2xl"
//             >
//               ✕
//             </button>
//             {openModal === "founder" && <FounderForm />}
//             {openModal === "lp" && <LPform />}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PartnerWithYVLCapital;

// import React, { useState } from 'react';
// import LPform from './lpform';
// import FounderForm from './founder-form';

// const PartnerWithYVLCapital = () => {
//   const [openModal, setOpenModal] = useState(null); 

//   const ctaTracks = [
//     {
//       title: "For Founders",
//       description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
//       buttonText: "Apply To Work With Us",
//       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
//     },
//     {
//       title: "For Investors",
//       description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
//       buttonText: "Inquire About Access",
//       image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
//     }
//   ];

//   return (
//     <>
//       <section className="relative bg-[#030210] text-white py-24 px-6 overflow-hidden">
//         {/* Background Ambient Depth Glows */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//           <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
//           <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-white/[0.03] blur-[100px] rounded-full opacity-30" />
//         </div>

//         <div className="max-w-7xl mx-auto relative z-10">
          
//           {/* Header Section Integrated from commented code */}
//           <div className="text-center mb-20">
//             <h2 className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] mb-8 font-semibold">
//               Partner With YVL Capital
//             </h2>
//             <p className="text-[clamp(24px,4vw,32px)] font-serif font-light max-w-3xl mx-auto leading-tight text-white/90">
//               From vision to defensible outcomes — we guide founders to build <span className="italic text-[#E8A147]">autonomous systems that last.</span>
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
//             {ctaTracks.map((track, index) => (
//               <div 
//                 key={index} 
//                 className="relative overflow-hidden group min-h-[520px] flex flex-col items-center justify-end text-center p-12 rounded-[40px] border border-white/[0.08] transition-all duration-500 hover:border-[#E8A147]/30"
//               >
//                 {/* Image Overlay Logic */}
//                 <div className="absolute inset-0 z-0 overflow-hidden">
//                   <img
//                     src={track.image}
//                     alt={track.title}
//                     className="w-full h-full object-cover opacity-20 transition-transform duration-1000 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/80 to-transparent" />
//                 </div>

//                 <div className="relative z-10 w-full">
//                   <h3 className="text-3xl font-serif mb-4 text-white">{track.title}</h3>
//                   <p className="text-white/50 mb-10 text-[15px] max-w-[280px] mx-auto leading-relaxed">
//                     {track.description}
//                   </p>

//                   <button
//                     onClick={() => {
//                       if (index === 0) setOpenModal("founder");
//                       if (index === 1) setOpenModal("lp");
//                     }}
//                     className="relative w-full py-5 rounded-[15px] overflow-hidden group/btn"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover/btn:scale-105" />
//                     <span className="relative z-10 text-[#030210] font-bold text-[11px] uppercase tracking-[0.2em]">
//                       {track.buttonText}
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Modal Section */}
//       {openModal && (
//         <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4">
//           <div
//             className="absolute inset-0 bg-black/90 backdrop-blur-md"
//             onClick={() => setOpenModal(null)}
//           />
//           <div className="relative bg-[#030210] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 z-50 shadow-2xl">
//             <button
//               onClick={() => setOpenModal(null)}
//               className="absolute top-6 right-6 text-white/40 hover:text-[#E8A147] transition-colors"
//             >
//               ✕
//             </button>
//             {openModal === "founder" && <FounderForm />}
//             {openModal === "lp" && <LPform />}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default PartnerWithYVLCapital;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LPform from './lpform';
import FounderForm from './founder-form';

const PartnerWithYVLCapital = () => {
  const [openModal, setOpenModal] = useState(null);

  const ctaTracks = [
    {
      title: "For Founders",
      description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
      buttonText: "Apply To Work With Us",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
      accent: "from-[#E8A147]/20"
    },
    {
      title: "For Investors",
      description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
      buttonText: "Inquire About Access",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop",
      accent: "from-[#E8A147]/10"
    }
  ];

  return (
    <>
      <section className="relative bg-[#030210] text-white py-24 px-6 overflow-hidden font-sans">
        {/* Background Depth */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-[#E8A147]/10 blur-[120px] rounded-full opacity-50" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] uppercase tracking-[0.5em] text-[#E8A147] mb-8 font-bold"
            >
              Partner With YVL Capital
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[clamp(26px,5vw,36px)] font-serif font-light max-w-3xl mx-auto leading-tight text-white"
            >
              From vision to defensible outcomes — we build <span className="italic text-[#E8A147]">autonomous systems that last.</span>
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {ctaTracks.map((track, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden group min-h-[550px] flex flex-col items-center justify-end text-center p-12 rounded-[40px] border border-white/10 bg-white/[0.02] transition-all duration-500 hover:border-[#E8A147]/40"
              >
                {/* Images stay high-visibility as requested */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover opacity-40 transition-all duration-1000 grayscale-[50%] group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b ${track.accent} via-[#030210]/60 to-[#030210]`} />
                  <div className="absolute inset-0 bg-[#030210]/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                {/* Content Area */}
                <div className="relative z-10 w-full">
                  <div className="mb-6 flex justify-center">
                    <div className="w-12 h-[1px] bg-[#E8A147]/50 group-hover:w-24 transition-all duration-500" />
                  </div>
                  
                  <h3 className="text-4xl font-serif mb-6 text-white group-hover:text-[#E8A147] transition-colors duration-300">
                    {track.title}
                  </h3>
                  
                  <p className="text-white/60 mb-10 text-[16px] leading-relaxed max-w-[300px] mx-auto font-light">
                    {track.description}
                  </p>

                  {/* Clean, Solid Gold Button */}
                  <button
                    onClick={() => index === 0 ? setOpenModal("founder") : setOpenModal("lp")}
                    className="relative w-full py-5 rounded-xl bg-[#E8A147] hover:bg-[#F2B361] text-[#030210] font-bold text-[12px] uppercase tracking-[0.2em] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                  >
                    {track.buttonText}
                  </button>
                </div>

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-[#030210]/95 backdrop-blur-2xl"
            onClick={() => setOpenModal(null)}
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative bg-[#030210] border border-white/10 rounded-[40px] w-full max-w-5xl max-h-[90vh] overflow-y-auto p-12 z-50 shadow-2xl"
          >
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-8 right-8 text-white/20 hover:text-[#E8A147] transition-all"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {openModal === "founder" && <FounderForm />}
            {openModal === "lp" && <LPform />}
          </motion.div>
        </div>
      )}
    </>
  );
};

export default PartnerWithYVLCapital;