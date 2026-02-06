import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sprout, Factory, HeartPulse } from "lucide-react";

const ThesisSection = () => {
  const sectors = [
    {
      title: "Food Production",
      desc: "AI-native precision and autonomous yield optimization for permanent food security.",
      icon: <Sprout size={24} />,
      // REPLACE THE IMAGE LINE FOR FOOD PRODUCTION WITH THIS:
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=2000",
      coordinates: "25.2048° N"
    },
    {
      title: "Water Stability",
      desc: "Closing the loop on resource scarcity through autonomous infrastructure management.",
      icon: <Droplets size={24} />,
      image: "https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&fit=crop&q=80&w=2000",
      coordinates: "MENA Focus"
    },
    {
      title: "Industrial Systems",
      desc: "Eliminating downtime in mission-critical operations with self-correcting logic.",
      icon: <Factory size={24} />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000",
      coordinates: "Global Reach"
    },
    {
      title: "Health Infrastructure",
      desc: "Autonomous logistics and system control for high-reliability medical environments.",
      icon: <HeartPulse size={24} />,
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=2000",
      coordinates: "High Alpha"
    }
  ];

  return (
    <section className="bg-[#030210] py-32 px-6 relative overflow-hidden">
      {/* Background Gold Ambient Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8A147]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#E8A147]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <span className="text-[#E8A147] text-[11px] tracking-[0.6em] font-bold uppercase mb-6 block">
              Investment Thesis
            </span>
            <h2 className="text-4xl md:text-7xl text-white leading-[1.1] font-serif">
              Backing the <span className="italic text-[#E8A147]">Foundational</span> <br /> 
              Infrastructure.
            </h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/40 font-light max-w-sm text-base leading-relaxed mb-2 border-l border-[#E8A147]/30 pl-6"
          >
            We focus 70% of deployment in MENA, where resource constraints make autonomy existential for national security.
          </motion.p>
        </motion.div>

        {/* The Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative h-[550px] rounded-3xl overflow-hidden bg-[#0a0a15] border border-white/10 hover:border-[#E8A147]/40 transition-all duration-700"
            >
              {/* Background Image with Gold Tint Overlay */}
              <motion.div 
                className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000 bg-[#1a1a2e]"
                style={{ 
                  backgroundImage: `url(${sector.image})`, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                }}
              />
              
              {/* Complex Gradient Layers */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030210]/20 to-[#030210] transition-opacity duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-transparent to-transparent opacity-80" />
              
              {/* Interactive Gold Flash on Hover */}
              <div className="absolute inset-0 bg-[#E8A147]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Content Container */}
              <div className="relative h-full p-10 md:p-14 flex flex-col justify-between z-10">
                
                {/* Top Row: Icon & Data */}
                <div className="flex justify-between items-start">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-[#E8A147]/40 text-[#E8A147] transition-colors duration-500 shadow-2xl"
                  >
                    {sector.icon}
                  </motion.div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-white/40 tracking-[0.4em] font-mono bg-white/5 px-3 py-1 rounded-full backdrop-blur-md border border-white/5 group-hover:text-[#E8A147]/60 transition-colors">
                      {sector.coordinates}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Text content */}
                <div>
                  <h3 className="text-3xl md:text-4xl text-white mb-5 font-serif group-hover:text-[#E8A147] transition-all duration-500 transform group-hover:-translate-y-2">
                    {sector.title}
                  </h3>
                  
                  {/* Descriptions Reveal on Hover */}
                  <div className="overflow-hidden">
                    <p className="text-white/60 font-light text-sm md:text-base max-w-sm leading-relaxed translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                      {sector.desc}
                    </p>
                  </div>

                  {/* Aesthetic Accent Line */}
                  <motion.div 
                    className="w-0 h-px bg-[#E8A147] mt-6 group-hover:w-full transition-all duration-1000 opacity-50"
                  />
                </div>
              </div>

              {/* Glassmorphism Corner Flare */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E8A147]/10 blur-[60px] rounded-full group-hover:bg-[#E8A147]/20 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;