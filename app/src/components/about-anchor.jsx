// import React from "react";

// const AnchorSection = () => {
//   return (
//     <section className="py-24 md:py-32 relative">
//       {/* Soft background wash */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT VISUAL */}
//           <div className="relative order-2 lg:order-1">
//             <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-white/[0.1] bg-[#030210]">
//               <img
//                 src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
//                 alt="Eternal Industries"
//                 className="w-full h-full object-cover opacity-50 grayscale"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-[#030210]/60 to-transparent" />
//             </div>

//             {/* Floating Badge */}
//             <div className="absolute -bottom-6 -right-6 p-6 rounded-[24px] bg-[#030210] border border-[#E8A147]/30 shadow-2xl">
//               <p className="text-[#E8A147] text-sm uppercase tracking-[0.2em] mb-1">
//                 Backed By
//               </p>
//               <p className="text-white text-2xl font-serif">
//                 Eternal Industries
//               </p>
//             </div>
//           </div>

//           {/* RIGHT CONTENT */}
//           <div className="space-y-8 order-1 lg:order-2">
//             <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
//               <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent" />
//               Our Anchor
//             </p>

//             <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
//               Why <span className="text-[#E8A147]">Eternal Industries</span>
//             </h2>

//             <p className="text-white/50 text-lg leading-relaxed font-light">
//               YVL Capital is anchored by Eternal Industries, a multi-generational
//               holding company with deep roots in industrial infrastructure, real
//               estate, and regional commerce.
//             </p>

//             <p className="text-white/40 leading-relaxed font-light">
//               This partnership provides us with patient capital, strategic
//               relationships across MENA, and an operator's understanding of
//               building businesses that endure. We think in decades, not quarters.
//             </p>

//             {/* Quote */}
//             <div className="flex items-center gap-4 pt-4">
//               <div className="w-1 h-12 bg-gradient-to-b from-[#E8A147] to-transparent rounded-full" />
//               <p className="text-white/60 italic font-serif text-lg">
//                 “Long-term thinking. Real-world outcomes.”
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AnchorSection;


import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const AnchorSection = () => {
  // Setup for a subtle parallax effect on the image container
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.15, 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      }
    })
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#02010a]">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ 
          opacity: [0.01, 0.03, 0.01],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#E8A147_0%,transparent_50%)] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT VISUAL: WITH PARALLAX & REVEAL */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative order-2 lg:order-1"
          >
            <motion.div 
              style={{ y }} // Parallax movement
              className="aspect-[4/3] rounded-[40px] overflow-hidden border border-white/[0.1] bg-[#030210] shadow-2xl"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                alt="Eternal Industries"
                className="w-full h-full object-cover opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-[#030210]/40 to-transparent" />
            </motion.div>

            {/* Floating Badge with Hover Animation */}
            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ y: -5 }}
              className="absolute -bottom-6 -right-6 p-8 rounded-[32px] bg-[#030210] border border-[#E8A147]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            >
              <p className="text-[#E8A147] text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                Backed By
              </p>
              <p className="text-white text-2xl font-serif italic">
                Eternal Industries
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT: STAGGERED REVEAL */}
          <div className="space-y-8 order-1 lg:order-2">
            <motion.div 
              custom={0} initial="hidden" whileInView="visible" variants={fadeInUp}
              className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-bold"
            >
              <span className="block w-12 h-px bg-[#E8A147]" />
              Our Anchor
            </motion.div>

            <motion.h2 
              custom={1} initial="hidden" whileInView="visible" variants={fadeInUp}
              className="font-serif text-4xl md:text-5xl font-medium leading-[1.15] tracking-tight text-white"
            >
              Why <span className="italic text-[#E8A147]">Eternal Industries</span>
            </motion.h2>

            <div className="space-y-6">
              <motion.p 
                custom={2} initial="hidden" whileInView="visible" variants={fadeInUp}
                className="text-white/60 text-lg leading-relaxed font-light font-sans"
              >
                YVL Capital is anchored by Eternal Industries, a multi-generational
                holding company with deep roots in industrial infrastructure, real
                estate, and regional commerce.
              </motion.p>

              <motion.p 
                custom={3} initial="hidden" whileInView="visible" variants={fadeInUp}
                className="text-white/40 leading-relaxed font-light font-sans text-sm md:text-base"
              >
                This partnership provides us with patient capital, strategic
                relationships across MENA, and an operator's understanding of
                building businesses that endure. We think in decades, not quarters.
              </motion.p>
            </div>

            {/* Animated Quote Line */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-6"
            >
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 48 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="w-[2px] bg-[#E8A147] rounded-full" 
              />
              <p className="text-white/80 italic font-serif text-xl tracking-tight">
                “Long-term thinking. Real-world outcomes.”
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AnchorSection;