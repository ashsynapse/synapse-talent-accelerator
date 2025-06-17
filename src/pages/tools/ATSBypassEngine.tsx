
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Zap, FileText, TrendingUp, Shield } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ATSBypassEngine = () => {
  const features = [
    "Smart resume optimization and enhancement",
    "ATS system reverse-engineering analysis",
    "Invisible keyword embedding technology",
    "Personalized screening failure reports",
    "Data-driven success score calculation",
    "Digital hiring filter bypass strategies",
    "Resume format optimization",
    "Industry-specific ATS compatibility"
  ];

  const benefits = [
    {
      title: "Stealth Enhancement",
      description: "Optimize resumes with invisible keyword embedding that bypasses ATS filters",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "Success Scoring",
      description: "Get data-driven success scores to predict ATS compatibility and performance",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Optimization",
      description: "Reverse-engineer ATS systems to create perfectly formatted, compliant resumes",
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="ATS Bypass Engine" 
      description="Smart resume optimizer that reverse-engineers ATS systems for maximum compatibility"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              ATS Bypass Engine
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              This smart resume optimizer reverse-engineers applicant tracking systems (ATS) to instantly generate a stealth-enhanced resume with invisible keyword embedding, a personalized screening failure report, and a data-driven success score to outmaneuver digital hiring filters.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-synapse-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-synapse-gray">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ATSBypassEngine;
