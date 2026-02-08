import React from "react";
import { Zap, Target, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: Zap,
    title: "6-Week MVP Sprints",
    description:
      "Nexa enables studio teams to ship functional MVPs in 6 weeks instead of 12–18, using shared engineering, ops, and data resources."
  },
  {
    icon: Target,
    title: "Milestone Gates at Months 6, 12, 18",
    description:
      "At each gate, YVL evaluates MVP performance, pilot traction, unit economics, and moat development. Underperformers are killed or recycled; capital is reallocated to winners."
  },
  {
    icon: Rocket,
    title: "Graduation to Seed and Series A",
    description:
      "Survivors that demonstrate autonomous control, strong economics, and strategic interest graduate into YVL's Seed Core and Seed-to-Series A tracks, backed by follow-on reserves."
  }
];

const StudioProcess = () => {
  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
            The Process
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            How the Studio <span className="text-[#E8A147]">Process Works</span>
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="group relative p-10 rounded-[32px] bg-gradient-to-r from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#E8A147]/30 transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                  <step.icon className="w-8 h-8 text-[#E8A147]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed font-light">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioProcess;
