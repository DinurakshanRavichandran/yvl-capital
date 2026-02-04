import React from "react";

const TeamHero = () => {
  return (
    <section className="relative bg-[#030210] text-white overflow-hidden min-h-[70vh] flex items-center">
      {/* Dynamic Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E8A147]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E8A147]/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8A147]/5 border border-[#E8A147]/20 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-[#E8A147] animate-ping"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A147]">
              The YVL Leadership
            </span>
          </div>

          {/* Headline with Serif/Sans mix */}
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.1] max-w-4xl">
            Built by <span className="text-[#E8A147]">Operators.</span> <br />
            Trusted by <span className="text-[#E8A147] drop-shadow-[0_0_15px_rgba(232,161,71,0.3)]">Institutions.</span>
          </h1>

          {/* Subcopy */}
          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 leading-relaxed font-light">
            YVL Capital Partners is led by founders and operators who have built,
            scaled, and exited companies — combining institutional discipline with
            hands-on execution across <span className="text-white">MENA</span> and global markets.
          </p>

          {/* Metrics Grid with Glassmorphism */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <Metric value="25+ yrs" label="Operating Experience" />
            <Metric value="$2.5B+" label="Assets Managed" />
            <Metric value="100M+" label="Studio Portfolio" />
            <Metric value="Global" label="MENA • EU • NA" />
          </div>
        </div>
      </div>

      {/* Bottom transition gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030210] to-transparent"></div>
    </section>
  );
};

const Metric = ({ value, label }) => {
  return (
    <div className="group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Glass Background */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl group-hover:border-[#E8A147]/30 transition-colors duration-500"></div>
      
      {/* Shine effect on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="text-3xl font-bold text-[#E8A147] mb-2 tracking-tight group-hover:scale-110 transition-transform duration-500">
          {value}
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/40 group-hover:text-white/70 transition-colors duration-500">
          {label}
        </div>
      </div>

      {/* Accent corner (bottom-right) */}
      <div className="absolute bottom-3 right-3 w-1 h-1 bg-[#E8A147]/0 group-hover:bg-[#E8A147] rounded-full transition-all duration-500"></div>
    </div>
  );
};

export default TeamHero;