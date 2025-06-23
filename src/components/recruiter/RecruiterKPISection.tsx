
import React from "react";

const RecruiterKPISection = () => {
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
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <span className="text-synapse-dark">SRN Network </span>
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Performance</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
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
