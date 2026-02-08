import React from "react";
import { Lightbulb, Users } from "lucide-react";

const tracks = [
  {
    id: 1,
    label: "Track 1",
    title: "Internal Ideation",
    description: "For early-career entrepreneurs with execution drive.",
    icon: Lightbulb,
    details: [
      {
        heading: "Structure",
        content: "YVL originates ideas, validates with customers, then recruits and backs early-career Entrepreneurs-in-Residence (EIRs) as founders."
      },
      {
        heading: "Capital",
        content: "$4M total • $1M per company • Milestone-based tranches"
      },
      {
        heading: "Goal",
        content: "Build new AI-native autonomous control platforms where no founder yet exists but the market need is clear."
      },
      {
        heading: "Outcome Target",
        content: "$1M ARR, proof of autonomous control, paying pilots within 12–18 months."
      }
    ]
  },
  {
    id: 2,
    label: "Track 2",
    title: "Founder-First",
    description: "For domain-expert operators with industry networks.",
    icon: Users,
    details: [
      {
        heading: "Structure",
        content: "YVL partners with founders who bring 10+ years of operational experience and deep customer/regulatory networks."
      },
      {
        heading: "Capital",
        content: "$6M total • $1M per company • Milestone-based with Nexa embedded from day one"
      },
      {
        heading: "Goal",
        content: "Supercharge operator-led companies already close to the problem with operational leverage and systematic scaling playbooks."
      },
      {
        heading: "Outcome Target",
        content: "Same milestone gates; 4–6x exit targets at Series A/B within 3–5 years."
      }
    ]
  }
];

const StudioTracks = () => {
  return (
    <section className="py-24 md:py-32 relative px-6">
      {/* Section Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            Studio Models
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
            Two Studio <span className="text-[#E8A147]">Tracks</span>
          </h2>
        </div>

        {/* Track Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="group p-10 rounded-[40px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="inline-block px-4 py-2 rounded-full bg-[#E8A147]/10 text-[#E8A147] text-xs font-bold uppercase tracking-wider mb-4">
                    {track.label}
                  </span>
                  <h3 className="text-3xl font-serif font-medium text-white mb-3">{track.title}</h3>
                  <p className="text-white/50 text-sm font-light">{track.description}</p>
                </div>
                <track.icon className="w-12 h-12 text-[#E8A147]/30" />
              </div>

              <div className="space-y-6 mt-8">
                {track.details.map((detail, idx) => (
                  <div key={idx} className={idx !== track.details.length - 1 ? "pb-6 border-b border-white/[0.08]" : ""}>
                    <p className="text-xs uppercase tracking-wider text-white/40 mb-2">{detail.heading}</p>
                    <p className="text-white/70 font-light text-sm leading-relaxed">{detail.content}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioTracks;
