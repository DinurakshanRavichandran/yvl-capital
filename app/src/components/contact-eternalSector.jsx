import React from "react";
import { motion } from "framer-motion";
import { Droplets, Sprout, Factory, HeartPulse } from "lucide-react";

const ThesisSection = () => {
  const sectors = [
    {
      title: "Food Production",
      desc: "AI-native precision and autonomous yield optimization for permanent food security.",
      icon: <Sprout className="text-[#E8A147]" size={24} />,
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop",
      coordinates: "25.2048° N"
    },
    {
      title: "Water Stability",
      desc: "Closing the loop on resource scarcity through autonomous infrastructure management.",
      icon: <Droplets className="text-[#E8A147]" size={24} />,
      image: "https://images.unsplash.com/photo-1581094288338-2314dddb7edd?q=80&w=2070&auto=format&fit=crop",
      coordinates: "MENA Focus"
    },
    {
      title: "Industrial Systems",
      desc: "Eliminating downtime in mission-critical operations with self-correcting logic.",
      icon: <Factory className="text-[#E8A147]" size={24} />,
      image: "https://images.unsplash.com/photo-1565355694380-083b77209930?q=80&w=2070&auto=format&fit=crop",
      coordinates: "Global Reach"
    },
    {
      title: "Health Infrastructure",
      desc: "Autonomous logistics and system control for high-reliability medical environments.",
      icon: <HeartPulse className="text-[#E8A147]" size={24} />,
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
      coordinates: "High Alpha"
    }
  ];

  return (
    <section className="bg-[#030210] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#E8A147] text-[10px] tracking-[0.6em] font-bold uppercase mb-4 block">
              Investment Thesis
            </span>
            <h2 
              style={{ fontFamily: "'Hoefler Text', serif" }} 
              className="text-4xl md:text-6xl text-white leading-tight"
            >
              Backing the <span className="italic">Foundational</span> <br /> 
              Infrastructure of the Future.
            </h2>
          </div>
          <p className="text-white/40 font-light max-w-sm text-sm leading-relaxed mb-2">
            We focus 70% of deployment in MENA and 30% globally, aligning with strategic buyers where resource constraints make autonomy existential.
          </p>
        </div>

        {/* The Sector Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {sectors.map((sector, idx) => (
            <div 
              key={idx} 
              className="group relative h-[450px] bg-[#030210] overflow-hidden"
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                style={{ 
                  backgroundImage: `url(${sector.image})`, 
                  backgroundSize: 'cover',
                  backgroundPosition: 'center' 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/60 to-transparent" />

              {/* Content */}
              <div className="relative h-full p-12 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-white/5 rounded-full border border-white/10">
                    {sector.icon}
                  </div>
                  <span className="text-[10px] text-white/20 tracking-[0.4em] font-mono">
                    {sector.coordinates}
                  </span>
                </div>

                <div>
                  <h3 
                    style={{ fontFamily: "'Hoefler Text', serif" }} 
                    className="text-3xl text-white mb-4"
                  >
                    {sector.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm max-w-xs leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {sector.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThesisSection;