import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, TrendingUp, Clock, Target, Star, Building, Globe } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const CaseStudies = () => {
  const caseStudiesData = [
    {
      title: "Global Tech Firm Achieves 40% Reduction in Time-to-Hire",
      description: "By leveraging Synapse's AI-driven sourcing and screening tools, a leading global tech company reduced their time-to-hire by 40% and improved candidate quality.",
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      industry: "Technology",
      keyMetrics: ["40% Reduction in Time-to-Hire", "15% Increase in Candidate Quality"]
    },
    {
      title: "Healthcare Provider Fills Critical Nursing Shortages",
      description: "A major healthcare provider successfully addressed critical nursing shortages by using Synapse's targeted outreach and automated engagement campaigns.",
      icon: <Users className="w-6 h-6 text-white" />,
      industry: "Healthcare",
      keyMetrics: ["95% Fill Rate for Nursing Positions", "20% Decrease in Recruitment Costs"]
    },
    {
      title: "Financial Institution Enhances Diversity Hiring",
      description: "A leading financial institution improved diversity hiring outcomes by implementing Synapse's bias mitigation and inclusive sourcing strategies.",
      icon: <Globe className="w-6 h-6 text-white" />,
      industry: "Finance",
      keyMetrics: ["30% Increase in Diverse Hires", "Improved Employer Brand Perception"]
    }
  ];

  return (
    <PageTemplate 
      title="Client Success Stories" 
      description="Real results from companies using Synapse recruitment solutions"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Success Stories
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Client Success </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Explore how leading companies are transforming their recruitment strategies and achieving remarkable results with Synapse AI-powered solutions.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudiesData.map((study, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                      {study.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                      {study.title}
                    </h3>
                    <p className="text-synapse-gray text-sm mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center space-x-2 mb-3">
                      <Building className="w-4 h-4 text-synapse-primary" />
                      <span className="text-synapse-gray text-xs">{study.industry}</span>
                    </div>
                    <div>
                      {study.keyMetrics.map((metric, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm text-synapse-gray">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default CaseStudies;
