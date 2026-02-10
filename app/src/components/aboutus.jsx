// import React from "react";

// const AboutX = () => {
//   return (
//     <section className="relative overflow-hidden py-[7vw] text-white bg-[#030210]">
//       <div className="relative max-w-[1200px] mx-auto px-6 grid gap-[4vw] items-start lg:grid-cols-[1.05fr_0.95fr]">
//         {/* LEFT */}
//         <div className="space-y-4">
//           <p className="flex items-center gap-3 text-[12px] uppercase tracking-widest text-white/54">
//             <span className="block w-16 h-[1px] bg-gradient-to-r from-yellow-400 to-transparent opacity-90"></span>
//             ABOUT US
//           </p>

//           <h2 className="font-serif font-medium text-[clamp(28px,4vw,54px)] leading-[1.05]">
//             Building and backing{" "}
//             <span className="text-yellow-400 drop-shadow-[0_0_22px_rgba(212,175,55,0.12)]">
//               AI-native
//             </span>{" "}
//             platforms for critical systems.
//           </h2>

//           <p className="text-white/68 text-[15px] leading-[1.7] max-w-[62ch]">
//             Where autonomous systems meet real-world constraints, we build and back companies that define the future of control.
//           </p>

//           {/* Focus card */}
//           <div className="bg-white/4 rounded-[18px] p-4 max-w-[420px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
//             <div className="flex justify-between items-baseline mb-3 gap-4">
//               <p className="text-[15px] text-white/86">Autonomy as Infrastructure</p>
//               <p className="text-[14px] text-yellow-400/95">80%</p>
//             </div>
//             <div className="h-[2px] bg-white/10 rounded-full overflow-hidden relative">
//               <span className="block h-full bg-gradient-to-r from-yellow-400/95 to-yellow-400/35 rounded-full w-[80%]"></span>
//             </div>
//             <p className="mt-3 text-[13.5px] text-white/54 leading-[1.6]">
//               A strong focus on mission-critical deployment — not just demos.
//             </p>
//           </div>

//           <p className="text-white/72 text-[14px] mt-4">
//             Built by operators fluent in autonomous systems and infrastructure.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="space-y-6">
//           <div className="grid grid-cols-2 gap-4 mt-2 md:grid-cols-2 sm:grid-cols-1">
//             {/* Image A */}
//             <div className="rounded-[18px] overflow-hidden border border-white/8 shadow-[0_26px_80px_rgba(0,0,0,0.45)] bg-[#0a0a1c]">
//               <img
//                 src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1600&auto=format&fit=crop&q=80"
//                 alt="Abstract structure"
//                 className="w-full h-[250px] sm:h-[220px] md:h-[240px] object-cover filter contrast-[1.05] saturate-[0.92] brightness-[0.78]"
//               />
//             </div>

//             {/* Image B */}
//             <div className="rounded-[18px] overflow-hidden border border-white/8 shadow-[0_26px_80px_rgba(0,0,0,0.45)] bg-[#0a0a1c]">
//               <img
//                 src="https://images.unsplash.com/photo-1520975682031-a8a3c7f8431f?w=1600&auto=format&fit=crop&q=80"
//                 alt="Futuristic building"
//                 className="w-full h-[300px] sm:h-[260px] md:h-[280px] object-cover filter contrast-[1.05] saturate-[0.92] brightness-[0.78]"
//               />
//             </div>
//           </div>

//           {/* Quote block */}
//           <blockquote className="border-l border-yellow-400/26 pl-4 text-[clamp(16px,2vw,24px)] leading-[1.45] text-white/72 sm:text-[18px]">
//             <span className="block">
//               Where autonomous systems meet real-world{" "}
//               <span className="bg-yellow-400/22 rounded px-[0.18em] text-white/92">constraints</span>,
//             </span>
//             <span className="block">
//               we{" "}
//               <span className="bg-yellow-400/22 rounded px-[0.18em] text-white/92">build and back</span>{" "}
//               companies that
//             </span>
//             <span className="block">define the future of control.</span>
//           </blockquote>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutX;

