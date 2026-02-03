import React from 'react';
import { Diamond, Lightbulb, Hammer } from 'lucide-react'; // Example icons

const WhatWeBack = () => {
  const cards = [
    {
      title: "Physical World Control",
      description: "Our companies actuate the real world: climate systems, water dosing, industrial processes, diagnostics, not just dashboards.",
      icon: <Diamond className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "AI-Native by Design",
      description: "AI is the decision engine, not a feature. Models operate continuously, in real time, embedded directly into operational workflows.",
      icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Mission-Critical Operations",
      description: "We focus on operations that run continuously and cannot fail, creating high switching costs and infrastructure-level moats.",
      icon: <Hammer className="w-6 h-6 text-yellow-500" />,
    },
  ];

  return (
    <section className="bg-[#020817] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4 border-b border-yellow-500 inline-block pb-1">
            What We Back
          </h3>
          <h2 className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            AI-native platforms that autonomously control mission-critical physical operations.
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#0a101f] border border-gray-800 p-8 rounded-lg flex flex-col items-center text-center transition-all hover:border-gray-600 group"
            >
              {/* Icon Container */}
              <div className="mb-6 p-3 border border-yellow-500/30 rounded-md bg-yellow-500/5">
                {card.icon}
              </div>
              
              <h4 className="text-lg font-semibold mb-4 group-hover:text-yellow-500 transition-colors">
                {card.title}
              </h4>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {card.description}
              </p>
              
              <button className="text-xs font-semibold uppercase tracking-widest border border-yellow-500 px-6 py-2 rounded-sm hover:bg-yellow-500 hover:text-black transition-all">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBack;