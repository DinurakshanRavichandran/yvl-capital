import React from "react";
import { ArrowRight, PieChart, TrendingUp, Shield, Target, Zap, Users, Rocket, DollarSign, Award, CheckCircle2, ChevronRight, Download, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const AllocationPage = () => {
  const navigate = useNavigate();

  const allocationTable = [
    {
      track: "Studio: Internal Ideation",
      capital: "$4M",
      percent: "8%",
      companies: "4",
      checkSize: "$1M each",
      strategy: "YVL ideates, validates, recruits early-career EIRs; milestone-based vesting"
    },
    {
      track: "Studio: Founder-First",
      capital: "$6M",
      percent: "12%",
      companies: "6",
      checkSize: "$1M each",
      strategy: "Domain-expert founders with 10+ year ops experience; 10-year partner commitment"
    },
    {
      track: "Seed Core",
      capital: "$8–10M",
      percent: "16–20%",
      companies: "10–14",
      checkSize: "$500K–$1M",
      strategy: "First institutional seed in AI-native autonomous control companies"
    },
    {
      track: "Seed to Series A",
      capital: "$10–12M",
      percent: "20–24%",
      companies: "6–10",
      checkSize: "$1M–$3M",
      strategy: "High-conviction seed extension or early Series A in thesis winners"
    },
    {
      track: "Strategic Secondary",
      capital: "$4–6M",
      percent: "8–12%",
      companies: "3–5",
      checkSize: "$1M–$3M",
      strategy: "Secondaries, structured deals, ecosystem bets aligned with thesis"
    },
    {
      track: "Follow-On Reserves",
      capital: "$15M",
      percent: "30%",
      companies: "Mixed",
      checkSize: "Pro-rata",
      strategy: "Pro-rata participation across portfolio; ownership protection to 20% threshold"
    },
    {
      track: "Strategic Investments",
      capital: "$5M",
      percent: "10%",
      companies: "3–5",
      checkSize: "$500K–$2M",
      strategy: "Ecosystem amplification, partnerships, secondaries in thesis-aligned companies"
    },
    {
      track: "Operating Budget",
      capital: "$1M",
      percent: "2%",
      companies: "—",
      checkSize: "—",
      strategy: "Management fee, legal, Nexa platform, LP administration"
    }
  ];

  const studioBenefits = [
    "De-risks company creation by handling operational complexity",
    "Compresses time-to-MVP from 12–18 weeks to 6 weeks via Nexa",
    "Reduces burn by 40–50%, extending runway",
    "Founders focus on product, customers, defensibility – not back-office",
    "Milestone gates kill underperformers early and reallocate capital to winners"
  ];

  const allocationPrinciples = [
    {
      icon: Shield,
      title: "Studio De-risks Creation",
      description: "20% of capital funds 10 companies created from the ground up. Eliminates execution risk for founders unfamiliar with operational infrastructure."
    },
    {
      icon: Users,
      title: "External Provides Proven Founder Optionality",
      description: "44–56% backs founder-led companies with traction. Raises the quality bar while maintaining founder agency."
    },
    {
      icon: TrendingUp,
      title: "Reserves Protect Long-Term Value",
      description: "30% reserved for pro-rata follow-ons ensures YVL compounds returns and maintains ownership through exit."
    },
    {
      icon: Target,
      title: "Strategic Capital Amplifies Network",
      description: "10% strategic allocation deepens ecosystem ties, creates co-investor validation, and builds referral moats."
    },
    {
      icon: Zap,
      title: "Operating Budget = Platform Durability",
      description: "2% Nexa investment directly strengthens all portfolio companies, creating a self-reinforcing advantage."
    }
  ];

  const returnsTable = [
    {
      track: "Studio",
      moic: "4–6x",
      timeframe: "3–5 years",
      ownership: "30–40%",
      risk: "Medium-High"
    },
    {
      track: "Seed Core",
      moic: "2–3x",
      timeframe: "4–6 years",
      ownership: "20–30%",
      risk: "Medium"
    },
    {
      track: "Seed to Series A",
      moic: "2–3x",
      timeframe: "3–5 years",
      ownership: "15–25%",
      risk: "Medium-Low"
    },
    {
      track: "Strategic Secondary",
      moic: "1.5–2x",
      timeframe: "2–4 years",
      ownership: "10–20%",
      risk: "Low"
    },
    {
      track: "Portfolio Blend",
      moic: "3–4x",
      timeframe: "5–7 years",
      ownership: "20–25%",
      risk: "Balanced",
      highlight: true
    }
  ];

  const whyWorks = [
    {
      icon: Shield,
      title: "Risk Balancing",
      description: "Studio and external split founders across different founder types (YVL-backed EIRs vs. proven operators), reducing portfolio concentration risk."
    },
    {
      icon: Zap,
      title: "Execution Leverage",
      description: "Nexa operational infrastructure compounds as portfolio grows; later companies benefit from earlier successes and founder referrals."
    },
    {
      icon: Award,
      title: "Ownership Protection",
      description: "30% follow-on reserves ensure YVL maintains board seats and voting rights, increasing probability of achieving target MOIC and securing favorable exit terms."
    },
    {
      icon: Users,
      title: "Founder Fit",
      description: "Different check sizes and support models (studio weekly coaching, external quarterly guidance) match founder stage and operational maturity."
    },
    {
      icon: Target,
      title: "MENA First-Mover Positioning",
      description: "70% MENA deployment with 18–24 month execution window locks in government relationships, regulatory fast-track access, and founder network before global capital arrives."
    }
  ];

  return (
    <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] bg-[#E8A147]/5 blur-[100px] rounded-full opacity-60" />
      </div>

      <Header />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/40">
              <button onClick={() => navigate("/")} className="hover:text-[#E8A147] transition-colors">Home</button>
              <ChevronRight size={14} />
              <span className="text-[#E8A147]">Allocation</span>
            </div>

            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
                Capital Allocation
              </span>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
            </div>

            <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
              How We Deploy <span className="text-[#E8A147]">$50M</span>
              <br />
              Across Stages & Strategies
            </h1>

            <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
              A clear breakdown of YVL's capital allocation, showing how we balance venture studio creation, seed and early growth investment, ownership protection, and strategic ecosystem bets.
            </p>

            <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
              YVL's $50M fund is deployed strategically across three core tracks and supporting reserves to maximize founder success and LP returns. We combine venture studio origination – where we create and build companies from the ground up – with traditional VC seed and Series A deployment, all backed by follow-on reserves to protect ownership and amplify network effects.
            </p>
          </div>
        </section>

        {/* FUND OVERVIEW */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 rounded-[28px] bg-gradient-to-br from-[#E8A147]/10 to-transparent border border-[#E8A147]/30 text-center">
                <DollarSign className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
                <p className="text-4xl font-serif text-[#E8A147] mb-2">$50M</p>
                <p className="text-sm text-white/40 uppercase tracking-wider">Total Fund Size</p>
              </div>

              <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
                <Rocket className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
                <p className="text-4xl font-serif text-white mb-2">18–24</p>
                <p className="text-sm text-white/40 uppercase tracking-wider">Month Deployment</p>
              </div>

              <div className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] text-center">
                <Target className="w-12 h-12 text-[#E8A147] mx-auto mb-4" />
                <p className="text-4xl font-serif text-white mb-2">33–42</p>
                <p className="text-sm text-white/40 uppercase tracking-wider">Target Companies</p>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* CAPITAL ALLOCATION TABLE */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Fund Breakdown
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Capital Allocation <span className="text-[#E8A147]">at a Glance</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[1000px]">
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-4 p-6 rounded-t-[24px] bg-[#E8A147]/10 border border-[#E8A147]/30">
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Track</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Capital</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">% of Fund</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Companies</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Check Size</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Strategy</div>
                </div>

                {/* Table Rows */}
                {allocationTable.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-6 gap-4 p-6 border-x border-b ${
                      index === allocationTable.length - 1 ? "rounded-b-[24px]" : ""
                    } ${
                      row.track.includes("Studio") || row.track === "Follow-On Reserves"
                        ? "bg-white/[0.05] border-white/[0.1]"
                        : "bg-white/[0.03] border-white/[0.08]"
                    }`}
                  >
                    <div className="text-white font-medium text-sm">{row.track}</div>
                    <div className="text-[#E8A147] font-semibold text-sm">{row.capital}</div>
                    <div className="text-white/70 text-sm">{row.percent}</div>
                    <div className="text-white/70 text-sm">{row.companies}</div>
                    <div className="text-white/70 text-sm">{row.checkSize}</div>
                    <div className="text-white/60 text-xs font-light leading-relaxed">{row.strategy}</div>
                  </div>
                ))}

                {/* Total Row */}
                <div className="grid grid-cols-6 gap-4 p-6 mt-2 rounded-[24px] bg-gradient-to-r from-[#E8A147]/10 to-transparent border border-[#E8A147]/30">
                  <div className="text-white font-bold uppercase tracking-wider text-sm">TOTAL</div>
                  <div className="text-[#E8A147] font-bold text-lg">$50M</div>
                  <div className="text-white font-semibold">100%</div>
                  <div className="text-white font-semibold">33–42</div>
                  <div className="text-white/70 text-sm">—</div>
                  <div className="text-white/60 text-xs font-light">18–24 month deployment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STUDIO TRACK */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Studio Track
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Studio Track: <span className="text-[#E8A147]">De-Risk Company Creation</span>
              </h2>

              <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
                <span className="text-[#E8A147] font-medium">Total Allocation: $10M (20% of Fund)</span>
              </p>

              <p className="text-white/50 font-light max-w-3xl mx-auto">
                The studio originates and funds companies from ideation through to Series A readiness, using milestone-based vesting and rigorous gates at months 6, 12, and 18 to eliminate underperformers early and concentrate capital on winners.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Internal Ideation */}
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
                    Internal Ideation
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-white mb-4">$4M across 4 companies</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
                    <p className="text-white/70 font-light">$1M per company, tranched on milestones</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Model</p>
                    <p className="text-white/70 font-light">YVL ideates, validates market, recruits early-career EIRs to found</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Outcome Target</p>
                    <p className="text-white/70 font-light">$1M ARR, proof of autonomous control, paying pilots by month 12–18</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Exit Target</p>
                    <p className="text-[#E8A147] font-medium">4–6x within 3 years</p>
                  </div>
                </div>
              </div>

              {/* Founder-First */}
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <div className="mb-8">
                  <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
                    Founder-First
                  </span>
                  <h3 className="text-2xl font-serif font-medium text-white mb-4">$6M across 6 companies</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Check Size</p>
                    <p className="text-white/70 font-light">$1M per company, milestone-based</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Model</p>
                    <p className="text-white/70 font-light">Partners with domain-expert founders (10+ years ops experience)</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Outcome Target</p>
                    <p className="text-white/70 font-light">Same milestone gates; 4–6x exit targets at Series A/B within 3–5 years</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Ownership</p>
                    <p className="text-[#E8A147] font-medium">YVL retains 30–40%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Studio Matters */}
            <div className="p-10 rounded-[40px] bg-gradient-to-br from-[#E8A147]/5 to-transparent border border-[#E8A147]/20">
              <h3 className="text-xl font-serif font-medium text-white mb-6 text-center">Why the Studio Model Matters</h3>
              <ul className="space-y-3">
                {studioBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/70 font-light">
                    <CheckCircle2 className="w-5 h-5 text-[#E8A147] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* EXTERNAL TRACK */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                External Track
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                External Track: <span className="text-[#E8A147]">Seed & Early Growth Investment</span>
              </h2>

              <p className="text-white/60 text-lg font-light max-w-3xl mx-auto mb-8">
                <span className="text-[#E8A147] font-medium">Total Allocation: $22–28M (44–56% of Fund)</span>
              </p>

              <p className="text-white/50 font-light max-w-3xl mx-auto">
                YVL leads or co-leads pre-seed, seed, and early Series A rounds for founder-led companies that meet our four non-negotiable investment gates.
              </p>
            </div>

            <div className="space-y-8">
              {/* Seed Core */}
              <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-white mb-2">Seed Core</h3>
                    <p className="text-[#E8A147] font-medium">$8–10M across 10–14 companies</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                    <p className="text-white text-lg font-semibold">$500K–$1M</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Thesis Fit</p>
                    <p className="text-white/70 font-light text-sm">First institutional seed in AI-native autonomous control companies</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                    <p className="text-[#E8A147] font-medium">2–3x MOIC to Series A/B</p>
                  </div>
                </div>
              </div>

              {/* Seed to Series A */}
              <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-white mb-2">Seed to Series A</h3>
                    <p className="text-[#E8A147] font-medium">$10–12M across 6–10 companies</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                    <p className="text-white text-lg font-semibold">$1M–$3M</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Thesis Fit</p>
                    <p className="text-white/70 font-light text-sm">High-conviction seed extension or early Series A for thesis winners</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                    <p className="text-[#E8A147] font-medium">2–3x MOIC at Series B/C stage</p>
                  </div>
                </div>
              </div>

              {/* Strategic Secondary */}
              <div className="p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.1]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-white mb-2">Strategic Secondary</h3>
                    <p className="text-[#E8A147] font-medium">$4–6M across 3–5 deals</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Check Size</p>
                    <p className="text-white text-lg font-semibold">$1M–$3M</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Model</p>
                    <p className="text-white/70 font-light text-sm">Secondaries in thesis-aligned companies, structured deals, ecosystem bets</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Return Expectation</p>
                    <p className="text-[#E8A147] font-medium">1.5–2x MOIC, faster exit timelines</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent" />
        </div>

        {/* RESERVES & STRATEGIC */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Reserves & Support
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Reserves & <span className="text-[#E8A147]">Strategic Support</span>
              </h2>

              <p className="text-[#E8A147] text-lg font-medium">Total Allocation: $20M (40% of Fund)</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Follow-On Reserves */}
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <h3 className="text-2xl font-serif font-medium text-white mb-2">Follow-On Reserves</h3>
                <p className="text-[#E8A147] font-medium mb-6">$15M (30% of fund)</p>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Purpose</p>
                    <p className="text-white/70 font-light text-sm">Pro-rata participation across all studio and external portfolio companies</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Mechanism</p>
                    <p className="text-white/70 font-light text-sm">Deployed at Series A, B, and secondary stages</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Ownership Protection</p>
                    <p className="text-white/70 font-light text-sm">Prevents dilution below YVL's 20% ownership threshold</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Impact</p>
                    <p className="text-white/70 font-light text-sm">Ensures YVL compounds returns, deepens founder relationships, and maintains board position and voting rights across exits</p>
                  </div>
                </div>
              </div>

              {/* Strategic Investments */}
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <h3 className="text-2xl font-serif font-medium text-white mb-2">Strategic Investments & Ecosystem</h3>
                <p className="text-[#E8A147] font-medium mb-6">$5M (10% of fund)</p>

                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Uses</p>
                  <ul className="space-y-3">
                    {[
                      "Secondaries in thesis-aligned companies entering Series B or scaling phase",
                      "Structured deals with companies seeking operational infrastructure capital",
                      "Ecosystem amplification (founder referrals, meetups, research grants)",
                      "Strategic partnerships with government programs or corporate venture arms"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-white/70 font-light text-sm">
                        <span className="w-2 h-2 mt-1.5 rounded-full bg-[#E8A147] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KEY ALLOCATION PRINCIPLES */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Principles
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Key Allocation <span className="text-[#E8A147]">Principles</span>
              </h2>
            </div>

            <div className="space-y-6">
              {allocationPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="group p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                      <principle.icon className="w-7 h-7 text-[#E8A147]" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-medium text-white mb-3 group-hover:text-[#E8A147] transition-colors">
                        {principle.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed font-light">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPECTED RETURNS */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Returns
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Expected Returns <span className="text-[#E8A147]">by Track</span>
              </h2>

              <p className="text-white/50 font-light text-sm">*Net to LPs = after 2% management fee, 20% carry (8% hurdle)*</p>
            </div>

            <div className="overflow-x-auto">
              <div className="min-w-[800px]">
                {/* Header */}
                <div className="grid grid-cols-5 gap-4 p-6 rounded-t-[24px] bg-[#E8A147]/10 border border-[#E8A147]/30">
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Track</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Target MOIC</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Timeframe</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Ownership Target</div>
                  <div className="text-xs uppercase tracking-wider text-[#E8A147] font-bold">Risk Profile</div>
                </div>

                {/* Rows */}
                {returnsTable.map((row, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-5 gap-4 p-6 border-x border-b ${
                      index === returnsTable.length - 1 ? "rounded-b-[24px]" : ""
                    } ${
                      row.highlight
                        ? "bg-gradient-to-r from-[#E8A147]/10 to-transparent border-[#E8A147]/30"
                        : "bg-white/[0.03] border-white/[0.08]"
                    }`}
                  >
                    <div className={`font-medium text-sm ${row.highlight ? "text-[#E8A147]" : "text-white"}`}>
                      {row.track}
                    </div>
                    <div className="text-white font-semibold">{row.moic}</div>
                    <div className="text-white/70">{row.timeframe}</div>
                    <div className="text-white/70">{row.ownership}</div>
                    <div className="text-white/70">{row.risk}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY THIS WORKS */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Why It Works
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Why This Allocation <span className="text-[#E8A147]">Structure Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {whyWorks.map((item, index) => (
                <div
                  key={index}
                  className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#E8A147]" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="text-white/60 font-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PORTFOLIO VISUAL */}
        <section className="py-24 md:py-32">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                Portfolio Construction <span className="text-[#E8A147]">Visual</span>
              </h2>
            </div>

            <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1] overflow-x-auto">
              <pre className="text-[#E8A147] text-xs md:text-sm font-mono leading-relaxed whitespace-pre">
{`YVL $50M Fund Structure:

┌─────────────────────────────────────────────────────────────┐
│                     $50M TOTAL FUND                         │
├────────────┬────────────┬────────────┬────────────┬─────────┤
│  Studio    │   Seed     │ Seed→A     │ Reserves   │ Strategic│
│   $10M     │   $8-10M   │ $10-12M    │   $20M     │   $5M   │
│  (20%)     │  (16-20%)  │ (20-24%)   │   (40%)    │  (10%)  │
├────────────┼────────────┼────────────┼────────────┼─────────┤
│ Internal   │ Seed Core  │ Seed→A     │ Follow-On  │ Ecosystem│
│ Ideation   │ First      │ High       │ Reserves   │ Bets    │
│ $4M/4 cos  │ Inst. Seed │ Conviction │ $15M       │ $5M     │
│            │ $8-10M/    │ $10-12M/   │ (30%)      │         │
│ Founder-   │ 10-14 cos  │ 6-10 cos   │            │         │
│ First      │            │            │ Operating  │         │
│ $6M/6 cos  │            │            │ Budget $1M │         │
│            │            │            │ (2%)       │         │
└────────────┴────────────┴────────────┴────────────┴─────────┘`}
              </pre>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-6">
                For <span className="text-[#E8A147]">LPs & Founders</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <h3 className="text-2xl font-serif text-white mb-4">For Limited Partners</h3>
                <p className="text-white/60 font-light mb-6">
                  This allocation structure is designed to maximize returns while systematically managing risk through diversification, ownership protection, and platform effects.
                </p>
                <a
                  href="mailto:lp@yvl.capital"
                  className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                >
                  Become an LP
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
                <h3 className="text-2xl font-serif text-white mb-4">For Founders</h3>
                <p className="text-white/60 font-light mb-6">
                  Whether you're an early-career operator or a domain expert, YVL has a capital and support model designed for your stage.
                </p>
                <a
                  href="mailto:founders@yvl.capital"
                  className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                >
                  View Investment Criteria
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="#"
                className="group relative px-12 py-5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
                  <Download size={16} />
                  Download Allocation Deck
                </span>
              </a>

              <button
                onClick={() => navigate("/")}
                className="group relative px-12 py-5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
                <span className="relative z-10 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
                  Back to Home
                </span>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default AllocationPage;
