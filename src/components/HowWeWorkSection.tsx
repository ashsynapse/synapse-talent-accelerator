
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Cpu, Zap, Check } from "lucide-react";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "AI Agent Deployment",
      description: "Our autonomous GPT-4 agents analyze job requirements and begin sourcing candidates across global databases instantly.",
      gradient: "from-synapse-primary to-synapse-secondary"
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Automated Screening & Vetting",
      description: "AI conducts comprehensive candidate evaluation, skills assessment, and cultural fit analysis without human intervention.",
      gradient: "from-synapse-secondary to-synapse-tertiary"
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Intelligent Matching & Delivery",
      description: "Advanced algorithms match optimal candidates to roles with 95%+ accuracy, delivering results within hours.",
      gradient: "from-synapse-tertiary to-synapse-primary"
    }
  ];

  const advantages = [
    "Zero human bottlenecks or coordination delays",
    "AI agents work 24/7 across all time zones",
    "Infinite scale with near-zero marginal cost",
    "Continuous learning improves with every hire",
    "Fully automated from sourcing to offer"
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">The Solution</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-3xl md:text-4xl font-bold text-synapse-dark mb-4"
          >
            How Our AI Hiring Cloud Works
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-lg text-synapse-gray"
          >
            SRN transforms recruiting into software with fully autonomous AI agents
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="scroll-animate bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 relative"
            >
              {/* Step Number */}
              <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-medium`}>
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              <div className={`bg-gradient-to-br ${step.gradient} p-4 rounded-lg inline-block mb-6 mt-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                Step {index + 1}: {step.title}
              </h3>
              <p className="text-synapse-gray">{step.description}</p>
            </div>
          ))}
        </div>

        <div 
          ref={addToRefs}
          className="scroll-animate bg-synapse-light rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-4">
                Why AI-First Recruiting Wins
              </h3>
              <p className="text-synapse-gray mb-6">
                Our autonomous system eliminates the inefficiencies, bottlenecks, and costs of traditional human-dependent recruiting.
              </p>
              
              <ul className="space-y-4">
                {advantages.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-synapse-primary mt-1 flex-shrink-0" />
                    <span className="text-synapse-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="AI neural network visualization with interconnected nodes"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-medium">
                <span className="text-synapse-primary text-3xl font-bold">∞</span>
                <span className="text-synapse-dark font-medium">Scale</span>
                <span className="text-sm text-synapse-gray">AI-powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
