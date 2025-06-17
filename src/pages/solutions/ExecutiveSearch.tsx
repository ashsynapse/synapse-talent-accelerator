
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Target, Shield, Users, Brain, Search, CheckCircle, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ExecutiveSearch = () => {
  const keyFeatures = [
    {
      title: "C-Level Expertise",
      description: "Specialized focus on CEO, CTO, CFO, and other executive-level positions",
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: "Confidential Search",
      description: "Discreet executive search processes that protect both client and candidate privacy",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Leadership Assessment",
      description: "Comprehensive evaluation of leadership capabilities and cultural fit",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Board Presentations",
      description: "Executive-level presentations and stakeholder management throughout the process",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Strategic Leadership",
      description: "Access to transformational leaders who drive organizational growth",
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      title: "Market Intelligence",
      description: "Deep insights into executive compensation and market positioning",
      icon: <Search className="w-6 h-6 text-white" />
    },
    {
      title: "Proven Track Record",
      description: "Leaders with demonstrated success in similar roles and industries",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
      title: "Cultural Alignment",
      description: "Executives who align with your company values and vision",
      icon: <Zap className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Executive Search Services" 
      description="Specialized recruitment for C-level and senior leadership positions"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Executive Search Services
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Find transformational leaders who drive success. Our AI-enhanced executive search combines traditional executive recruiting expertise with cutting-edge technology to identify and attract top-tier leadership talent.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Executive Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Executive Search Features
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
            Executive Search Benefits
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
              Leadership That Transforms Organizations
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our executive search practice combines decades of leadership recruiting experience with AI-powered market intelligence. We understand that executive hires are transformational decisions that require the highest level of precision and confidentiality.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Executive Expertise</h3>
                <p className="text-synapse-gray">Deep understanding of leadership dynamics and executive-level requirements.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Confidential Process</h3>
                <p className="text-synapse-gray">Discreet search processes that protect all stakeholders throughout the engagement.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Strategic Matching</h3>
                <p className="text-synapse-gray">Comprehensive assessment ensuring strategic fit and long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ExecutiveSearch;
