
import React from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const RecruiterKPISection = () => {
  const { addToRefs } = useScrollAnimation();
  
  const metrics = [
    { value: "$15K+", description: "Minimum Recruiter Earnings Per Placement" },
    { value: "499+", description: "High-Demand Open Roles Across Multiple Sectors" },
    { value: "50%", description: "Commission Rate With No Cap on Earnings" },
    { value: "97%", description: "Recruiter Experience Score Across Our Network" }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20">
      <div className="container-wide">
        <div className="bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20 rounded-xl p-8 border border-synapse-light/30">
          <div 
            ref={addToRefs}
            className="text-center mb-10 md:mb-12 max-w-4xl mx-auto scroll-animate"
          >
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30">
              <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">ELITE NETWORK BENEFITS</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
              <span className="text-synapse-dark">SRN Network </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Performance</span>
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index} 
                ref={addToRefs}
                className="text-center scroll-animate"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-synapse-gray font-medium">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterKPISection;
