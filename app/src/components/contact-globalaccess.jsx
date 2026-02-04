import React from "react";
import { motion } from "framer-motion";
import { MapPin, Link2, Globe2 } from "lucide-react";

const GlobalFootprint = () => {
  const hubs = [
    { city: "Dubai", role: "Global HQ", coords: "25.2048° N, 55.2708° E" },
    { city: "London", role: "European Capital", coords: "51.5072° N, 0.1276° W" },
    { city: "Montreal", role: "Infrastructure Hub", coords: "45.5019° N, 73.5673° W" }
  ];

  const partners = [
    "Siemens", "John Deere", "Syngenta", "ADNOC", "Emaar", "Microsoft", "Accel", "Index Ventures"
  ];

  return (
    <section className="relative bg-[#030210] py-24 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: The Network Stats */}
          <div>
            <span className="text-[#E8A147] text-[10px] tracking-[0.6em] font-bold uppercase mb-6 block">
              Global Footprint
            </span>
            <h2 
              style={{ fontFamily: "'Hoefler Text', serif" }} 
              className="text-4xl md:text-6xl text-white leading-tight mb-10"
            >
              Connecting <span className="italic">Capital</span> <br /> 
              to Permanent Demand.
            </h2>
            
            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#E8A147]">
                  <Globe2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">14,000+ Founders</h4>
                  <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                    Direct sourcing through Ignyte, Sheraa, and Microsoft for Startups MENA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-3 bg-white/5 rounded-full border border-white/10 text-[#E8A147]">
                  <Link2 size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-2">Strategic Alliances</h4>
                  <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                    Deep integration with industrial leaders like Siemens and ADNOC to ensure day-one product-market fit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Geographic Hubs */}
          <div className="relative">
            {/* Minimalist Hub List */}
            <div className="space-y-4">
              {hubs.map((hub, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-center justify-between p-8 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-[#E8A147]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <MapPin size={14} className="text-[#E8A147]" />
                      <h3 className="text-2xl text-white font-medium" style={{ fontFamily: "'Hoefler Text', serif" }}>{hub.city}</h3>
                    </div>
                    <p className="text-[10px] text-[#E8A147] uppercase tracking-[0.3em] font-bold">{hub.role}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-white/20 font-mono tracking-widest group-hover:text-white/40 transition-colors">
                      {hub.coords}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Partner Logo Tape */}
            <div className="mt-12 pt-12 border-t border-white/5">
              <p className="text-[9px] text-white/20 uppercase tracking-[0.4em] font-bold mb-8 text-center">Strategic & Co-Investor Network</p>
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {partners.map((p) => (
                  <span key={p} className="text-white text-[11px] font-bold tracking-tighter uppercase italic">{p}</span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GlobalFootprint;