import React from "react";

const AboutYVL = () => {
  return (
    <section className="relative overflow-hidden py-24 text-white bg-[#030210]">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 items-center lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT: CONTENT AREA */}
        <div className="space-y-8">
          <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
            About Us
          </p>

          <h2 className="font-medium text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight font-serif">
            Building and backing{" "}
            <span className="text-[#E8A147] relative">
              AI-native
              <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#E8A147]/30 blur-[1px]" />
            </span>{" "}
            platforms for critical systems.
          </h2>

          <p className="text-white/50 text-lg leading-relaxed max-w-[55ch] font-light">
            Where autonomous systems meet real-world constraints, we build and back companies that define the future of control.
          </p>

          {/* Glass Progress/Focus Card */}
          <div className="relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-transparent border border-white/[0.12] rounded-[30px] p-8 max-w-[460px] shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-all duration-500 hover:border-[#E8A147]/30 group">
            <div className="absolute inset-0 rounded-[30px] pointer-events-none border-t border-l border-white/10" />
            
            <div className="flex justify-between items-baseline mb-4 gap-4">
              <p className="text-lg font-serif text-white/90">Autonomy as Infrastructure</p>
              <p className="text-sm font-bold text-[#E8A147] tracking-widest">80%</p>
            </div>
            
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <span className="block h-full bg-gradient-to-r from-[#E8A147] to-[#E8A147]/30 rounded-full w-[80%] transition-all duration-1000 group-hover:brightness-125"></span>
            </div>
            
            <p className="mt-5 text-[14px] text-white/50 leading-relaxed font-light">
              A strong focus on mission-critical deployment — driving value where reliability is the only option.
            </p>
          </div>

          <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium italic">
            Built by operators fluent in autonomous systems and infrastructure.
          </p>
        </div>

        {/* RIGHT: ARCHITECTURAL VISUALS & HIGHLIGHTED STATEMENT */}
        <div className="relative space-y-12">
          <div className="grid grid-cols-2 gap-6 items-end">
            {/* Image Panel A: Abstract Tech/Dark Architecture */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/[0.1] shadow-2xl bg-[#030210] aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Intelligent Infrastructure"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-60" />
            </div>

            {/* Image Panel B: Geometric Industrial Precision */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/[0.1] shadow-2xl bg-[#030210] aspect-[4/6] group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern Control Systems"
                className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* REFINED STATEMENT BLOCK */}
          <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] shadow-2xl overflow-hidden group">
            {/* Glowing gold accent bar */}
            <div className="absolute top-0 left-10 w-20 h-[2px] bg-gradient-to-r from-[#E8A147] to-transparent shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
            
            <div className="relative z-10 space-y-4">
              <p className="text-[clamp(18px,2.2vw,24px)] font-serif leading-[1.4] text-white/90">
                Where autonomous systems meet <br />
                <span className="text-[#E8A147] font-medium italic">real-world constraints</span>,
              </p>
              
              <div className="flex items-center gap-4">
                <span className="h-px flex-grow bg-white/10"></span>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 whitespace-nowrap">The Mission</p>
                <span className="h-px w-10 bg-white/10"></span>
              </div>

              <p className="text-[clamp(18px,2.2vw,24px)] font-serif leading-[1.4] text-white/90">
                we <span className="relative inline-block px-2">
                   <span className="absolute inset-0 bg-[#E8A147]/10 -rotate-1 rounded-md"></span>
                   <span className="relative text-[#E8A147] font-semibold">build and back</span>
                </span> companies that define the <br />
                <span className="text-white font-semibold underline decoration-[#E8A147]/40 decoration-2 underline-offset-8">
                  future of control.
                </span>
              </p>
            </div>

            {/* Subtle background flare */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#E8A147]/5 blur-[60px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYVL;