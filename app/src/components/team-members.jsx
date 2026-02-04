import React from "react";
// Importing the local assets you provided
import AndreaImage from "../assets/andrea.jpg";
import RabihImage from "../assets/Rabih.jpg";
import TommyImage from "../assets/Tommyy.jpg";
import MathewImage from "../assets/Mathew.jpg";

const leaders = [
  {
    name: "Rabih Sebaaly",
    title: "Chairman & Partner",
    image: RabihImage,
    bio: `Rabih is a serial entrepreneur and expert operator who built Youville into a market leader in experiential marketing. Fusing Fortune 500 relationships with technology-driven storytelling, he’s scaled brands and agencies at global levels. Rabih’s track record in launching, growing, and profitably exiting high-impact ventures gives the fund an edge in sourcing, brand strategy, and operational scaling.`,
    stats: [
      "100+ Million LP Investments | 25+ Years Operating Globally",
      "Co-President, Youville Haussmann Park (200+ employees)",
      "Fortune 500: Microsoft, Loto-Québec, Bell, Telus, L’Oréal",
      "Board Member, PROCURE Foundation",
    ],
  },
  {
    name: "Matthew Buckingham",
    title: "CEO & Managing Partner",
    image: MathewImage,
    bio: `Matthew is the former COO of Continuous Ventures, a high-growth venture studio in Dubai. With 17+ years leading cross-border operations, marketing, and investment initiatives, he’s built and scaled global divisions across fintech, AI, and digital transformation. Matthew’s proven execution playbook gives the fund operational firepower and privileged access to MENA and emerging tech deal flow.`,
    stats: [
      "3.2–4.5x Gross MOIC | 38–52% Gross IRR",
      "$70M+ Follow-on Capital Raised",
      "$100M+ AUM | Former COO, Continuous Ventures",
      "UAE Gov Partner: NextGen FDI | Co-Investors: Accel, Index",
    ],
  },
  {
    name: "Tommy Baltzis",
    title: "CFO & Partner",
    image: TommyImage,
    bio: `Founder and CEO of WhiteHaven Capital, Tommy is a CFA and CPA with over 20 years of experience in corporate finance and asset management. He leads one of Canada’s top-performing investment platforms and brings institutional-grade fund construction, governance, and capital formation expertise to YVL.`,
    stats: [
      "$2.5B+ AUM | Built Since 2014",
      "44–45% Annual Returns | 11+ FundGrade A Ratings",
      "On Track for 100% Return Since Inception",
      "CFA & CPA | CFIQ Board Governor",
    ],
  },
  {
    name: "Andrea Doyon",
    title: "CTO & Partner",
    image: AndreaImage,
    bio: `Andrea is an award-winning entrepreneur and founder of Alice & Smith, an XR and transmedia studio delivering AI-powered experiences for Microsoft, NVIDIA, and global entertainment brands. With 15+ years of product innovation, Andrea leads YVL’s vision across autonomous systems, storytelling, and human-centered design.`,
    stats: [
      "5 Successful Exits",
      "Award-Winning Products: The Black Watchmen, NITE Team 4",
      "Enterprise Partnerships: Microsoft, NVIDIA",
      "Industry Speaker: SXSW, GDC, NAB",
    ],
  },
];

const LeadershipSection = () => {
  return (
    <section id="team-members" className="bg-[#030210] py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#E8A147]/05 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-32 relative z-10">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-16 items-center`}
          >
            {/* Portrait Container */}
            <div className="w-full lg:w-[450px] group relative">
              {/* Animated Border Frame */}
              <div className="absolute -inset-4 border border-[#E8A147]/20 rounded-2xl group-hover:border-[#E8A147]/50 transition-colors duration-700 pointer-events-none" />
              
              <div className="relative overflow-hidden rounded-xl bg-zinc-900 aspect-[4/5] shadow-2xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-60" />
              </div>

              {/* Gold Accent Tag */}
              <div className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-[#E8A147] px-6 py-3 rounded-lg shadow-xl">
                 <span className="text-[#030210] text-[10px] uppercase tracking-[0.2em] font-black">
                    Executive Partner
                 </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
                  {leader.name}
                </h3>
                <div className="flex items-center gap-4">
                  <div className="h-[1px] w-12 bg-[#E8A147]" />
                  <p className="text-[12px] uppercase tracking-[0.4em] font-bold text-[#E8A147]">
                    {leader.title}
                  </p>
                </div>
              </div>

              <div className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md">
                <p className="text-lg leading-relaxed text-white/70 font-light italic">
                  "{leader.bio}"
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {leader.stats.map((stat, i) => (
                  <div key={i} className="flex items-start gap-4 group/stat">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E8A147] group-hover/stat:scale-150 transition-transform duration-300" />
                    <p className="text-sm text-white/50 group-hover/stat:text-white/80 transition-colors duration-300">
                      {stat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;