
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  TrendingUp, 
  Settings, 
  Users, 
  DollarSign,
  Calculator,
  Scale,
  Factory
} from "lucide-react";

const IndustriesRecruiterSection = () => {
  const industries = [
    {
      name: "Information Technology",
      icon: Code2,
      description: "Software engineers, data scientists, AI specialists, and tech professionals"
    },
    {
      name: "Digital Marketing",
      icon: TrendingUp,
      description: "Digital marketing professionals, SEO specialists, content creators"
    },
    {
      name: "Engineering",
      icon: Settings,
      description: "Engineering professionals across mechanical, electrical, civil disciplines"
    },
    {
      name: "Human Resources (HR)",
      icon: Users,
      description: "HR professionals, talent acquisition specialists, organizational development"
    },
    {
      name: "Sales",
      icon: DollarSign,
      description: "Sales executives, business development, account management professionals"
    },
    {
      name: "Accounting",
      icon: Calculator,
      description: "Accounting and finance professionals, CPAs, financial analysts"
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
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Industries You Can Recruit For
          </h2>
          <p className="text-lg text-synapse-gray">
            Access high-quality job opportunities across diverse industries with competitive commissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
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
