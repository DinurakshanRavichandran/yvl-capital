import React from "react";

const AboutYVL = () => {
  return (
    // Primary Background set to #091020
    <section className="relative overflow-hidden py-24 text-white bg-[#091020] font-sans">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Adjusted gold glow to feel warmer against the Oxford Blue */}
        <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/10 blur-[130px] rounded-full opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid gap-16 items-center lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* LEFT: CONTENT AREA */}
        <div className="space-y-8">
          <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
            About Us
          </p>

          <h2 className="font-serif font-medium text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-tight">
            Building and backing{" "}
            <span className="text-[#E8A147] relative">
              AI-native
              <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#E8A147]/30 blur-[1px]" />
            </span>{" "}
            platforms for critical systems.
          </h2>

          <p className="text-white/60 text-lg leading-relaxed max-w-[55ch] font-light">
            Where autonomous systems meet real-world constraints, we build and back companies that define the future of control.
          </p>

          {/* Glass Progress Card - Uses a slightly lighter tint for visibility */}
          <div className="relative overflow-hidden bg-white/[0.04] backdrop-blur-md border border-white/[0.1] rounded-[30px] p-8 max-w-[460px] shadow-[0_30px_60px_rgba(0,0,0,0.25)] transition-all duration-500 hover:border-[#E8A147]/40 group">
            <div className="absolute inset-0 rounded-[30px] pointer-events-none border-t border-l border-white/10" />
            
            <div className="flex justify-between items-baseline mb-4 gap-4">
              <p className="text-lg font-serif text-white/90">Autonomy as Infrastructure</p>
              <p className="text-sm font-bold text-[#E8A147] tracking-widest">80%</p>
            </div>
            
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden relative">
              <span className="block h-full bg-gradient-to-r from-[#E8A147] to-[#F2C078] rounded-full w-[80%] transition-all duration-1000 group-hover:brightness-110"></span>
            </div>
            
            <p className="mt-5 text-[14px] text-white/50 leading-relaxed font-light">
              A strong focus on mission-critical deployment — driving value where reliability is the only option.
            </p>
          </div>

          <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium italic">
            Built by operators fluent in autonomous systems and infrastructure.
          </p>
        </div>

        {/* RIGHT: ARCHITECTURAL VISUALS */}
        <div className="relative space-y-12">
          <div className="grid grid-cols-2 gap-6 items-end">
            {/* Image Panel A */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/[0.08] shadow-2xl bg-[#091020] aspect-[4/5] group">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                alt="Intelligent Infrastructure"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              {/* Overlay gradient matches #091020 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091020] via-[#091020]/20 to-transparent opacity-90" />
            </div>

            {/* Image Panel B */}
            <div className="relative rounded-[40px] overflow-hidden border border-white/[0.08] shadow-2xl bg-[#091020] aspect-[4/6] group">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Modern Control Systems"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091020] via-[#091020]/20 to-transparent opacity-90" />
            </div>
          </div>

          {/* REFINED STATEMENT BLOCK - Using a slightly offset navy tint */}
          <div className="relative p-10 rounded-[40px] bg-[#11192d] border border-white/[0.08] shadow-2xl overflow-hidden group">
            <div className="absolute top-0 left-10 w-20 h-[2px] bg-[#E8A147] shadow-[0_0_20px_rgba(232,161,71,0.4)]" />
            
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

            {/* Subtle radial flare for depth */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#E8A147]/5 blur-[80px] rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutYVL;