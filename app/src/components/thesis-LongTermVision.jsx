// import React from "react";

// const LongTermVisionSection = () => {
//   return (
//     <section className="py-24 md:py-32 relative">
//       {/* Background Accent */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

//       <div className="max-w-4xl mx-auto px-6 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
//             <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
//             Vision
//             <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
//           </p>

//           <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-8">
//             The <span className="text-[#E8A147]">Long-Term Vision</span>
//           </h2>
//         </div>

//         {/* Vision Statement */}
//         <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.1]">
//           <p className="text-white/70 text-xl font-light leading-relaxed text-center">
//             We are building the defining portfolio of AI-native infrastructure companies in eternal industries – starting in MENA, scaling globally. Our thesis is not about picking winners in existing markets, but about creating new categories where <span className="text-[#E8A147]">autonomous control becomes the default operational standard</span>.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LongTermVisionSection;
import React from "react";
import { motion } from "framer-motion";
import { Globe, Sparkles } from "lucide-react";

const LongTermVisionSection = () => {
  return (
    <section className="py-6 md:py-8 relative overflow-hidden bg-[#030210]">
      {/* 1. Atmospheric Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E8A14708_0%,transparent_70%)] pointer-events-none" />
      
      {/* Floating Gold Particles (Animated) */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 3,
          }}
          className="absolute w-1 h-1 bg-[#E8A147] rounded-full blur-[1px]"
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 35}%`,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <Sparkles className="text-[#E8A147] w-4 h-4" />
              <span className="text-[10px] uppercase tracking-[0.5em] text-[#E8A147] font-bold">The Horizon</span>
            </div>

            <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] text-white mb-8">
              The <span className="italic text-[#E8A147]">Long-Term</span> Vision
            </h2>

            <div className="space-y-6 text-white/50 text-lg font-light leading-relaxed">
              <p>
                We are building the defining portfolio of AI-native infrastructure companies in eternal industries – <span className="text-white/80 italic font-medium">starting in MENA, scaling globally.</span>
              </p>
              <p>
                Our thesis is not about picking winners in existing markets, but about creating new categories where 
                <span className="text-[#E8A147] font-normal"> autonomous control</span> becomes the default operational standard for civilization.
              </p>
            </div>

            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-px bg-gradient-to-r from-[#E8A147] to-transparent mt-12"
            />
          </motion.div>

          {/* RIGHT: Glassmorphism Image Component */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative group"
          >
            {/* The Image Wrapper with Glass Border */}
            <div className="relative z-10 p-2 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="relative h-[500px] w-full rounded-[32px] overflow-hidden">
                {/* Visual Placeholder: Replace with high-end industrial/tech photo */}
                <div className="absolute inset-0 bg-[#0a0915]" />
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt="Vision"
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000"
                />
                
                {/* Gold Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[#E8A147]/5 group-hover:bg-transparent transition-colors duration-700" />

                {/* Internal Card Info */}
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="text-[#E8A147] w-5 h-5" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">Geo-Expansion: MENA Phase I</span>
                  </div>
                  <div className="h-px w-full bg-white/10 mb-4" />
                  <p className="font-serif text-white text-xl italic leading-tight">
                    "From Regional Alpha to Global Infrastructure Standards."
                  </p>
                </div>
              </div>

              {/* Shimmer Effect */}
              <motion.div 
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
              />
            </div>

            {/* Decorative Gold Rings behind the image */}
            <div className="absolute -top-12 -right-12 w-64 h-64 border border-[#E8A147]/10 rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 border border-[#E8A147]/20 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default LongTermVisionSection;