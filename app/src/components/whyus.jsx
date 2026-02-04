// const cards = [
//   {
//     title: "Premium Real Estate Consulting",
//     desc: "Personalized advisory for investors seeking long-term value in the luxury market.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
//         <path d="M4 10.5L12 4l8 6.5" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M6.5 10.5V20h11V10.5" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M9.5 20v-6h5v6" stroke="currentColor" strokeWidth="1.6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Unmatched Craftsmanship",
//     desc: "Attention to detail, from interiors to textures, ensuring perfection in every inch.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
//         <path d="M14.5 6.5l3 3" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M4 20l6-6" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M13 7l-8 8v5h5l8-8" stroke="currentColor" strokeWidth="1.6" />
//       </svg>
//     ),
//   },
//   {
//     title: "Prime Luxury Locations",
//     desc: "Exclusive neighborhoods for prestige, privacy, and beauty — every sunrise feels curated.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
//         <path
//           d="M12 3l3 6 6 .8-4.4 4.2 1.2 6L12 17.8 6.2 20l1.2-6L3 9.8 9 9z"
//           stroke="currentColor"
//           strokeWidth="1.6"
//         />
//       </svg>
//     ),
//   },
//   {
//     title: "Sustainable Innovation",
//     desc: "Luxury with smart systems, energy efficiency, and timeless materials.",
//     icon: (
//       <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
//         <path
//           d="M12 3c4.4 0 8 3.2 8 7.2 0 2.6-1.4 4.8-3.5 6.1-.8.5-1.5 1.4-1.7 2.3H9.2c-.2-.9-.9-1.8-1.7-2.3C5.4 15 4 12.8 4 10.2 4 6.2 7.6 3 12 3z"
//           stroke="currentColor"
//           strokeWidth="1.6"
//         />
//         <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" />
//         <path d="M9.5 18.5h5" stroke="currentColor" strokeWidth="1.6" />
//       </svg>
//     ),
//   },
// ];



// export default function WhySection() {
//   return (
//     <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020212,#01010d)] text-white py-[clamp(56px,7vw,96px)]">
//       {/* decorative gradients */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute left-[18%] top-[22%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E8A147]/10 blur-3xl" />
//         <div className="absolute left-[78%] top-[38%] h-[520px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/6 blur-3xl" />
//       </div>

//       <div className="relative mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-1 gap-[clamp(28px,4vw,56px)] lg:grid-cols-[1.1fr_1fr]">
//         {/* LEFT */}
//         <div>
//           <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/50">
//             <span className="h-px w-16 bg-gradient-to-r from-[#E8A147] to-transparent" />
//             Why Choose Us
//           </p>

//           <h2 className="mb-7 font-serif text-[clamp(44px,5vw,72px)] font-medium leading-[1.03] tracking-[-0.02em]">
//             Where Vision, Craft, and{" "}
//             <span className="text-[#E8A147] drop-shadow-[0_0_22px_rgba(212,175,55,0.14)]">
//               Luxury
//             </span>{" "}
//             Align
//           </h2>

//           <div className="mt-6 flex items-center gap-4">
//             <div className="flex">
//               {[
//                 "photo-1544005313-94ddf0286df2",
//                 "photo-1500648767791-00dcc994a43e",
//                 "photo-1552058544-f2b08422138a",
//               ].map((id, i) => (
//                 <img
//                   key={i}
//                   src={`https://images.unsplash.com/${id}?w=96&h=96&fit=crop&crop=faces`}
//                   alt=""
//                   className={`h-10 w-10 rounded-full border border-white/20 object-cover shadow-[0_10px_26px_rgba(0,0,0,0.35)] ${
//                     i !== 0 ? "-ml-2.5" : ""
//                   }`}
//                 />
//               ))}
//             </div>

//             <p className="text-lg text-white/65">
//               <strong className="font-semibold text-white">130k+</strong> People
//               Join
//             </p>
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="flex flex-col gap-4">
//           {cards.map((card, i) => (
//             <div
//               key={i}
//               className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.035] p-5 shadow-[0_18px_45px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.06)] transition hover:-translate-y-0.5 hover:border-[#E8A147]/30 hover:bg-gradient-to-b hover:from-white/[0.075]"
//             >
//               {/* gold sheen */}
//               <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(460px_140px_at_20%_0%,rgba(212,175,55,0.10),transparent_60%)]" />

//               <div>
//                 <h3 className="mb-1 font-serif text-2xl tracking-tight">
//                   {card.title}
//                 </h3>
//                 <p className="max-w-[46ch] text-white/65 leading-relaxed">
//                   {card.desc}
//                 </p>
//               </div>

//               <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-xl border border-[#E8A147]/30 bg-gradient-to-b from-[#E8A147]/15 to-white/5 text-[#E8A147] shadow-[0_14px_30px_rgba(0,0,0,0.35)]">
//                 {card.icon}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';

const cards = [
  {
    title: "Premium Real Estate Consulting",
    desc: "Personalized advisory for investors seeking long-term value in the luxury market.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M4 10.5L12 4l8 6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M6.5 10.5V20h11V10.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 20v-6h5v6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Unmatched Craftsmanship",
    desc: "Attention to detail, from interiors to textures, ensuring perfection in every inch.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path d="M14.5 6.5l3 3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 20l6-6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M13 7l-8 8v5h5l8-8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Prime Luxury Locations",
    desc: "Exclusive neighborhoods for prestige, privacy, and beauty — every sunrise feels curated.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3l3 6 6 .8-4.4 4.2 1.2 6L12 17.8 6.2 20l1.2-6L3 9.8 9 9z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Innovation",
    desc: "Luxury with smart systems, energy efficiency, and timeless materials.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
        <path
          d="M12 3c4.4 0 8 3.2 8 7.2 0 2.6-1.4 4.8-3.5 6.1-.8.5-1.5 1.4-1.7 2.3H9.2c-.2-.9-.9-1.8-1.7-2.3C5.4 15 4 12.8 4 10.2 4 6.2 7.6 3 12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M9 21h6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9.5 18.5h5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden bg-[#0D1B2A] text-white py-[clamp(56px,7vw,96px)] font-sans">
      {/* Decorative Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-[20%] h-[600px] w-[600px] rounded-full bg-[#E8A147]/5 blur-[120px]" />
        <div className="absolute right-[5%] bottom-[10%] h-[500px] w-[500px] rounded-full bg-white/[0.02] blur-[100px]" />
      </div>

      <div className="relative mx-auto grid w-[min(1180px,calc(100%-48px))] grid-cols-1 gap-[clamp(40px,5vw,80px)] lg:grid-cols-[1.1fr_1fr] items-center">
        {/* LEFT CONTENT */}
        <div className="z-10">
          <p className="mb-6 flex items-center gap-4 text-[11px] uppercase tracking-[0.3em] text-white/40">
            <span className="h-px w-12 bg-gradient-to-r from-[#E8A147] to-transparent" />
            Why Choose Us
          </p>

          <h2 className="mb-8 font-serif text-[clamp(40px,4.5vw,64px)] font-medium leading-[1.1] tracking-tight">
            Where Vision, Craft, and{" "}
            <span className="text-[#E8A147] relative inline-block">
              Luxury
              <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#E8A147]/30 blur-[1px]" />
            </span>{" "}
            Align
          </h2>

          <p className="text-white/50 text-lg font-light leading-relaxed max-w-lg mb-10">
            We bridge the gap between architectural ambition and precise execution, ensuring every investment compounds in value.
          </p>

          <div className="flex items-center gap-5 p-4 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit backdrop-blur-sm">
            <div className="flex -space-x-3">
              {[
                "photo-1544005313-94ddf0286df2",
                "photo-1500648767791-00dcc994a43e",
                "photo-1552058544-f2b08422138a",
              ].map((id, i) => (
                <img
                  key={i}
                  src={`https://images.unsplash.com/${id}?w=96&h=96&fit=crop&crop=faces`}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-[#0D1B2A] object-cover"
                />
              ))}
            </div>
            <p className="text-sm tracking-wide text-white/70 pr-4">
              <strong className="text-white font-semibold">130k+</strong> Investors Joined
            </p>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative flex items-center justify-between gap-6 rounded-[32px] border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#E8A147]/40 hover:bg-white/[0.06] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              {/* Internal Specular Highlight (Rim Light) */}
              <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-[radial-gradient(500px_200px_at_20%_0%,rgba(212,175,55,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="z-10">
                <h3 className="mb-2 font-serif text-xl tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {card.title}
                </h3>
                <p className="max-w-[42ch] text-white/50 text-[14px] leading-relaxed group-hover:text-white/70 transition-colors">
                  {card.desc}
                </p>
              </div>

              {/* Icon Container with Glass Detail */}
              <div className="relative flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.03] text-[#E8A147] group-hover:border-[#E8A147]/40 group-hover:bg-[#E8A147]/10 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20" />
                {card.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}