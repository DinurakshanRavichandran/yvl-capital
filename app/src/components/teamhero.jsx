import React from "react";

const TeamHero = () => {
  return (
    <section className="relative bg-[#030210] text-white overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"></div>
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6 pt-[140px] pb-[120px] text-center">
        {/* Headline */}
        <h1 className="text-[42px] md:text-[52px] font-semibold tracking-tight leading-tight">
          Built by Operators. <br className="hidden sm:block" />
          Trusted by Institutions.
        </h1>

        {/* Subcopy */}
        <p className="mt-6 max-w-[780px] mx-auto text-[18px] md:text-[20px] text-white/70 leading-relaxed">
          YVL Capital Partners is led by founders and operators who have built,
          scaled, and exited companies across venture studios, asset management,
          and advanced technology — combining institutional discipline with
          hands-on execution across MENA and global markets.
        </p>

        {/* Metrics Strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          <Metric value="25+ yrs" label="Operating Experience" />
          <Metric value="$2.5B+" label="Assets Managed / Advised" />
          <Metric value="100M+" label="Venture Studio Portfolio" />
          <Metric value="Global" label="MENA • Europe • North America" />
        </div>
      </div>
    </section>
  );
};

const Metric = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-[26px] font-semibold text-white">{value}</div>
      <div className="mt-1 text-[14px] uppercase tracking-wide text-white/50">
        {label}
      </div>
    </div>
  );
};

export default TeamHero;
