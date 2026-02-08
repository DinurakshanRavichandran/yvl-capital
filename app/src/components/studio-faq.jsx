import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to have a company already?",
    answer:
      "No. For the Internal Ideation track, we provide the idea and recruit you as the founder. For Founder-First, you should have a clear concept and domain expertise."
  },
  {
    question: "What equity does YVL take?",
    answer:
      "We structure founder-friendly equity arrangements, typically retaining 30–40% through the studio phase, with significant upside for founders."
  },
  {
    question: "Where are studio companies based?",
    answer:
      "Primarily in MENA (Dubai, Riyadh, etc.), with support from our London and Montreal offices."
  },
  {
    question: "How long does the studio program last?",
    answer:
      "Companies typically graduate to external funding rounds within 18–24 months."
  }
];

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <section className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="flex items-center justify-center gap-4 text-[11px] uppercase tracking-[0.4em] text-white/40 font-semibold mb-8">
            <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#E8A147]"></span>
            Studio FAQ
            <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#E8A147]"></span>
          </p>

          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-medium leading-[1.15] tracking-tight text-white mb-6">
            Frequently Asked <span className="text-[#E8A147]">Questions</span>
          </h2>
        </div>

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

export default FAQSection;
