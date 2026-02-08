import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const ThesisFAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: 'What makes an industry "eternal"?',
      answer:
        'Eternal industries address fundamental human needs that will exist for decades: food, water, healthcare, industrial production. Demand is non-discretionary and structural inefficiencies are persistent.',
    },
    {
      question: "Why not invest in consumer AI or SaaS?",
      answer:
        "Our focus is on physical operations control where AI creates tangible, defensible value in mission-critical environments. The moats are deeper and the markets more predictable.",
    },
    {
      question: 'How do you measure "autonomous control"?',
      answer:
        "We look for platforms where AI makes closed-loop decisions that directly affect physical outcomes – reducing human intervention by 80%+ in core workflows.",
    },
    {
      question: "Why MENA first?",
      answer:
        "The region combines acute need, government support, and emerging talent – creating perfect conditions for autonomous infrastructure companies to scale rapidly with first-mover advantage.",
    },
  ];

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Thesis FAQ
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Frequently Asked <span className="text-[#E8A147]">Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[24px] bg-white/[0.03] border border-white/[0.08] overflow-hidden"
            >
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-white font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#E8A147] flex-shrink-0 transition-transform duration-300 ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedFaq === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-8 pb-6 text-white/60 font-light leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThesisFAQSection;
