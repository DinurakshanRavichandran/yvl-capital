import React from "react";
import { ArrowRight, Target, Zap, Shield, Globe, Building2, Rocket, Users, ChevronRight, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = () => {
  const navigate = useNavigate();

  const investmentGates = [
    {
      number: "01",
      title: "Mission-Critical AI",
      description: "Autonomous systems for infrastructure that can't fail — energy, defense, logistics, industrial."
    },
    {
      number: "02",
      title: "Vertical AI Platforms",
      description: "Purpose-built AI operating systems for underserved industries with proprietary workflows."
    },
    {
      number: "03",
      title: "Frontier Compute Infrastructure",
      description: "The picks-and-shovels layer: inference, edge compute, sovereign cloud, and AI middleware."
    },
    {
      number: "04",
      title: "AI-Native Enterprise Software",
      description: "Next-gen ERP, procurement, and workflow tools rebuilt from the ground up with AI at the core."
    }
  ];

  const nexaSupport = [
    { icon: Building2, title: "Entity Setup & Governance", description: "Full legal structuring across UAE, Saudi, and regional jurisdictions." },
    { icon: Users, title: "Talent & GTM Support", description: "Access to curated hiring pipelines and regional go-to-market strategy." },
    { icon: Globe, title: "Sovereign & Enterprise Intros", description: "Direct introductions to government entities and enterprise buyers." },
    { icon: Rocket, title: "Follow-On Syndication", description: "Preferred access to co-investment from aligned regional LPs." }
  ];

  return (
    <main className="min-h-screen bg-[#030210] selection:bg-[#E8A147]/30 selection:text-[#E8A147] overflow-x-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[70vw] h-[70vw] bg-[#E8A147]/5 blur-[120px] rounded-full opacity-40" />
        <div className="absolute top-[30%] left-[-10%] w-[60vw] h-[60vw] bg-white/[0.02] blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[5%] w-[50vw] h-[50vw] bg-[#E8A147]/5 blur-[100px] rounded-full opacity-60" />
      </div>

      <Header />

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center pt-32 pb-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-8 text-sm text-white/40">
              <button onClick={() => navigate("/")} className="hover:text-[#E8A147] transition-colors">Home</button>
              <ChevronRight size={14} />
              <span className="text-[#E8A147]">About Us</span>
            </div>

            <div className="inline-flex items-center gap-3 mb-10">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-[#E8A147] font-semibold">
                Who We Are
              </span>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]" />
            </div>

            <h1 className="font-serif text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
              Building the Future of
              <br />
              <span className="text-[#E8A147]">Autonomous Control</span>
            </h1>

            <p className="text-white/50 text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
              YVL Capital is a $50M studio-backed venture fund focused on AI-native infrastructure and autonomous systems. We don't just invest — we originate, build, and scale category-defining companies from concept to market.
            </p>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* WHO WE ARE - DETAILED */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
                  <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
                  The Fund
                </p>

                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
                  A new kind of <span className="text-[#E8A147]">venture studio</span> for the AI era.
                </h2>

                <p className="text-white/50 text-lg leading-relaxed font-light">
                  We are operators, builders, and investors who understand that the next decade belongs to companies that deploy AI where it matters most — in mission-critical systems that power the real world.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
                    <p className="text-3xl font-serif text-[#E8A147] mb-2">$50M</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider">Fund Size</p>
                  </div>
                  <div className="p-6 rounded-[24px] bg-white/[0.03] border border-white/[0.08]">
                    <p className="text-3xl font-serif text-[#E8A147] mb-2">Studio</p>
                    <p className="text-sm text-white/40 uppercase tracking-wider">Backed Model</p>
                  </div>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-white/[0.05] to-transparent">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                    alt="Technology Infrastructure"
                    className="w-full h-full object-cover opacity-40 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030210] via-[#030210]/50 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-[#E8A147] text-sm uppercase tracking-[0.3em] mb-3">Our Approach</p>
                    <p className="text-white/80 text-xl font-serif leading-relaxed">
                      "Originate. Build. Scale. We are hands-on partners from day zero."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE INVEST IN - 4 GATES */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(232,161,71,0.03)_0%,_transparent_70%)] pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Investment Thesis
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                What We <span className="text-[#E8A147]">Invest In</span>
              </h2>

              <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                We back founders building at the intersection of AI and critical infrastructure through four investment gates.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {investmentGates.map((gate, index) => (
                <div
                  key={index}
                  className="group relative p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500 overflow-hidden"
                >
                  {/* Corner Accents */}
                  <div className="absolute top-6 right-6 text-[#E8A147]/20 text-6xl font-serif font-bold group-hover:text-[#E8A147]/40 transition-colors">
                    {gate.number}
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-medium text-white mb-4 group-hover:text-[#E8A147] transition-colors">
                      {gate.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed font-light">
                      {gate.description}
                    </p>
                  </div>

                  {/* Bottom Glow on Hover */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-[#E8A147]/0 to-transparent group-hover:via-[#E8A147]/60 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY NOW */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
              <div className="space-y-8">
                <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
                  <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
                  Market Timing
                </p>

                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
                  Why <span className="text-[#E8A147]">Now</span>
                </h2>
              </div>

              <div className="relative p-10 rounded-[40px] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.1]">
                <div className="absolute top-0 left-10 w-20 h-[2px] bg-gradient-to-r from-[#E8A147] to-transparent" />

                <p className="text-white/70 text-xl leading-relaxed font-light mb-6">
                  We are at an inflection point. AI has moved from research labs to production systems. The companies that will define the next era are being built <span className="text-[#E8A147] font-medium">right now</span>.
                </p>

                <p className="text-white/50 leading-relaxed font-light">
                  Foundation models are commoditizing. The value is shifting to application layers — companies that can deploy AI into regulated, high-stakes environments where failure isn't an option. This is our thesis, and this is our moment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DIVIDER */}
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#E8A147]/20 to-transparent" />
        </div>

        {/* HOW WE PARTNER - NEXA SUPPORT */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Our Platform
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                How We <span className="text-[#E8A147]">Partner</span>
              </h2>

              <p className="text-white/50 text-lg font-light max-w-3xl mx-auto">
                Through <span className="text-[#E8A147]">Nexa</span>, our operational support arm, portfolio companies receive end-to-end support from incorporation to scale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nexaSupport.map((item, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-[28px] bg-white/[0.03] border border-white/[0.08] hover:border-[#E8A147]/30 hover:bg-[#E8A147]/[0.03] transition-all duration-500 text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-[#E8A147]/10 border border-[#E8A147]/20 flex items-center justify-center group-hover:bg-[#E8A147]/20 transition-colors">
                    <item.icon className="w-6 h-6 text-[#E8A147]" />
                  </div>

                  <h3 className="text-lg font-serif font-medium text-white mb-3 group-hover:text-[#E8A147] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-white/40 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY ETERNAL INDUSTRIES */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E8A147]/[0.02] to-transparent pointer-events-none" />

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Visual */}
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/3] rounded-[40px] overflow-hidden border border-white/[0.1] bg-[#030210]">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                    alt="Eternal Industries"
                    className="w-full h-full object-cover opacity-50 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#030210] via-[#030210]/60 to-transparent" />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 p-6 rounded-[24px] bg-[#030210] border border-[#E8A147]/30 shadow-2xl">
                  <p className="text-[#E8A147] text-sm uppercase tracking-[0.2em] mb-1">Backed By</p>
                  <p className="text-white text-2xl font-serif">Eternal Industries</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 order-1 lg:order-2">
                <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
                  <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
                  Our Anchor
                </p>

                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
                  Why <span className="text-[#E8A147]">Eternal Industries</span>
                </h2>

                <p className="text-white/50 text-lg leading-relaxed font-light">
                  YVL Capital is anchored by Eternal Industries, a multi-generational holding company with deep roots in industrial infrastructure, real estate, and regional commerce.
                </p>

                <p className="text-white/40 leading-relaxed font-light">
                  This partnership provides us with patient capital, strategic relationships across MENA, and an operator's understanding of building businesses that endure. We think in decades, not quarters.
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#E8A147] to-transparent rounded-full" />
                  <p className="text-white/60 italic font-serif text-lg">
                    "Long-term thinking. Real-world outcomes."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY MENA */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <p className="flex items-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold">
                  <span className="block w-12 h-[1px] bg-gradient-to-r from-[#E8A147] to-transparent"></span>
                  Regional Focus
                </p>

                <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white">
                  Why <span className="text-[#E8A147]">MENA</span>
                </h2>

                <p className="text-white/50 text-lg leading-relaxed font-light">
                  The Middle East and North Africa represent one of the fastest-growing technology markets in the world. Governments are investing billions in AI, automation, and sovereign infrastructure.
                </p>

                <ul className="space-y-4">
                  {[
                    "Sovereign AI initiatives driving $100B+ in regional investment",
                    "Greenfield opportunities in critical infrastructure modernization",
                    "Strategic location bridging Europe, Asia, and Africa",
                    "Young, tech-forward population with rising digital adoption"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-white/60 font-light">
                      <span className="w-2 h-2 mt-2 rounded-full bg-[#E8A147]/60 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map or Visual */}
              <div className="relative">
                <div className="aspect-square rounded-[40px] overflow-hidden border border-white/[0.1] bg-gradient-to-br from-[#E8A147]/5 to-transparent">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-48 h-48 text-[#E8A147]/20" />
                  </div>

                  <div className="absolute inset-0 p-10 flex flex-col justify-end">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                        <p className="text-2xl font-serif text-[#E8A147]">$100B+</p>
                        <p className="text-xs text-white/40 uppercase tracking-wider">Regional AI Investment</p>
                      </div>
                      <div className="p-4 rounded-[16px] bg-white/[0.05] border border-white/[0.08]">
                        <p className="text-2xl font-serif text-[#E8A147]">450M+</p>
                        <p className="text-xs text-white/40 uppercase tracking-wider">Population</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STUDIO MODEL LINKS */}
        <section className="py-24 md:py-32 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(232,161,71,0.05)_0%,_transparent_60%)] pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
                Our Studio
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
              </p>

              <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
                The <span className="text-[#E8A147]">Studio Model</span>
              </h2>

              <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                We don't wait for great companies to find us. We originate, validate, and build them from the ground up.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="#founders"
                className="group p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#E8A147] transition-colors">
                    For Founders
                  </h3>
                  <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#E8A147] transition-colors" />
                </div>
                <p className="text-white/40 leading-relaxed font-light mb-6">
                  Building an AI-native company for critical infrastructure? We want to hear from you.
                </p>
                <span className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider">
                  Apply to Studio
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a
                href="#investors"
                className="group p-10 rounded-[32px] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] hover:border-[#E8A147]/40 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-serif text-white group-hover:text-[#E8A147] transition-colors">
                    For Investors
                  </h3>
                  <ExternalLink className="w-5 h-5 text-white/30 group-hover:text-[#E8A147] transition-colors" />
                </div>
                <p className="text-white/40 leading-relaxed font-light mb-6">
                  Seeking exposure to AI infrastructure and autonomous systems in emerging markets.
                </p>
                <span className="inline-flex items-center gap-2 text-[#E8A147] text-sm font-semibold uppercase tracking-wider">
                  LP Inquiries
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-32 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#E8A147]/30 to-transparent" />

          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-[clamp(32px,5vw,56px)] font-medium leading-[1.1] tracking-tight text-white mb-8">
              Ready to Build the
              <br />
              <span className="text-[#E8A147]">Future of Control?</span>
            </h2>

            <p className="text-white/50 text-lg font-light max-w-2xl mx-auto mb-12">
              Whether you're a founder with a vision or an investor seeking category-defining opportunities, we'd love to connect.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <a
                href="mailto:hello@yvl.capital"
                className="group relative px-12 py-5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#E8A147] to-[#D4893D] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                <span className="relative z-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] font-bold text-[#030210]">
                  Get in Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <button
                onClick={() => navigate("/")}
                className="group relative px-12 py-5 rounded-full overflow-hidden"
              >
                <div className="absolute inset-0 border border-[#E8A147]/30 rounded-full group-hover:border-[#E8A147]/60 group-hover:bg-[#E8A147]/5 transition-all duration-500" />
                <span className="relative z-10 text-[12px] uppercase tracking-[0.2em] font-semibold text-[#E8A147]">
                  Back to Home
                </span>
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default AboutPage;
