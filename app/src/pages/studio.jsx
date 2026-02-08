// import React, { useState } from "react";
// import { ArrowRight, Zap, Target, Users, Shield, Lightbulb, Clock, CheckCircle2, TrendingUp, Rocket, Building2, Network, ChevronRight, ChevronDown, Download, Video, Mail } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/header";
// import Footer from "../components/footer";

// const StudioPage = () => {
//   const navigate = useNavigate();
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   const studioProcess = [
//     {
//       icon: Zap,
//       title: "6-Week MVP Sprints",
//       description: "Nexa enables studio teams to ship functional MVPs in 6 weeks instead of 12–18, using shared engineering, ops, and data resources."
//     },
//     {
//       icon: Target,
//       title: "Milestone Gates at Months 6, 12, 18",
//       description: "At each gate, YVL evaluates MVP performance, pilot traction, unit economics, and moat development. Underperformers are killed or recycled; capital is reallocated to winners."
//     },
//     {
//       icon: Rocket,
//       title: "Graduation to Seed and Series A",
//       description: "Survivors that demonstrate autonomous control, strong economics, and strategic interest graduate into YVL's Seed Core and Seed-to-Series A tracks, backed by follow-on reserves."
//     }
//   ];

//   const founderBenefits = [
//     {
//       icon: Zap,
//       title: "Nexa & Staff Technologies",
//       items: [
//         "6-week MVP velocity",
//         "40–50% burn reduction",
//         "24/7 support across finance, HR, legal ops, analytics, and GTM"
//       ]
//     },
//     {
//       icon: Users,
//       title: "Hands-on GP Involvement",
//       items: [
//         "Weekly working sessions with GPs",
//         "Deep experience in Agtech, Water systems, Industrial automation",
//         "Healthcare infrastructure & Venture building expertise"
//       ]
//     },
//     {
//       icon: Network,
//       title: "Embedded Networks",
//       items: [
//         "Government programs (MENA food/water security initiatives)",
//         "Strategic buyers (Siemens, John Deere, ADNOC, etc.)",
//         "Co-investors (Accel, Index, Lightspeed, Founders Fund)",
//         "Ecosystem platforms (Microsoft for Startups MENA, Ignyte, Sheraa)"
//       ]
//     },
//     {
//       icon: Building2,
//       title: "Portfolio Founder Community",
//       items: [
//         "Access to a growing network of YVL founders",
//         "Peer learning and knowledge sharing",
//         "Referrals and partnership opportunities"
//       ]
//     }
//   ];

//   const outcomes = [
//     { metric: "MVP Timeline", target: "6 weeks" },
//     { metric: "Burn Reduction", target: "40–50%" },
//     { metric: "Series A Readiness", target: "18–24 months" },
//     { metric: "Ownership Retention", target: "30–40%" },
//     { metric: "MOIC Target", target: "4–6x at Series A/B" },
//     { metric: "Graduation Rate", target: "70%+ reach Series A" }
//   ];

//   const faqs = [
//     {
//       question: "Do I need to have a company already?",
//       answer: "No. For the Internal Ideation track, we provide the idea and recruit you as the founder. For Founder-First, you should have a clear concept and domain expertise."
//     },
//     {
//       question: "What equity does YVL take?",
//       answer: "We structure founder-friendly equity arrangements, typically retaining 30–40% through the studio phase, with significant upside for founders."
//     },
//     {
//       question: "Where are studio companies based?",
//       answer: "Primarily in MENA (Dubai, Riyadh, etc.), with support from our London and Montreal offices."
//     },
//     {
//       question: "How long does the studio program last?",
//       answer: "Companies typically graduate to external funding rounds within 18–24 months."
//     }
//   ];

//   return (
//     <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden">
//       {/* Global Background */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
//         <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
//         <div className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] bg-[#E8A147]/5 blur-[100px] rounded-full opacity-60" />
//       </div>

//       <Header />

//       <div className="relative z-10">
//         {/* HERO SECTION */}
//         <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20">
//           <div className="max-w-5xl mx-auto px-6 text-center">
//             {/* Breadcrumb */}
//             <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/40">
//               <button onClick={() => navigate("/")} className="hover:text-[#E8A147] transition-colors">Home</button>
//               <ChevronRight size={14} />
//               <span className="text-[#E8A147]">Studio</span>
//             </div>

//             <div className="inline-flex items-center gap-3 mb-10">
//               <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
//                 YVL Venture Studio
//               </span>
//               <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//             </div>

//             <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
//               Build Your AI-Native Company
//               <br />
//               <span className="text-[#E8A147]">with YVL's Venture Studio</span>
//             </h1>

//             <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
//               YVL's studio builds AI-native autonomous control companies from day zero, pairing entrepreneurial talent with proprietary operational infrastructure and a proven playbook.
//             </p>

//             <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
//               The studio model compresses MVP cycles to 6 weeks, cuts burn by 40–50%, and applies hard gates at months 6, 12, and 18 so only the most defensible companies graduate to scale. We combine capital, hands-on guidance, and our AI-powered operational platform Nexa to turn structural inefficiencies in eternal industries into scalable, defensible businesses.
//             </p>
//           </div>
//         </section>

//         {/* DIVIDER */}
//         <div className="max-w-7xl mx-auto w-full px-6">
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//         </div>

//         {/* WHAT THE STUDIO IS */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Overview
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-8">
//                 What the <span className="text-[#E8A147]">Studio Is</span>
//               </h2>

//               <p className="text-white/60 text-xl font-light max-w-4xl mx-auto mb-12">
//                 YVL's studio is a <span className="text-[#E8A147]">$10M, 10-company creation engine</span> inside YVL Capital Partners Fund I, designed to de-risk early-stage company formation in AI-native autonomous control.
//               </p>
//             </div>

//             <div className="grid md:grid-cols-3 gap-8 mb-12">
//               <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
//                 <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                   <Zap className="w-7 h-7 text-[#E8A147]" />
//                 </div>
//                 <h3 className="text-xl font-serif font-medium text-white mb-3">Nexa</h3>
//                 <p className="text-white/50 text-sm font-light">YVL's AI-powered operational platform</p>
//               </div>

//               <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
//                 <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                   <Building2 className="w-7 h-7 text-[#E8A147]" />
//                 </div>
//                 <h3 className="text-xl font-serif font-medium text-white mb-3">Staff Technologies</h3>
//                 <p className="text-white/50 text-sm font-light">Shared operational support</p>
//               </div>

//               <div className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] text-center">
//                 <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                   <Users className="w-7 h-7 text-[#E8A147]" />
//                 </div>
//                 <h3 className="text-xl font-serif font-medium text-white mb-3">Hands-on GP Guidance</h3>
//                 <p className="text-white/50 text-sm font-light">Weekly working sessions with experienced operators</p>
//               </div>
//             </div>

//             <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//               <p className="text-white/70 text-lg font-light leading-relaxed text-center">
//                 Studio companies follow the same four non-negotiable investment gates as our external investments: <span className="text-[#E8A147]">AI-nativism</span>, <span className="text-[#E8A147]">autonomous operational control</span>, <span className="text-[#E8A147]">transaction ownership</span>, and <span className="text-[#E8A147]">layered defensibility</span>.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* TWO STUDIO TRACKS */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Studio Models
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Two Studio <span className="text-[#E8A147]">Tracks</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Track 1: Internal Ideation */}
//               <div className="group p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500">
//                 <div className="flex items-start justify-between mb-6">
//                   <div>
//                     <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
//                       Track 1
//                     </span>
//                     <h3 className="text-3xl font-serif font-medium text-white mb-3">Internal Ideation</h3>
//                     <p className="text-white/50 text-sm font-light">For early-career entrepreneurs with execution drive.</p>
//                   </div>
//                   <Lightbulb className="w-12 h-12 text-[#E8A147]/30" />
//                 </div>

//                 <div className="space-y-6 mt-8">
//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Structure</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       YVL originates ideas, validates with customers, then recruits and backs early-career Entrepreneurs-in-Residence (EIRs) as founders.
//                     </p>
//                   </div>

//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Capital</p>
//                     <p className="text-white/70 font-light text-sm">
//                       <span className="text-[#E8A147] font-medium">$4M total</span> • $1M per company • Milestone-based tranches
//                     </p>
//                   </div>

//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Goal</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       Build new AI-native autonomous control platforms where no founder yet exists but the market need is clear.
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Outcome Target</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       <span className="text-[#E8A147]">$1M ARR</span>, proof of autonomous control, paying pilots within 12–18 months.
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Track 2: Founder-First */}
//               <div className="group p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500">
//                 <div className="flex items-start justify-between mb-6">
//                   <div>
//                     <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
//                       Track 2
//                     </span>
//                     <h3 className="text-3xl font-serif font-medium text-white mb-3">Founder-First</h3>
//                     <p className="text-white/50 text-sm font-light">For domain-expert operators with industry networks.</p>
//                   </div>
//                   <Users className="w-12 h-12 text-[#E8A147]/30" />
//                 </div>

//                 <div className="space-y-6 mt-8">
//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Structure</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       YVL partners with founders who bring 10+ years of operational experience and deep customer/regulatory networks.
//                     </p>
//                   </div>

//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Capital</p>
//                     <p className="text-white/70 font-light text-sm">
//                       <span className="text-[#E8A147] font-medium">$6M total</span> • $1M per company • Milestone-based with Nexa embedded from day one
//                     </p>
//                   </div>

//                   <div className="pb-6 border-b border-white/[0.08]">
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Goal</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       Supercharge operator-led companies already close to the problem with operational leverage and systematic scaling playbooks.
//                     </p>
//                   </div>

//                   <div>
//                     <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Outcome Target</p>
//                     <p className="text-white/70 font-light text-sm leading-relaxed">
//                       Same milestone gates; <span className="text-[#E8A147]">4–6x exit targets</span> at Series A/B within 3–5 years.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* HOW THE STUDIO PROCESS WORKS */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 The Process
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 How the Studio <span className="text-[#E8A147]">Process Works</span>
//               </h2>
//             </div>

//             <div className="space-y-8">
//               {studioProcess.map((item, index) => (
//                 <div
//                   key={index}
//                   className="group relative p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
//                 >
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
//                       <item.icon className="w-8 h-8 text-[#E8A147]" />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                         {item.title}
//                       </h3>
//                       <p className="text-white/60 leading-relaxed font-light">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* DIVIDER */}
//         <div className="max-w-7xl mx-auto w-full px-6">
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent" />
//         </div>

//         {/* WHAT FOUNDERS GET */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Founder Benefits
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 What Founders Get from the <span className="text-[#E8A147]">Studio</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-8">
//               {founderBenefits.map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
//                 >
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-12 h-12 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                       <benefit.icon className="w-6 h-6 text-[#E8A147]" />
//                     </div>
//                     <h3 className="text-xl font-serif font-medium text-white">{benefit.title}</h3>
//                   </div>

//                   <ul className="space-y-3">
//                     {benefit.items.map((item, idx) => (
//                       <li key={idx} className="flex items-start gap-3 text-white/60 font-light text-sm">
//                         <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
//                         <span>{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* WHY THE STUDIO MODEL MATTERS */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Value Proposition
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Why the Studio Model <span className="text-[#E8A147]">Matters</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* For Founders */}
//               <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//                 <div className="flex items-center gap-3 mb-8">
//                   <Users className="w-8 h-8 text-[#E8A147]" />
//                   <h3 className="text-2xl font-serif font-medium text-white">For Founders</h3>
//                 </div>

//                 <ul className="space-y-5">
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">De-risked company creation</p>
//                       <p className="text-white/50 text-sm font-light">We handle operational complexity</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">Extended runway</p>
//                       <p className="text-white/50 text-sm font-light">40–50% lower burn means more time to find product-market fit</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">Focus on what matters</p>
//                       <p className="text-white/50 text-sm font-light">You build product, talk to customers, and deepen defensibility</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>

//               {/* For LPs */}
//               <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//                 <div className="flex items-center gap-3 mb-8">
//                   <TrendingUp className="w-8 h-8 text-[#E8A147]" />
//                   <h3 className="text-2xl font-serif font-medium text-white">For LPs</h3>
//                 </div>

//                 <ul className="space-y-5">
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">De-risked experimentation</p>
//                       <p className="text-white/50 text-sm font-light">Milestone-based funding and early kill rates prevent capital traps</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">Higher ownership</p>
//                       <p className="text-white/50 text-sm font-light">YVL typically retains 30–40% ownership through follow-ons</p>
//                     </div>
//                   </li>
//                   <li className="flex items-start gap-4">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <div>
//                       <p className="text-white font-medium mb-1">Thesis validation at scale</p>
//                       <p className="text-white/50 text-sm font-light">Systematic application creates repeatable playbooks and strengthens future selection</p>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* EXPECTED OUTCOMES */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Performance Metrics
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Expected <span className="text-[#E8A147]">Outcomes</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {outcomes.map((outcome, index) => (
//                 <div
//                   key={index}
//                   className="p-8 rounded-[28px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] text-center"
//                 >
//                   <p className="text-3xl font-serif text-[#E8A147] mb-3">{outcome.target}</p>
//                   <p className="text-sm text-white/40 uppercase tracking-wider">{outcome.metric}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* WHO SHOULD APPLY */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Ideal Candidates
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Who Should <span className="text-[#E8A147]">Apply?</span>
//               </h2>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8">
//               {/* Internal Ideation Track */}
//               <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider">
//                     Internal Ideation Track
//                   </div>
//                 </div>

//                 <ul className="space-y-4">
//                   {[
//                     "Early-career operators, engineers, or product leaders",
//                     "Strong execution skills",
//                     "Willing to be matched with a validated problem in an eternal industry",
//                     "Based in or willing to relocate to MENA"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start gap-4 text-white/60 font-light">
//                       <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Founder-First Track */}
//               <div className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <div className="flex items-center gap-3 mb-8">
//                   <div className="px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider">
//                     Founder-First Track
//                   </div>
//                 </div>

//                 <ul className="space-y-4">
//                   {[
//                     "Domain experts with 10+ years in agriculture, water, industrial systems, or healthcare",
//                     "Deep customer/regulatory networks",
//                     "Operational experience in mission-critical environments",
//                     "Ready to build an AI-native control platform, not just digitize workflows"
//                   ].map((item, index) => (
//                     <li key={index} className="flex items-start gap-4 text-white/60 font-light">
//                       <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA SECTION */}
//         <section className="py-32 relative">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
//               Ready to Build
//               <br />
//               <span className="text-[#E8A147]">with Us?</span>
//             </h2>

//             <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-12">
//               If you're an operator ready to build an AI-native company in eternal industries, we provide the capital, infrastructure, and guidance to help you succeed.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
//               <a
//                 href="mailto:studio@yvl.capital"
//                 className="group relative px-12 py-5 rounded-full overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
//                 <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//                 <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
//                   Apply Now
//                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </a>

//               <a
//                 href="#"
//                 className="group relative px-12 py-5 rounded-full overflow-hidden"
//               >
//                 <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
//                 <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
//                   <Download size={16} />
//                   Download Playbook
//                 </span>
//               </a>
//             </div>

//             <div className="flex items-center justify-center gap-8">
//               <a href="#" className="flex items-center gap-2 text-white/40 hover:text-[#E8A147] transition-colors text-sm">
//                 <Video size={18} />
//                 <span>Watch Founder Testimonials</span>
//               </a>
//             </div>
//           </div>
//         </section>

//         {/* FAQ SECTION */}
//         <section className="py-24 md:py-32 relative">
//           <div className="max-w-4xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Studio FAQ
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Frequently Asked <span className="text-[#E8A147]">Questions</span>
//               </h2>
//             </div>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="rounded-[24px] bg-white/[0.03] border border-white/[0.08] overflow-hidden"
//                 >
//                   <button
//                     onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
//                     className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
//                   >
//                     <span className="text-white font-medium pr-4">{faq.question}</span>
//                     <ChevronDown
//                       className={`w-5 h-5 text-[#E8A147] flex-shrink-0 transition-transform duration-300 ${
//                         expandedFaq === index ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>

//                   <div
//                     className={`overflow-hidden transition-all duration-300 ${
//                       expandedFaq === index ? "max-h-96" : "max-h-0"
//                     }`}
//                   >
//                     <div className="px-8 pb-6 text-white/60 font-light leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         <Footer />
//       </div>
//     </main>
//   );
// };

// export default StudioPage;


import React from "react";

// Import all modular components
import HeroSection from "../components/studio-hero";
import StudioOverview from "../components/studio-overview";
import StudioTracks from "../components/studio-tracks";
import StudioProcess from "../components/studio-process";
import FounderBenefits from "../components/studio-founderbenefits";
import ValueProposition from "../components/studio-valueproposition";
import ExpectedOutcomes from "../components/studio-expectedOutcomes";
import IdealCandidates from "../components/studio-idealcandidates";
import CTASection from "../components/studio-cta";
import FAQSection from "../components/studio-faq";

const StudioPage = () => {
  return (
    <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* Studio Overview */}
      <StudioOverview />

      {/* Studio Tracks */}
      <StudioTracks />

      {/* Studio Process */}
      <StudioProcess />

      {/* Founder Benefits */}
      <FounderBenefits />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Expected Outcomes */}
      <ExpectedOutcomes />

      {/* Ideal Candidates */}
      <IdealCandidates />

      {/* CTA Section */}
      <CTASection />

      {/* FAQ Section */}
      <FAQSection />
    </main>
  );
};

export default StudioPage;
