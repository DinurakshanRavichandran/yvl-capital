import React from "react";

const AboutX = () => {
  return (
    <section className="relative overflow-hidden py-[7vw] text-white bg-[#030210]">
      <div className="relative max-w-[1200px] mx-auto px-6 grid gap-[4vw] items-start lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div className="space-y-4">
          <p className="flex items-center gap-3 text-[12px] uppercase tracking-widest text-white/54">
            <span className="block w-16 h-[1px] bg-gradient-to-r from-yellow-400 to-transparent opacity-90"></span>
            ABOUT US
          </p>

          <h2 className="font-serif font-medium text-[clamp(28px,4vw,54px)] leading-[1.05]">
            Building and backing{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_22px_rgba(212,175,55,0.12)]">
              AI-native
            </span>{" "}
            platforms for critical systems.
          </h2>

          <p className="text-white/68 text-[15px] leading-[1.7] max-w-[62ch]">
            Where autonomous systems meet real-world constraints, we build and back companies that define the future of control.
          </p>

          {/* Focus card */}
          <div className="bg-white/4 rounded-[18px] p-4 max-w-[420px] shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <div className="flex justify-between items-baseline mb-3 gap-4">
              <p className="text-[15px] text-white/86">Autonomy as Infrastructure</p>
              <p className="text-[14px] text-yellow-400/95">80%</p>
            </div>
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <span className="block h-full bg-gradient-to-r from-yellow-400/95 to-yellow-400/35 rounded-full w-[80%]"></span>
            </div>
            <p className="mt-3 text-[13.5px] text-white/54 leading-[1.6]">
              A strong focus on mission-critical deployment — not just demos.
            </p>
          </div>

          <p className="text-white/72 text-[14px] mt-4">
            Built by operators fluent in autonomous systems and infrastructure.
          </p>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mt-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Image A */}
            <div className="rounded-[18px] overflow-hidden border border-white/8 shadow-[0_26px_80px_rgba(0,0,0,0.45)] bg-[#0a0a1c]">
              <img
                src="https://images.unsplash.com/photo-1526378722484-bd91ca387e72?w=1600&auto=format&fit=crop&q=80"
                alt="Abstract structure"
                className="w-full h-[250px] sm:h-[220px] md:h-[240px] object-cover filter contrast-[1.05] saturate-[0.92] brightness-[0.78]"
              />
            </div>

            {/* Image B */}
            <div className="rounded-[18px] overflow-hidden border border-white/8 shadow-[0_26px_80px_rgba(0,0,0,0.45)] bg-[#0a0a1c]">
              <img
                src="https://images.unsplash.com/photo-1520975682031-a8a3c7f8431f?w=1600&auto=format&fit=crop&q=80"
                alt="Futuristic building"
                className="w-full h-[300px] sm:h-[260px] md:h-[280px] object-cover filter contrast-[1.05] saturate-[0.92] brightness-[0.78]"
              />
            </div>
          </div>

          {/* Quote block */}
          <blockquote className="border-l border-yellow-400/26 pl-4 text-[clamp(16px,2vw,24px)] leading-[1.45] text-white/72 sm:text-[18px]">
            <span className="block">
              Where autonomous systems meet real-world{" "}
              <span className="bg-yellow-400/22 rounded px-[0.18em] text-white/92">constraints</span>,
            </span>
            <span className="block">
              we{" "}
              <span className="bg-yellow-400/22 rounded px-[0.18em] text-white/92">build and back</span>{" "}
              companies that
            </span>
            <span className="block">define the future of control.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutX;
