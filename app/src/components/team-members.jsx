import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// Assets
import AndreaImage from "../assets/andrea.jpg";
import RabihImage from "../assets/Rabih.jpg";
import TommyImage from "../assets/Tommyy.jpg";
import MathewImage from "../assets/Mathew.jpg";

const leaders = [
  // ... (Keep your leaders array exactly as it is)
  {
    name: "Rabih Sebaaly",
    title: "Chairman & Partner",
    image: RabihImage,
    topStat: { value: 100, suffix: "M+", label: "LP Investments" },
    bio: `Rabih is a serial entrepreneur and expert operator who built Youville into a market leader in experiential marketing. Fusing Fortune 500 relationships with technology-driven storytelling, he’s scaled brands and agencies at global levels.`,
    stats: [
      "25+ Years Operating Globally",
      "Co-President, Youville Haussmann Park",
      "Fortune 500: Microsoft, Bell, L’Oréal",
      "Board Member, PROCURE Foundation",
    ],
  },
  {
    name: "Matthew Buckingham",
    title: "CEO & Managing Partner",
    image: MathewImage,
    topStat: { value: 52, suffix: "%", label: "Gross IRR" },
    bio: `Matthew is the former COO of Continuous Ventures, a high-growth venture studio in Dubai. With 17+ years leading cross-border operations, marketing, and investment initiatives, he’s built and scaled global divisions across fintech and AI.`,
    stats: [
      "$70M+ Follow-on Capital Raised",
      "$100M+ AUM Leadership",
      "UAE Gov Partner: NextGen FDI",
      "Co-Investors: Accel, Index",
    ],
  },
  {
    name: "Tommy Baltzis",
    title: "CFO & Partner",
    image: TommyImage,
    topStat: { value: 2.5, suffix: "B+", label: "AUM Growth" },
    bio: `Founder and CEO of WhiteHaven Capital, Tommy is a CFA and CPA with over 20 years of experience in corporate finance. He leads one of Canada’s top-performing investment platforms.`,
    stats: [
      "44–45% Annual Returns",
      "11+ FundGrade A Ratings",
      "CFA & CPA Certified",
      "CFIQ Board Governor",
    ],
  },
  {
    name: "Andrea Doyon",
    title: "CTO & Partner",
    image: AndreaImage,
    topStat: { value: 5, suffix: "", label: "Successful Exits" },
    bio: `Andrea is an award-winning entrepreneur and founder of Alice & Smith. With 15+ years of product innovation, Andrea leads YVL’s vision across autonomous systems and human-centered design.`,
    stats: [
      "Microsoft & NVIDIA Partner",
      "Award-Winning AI Products",
      "XR & Transmedia Expert",
      "Keynote: SXSW & GDC",
    ],
  },
];

const StatCard = ({ value, suffix, label }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <div ref={ref} className="bg-[#0A0915] border border-[#E8A147]/20 p-5 rounded-xl backdrop-blur-md shadow-2xl">
      <div className="text-2xl font-serif font-bold text-[#E8A147]">
        {inView ? <CountUp end={value} decimals={value % 1 !== 0 ? 1 : 0} duration={2.5} /> : 0}
        {suffix}
      </div>
      <div className="text-[9px] uppercase tracking-[0.2em] text-white/40 mt-1">{label}</div>
    </div>
  );
};

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-[#030210] pt-40 pb-32 relative overflow-hidden">
      
      {/* 1. SECTION HEADER: Luxury Editorial Style */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-8 bg-[#E8A147]/50" />
            <span className="text-[#E8A147] text-[11px] font-bold uppercase tracking-[0.5em]">The Architects</span>
            <div className="h-px w-8 bg-[#E8A147]/50" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif text-white tracking-tight"
          >
            Guided by <span className="italic font-light text-[#E8A147]">Visionary</span> Leadership
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl text-white/40 text-sm md:text-base font-light leading-relaxed"
          >
            A collective of seasoned operators, financial architects, and technology pioneers 
            shaping the future of institutional capital.
          </motion.p>

          {/* Luxury Divider Ornament */}
          <div className="pt-12 flex flex-col items-center gap-3">
             <div className="w-px h-24 bg-gradient-to-b from-[#E8A147] to-transparent" />
             <div className="w-2 h-2 rounded-full border border-[#E8A147] rotate-45" />
          </div>
        </div>
      </div>

      {/* 2. LEADERS GRID */}
      <div className="max-w-7xl mx-auto px-6 space-y-56 relative z-10">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-16 lg:gap-32 items-center`}
          >
            {/* Portrait Block */}
            <div className="w-full lg:w-[480px] relative">
              {/* Outer decorative frame */}
              <div className="absolute -inset-6 border border-[#E8A147]/5 rounded-3xl pointer-events-none" />
              
              <div className="relative aspect-[4/5] group overflow-hidden rounded-2xl bg-[#0A0915] border border-white/5 shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.8 }}
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-90" />
                
                {/* Name Overlay for Mobile */}
                <div className="absolute bottom-6 left-6 lg:hidden">
                  <h4 className="text-2xl font-serif text-white">{leader.name}</h4>
                  <p className="text-[#E8A147] text-[10px] uppercase tracking-widest">{leader.title}</p>
                </div>
              </div>

              {/* Stat Badge */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className={`absolute -bottom-10 ${index % 2 === 0 ? "-right-10" : "-left-10"} hidden lg:block w-52`}
              >
                <StatCard {...leader.topStat} />
              </motion.div>
            </div>

            {/* Content Block */}
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 border border-[#E8A147]/30 rounded-full">
                   <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#E8A147]">
                      {leader.title}
                   </p>
                </div>
                <h3 className="text-5xl md:text-7xl font-serif font-medium text-white tracking-tighter">
                  {leader.name}
                </h3>
              </div>

              <div className="relative">
                <span className="absolute -left-8 top-0 text-6xl font-serif text-[#E8A147]/10 select-none">“</span>
                <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light italic">
                  {leader.bio}
                </p>
              </div>

              {/* Achievement Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                {leader.stats.map((stat, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-[#E8A147] shadow-[0_0_8px_#E8A147]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover/item:text-[#E8A147] transition-colors duration-500">
                      {stat}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background Decorative Polish */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E8A147]/10 to-transparent" />
    </section>
  );
};

export default LeadershipSection;