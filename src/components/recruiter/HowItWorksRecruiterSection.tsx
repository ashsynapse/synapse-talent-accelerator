
import React from "react";
import { UserPlus, Briefcase, Users, DollarSign } from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const HowItWorksRecruiterSection = () => {
  const { addToRefs } = useScrollAnimation();
  
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-white" />,
      title: "Sign Up & Complete Onboarding",
      description: "Quick 15-minute application process with skills verification and background check."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Access Verified Job Openings",
      description: "Browse live opportunities from pre-qualified clients across multiple industries."
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Submit Qualified Candidates",
      description: "Use our AI-powered tools to source and submit the best candidates for each role."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Get Paid on Successful Placements",
      description: "Receive automated payouts within 5 business days of successful candidate placement."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div 
          ref={addToRefs}
          className="text-center mb-16 max-w-3xl mx-auto scroll-animate"
        >
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30">
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">ELITE NETWORK BENEFITS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-synapse-dark">How SRN </span>
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-synapse-gray">
            Join our network in 4 simple steps and start earning commissions on quality placements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              ref={addToRefs}
              className="text-center scroll-animate"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-6 rounded-lg inline-block mb-6">
                {step.icon}
              </div>
              <div className="bg-synapse-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                {step.title}
              </h3>
              <p className="text-synapse-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksRecruiterSection;
