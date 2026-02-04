import React from "react";
import { ArrowUpRight } from "lucide-react";

const ctas = [
  {
    title: "Partner with YVL",
    label: "Institutional LP",
    description:
      "Engage with YVL as an institutional capital partner or strategic collaborator across funds, platforms, and portfolio companies.",
    href: "/partners",
  },
  {
    title: "Build with YVL",
    label: "Founders & Studios",
    description:
      "Work alongside our venture studio and operating partners to scale companies with hands-on support and global reach.",
    href: "/build",
  },
  {
    title: "Co-Invest with YVL",
    label: "Strategic Network",
    description:
      "Access curated co-investment opportunities alongside YVL and its network of top-tier global investors.",
    href: "/co-invest",
  },
];

const TeamCTA = () => {
  return (
    <section className="bg-[#030210] py-32 relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] pointer-events-none">
        <div className="h-full w-full bg-[grid-white/20] [background-size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Block */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#E8A147]" />
              <p className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#E8A147]">
                Next Steps
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Engage with the <br />
              <span className="italic font-light">YVL Ecosystem</span>
            </h2>
          </div>
          <p className="text-white/50 font-light leading-relaxed">
            YVL partners with institutional investors, founders, and strategic
            operators aligned around long-term value creation and disciplined execution.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              className="group relative flex flex-col h-full p-10 rounded-2xl bg-white/[0.02] border border-white/10 transition-all duration-700 hover:bg-white/[0.05] hover:border-[#E8A147]/40"
            >
              {/* Subtle hover accent */}
              <div className="absolute top-0 right-0 p-6">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#E8A147] group-hover:border-[#E8A147] transition-all duration-500">
                  <ArrowUpRight size={18} className="text-white group-hover:text-[#030210] transition-colors" />
                </div>
              </div>

              <div className="flex-1">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#E8A147] mb-6">
                  {cta.label}
                </p>
                <h3 className="text-2xl font-serif font-bold text-white mb-4 pr-10">
                  {cta.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50 font-light group-hover:text-white/70 transition-colors duration-500">
                  {cta.description}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-white/5">
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-[#E8A147] transition-all duration-500">
                  Initialize Engagement
                </span>
              </div>

              {/* Decorative line animate */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#E8A147] to-transparent group-hover:w-full transition-all duration-1000" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;