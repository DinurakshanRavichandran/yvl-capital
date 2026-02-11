import React, { useState } from 'react';
import LPform from './lpform';
import FounderForm from './founder-form';

const PartnerWithYVLCapital = () => {
  const [openModal, setOpenModal] = useState(null); 

  const ctaTracks = [
    {
      title: "For Founders",
      description: "Originating and scaling AI-native autonomous systems for mission-critical infrastructure.",
      buttonText: "Apply To Work With Us",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "For Investors",
      description: "Join us in backing the future of control. Access our concentrated portfolio of category leaders.",
      buttonText: "Inquire About Access",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <section className="relative bg-[#030210] text-white py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* heading */}
          <div className="text-center mb-20">
            <p className="text-[11px] uppercase tracking-[0.5em] text-[#E8A147] mb-8 font-semibold">
              Partner with YVL Capital
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-medium max-w-3xl mx-auto leading-[1.15] tracking-tight">
              From vision to defensible outcomes.
            </h2>
            <p className="mt-6 text-lg font-light text-white/40 max-w-xl mx-auto leading-relaxed">
              Guiding founders to build autonomous systems that last in the real world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {ctaTracks.map((track, index) => (
              <div
                key={index}
                className="relative overflow-hidden group min-h-[520px] flex flex-col items-center justify-end text-center p-12 rounded-[40px] border border-white/[0.08] transition-all duration-700 hover:border-[#E8A147]/40 hover:shadow-[0_40px_120px_rgba(232,161,71,0.15)]"
              >
                {/* hover effect from earlier comit */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 ease-out group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/80 to-transparent" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-serif mb-4">{track.title}</h3>
                  <p className="text-white/50 mb-10">{track.description}</p>

                  <button
                    onClick={() => {
                      if (index === 0) setOpenModal("founder");
                      if (index === 1) setOpenModal("lp");
                    }}
                    className="relative w-full py-5 rounded-[15px] overflow-hidden group/button"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-all duration-500 group-hover/button:opacity-90" />
                    <span className="relative z-10 text-[#030210] font-bold text-[12px] uppercase tracking-[0.2em]">
                      {track.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* the modal */}
      {openModal && (
        <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 overflow-hidden">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
            onClick={() => setOpenModal(null)}
          />
          <div className="relative bg-[#030210] border border-white/10 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-y-auto p-8 z-50 shadow-2xl">
            <button
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-[#E8A147] text-2xl"
            >
              ✕
            </button>
            {openModal === "founder" && <FounderForm />}
            {openModal === "lp" && <LPform />}
          </div>
        </div>
      )}
    </>
  );
};

export default PartnerWithYVLCapital;