
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  TrendingUp, 
  Heart, 
  Scale,
  Factory,
  Calculator,
  Crown,
  Users
} from "lucide-react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const IndustriesRecruiterSection = () => {
  const { addToRefs } = useScrollAnimation();
  
  const industries = [
    {
      name: "Technology",
      icon: Code2,
      description: "Software engineers, data scientists, AI specialists, and tech professionals"
    },
    {
      name: "Finance",
      icon: TrendingUp,
      description: "Investment bankers, financial advisors, analysts, and portfolio managers"
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Medical professionals, administrators, technicians, and support staff"
    },
    {
      name: "Legal",
      icon: Scale,
      description: "Legal professionals specializing in corporate law, litigation, compliance"
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description: "Manufacturing professionals, operations, supply chain management"
    },
    {
      name: "Sales & Marketing",
      icon: Calculator,
      description: "Sales executives, marketing managers, business development professionals"
    },
    {
      name: "Leadership",
      icon: Crown,
      description: "C-Suite executives, VPs, directors, and senior management professionals"
    },
    {
      name: "Operations",
      icon: Users,
      description: "Operations managers, business analysts, project coordinators, and process specialists"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20">
      <div className="container-wide">
        <div 
          ref={addToRefs}
          className="text-center mb-16 max-w-3xl mx-auto scroll-animate"
        >
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30">
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">ELITE NETWORK BENEFITS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            <span className="text-synapse-dark">Industries You Can </span>
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Recruit For</span>
          </h2>
          <p className="text-lg text-synapse-gray">
            Access high-quality job opportunities across diverse industries with competitive commissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card 
                key={index} 
                ref={addToRefs}
                className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 scroll-animate"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-synapse-dark">{industry.name}</h3>
                    </div>
                  </div>
                  <p className="text-synapse-gray leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesRecruiterSection;
