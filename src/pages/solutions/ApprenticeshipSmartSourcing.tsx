
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, TrendingUp, Target, Brain, BookOpen, Zap, Heart } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ApprenticeshipSmartSourcing = () => {
  const keyFeatures = [
    {
      title: "Early Career Focus",
      description: "Specialized sourcing for apprenticeships, internships, and entry-level positions",
      icon: <GraduationCap className="w-6 h-6" />
    },
    {
      title: "Potential Assessment",
      description: "AI-powered evaluation of learning potential and growth trajectory",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Skills Mapping",
      description: "Identification of transferable skills and learning aptitude",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Development Tracking",
      description: "Long-term career development and progression monitoring",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Future Workforce",
      description: "Build your talent pipeline with high-potential early career professionals",
      icon: <BookOpen className="w-6 h-6 text-white" />
    },
    {
      title: "Cost Effective",
      description: "Develop talent internally while reducing overall recruitment costs",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Cultural Development",
      description: "Shape professionals who grow up with your company culture and values",
      icon: <Heart className="w-6 h-6 text-white" />
    },
    {
      title: "Innovation Catalyst",
      description: "Fresh perspectives and digital-native approaches to business challenges",
      icon: <Users className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Apprenticeship Smart Sourcing" 
      description="Specialized recruitment for apprenticeship programs and early career professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Apprenticeship Smart Sourcing
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Invest in the future with smart apprenticeship sourcing. Our AI-enhanced platform identifies high-potential early career talent and matches them with your development programs for long-term organizational success.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Apprentices
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Apprenticeship Sourcing Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{feature.title}</h3>
                      <p className="text-synapse-gray">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Apprenticeship Program Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {benefit.description}
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
              Developing Tomorrow's Workforce Today
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our apprenticeship smart sourcing goes beyond traditional entry-level recruitment. We identify candidates with exceptional learning potential, cultural alignment, and growth mindset to become your organization's future leaders.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Education Partnership</h3>
                <p className="text-synapse-gray">Strong relationships with educational institutions and career development programs.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Potential Focus</h3>
                <p className="text-synapse-gray">AI-powered assessment of learning capacity and professional development potential.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Long-term Value</h3>
                <p className="text-synapse-gray">Investment in talent that grows with your organization for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ApprenticeshipSmartSourcing;
