
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, BarChart3, Calculator, PieChart, Briefcase, Shield, Target } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Finance = () => {
  const keyRoles = [
    {
      title: "Investment Banking",
      description: "Investment bankers, M&A specialists, equity research analysts, and capital markets professionals",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Financial Advisory",
      description: "Wealth managers, financial planners, investment advisors, and client relationship managers",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Risk & Compliance",
      description: "Risk analysts, compliance officers, regulatory specialists, and audit professionals",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Portfolio Management",
      description: "Portfolio managers, quantitative analysts, fund managers, and trading professionals",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Corporate Finance",
      description: "CFOs, financial controllers, treasury specialists, and corporate development professionals",
      icon: <Briefcase className="w-6 h-6 text-white" />
    },
    {
      title: "FinTech Innovation",
      description: "Digital banking specialists, blockchain experts, payment system engineers, and RegTech professionals",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Quantitative Finance",
      description: "Quants, algorithmic traders, derivatives specialists, and financial engineers",
      icon: <Calculator className="w-6 h-6 text-white" />
    },
    {
      title: "Alternative Investments",
      description: "Private equity professionals, hedge fund managers, real estate finance, and venture capital specialists",
      icon: <PieChart className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Finance Recruitment Solutions" 
      description="AI-powered recruitment for financial services and finance professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Finance Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Access top financial professionals through our AI-driven recruitment platform. From investment banking to FinTech innovation, we connect you with candidates who drive financial excellence and growth.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Finance Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Finance Roles We Fill
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Finance Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {spec.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-synapse-dark">
              Why Financial Institutions Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-powered platform understands the complexities of financial services recruitment, from regulatory requirements to market expertise. We identify professionals who combine technical competence with business acumen.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Market Intelligence</h3>
                <p className="text-synapse-gray">Deep understanding of financial markets, regulations, and industry trends.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Compliance Expertise</h3>
                <p className="text-synapse-gray">Thorough vetting processes that meet regulatory and compliance standards.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Precision Matching</h3>
                <p className="text-synapse-gray">Advanced algorithms that evaluate financial expertise and cultural alignment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Finance;
