// // // import React from 'react';

// // // const HowWeInvest = () => {
// // //   const investmentTracks = [
// // //     {
// // //       title: "Venture Studio",
// // //       subtitle: "We build companies from day zero",
// // //       description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
// // //       buttonText: "Explore The Studio",
// // //       // Custom Molecule/Creation SVG Icon
// // //       icon: (
// // //         <svg className="w-12 h-12 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
// // //         </svg>
// // //       )
// // //     },
// // //     {
// // //       title: "Venture Capital",
// // //       subtitle: "We scale conviction",
// // //       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
// // //       buttonText: "View Portfolio",
// // //       // Custom Chart/Growth SVG Icon
// // //       icon: (
// // //         <svg className="w-12 h-12 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
// // //         </svg>
// // //       )
// // //     }
// // //   ];

// // //   return (
// // //     <section className="bg-[#020617] text-white py-24 px-6 font-sans">
// // //       <div className="max-w-7xl mx-auto">
// // //         {/* Header Section */}
// // //         <div className="text-center mb-20">
// // //           <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">How We Invest</h2>
// // //           <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">
// // //             A dual-track model combining venture studio creation with disciplined VC investing.
// // //           </p>
// // //         </div>

// // //         {/* Investment Cards */}
// // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
// // //           {investmentTracks.map((track, index) => (
// // //             <div 
// // //               key={index} 
// // //               className="relative group border border-slate-800 bg-[#030a1c] p-10 md:p-14 flex flex-col items-center text-center transition-all duration-500 hover:border-[#d4af37]/30 rounded-3xl"
// // //             >
// // //               <h3 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">
// // //                 {track.title}
// // //               </h3>
              
// // //               {/* Accent Line moved under title */}
// // //               <div className="w-16 border-t border-[#d4af37] mb-6"></div>
              
// // //               <p className="text-[#d4af37] text-xs font-bold uppercase tracking-[0.15em] mb-12">
// // //                 {track.subtitle}
// // //               </p>

// // //               {/* Icon Container */}
// // //               <div className="mb-12 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 group-hover:scale-110 transition-transform duration-500">
// // //                 {track.icon}
// // //               </div>

// // //               <p className="text-gray-400 text-base leading-relaxed max-w-sm mb-12 flex-grow">
// // //                 {track.description}
// // //               </p>

// // //               <button className="bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest px-12 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-yellow-900/10">
// // //                 {track.buttonText}
// // //               </button>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Footer Text */}
// // //         <div className="text-center border-t border-slate-900 pt-12">
// // //           <p className="text-gray-500 text-sm italic font-light tracking-widest">
// // //             The studio de-risks creation. The fund scales conviction. <br className="hidden md:block" /> Together they compound advantage.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeInvest;


// // // import React from 'react';

// // // const HowWeInvest = () => {
// // //   const investmentTracks = [
// // //     {
// // //       title: "Venture Studio",
// // //       subtitle: "We build companies from day zero",
// // //       description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
// // //       buttonText: "Explore The Studio",
// // //       icon: (
// // //         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
// // //         </svg>
// // //       )
// // //     },
// // //     {
// // //       title: "Venture Capital",
// // //       subtitle: "We scale conviction",
// // //       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
// // //       buttonText: "View Portfolio",
// // //       icon: (
// // //         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
// // //         </svg>
// // //       )
// // //     }
// // //   ];

// // //   return (
// // //     <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
// // //       {/* Background Ambient Radial Glows */}
// // //       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
// // //         <div className="absolute top-[15%] left-[10%] w-[800px] h-[500px] bg-[#E8A147]/10 blur-[120px] rounded-full" />
// // //         <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[500px] bg-white/[0.05] blur-[100px] rounded-full" />
// // //       </div>

// // //       <div className="max-w-7xl mx-auto relative z-10">
// // //         {/* Header Section */}
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 tracking-tight">How We Invest</h2>
// // //           <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
// // //             A dual-track model combining venture studio creation with disciplined VC investing.
// // //           </p>
// // //         </div>

// // //         {/* 1. Main Glass Grid (The "Tray") */}
// // //         <div className="relative p-5 rounded-[24px] bg-white/[0.03] border border-white/[0.06] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
            
// // //             {/* Central Vertical Divider (Desktop Only) */}
// // //             <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-[#E8A147]/20 to-transparent -translate-x-1/2 pointer-events-none" />

// // //             {investmentTracks.map((track, index) => (
// // //               /* 2. Individual Glass Panels */
// // //               <div 
// // //                 key={index} 
// // //                 className="relative group p-10 md:p-14 rounded-[20px] bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/[0.09] flex flex-col items-center text-center transition-all duration-500 hover:border-[#d4af37]/30"
// // //               >
// // //                 {/* 3. Specular Highlight (Rim light effect on top-left) */}
// // //                 <div className="absolute inset-0 rounded-[20px] pointer-events-none bg-[radial-gradient(520px_200px_at_18%_0%,_rgba(212,175,55,0.08),_transparent_62%)] opacity-80" />

// // //                 <h3 className="text-2xl font-serif font-medium tracking-[0.1em] uppercase mb-4 text-white/95">
// // //                   {track.title}
// // //                 </h3>
                
// // //                 {/* Accent Line */}
// // //                 <div className="w-16 border-t border-[#d4af37]/60 mb-6"></div>
                
// // //                 <p className="text-[#d4af37] text-[11px] font-bold uppercase tracking-[0.2em] mb-10 opacity-90">
// // //                   {track.subtitle}
// // //                 </p>

// // //                 {/* 4. Icon Container with Glass Border */}
// // //                 <div className="mb-10 p-5 bg-[#E8A147]/5 rounded-[16px] border border-[#d4af37]/20 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
// // //                   {track.icon}
// // //                 </div>

// // //                 <p className="text-white/60 text-base leading-relaxed max-w-sm mb-12 flex-grow">
// // //                   {track.description}
// // //                 </p>

// // //                 {/* 5. Curved Button */}
// // //                 <button className="bg-white/[0.03] border border-[#d4af37]/30 text-white font-semibold text-[13px] uppercase tracking-[0.15em] px-12 py-4 rounded-[14px] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 hover:translate-y-[-2px] transition-all duration-300">
// // //                   {track.buttonText}
// // //                 </button>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Footer Text */}
// // //         <div className="text-center mt-12">
// // //           <p className="text-white/40 text-sm italic font-light tracking-[0.1em] leading-relaxed">
// // //             The studio de-risks creation. The fund scales conviction. <br className="hidden md:block" /> Together they compound advantage.
// // //           </p>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default HowWeInvest;


// // import React from 'react';

// // const HowWeInvest = () => {
// //   const investmentTracks = [
// //     {
// //       title: "Venture Studio",
// //       subtitle: "We build companies from day zero",
// //       description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
// //       buttonText: "Explore The Studio",
// //       icon: (
// //         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
// //         </svg>
// //       )
// //     },
// //     {
// //       title: "Venture Capital",
// //       subtitle: "We scale conviction",
// //       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
// //       buttonText: "View Portfolio",
// //       icon: (
// //         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
// //           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
// //         </svg>
// //       )
// //     }
// //   ];

// //   return (
// //     <section className="relative bg-[#020212] text-white py-24 px-6 overflow-hidden font-sans">
// //       {/* Background Ambient Radial Glows */}
// //       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
// //         <div className="absolute top-[15%] left-[10%] w-[800px] h-[500px] bg-[#E8A147]/10 blur-[120px] rounded-full" />
// //         <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[500px] bg-white/[0.05] blur-[100px] rounded-full" />
// //       </div>

// //       <div className="max-w-7xl mx-auto relative z-10">
// //         {/* Header Section */}
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 tracking-tight">How We Invest</h2>
// //           <p className="text-white/60 text-lg font-light max-w-2xl mx-auto leading-relaxed">
// //             A dual-track model combining venture studio creation with disciplined VC investing.
// //           </p>
// //         </div>

// //         {/* 1. Grid of Individual Glass Panels */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //           {investmentTracks.map((track, index) => (
// //             <div 
// //               key={index} 
// //               className="relative group p-10 md:p-14 rounded-[20px] bg-gradient-to-b from-white/[0.045] to-white/[0.02] border border-white/[0.09] flex flex-col items-center text-center transition-all duration-500 hover:border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
// //             >
// //               {/* 2. Specular Highlight (Rim light effect on top-left) */}
// //               <div className="absolute inset-0 rounded-[20px] pointer-events-none bg-[radial-gradient(520px_200px_at_18%_0%,_rgba(212,175,55,0.08),_transparent_62%)] opacity-80" />

// //               <h3 className="text-2xl font-serif font-medium tracking-[0.1em] uppercase mb-4 text-white/95">
// //                 {track.title}
// //               </h3>
              
// //               <div className="w-16 border-t border-[#d4af37]/60 mb-6"></div>
              
// //               <p className="text-[#d4af37] text-[11px] font-bold uppercase tracking-[0.2em] mb-10 opacity-90">
// //                 {track.subtitle}
// //               </p>

// //               <div className="mb-10 p-5 bg-[#E8A147]/5 rounded-[16px] border border-[#d4af37]/20 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
// //                 {track.icon}
// //               </div>

// //               <p className="text-white/60 text-base leading-relaxed max-w-sm mb-12 flex-grow">
// //                 {track.description}
// //               </p>

// //               <button className="bg-white/[0.03] border border-[#d4af37]/30 text-white font-semibold text-[13px] uppercase tracking-[0.15em] px-12 py-4 rounded-[14px] hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60 hover:translate-y-[-2px] transition-all duration-300">
// //                 {track.buttonText}
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer Text */}
// //         <div className="text-center mt-16">
// //           <p className="text-white/40 text-sm italic font-light tracking-[0.1em] leading-relaxed">
// //             The studio de-risks creation. The fund scales conviction. <br className="hidden md:block" /> Together they compound advantage.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default HowWeInvest;


// import React from 'react';

// const HowWeInvest = () => {
//   const investmentTracks = [
//     {
//       title: "Venture Studio",
//       subtitle: "We build companies from day zero",
//       description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
//       buttonText: "Explore The Studio",
//       icon: (
//         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
//         </svg>
//       )
//     },
//     {
//       title: "Venture Capital",
//       subtitle: "We scale conviction",
//       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
//       buttonText: "View Portfolio",
//       icon: (
//         <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="relative bg-[#030210] text-white py-32 px-6 overflow-hidden">
//       {/* Background Ambient Depth */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-[30%] left-[-5%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-30" />
//         <div className="absolute bottom-0 right-[-10%] w-[800px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-24">
//           <p className="text-[11px] uppercase tracking-[0.5em] text-[#d4af37] mb-6 font-semibold">
//             Our Strategy
//           </p>
//           <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
//             How We Invest
//           </h2>
//           <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
//             A dual-track model combining venture studio creation with disciplined VC investing.
//           </p>
//         </div>

//         {/* Investment Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {investmentTracks.map((track, index) => (
//             <div 
//               key={index} 
//               className="relative group p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] flex flex-col items-center text-center transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:border-[#d4af37]/40 hover:translate-y-[-4px]"
//             >
//               {/* Specular Edge Lighting (The Glass Effect) */}
//               <div className="absolute inset-0 rounded-[40px] pointer-events-none border-t border-l border-white/20 opacity-30 group-hover:opacity-50 transition-opacity" />
              
//               <h3 className="text-2xl md:text-3xl font-medium tracking-wide mb-4 text-white/90">
//                 {track.title}
//               </h3>
              
//               <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-6 opacity-60"></div>
              
//               <p className="text-[#d4af37] text-[11px] font-bold uppercase tracking-[0.3em] mb-12">
//                 {track.subtitle}
//               </p>

//               {/* Icon in Floating Glass Container */}
//               <div className="mb-12 p-6 bg-white/[0.03] rounded-[24px] border border-white/10 shadow-inner group-hover:scale-110 group-hover:border-[#d4af37]/30 transition-all duration-500 backdrop-blur-sm">
//                 {track.icon}
//               </div>

//               <p className="text-white/50 text-[15px] leading-relaxed max-w-xs mb-14 flex-grow font-light">
//                 {track.description}
//               </p>

//               {/* High-End Glass Button */}
//               <button className="relative overflow-hidden group/btn bg-white/[0.03] border border-[#d4af37]/30 text-white font-semibold text-[11px] uppercase tracking-[0.25em] px-12 py-4 rounded-[18px] transition-all duration-300 hover:bg-[#d4af37]/10 hover:border-[#d4af37]/60">
//                 <span className="relative z-10">{track.buttonText}</span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/btn:animate-shimmer" />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Footer Insight */}
//         <div className="text-center mt-20 pt-12 border-t border-white/[0.05]">
//           <p className="text-white/30 text-sm italic font-light tracking-[0.15em] leading-relaxed max-w-3xl mx-auto">
//             "The studio de-risks creation. The fund scales conviction. <br className="hidden md:block" /> Together they compound advantage."
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeInvest;


