import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, FileText, TrendingUp, Shield, Lock, Brain, CheckCircle } from "lucide-react";
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
      description: "Optimize resumes with invisible keyword embedding that seamlessly bypasses ATS filters",
      icon: <Lock className="w-8 h-8 text-white" />
    },
    {
      title: "Success Prediction",
      description: "Get precise data-driven scores that predict ATS compatibility and screening success",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Optimization",
      description: "Reverse-engineer ATS systems to create perfectly formatted, compliant resumes",
      icon: <Brain className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="ATS Bypass Engine" 
      description="Smart resume optimizer that reverse-engineers ATS systems for maximum compatibility"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI-Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              ATS Bypass Engine
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Outsmart applicant tracking systems with intelligent resume optimization that reverse-engineers ATS algorithms, delivering stealth-enhanced resumes with invisible keyword embedding and data-driven success predictions.
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

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-medium bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                      Break Through Digital Hiring Barriers
                    </h2>
                    <p className="text-lg text-synapse-gray">
                      Over 98% of Fortune 500 companies use ATS systems that automatically filter out qualified candidates based on keyword matching and formatting. Our ATS Bypass Engine levels the playing field by understanding and outsmarting these digital gatekeepers.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Precision Engineering Meets Stealth Technology
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our ATS Bypass Engine combines advanced reverse-engineering with invisible optimization techniques to create resumes that pass through digital filters while maintaining authenticity.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/recruitment-tools"}
              >
                Explore All Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-primary/5 rounded-lg p-4 text-center">
                  <Zap className="w-8 h-8 text-synapse-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">98%</div>
                  <div className="text-sm text-synapse-gray">Pass Rate</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-lg p-4 text-center">
                  <FileText className="w-8 h-8 text-synapse-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">3x</div>
                  <div className="text-sm text-synapse-gray">More Interviews</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-lg p-4 text-center">
                <Lock className="w-8 h-8 text-synapse-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-synapse-dark">Invisible</div>
                <div className="text-sm text-synapse-gray">Optimization</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Outsmart the System, Not the Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Get past digital gatekeepers while maintaining resume authenticity and professional integrity.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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

      {/* CTA Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Beat the System?
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Stop letting ATS systems filter out qualified talent. Use our intelligent bypass technology to ensure the best candidates reach human reviewers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white"
                onClick={() => window.location.href = "/recruitment-tools"}
              >
                View All Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ATSBypassEngine;
