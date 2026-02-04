import React from "react";

const ctas = [
  {
    title: "Partner with YVL",
    description:
      "Engage with YVL as an institutional capital partner or strategic collaborator across funds, platforms, and portfolio companies.",
    href: "/partners",
  },
  {
    title: "Build with YVL",
    description:
      "Work alongside our venture studio and operating partners to build and scale companies with hands-on support and global reach.",
    href: "/build",
  },
  {
    title: "Co-Invest with YVL",
    description:
      "Access curated co-investment opportunities alongside YVL and its network of top-tier global investors.",
    href: "/co-invest",
  },
];

const TeamCTA = () => {
  return (
    <section className="bg-[#030210] text-white">
      <div className="max-w-[1100px] mx-auto px-6 py-[120px]">
        {/* Header */}
        <div className="max-w-[640px] mb-20">
          <p className="text-[13px] uppercase tracking-widest text-white/50">
            Work With Us
          </p>
          <h2 className="mt-4 text-[36px] font-semibold tracking-tight">
            Engage with YVL
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-white/70">
            YVL partners with institutional investors, founders, and strategic
            operators aligned around long-term value creation and disciplined
            execution.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              className="group border border-white/10 rounded-sm p-8 transition-all duration-300 hover:border-white/30"
            >
              <h3 className="text-[22px] font-medium">
                {cta.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                {cta.description}
              </p>

              <div className="mt-8 text-[14px] uppercase tracking-wide text-white/60 group-hover:text-white">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCTA;