// import React from 'react';

// const HowWeInvest = () => {
//   const investmentTracks = [
//     {
//       title: "Venture Studio",
//       subtitle: "We build companies from day zero",
//       description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
//       buttonText: "Explore The Studio",
//       icon: (
//         <svg className="w-8 h-8 text-[#E8A147]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
//         </svg>
//       )
//     },
//     {
//       title: "Venture Capital",
//       subtitle: "We scale conviction",
//       description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
//       buttonText: "View Portfolio",
//       icon: (
//         <svg className="w-8 h-8 text-[#E8A147]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="relative bg-[#030210] text-white py-32 px-6 overflow-hidden">
//       {/* Background Ambient Depth */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <div className="absolute top-[30%] left-[-5%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-30" />
//         <div className="absolute bottom-0 right-[-10%] w-[800px] h-[600px] bg-white/[0.02] blur-[100px] rounded-full" />
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="text-center mb-24">
//           <p className="text-[11px] uppercase tracking-[0.5em] text-[#E8A147] mb-6 font-semibold">
//             Our Strategy
//           </p>
//           {/* h2 inherits Hoefler from global CSS */}
//           <h2 className="text-4xl md:text-5xl font-medium mb-8 tracking-tight">
//             How We Invest
//           </h2>
//           <p className="text-white/50 text-lg font-light max-w-2xl mx-auto leading-relaxed">
//             A dual-track model combining venture studio creation with disciplined VC investing.
//           </p>
//         </div>

//         {/* Investment Cards Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//           {investmentTracks.map((track, index) => (
//             <div 
//               key={index} 
//               className="relative group p-12 md:p-16 rounded-[40px] bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-transparent border border-white/[0.12] flex flex-col items-center text-center transition-all duration-700 shadow-[0_40px_80px_rgba(0,0,0,0.4)] hover:border-[#E8A147]/40 hover:translate-y-[-4px]"
//             >
//               {/* Specular Edge Lighting */}
//               <div className="absolute inset-0 rounded-[40px] pointer-events-none border-t border-l border-white/20 opacity-30 group-hover:opacity-50 transition-opacity" />
              
//               {/* h3 inherits Hoefler from global CSS */}
//               <h3 className="text-2xl md:text-3xl font-medium tracking-wide mb-4 text-white/90">
//                 {track.title}
//               </h3>
              
//               <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#E8A147] to-transparent mb-6 opacity-60"></div>
              
//               <p className="text-[#E8A147] text-[11px] font-bold uppercase tracking-[0.3em] mb-12">
//                 {track.subtitle}
//               </p>

//               {/* Icon Container */}
//               <div className="mb-12 p-6 bg-white/[0.03] rounded-[24px] border border-white/10 shadow-inner group-hover:scale-110 group-hover:border-[#E8A147]/30 transition-all duration-500 backdrop-blur-sm">
//                 {track.icon}
//               </div>

//               <p className="text-white/50 text-[15px] leading-relaxed max-w-xs mb-14 flex-grow font-light">
//                 {track.description}
//               </p>

//               {/* High-End Glass Button */}
//               <button className="relative overflow-hidden group/btn bg-white/[0.03] border border-[#E8A147]/30 text-white font-semibold text-[11px] uppercase tracking-[0.25em] px-12 py-4 rounded-[18px] transition-all duration-300 hover:bg-[#E8A147]/10 hover:border-[#E8A147]/60">
//                 <span className="relative z-10">{track.buttonText}</span>
//                 {/* Ensure 'shimmer' keyframe is in your tailwind.config.js */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite]" />
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Footer Insight */}
//         <div className="text-center mt-20 pt-12 border-t border-white/[0.05]">
//           <p className="text-white/30 text-sm italic font-light tracking-[0.15em] leading-relaxed max-w-3xl mx-auto">
//             "The studio de-risks creation. The fund scales conviction. <br className="hidden md:block" /> Together they compound advantage."
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeInvest;

import React from 'react';

const HowWeInvest = () => {
  const investmentTracks = [
    {
      title: "Venture Studio",
      subtitle: "Day Zero Creation",
      description: "We originate, build, and design companies using an autonomous infrastructure playbook.",
      buttonText: "Explore The Studio",
      // Modern Architecture/Blueprint aesthetic
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: (
        <svg className="w-8 h-8 text-[#E8A147]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v1.244c0 .892-.56 1.646-1.416 1.92a7.23 7.23 0 00-4.25 3.566 1.125 1.125 0 01-1.073.579H1.875a.375.375 0 00-.375.375v2.25c0 .207.168.375.375.375h1.136a1.125 1.125 0 011.073.579 7.23 7.23 0 004.25 3.566c.856.274 1.416 1.028 1.416 1.92v1.244c0 .207.168.375.375.375h2.25a.375.375 0 00.375-.375v-1.244c0-.892.56-1.646 1.416-1.92a7.23 7.23 0 004.25-3.566 1.125 1.125 0 011.073-.579h1.136c.207 0 .375-.168.375-.375v-2.25a.375.375 0 00-.375-.375h-1.136a1.125 1.125 0 01-1.073-.579 7.23 7.23 0 00-4.25-3.566c-.856-.274-1.416-1.028-1.416-1.92V3.479c0-.207-.168-.375-.375-.375h-2.25a.375.375 0 00-.375.375z" />
        </svg>
      )
    },
    {
      title: "Venture Capital",
      subtitle: "Scaled Conviction",
      description: "We focus on operations that run continuously and cannot fail, creating infrastructure-level moats.",
      buttonText: "View Portfolio",
      // Cyber/Infrastructure/Network aesthetic
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      icon: (
        <svg className="w-8 h-8 text-[#E8A147]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-[#030210] text-white py-40 px-6 overflow-hidden">
      {/* Dynamic Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E8A147]/5 blur-[160px] rounded-full animate-pulse" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Pillar Image */}
          <div className="hidden xl:block w-1/5 h-[600px] relative overflow-hidden rounded-[2rem] border border-white/10 opacity-40 hover:opacity-100 transition-opacity duration-1000 animate-slide-in-left">
            <img 
              src={investmentTracks[0].image} 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 animate-float-slow" 
              alt="Studio Concept"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-transparent to-transparent" />
          </div>

          {/* Main Card Container */}
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 flex-1 justify-center items-center">
            {investmentTracks.map((track, index) => (
              <div 
                key={index} 
                className={`relative group p-10 w-full max-w-[340px] rounded-[40px] bg-[#080716]/80 backdrop-blur-md border border-white/[0.08] flex flex-col items-center text-center transition-all duration-700 hover:border-[#E8A147]/40 hover:-translate-y-4 animate-fade-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Internal Glow Effect */}
                <div className="absolute inset-0 rounded-[40px] pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(232,161,71,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <p className="text-[#E8A147] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                  {track.subtitle}
                </p>

                <div className="mb-8 p-5 bg-white/[0.03] rounded-2xl border border-white/5 shadow-inner group-hover:shadow-[#E8A147]/10 group-hover:border-[#E8A147]/20 transition-all duration-500">
                  {track.icon}
                </div>

                <h3 className="text-2xl font-medium mb-4 text-white/90">
                  {track.title}
                </h3>

                <p className="text-white/40 text-[14px] leading-relaxed mb-10 flex-grow font-light">
                  {track.description}
                </p>

                <button className="relative w-full py-4 overflow-hidden rounded-xl border border-white/10 text-[10px] uppercase tracking-widest font-bold hover:border-[#E8A147]/50 transition-all group/btn">
                  <span className="relative z-10 group-hover/btn:text-[#E8A147] transition-colors">
                    {track.buttonText}
                  </span>
                  <div className="absolute inset-0 bg-[#E8A147]/5 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                </button>
              </div>
            ))}
          </div>

          {/* Right Pillar Image */}
          <div className="hidden xl:block w-1/5 h-[600px] relative overflow-hidden rounded-[2rem] border border-white/10 opacity-40 hover:opacity-100 transition-opacity duration-1000 animate-slide-in-right">
            <img 
              src={investmentTracks[1].image} 
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 animate-float-slow-reverse" 
              alt="Capital Concept"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#030210] via-transparent to-transparent" />
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.15) translateY(-20px); }
        }
        @keyframes float-slow-reverse {
          0%, 100% { transform: scale(1.1) translateY(0); }
          50% { transform: scale(1.15) translateY(20px); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 0.4; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 0.4; transform: translateX(0); }
        }
        
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-float-slow-reverse { animation: float-slow-reverse 18s ease-in-out infinite; }
        .animate-fade-up { animation: fade-up 1s ease-out forwards; }
        .animate-slide-in-left { animation: slide-in-left 1.2s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 1.2s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default HowWeInvest;