// import React from "react";
// import { Building2, Users, Globe, Rocket } from "lucide-react";

// const supportItems = [
//   {
//     icon: Building2,
//     title: "Entity Setup & Governance",
//     description:
//       "Full legal structuring across UAE, Saudi, and regional jurisdictions."
//   },
//   {
//     icon: Users,
//     title: "Talent & GTM Support",
//     description:
//       "Access to curated hiring pipelines and regional go-to-market strategy."
//   },
//   {
//     icon: Globe,
//     title: "Sovereign & Enterprise Intros",
//     description:
//       "Direct introductions to government entities and enterprise buyers."
//   },
//   {
//     icon: Rocket,
//     title: "Follow-On Syndication",
//     description:
//       "Preferred access to co-investment from aligned regional LPs."
//   }
// ];

// const HowWePartnerSection = () => {
//   return (
//     <section className="py-24 md:py-32">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section Header */}
//         <div className="text-center mb-20">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//             Our Platform
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
//             How We <span className="text-[#E8A147]">Partner</span>
//           </h2>

//           <p className="text-white/50 text-lg font-light max-w-3xl mx-auto">
//             Through <span className="text-[#E8A147]">Nexa</span>, our operational
//             support arm, portfolio companies receive end-to-end support from
//             incorporation to scale.
//           </p>
//         </div>

//         {/* Support Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {supportItems.map((item, index) => (
//             <div
//               key={index}
//               className="group p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500 text-center"
//             >
//               <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
//                 <item.icon className="w-6 h-6 text-[#E8A147]" />
//               </div>

//               <h3 className="text-lg font-serif font-medium text-white mb-3 group-hover:text-[#E8A147] transition-colors">
//                 {item.title}
//               </h3>

//               <p className="text-white/40 text-sm leading-relaxed font-light">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowWePartnerSection;

import React from "react";
import { motion } from "framer-motion";
import { Building2, Users, Globe, Rocket } from "lucide-react";

const supportItems = [
  {
    icon: Building2,
    title: "Entity Setup & Governance",
    description: "Full legal structuring across UAE, Saudi, and regional jurisdictions."
  },
  {
    icon: Users,
    title: "Talent & GTM Support",
    description: "Access to curated hiring pipelines and regional go-to-market strategy."
  },
  {
    icon: Globe,
    title: "Sovereign & Enterprise Intros",
    description: "Direct introductions to government entities and enterprise buyers."
  },
  {
    icon: Rocket,
    title: "Follow-On Syndication",
    description: "Preferred access to co-investment from aligned regional LPs."
  }
];

const HowWePartnerSection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#030210] relative overflow-hidden">
      {/* Background Decorative Element */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent" /> */}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#E8A147] font-bold mb-6"
          >
            <span className="block w-8 h-px bg-[#E8A147]/40" />
            Our Platform
            <span className="block w-8 h-px bg-[#E8A147]/40" />
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-8">
            How We <span className="italic text-[#E8A147]">Partner</span>
          </h2>

          <p className="text-white/40 text-base md:text-lg font-light max-w-2xl mx-auto font-sans leading-relaxed">
            Through <span className="text-white/80 font-medium italic">Nexa</span>, our operational
            support arm, portfolio companies receive end-to-end support from
            incorporation to scale.
          </p>
        </div>

        {/* CONNECTED STEP GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {/* Subtle connecting line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-12" />

          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-[#E8A147]/20 transition-all duration-500"
            >
              {/* Step Indicator */}
              <div className="absolute top-6 right-8 font-mono text-[10px] text-white/10 group-hover:text-[#E8A147]/40 transition-colors">
                0{index + 1}
              </div>

              {/* Icon Container - Refined Scale */}
              <div className="w-12 h-12 mb-8 rounded-2xl bg-[#030210] border border-white/10 flex items-center justify-center text-[#E8A147] group-hover:shadow-[0_0_20px_rgba(232,161,71,0.15)] transition-all duration-500">
                <item.icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-lg font-serif text-white italic group-hover:text-[#E8A147] transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-white/40 leading-relaxed font-light font-sans group-hover:text-white/60 transition-colors">
                  {item.description}
                </p>
              </div>

              {/* Bottom Interactive Bar */}
              <div className="mt-8 h-0.5 w-0 bg-[#E8A147] group-hover:w-full transition-all duration-700 opacity-40" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWePartnerSection;