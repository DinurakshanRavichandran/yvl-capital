import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030210] pt-24 pb-20">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gold glow - top right */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#E8A147]/8 blur-[180px] rounded-full" />

        {/* Secondary subtle glow - bottom left */}
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#E8A147]/5 blur-[150px] rounded-full" />

        {/* Center soft light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.02] blur-[120px] rounded-full" />

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#E8A147 1px, transparent 1px), linear-gradient(90deg, #E8A147 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 mb-10">
          <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
            Venture Capital
          </span>
          <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-[clamp(42px,8vw,90px)] font-medium leading-[1.05] tracking-tight text-white mb-8">
          Building the Future
          <br />
          <span className="relative inline-block">
            <span className="text-[#E8A147]">of Control</span>
            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8A147]/60 via-[#E8A147] to-[#E8A147]/60" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-14">
          We build and back AI-native platforms for critical systems.
          Where autonomous systems meet real-world constraints.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group relative px-10 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
              Partner With Us
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="group relative px-10 py-5 rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
            <span className="relative z-10 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
              Learn More
            </span>
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: TrendingUp, value: "$500M+", label: "Assets Under Management" },
            { icon: Shield, value: "25+", label: "Portfolio Companies" },
            { icon: Zap, value: "10x", label: "Average Returns" },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-[30px] bg-white/[0.03] border border-white/[0.06] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500"
            >
              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#E8A147]/20 rounded-tl-lg group-hover:border-[#E8A147]/40 transition-colors" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#E8A147]/20 rounded-br-lg group-hover:border-[#E8A147]/40 transition-colors" />

              <stat.icon className="w-6 h-6 text-[#E8A147]/60 mx-auto mb-4 group-hover:text-[#E8A147] transition-colors" />
              <p className="text-3xl md:text-4xl font-serif font-medium text-white mb-2 group-hover:text-[#E8A147] transition-colors">
                {stat.value}
              </p>
              <p className="text-[12px] uppercase tracking-[0.2em] text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#E8A147]/50 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-[#E8A147] animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
