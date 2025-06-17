
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Search, Target, Users, Eye, Zap, Shield, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const PassiveIntelligentSourcing = () => {
  const keyFeatures = [
    {
      title: "AI-Powered Discovery",
      description: "Advanced algorithms identify passive candidates who aren't actively job searching but are perfect matches",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Stealth Engagement",
      description: "Discreet outreach strategies that respect candidate privacy while building interest",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Talent Mapping",
      description: "Comprehensive mapping of talent pools across industries and skill sets",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Relationship Building",
      description: "Long-term engagement strategies to nurture passive talent for future opportunities",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Hidden Talent Access",
      description: "Reach top-tier professionals who aren't visible through traditional recruitment channels",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      title: "Competitive Advantage",
      description: "Access candidates before they enter the active job market",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Quality Over Quantity",
      description: "Focus on high-caliber candidates who are currently employed and successful",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "Strategic Pipeline",
      description: "Build talent pipelines for future hiring needs and succession planning",
      icon: <Clock className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Passive Intelligent Sourcing" 
      description="AI-powered passive talent discovery and engagement strategies"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Passive Intelligent Sourcing
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Unlock the hidden talent market with our AI-powered passive sourcing solution. Identify, engage, and attract top-tier professionals who aren't actively looking but are open to the right opportunity.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Start Passive Sourcing
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Features
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
            Benefits of Passive Sourcing
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
              Why Choose Our Passive Sourcing Solution
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-powered platform revolutionizes passive recruitment by combining intelligent discovery algorithms with sophisticated engagement strategies. We help you access the 70% of professionals who aren't actively job searching but are open to the right opportunity.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">AI-Driven Intelligence</h3>
                <p className="text-synapse-gray">Advanced machine learning identifies passive talent patterns and engagement opportunities.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Precision Targeting</h3>
                <p className="text-synapse-gray">Identify the exact passive candidates who match your specific requirements and culture.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Relationship Focus</h3>
                <p className="text-synapse-gray">Build long-term talent relationships that create ongoing recruitment advantages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default PassiveIntelligentSourcing;
