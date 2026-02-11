// import React, { useState } from "react";
// import { ArrowRight, Zap, Target, Shield, Layers, TrendingUp, Globe, Clock, CheckCircle2, ChevronRight, ChevronDown, Download, Cpu, Activity, Lock, Network, Droplets, Leaf, Factory, Heart } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import Header from "../components/header";
// import Footer from "../components/footer";

// const ThesisPage = () => {
//   const navigate = useNavigate();
//   const [expandedFaq, setExpandedFaq] = useState(null);

//   const aiNativePoints = [
//     {
//       number: "01",
//       title: "AI as Infrastructure, Not a Feature",
//       description: "We back platforms where AI is the core decision engine for real-time operations, not a bolt-on to existing workflows. The AI must be fundamental to the product's value proposition and operational integrity."
//     },
//     {
//       number: "02",
//       title: "Direct Control of Physical Systems",
//       description: "Our companies control equipment and resources in the real world – greenhouse climate, water dosing, bioreactors, emissions, construction workflows – rather than just tracking tasks or digitizing administration."
//     },
//     {
//       number: "03",
//       title: "Continuous, Mission-Critical Processes",
//       description: "We target operations that run continuously or multiple times per day, where failure is unacceptable and switching costs are high. These are not discretionary tools – they are essential operational infrastructure."
//     }
//   ];

//   const investmentGates = [
//     {
//       gate: "1. AI-Nativism",
//       requirement: "AI must be core infrastructure for autonomous control, not a thin wrapper around legacy systems.",
//       why: "Ensures architectural defensibility and scalability beyond simple automation."
//     },
//     {
//       gate: "2. Autonomous Operational Control",
//       requirement: "The platform must make real-time decisions and actuate physical systems without human-in-the-loop micromanagement.",
//       why: "Delivers the operational efficiency and reliability that defines our thesis."
//     },
//     {
//       gate: "3. Transaction Ownership",
//       requirement: "The company must own the underlying economic transaction – commodity sales, inputs, resource allocation, or compliance payments – not just a UI on top of someone else's rails.",
//       why: "Creates direct monetization and deeper integration with customer operations."
//     },
//     {
//       gate: "4. Layered Defensibility",
//       requirement: "Each company must have at least two moats, including physical/sensor integration or autonomous process control plus an additional layer such as proprietary data, regulatory lock-in, or financial embedding.",
//       why: "Builds compounding barriers to entry that protect margins and market position."
//     }
//   ];

//   const eternalReasons = [
//     {
//       icon: Target,
//       title: "Permanent TAM, Structural Inefficiencies",
//       description: "Sectors like controlled-environment agriculture, water resources, industrial processes, diagnostics, and construction face 20–50 year problems that traditional automation has failed to solve. These are not passing trends – they are foundational human needs."
//     },
//     {
//       icon: Shield,
//       title: "Mission-Critical, Non-Discretionary Demand",
//       description: "Businesses in these sectors cannot operate without reliable control of assets and resources. This creates infrastructure-level moats for successful platforms that become embedded in daily operations."
//     },
//     {
//       icon: CheckCircle2,
//       title: "Evolving Regulatory & ESG Pressure",
//       description: "Climate, resource, and compliance requirements are pushing operators toward autonomous systems that provide auditable, real-time control. Early movers capture regulatory advantage."
//     }
//   ];

//   const whyNow = [
//     {
//       icon: Zap,
//       title: "Technology Readiness",
//       description: "Edge computing, cheaper sensors, and mature AI agents now make real-time autonomous control technically and economically viable at scale for the first time."
//     },
//     {
//       icon: Globe,
//       title: "Acute MENA Resource Gap",
//       description: "Water stress, food import dependence, and industrial efficiency needs make autonomy a survival requirement, not an optimization exercise. The region faces structural pressures that create urgent, well-funded demand."
//     },
//     {
//       icon: TrendingUp,
//       title: "Regulatory & Capital Tailwinds",
//       description: "Regional governments are actively funding and regulating food security, water technology, and industrial automation, creating strong demand pull and clear frameworks for autonomous systems."
//     }
//   ];

//   const defensibility = [
//     {
//       icon: Cpu,
//       title: "Operational Infrastructure Moat",
//       description: "Nexa – YVL's proprietary operational platform – took years to build and now delivers:",
//       items: [
//         "6-week MVP cycles (vs. 12–18 weeks industry standard)",
//         "40–50% burn reduction",
//         "24/7 operational support"
//       ],
//       note: "This platform advantage compounds across our portfolio."
//     },
//     {
//       icon: Globe,
//       title: "First-Mover Advantage in MENA",
//       description: "Direct relationships with governments, ecosystem platforms, and top-tier VCs create a sourcing and execution edge that compounds over time.",
//       note: "We are building the category before global capital arrives en masse."
//     },
//     {
//       icon: Network,
//       title: "Network Effects from Data & Referrals",
//       description: "As portfolio companies scale, they generate:",
//       items: [
//         "Proprietary operational data that improves our selection and support models",
//         "Founder referrals that deepen our talent network",
//         "Co-investment syndicates that strengthen our position"
//       ],
//       note: "This creates a self-reinforcing ecosystem that improves with scale."
//     }
//   ];

//   const verticals = [
//     { icon: Leaf, name: "Agriculture", examples: "controlled-environment, irrigation, supply chain" },
//     { icon: Droplets, name: "Water", examples: "treatment, distribution, quality monitoring" },
//     { icon: Factory, name: "Industrial Systems", examples: "process control, emissions, energy" },
//     { icon: Heart, name: "Healthcare", examples: "diagnostics, lab automation, facility management" }
//   ];

//   const faqs = [
//     {
//       question: "What makes an industry \"eternal\"?",
//       answer: "Eternal industries address fundamental human needs that will exist for decades: food, water, healthcare, industrial production. Demand is non-discretionary and structural inefficiencies are persistent."
//     },
//     {
//       question: "Why not invest in consumer AI or SaaS?",
//       answer: "Our focus is on physical operations control where AI creates tangible, defensible value in mission-critical environments. The moats are deeper and the markets more predictable."
//     },
//     {
//       question: "How do you measure \"autonomous control\"?",
//       answer: "We look for platforms where AI makes closed-loop decisions that directly affect physical outcomes – reducing human intervention by 80%+ in core workflows."
//     },
//     {
//       question: "Why MENA first?",
//       answer: "The region combines acute need, government support, and emerging talent – creating perfect conditions for autonomous infrastructure companies to scale rapidly with first-mover advantage."
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
//               <span className="text-[#E8A147]">Thesis</span>
//             </div>

//             <div className="inline-flex items-center gap-3 mb-10">
//               <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//               <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
//                 Investment Thesis
//               </span>
//               <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//             </div>

//             <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
//               Autonomous Operational Control
//               <br />
//               in <span className="text-[#E8A147]">Eternal Industries</span>
//             </h1>

//             <p className="text-white/60 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
//               YVL Capital backs AI-native platforms that autonomously control mission-critical physical operations in markets where demand is permanent and downtime is existential.
//             </p>

//             <p className="text-white/50 text-lg font-light leading-relaxed max-w-4xl mx-auto">
//               We invest in AI-native companies that autonomously control mission-critical operational processes in "eternal industries" – sectors like food production, water treatment, industrial process control, and healthcare. These companies own the transaction, the real-time operational data, and the compliance infrastructure, building compounding defensibility through proprietary data flywheels, physical integration, regulatory lock-in, and financial embedding.
//             </p>
//           </div>
//         </section>

//         {/* CORE THESIS STATEMENT */}
//         <section className="py-20">
//           <div className="max-w-5xl mx-auto px-6">
//             <div className="relative p-12 rounded-[48px] bg-gradient-to-br from-[#E8A147]/10 to-transparent border border-[#E8A147]/30 overflow-hidden">
//               <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E8A147] via-[#E8A147]/50 to-transparent" />
//               <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-[#E8A147] via-[#E8A147]/50 to-transparent" />

//               <p className="text-xs uppercase tracking-[0.3em] text-[#E8A147] mb-6 text-center">Core Thesis</p>
//               <p className="text-white text-2xl md:text-3xl font-serif font-medium leading-relaxed text-center">
//                 YVL invests where AI is <span className="text-[#E8A147]">infrastructure, not a feature</span> – in platforms that autonomously control physical operations that cannot fail, in industries that will never disappear.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* DIVIDER */}
//         <div className="max-w-7xl mx-auto w-full px-6">
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
//         </div>

//         {/* WHAT WE MEAN BY AI-NATIVE */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Definition
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 What We Mean By <span className="text-[#E8A147]">"AI-Native Autonomous Control"</span>
//               </h2>
//             </div>

//             <div className="space-y-6">
//               {aiNativePoints.map((point, index) => (
//                 <div
//                   key={index}
//                   className="group relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
//                 >
//                   <div className="absolute top-6 right-6 text-[#E8A147]/20 text-6xl font-serif font-bold group-hover:text-[#E8A147]/40 transition-colors">
//                     {point.number}
//                   </div>

//                   <div className="relative z-10">
//                     <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                       {point.title}
//                     </h3>
//                     <p className="text-white/60 leading-relaxed font-light">
//                       {point.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* FOUR INVESTMENT GATES */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Investment Framework
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 The Four Non-Negotiable <span className="text-[#E8A147]">Investment Gates</span>
//               </h2>

//               <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
//                 Every company must pass all four gates before YVL invests.
//               </p>
//             </div>

//             <div className="space-y-6">
//               {investmentGates.map((gate, index) => (
//                 <div
//                   key={index}
//                   className="group p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
//                 >
//                   <div className="grid lg:grid-cols-[200px_1fr_1fr] gap-8 items-start">
//                     <div>
//                       <h3 className="text-xl font-serif font-medium text-[#E8A147] mb-2">{gate.gate}</h3>
//                     </div>

//                     <div>
//                       <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Requirement</p>
//                       <p className="text-white/70 font-light leading-relaxed">{gate.requirement}</p>
//                     </div>

//                     <div>
//                       <p className="text-xs uppercase tracking-wider text-white/40 mb-2">Why It Matters</p>
//                       <p className="text-white/70 font-light leading-relaxed">{gate.why}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* WHY ETERNAL INDUSTRIES */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Market Focus
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Why We Focus on <span className="text-[#E8A147]">"Eternal Industries"</span>
//               </h2>
//             </div>

//             <div className="space-y-8">
//               {eternalReasons.map((reason, index) => (
//                 <div
//                   key={index}
//                   className="group relative p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
//                 >
//                   <div className="flex items-start gap-6">
//                     <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
//                       <reason.icon className="w-8 h-8 text-[#E8A147]" />
//                     </div>

//                     <div className="flex-1">
//                       <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                         {reason.title}
//                       </h3>
//                       <p className="text-white/60 leading-relaxed font-light">
//                         {reason.description}
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

//         {/* WHY NOW, ESPECIALLY IN MENA */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Market Timing
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Why Now, Especially in <span className="text-[#E8A147]">MENA</span>
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-3 gap-6">
//               {whyNow.map((item, index) => (
//                 <div
//                   key={index}
//                   className="group p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500"
//                 >
//                   <div className="w-14 h-14 mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
//                     <item.icon className="w-7 h-7 text-[#E8A147]" />
//                   </div>

//                   <h3 className="text-xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
//                     {item.title}
//                   </h3>

//                   <p className="text-white/60 text-sm leading-relaxed font-light">
//                     {item.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* HOW THIS BECOMES DEFENSIBLE */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

//           <div className="max-w-6xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Competitive Advantage
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 How This Becomes a <span className="text-[#E8A147]">Defensible Portfolio</span>
//               </h2>
//             </div>

//             <div className="space-y-8">
//               {defensibility.map((item, index) => (
//                 <div
//                   key={index}
//                   className="p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]"
//                 >
//                   <div className="flex items-start gap-6 mb-6">
//                     <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                       <item.icon className="w-7 h-7 text-[#E8A147]" />
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-2xl font-serif font-medium text-white mb-3">{item.title}</h3>
//                       <p className="text-white/60 font-light leading-relaxed">{item.description}</p>
//                     </div>
//                   </div>

//                   {item.items && (
//                     <ul className="space-y-3 mb-6 ml-20">
//                       {item.items.map((listItem, idx) => (
//                         <li key={idx} className="flex items-start gap-3 text-white/60 font-light text-sm">
//                           <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0 mt-0.5" />
//                           <span>{listItem}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   )}

//                   <div className="ml-20">
//                     <p className="text-white/50 italic font-light text-sm">{item.note}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* PORTFOLIO CONSTRUCTION */}
//         <section className="py-24 md:py-32">
//           <div className="max-w-6xl mx-auto px-6">
//             <div className="text-center mb-20">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Strategy
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//                 Portfolio Construction <span className="text-[#E8A147]">& Validation</span>
//               </h2>
//             </div>

//             {/* Vertical-Agnostic */}
//             <div className="mb-12">
//               <h3 className="text-2xl font-serif font-medium text-white mb-8 text-center">
//                 Vertical-Agnostic, <span className="text-[#E8A147]">Thesis-Focused</span>
//               </h3>

//               <p className="text-white/60 text-center mb-10 max-w-3xl mx-auto font-light">
//                 We apply the same four gates across multiple eternal industries:
//               </p>

//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                 {verticals.map((vertical, index) => (
//                   <div
//                     key={index}
//                     className="p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500 text-center"
//                   >
//                     <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center">
//                       <vertical.icon className="w-7 h-7 text-[#E8A147]" />
//                     </div>
//                     <h4 className="text-lg font-serif font-medium text-white mb-3">{vertical.name}</h4>
//                     <p className="text-white/40 text-xs font-light">{vertical.examples}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Dual-Track Validation */}
//             <div className="grid lg:grid-cols-2 gap-8 mb-12">
//               <div className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <h3 className="text-xl font-serif font-medium text-white mb-4">Dual-Track Validation</h3>
//                 <ul className="space-y-4">
//                   <li className="flex items-start gap-3 text-white/60 font-light">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <span><span className="text-white font-medium">Studio track</span> – systematically tests and refines the thesis through company creation</span>
//                   </li>
//                   <li className="flex items-start gap-3 text-white/60 font-light">
//                     <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147] flex-shrink-0" />
//                     <span><span className="text-white font-medium">External investment track</span> – validates thesis with proven founder-led companies</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="p-10 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <h3 className="text-xl font-serif font-medium text-white mb-4">Data-Driven Selection</h3>
//                 <p className="text-white/60 font-light mb-4">Every investment decision is filtered through:</p>
//                 <ul className="space-y-3">
//                   {["Thesis alignment", "Founder-market fit", "Defensibility architecture", "MENA-global leverage potential"].map((item, index) => (
//                     <li key={index} className="flex items-center gap-3 text-white/60 font-light text-sm">
//                       <CheckCircle2 className="w-5 h-5 text-[#E8A147]/60 flex-shrink-0" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* LONG-TERM VISION */}
//         <section className="py-24 md:py-32 relative">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

//           <div className="max-w-4xl mx-auto px-6 relative z-10">
//             <div className="text-center mb-12">
//               <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//                 <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
//                 Vision
//                 <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
//               </p>

//               <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-8">
//                 The <span className="text-[#E8A147]">Long-Term Vision</span>
//               </h2>
//             </div>

//             <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//               <p className="text-white/70 text-xl font-light leading-relaxed text-center">
//                 We are building the defining portfolio of AI-native infrastructure companies in eternal industries – starting in MENA, scaling globally. Our thesis is not about picking winners in existing markets, but about creating new categories where <span className="text-[#E8A147]">autonomous control becomes the default operational standard</span>.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA SECTION */}
//         <section className="py-32 relative">
//           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

//           <div className="max-w-4xl mx-auto px-6 text-center">
//             <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
//               If This Is Your
//               <br />
//               <span className="text-[#E8A147]">Vision Too</span>
//             </h2>

//             <div className="grid md:grid-cols-2 gap-8 mb-12">
//               <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <h3 className="text-2xl font-serif text-white mb-4">For Founders</h3>
//                 <p className="text-white/60 font-light mb-6">
//                   We provide capital, infrastructure, and operational leverage to build category-defining companies.
//                 </p>
//                 <a
//                   href="mailto:founders@yvl.capital"
//                   className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
//                 >
//                   Apply for Funding
//                   <ArrowRight size={16} />
//                 </a>
//               </div>

//               <div className="p-8 rounded-[32px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
//                 <h3 className="text-2xl font-serif text-white mb-4">For Investors</h3>
//                 <p className="text-white/60 font-light mb-6">
//                   We offer exposure to a systematically constructed portfolio of AI-native infrastructure companies.
//                 </p>
//                 <a
//                   href="mailto:lp@yvl.capital"
//                   className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider hover:gap-3 transition-all"
//                 >
//                   LP Inquiries
//                   <ArrowRight size={16} />
//                 </a>
//               </div>
//             </div>

//             <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
//               <button
//                 onClick={() => navigate("/")}
//                 className="group relative px-12 py-5 rounded-full overflow-hidden"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
//                 <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
//                 <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
//                   View Our Portfolio
//                   <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </button>

//               <a
//                 href="#"
//                 className="group relative px-12 py-5 rounded-full overflow-hidden"
//               >
//                 <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
//                 <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
//                   <Download size={16} />
//                   Download Full Thesis
//                 </span>
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
//                 Thesis FAQ
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

// export default ThesisPage;


// import React from "react";

// import HeroCoreSection from "../components/thesis-herocore";
// import AiNativeDefinitionSection from "../components/thesis-ainativedefinition";
// import InvestmentGatesSection from "../components/thesis-investmentgates";
// import AnchorSection from "../components/thesis-anchor";
// import WhyNowSection from "../components/thesis-whynow";
// import DefensiblePortfolioSection from "../components/thesis-defensibleportfolio";
// import PortfolioConstructionSection from "../components/thesis-portfolioconstruction";
// import LongTermVisionSection from "../components/thesis-LongTermVision";
// import VisionCTASection from "../components/thesis-visioncta";
// import ThesisFAQSection from "../components/thesis-faq";

// const ThesisPage = () => {
//   return (
//     <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden relative">
//       {/* Global Background Effects */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
//         <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
//         <div className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] bg-[#E8A147]/5 blur-[100px] rounded-full opacity-60" />
//       </div>

//       {/* Page Sections */}
//       <div className="relative z-10">
//         <HeroCoreSection />
//         <AiNativeDefinitionSection />
//         <InvestmentGatesSection />
//         <AnchorSection />
//         <WhyNowSection />
//         <DefensiblePortfolioSection />
//         <PortfolioConstructionSection />
//         <LongTermVisionSection />
//         <VisionCTASection />
//         <ThesisFAQSection />
//       </div>
//     </main>
//   );
// };

// export default ThesisPage;

import React from "react";
import { motion } from "framer-motion";

// Import your components
import HeroCoreSection from "../components/thesis-herocore";
import AiNativeDefinitionSection from "../components/thesis-ainativedefinition";
import InvestmentGatesSection from "../components/thesis-investmentgates";
import AnchorSection from "../components/thesis-anchor";
import WhyNowSection from "../components/thesis-whynow";
import DefensiblePortfolioSection from "../components/thesis-defensibleportfolio";
import PortfolioConstructionSection from "../components/thesis-portfolioconstruction";
import LongTermVisionSection from "../components/thesis-LongTermVision";
import VisionCTASection from "../components/thesis-visioncta";
import ThesisFAQSection from "../components/thesis-faq";

/**
 * A sophisticated divider that creates breathing room
 * and reinforces the "Institutional" brand.
 */
const SectionDivider = () => (
  <div className="py-24 md:py-32 flex justify-center items-center overflow-hidden">
    <div className="relative flex items-center justify-center w-full max-w-4xl px-8">
      {/* Left Line */}
      <motion.div 
        initial={{ scaleX: 0, originX: 1 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#E8A147]/40" 
      />
      
      {/* Center Pulse Node */}
      <div className="relative flex items-center justify-center mx-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#E8A147] shadow-[0_0_12px_#E8A147]" />
        <motion.div 
          animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-4 h-4 rounded-full border border-[#E8A147]/30"
        />
      </div>

      {/* Right Line */}
      <motion.div 
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#E8A147]/40" 
      />
    </div>
  </div>
);

const ThesisPage = () => {
  return (
    <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden relative">
      {/* 1. Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
      </div>

      {/* 2. Main Content Container - Constraint to max-width */}
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <HeroCoreSection />
        
        <SectionDivider />
        <AiNativeDefinitionSection />
        
        <SectionDivider />
        <InvestmentGatesSection />
        
        <SectionDivider />
        <AnchorSection />
        
        <SectionDivider />
        <WhyNowSection />
        
        <SectionDivider />
        <DefensiblePortfolioSection />
        
        <SectionDivider />
        <PortfolioConstructionSection />
        
        <SectionDivider />
        <LongTermVisionSection />
        
        <SectionDivider />
        <VisionCTASection />
        
        <SectionDivider />
        <ThesisFAQSection />
      </div>

      {/* 3. Global Footer Padding */}
      <div className="h-40" />
    </main>
  );
};

export default ThesisPage;

