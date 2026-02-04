import React from "react";

const leaders = [
  {
    name: "Rabih Sebaaly",
    title: "Chairman & Partner",
    image: "/images/team/rabih.jpg",
    bio: `Rabih is a serial entrepreneur and expert operator who built Youville into a market leader in experiential marketing. 
    Fusing Fortune 500 relationships with technology-driven storytelling, he’s scaled brands and agencies at global levels. 
    Rabih’s track record in launching, growing, and profitably exiting high-impact ventures gives the fund an edge in sourcing, 
    brand strategy, and operational scaling.`,
    stats: [
      "100+ Million LP Investments | 25+ Years Operating Globally",
      "Co-President, Youville Haussmann Park (200+ employees)",
      "Fortune 500: Microsoft, Loto-Québec, Bell, Telus, L’Oréal, BAT, Moët & Chandon",
      "Board Member, PROCURE Foundation",
    ],
  },
  {
    name: "Matthew Buckingham",
    title: "CEO & Managing Partner",
    image: "/images/team/matthew.jpg",
    bio: `Matthew is the former COO of Continuous Ventures, a high-growth venture studio in Dubai. 
    With 17+ years leading cross-border operations, marketing, and investment initiatives, he’s built and scaled global divisions 
    across fintech, AI, and digital transformation. Matthew’s proven execution playbook gives the fund operational firepower 
    and privileged access to MENA and emerging tech deal flow.`,
    stats: [
      "3.2–4.5x Gross MOIC | 38–52% Gross IRR",
      "$70M+ Follow-on Capital Raised",
      "$100M+ AUM | Former COO, Continuous Ventures",
      "UAE Gov Partner: NextGen FDI | Co-Investors: Accel, Index, Lightspeed, Founders Fund",
    ],
  },
  {
    name: "Tommy Baltzis",
    title: "CFO & Partner",
    image: "/images/team/tommy.jpg",
    bio: `Founder and CEO of WhiteHaven Capital, Tommy is a CFA and CPA with over 20 years of experience in corporate finance 
    and asset management. He leads one of Canada’s top-performing investment platforms and brings institutional-grade fund 
    construction, governance, and capital formation expertise to YVL.`,
    stats: [
      "$2.5B+ AUM | Built Since 2014",
      "44–45% Annual Returns | 11+ FundGrade A Ratings",
      "On Track for 100% Return Since Inception",
      "CFA & CPA | CFIQ Board Governor | Institutional LP Base",
    ],
  },
  {
    name: "Andrea Doyon",
    title: "CTO & Partner",
    image: "/images/team/andrea.jpg",
    bio: `Andrea is an award-winning entrepreneur and founder of Alice & Smith, an XR and transmedia studio delivering 
    AI-powered experiences for Microsoft, NVIDIA, and global entertainment brands. With 15+ years of product innovation, 
    Andrea leads YVL’s vision across autonomous systems, storytelling, and human-centered design.`,
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
    <section className="bg-[#030210] text-white">
      {leaders.map((leader, index) => (
        <div
          key={index}
          className="max-w-[1200px] mx-auto px-6 py-[120px] border-b border-white/10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start">
            {/* Portrait */}
            <div className="relative">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-[420px] object-cover rounded-sm grayscale"
              />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-[34px] font-semibold tracking-tight">
                {leader.name}
              </h3>
              <p className="mt-2 text-[15px] uppercase tracking-wide text-white/60">
                {leader.title}
              </p>

              <p className="mt-8 max-w-[820px] text-[17px] leading-relaxed text-white/75">
                {leader.bio}
              </p>

              {/* Stats */}
              <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {leader.stats.map((stat, i) => (
                  <div key={i} className="text-[15px] text-white/65">
                    {stat}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default LeadershipSection;
