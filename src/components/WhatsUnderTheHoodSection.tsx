
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Brain, Users, Clock, Zap, Infinity } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  {
    icon: <Brain size={32} />,
    title: "Autonomous GPT-4 Agents",
    description: "AI agents handle every part of hiring: sourcing, vetting, outreach, scheduling, and more—at infinite scale",
    status: "24/7 Operation"
  },
  {
    icon: <Users size={32} />,
    title: "Feedback Loop Training",
    description: "Continuous learning algorithms train smarter LLMs with every hire, improving accuracy and efficiency",
    status: "Self-Improving"
  },
  {
    icon: <Zap size={32} />,
    title: "Zero Human Intervention",
    description: "Fully automated recruitment process from job posting to candidate placement without human oversight",
    status: "100% Automated"
  },
  {
    icon: <Infinity size={32} />,
    title: "Infinite Scale Architecture",
    description: "Built to handle unlimited concurrent hiring processes across all industries and job levels simultaneously",
    status: "∞ Capacity"
  }
];

const WhatsUnderTheHoodSection = () => {
  const { addToRefs } = useScrollAnimation({ staggerDelay: 120 });

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Infrastructure</h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto mb-2">
            The First Agentic Hiring Cloud
          </p>
          <p className="text-md text-synapse-gray max-w-3xl mx-auto">
            Our AI-powered platform combines technology and human expertise for faster, more accurate hiring
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              ref={addToRefs}
              className="border border-gray-200 hover:border-synapse-primary transition-all duration-300 scroll-animate relative overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-2 py-1 bg-synapse-primary/10 text-synapse-primary text-xs font-medium rounded-full">
                    {feature.status}
                  </span>
                </div>
                <div className="mb-4 text-synapse-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-synapse-primary mb-3">{feature.title}</h3>
                <p className="text-synapse-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsUnderTheHoodSection;
