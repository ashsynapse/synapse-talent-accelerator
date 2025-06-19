
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, FileText, Clock, Target, Users, Zap, Database, CheckCircle, Settings, Activity, Brain, TrendingUp, Shield, Lightbulb } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ATSBypassEngine = () => {
  const coreCapabilities = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "ATS System Analysis",
      description: "Reverse-engineers ATS algorithms to understand exact formatting and keyword requirements"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Smart Resume Optimization",
      description: "Automatically reformats and optimizes resumes for maximum ATS compatibility and scoring"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Intelligent Keyword Mapping",
      description: "Advanced algorithms identify and strategically place keywords for optimal ATS performance"
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "99% ATS Pass Rate",
      description: "Ensure virtually every optimized resume successfully passes through ATS screening systems"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "Instant Optimization",
      description: "Real-time resume optimization that adapts to any ATS system within seconds"
    },
    {
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />,
      title: "10x Interview Rates",
      description: "Dramatically increase candidate interview rates by ensuring ATS compatibility"
    }
  ];

  const keyFeatures = [
    "Real-time ATS system compatibility analysis",
    "Automated keyword optimization algorithms", 
    "Format standardization and enhancement",
    "Multiple ATS system database coverage",
    "Performance scoring and recommendations",
    "Bulk resume processing capabilities"
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
              Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              ATS Bypass Engine
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Unlock hidden talent with our intelligent ATS bypass technology that reverse-engineers applicant tracking systems. Our engine optimizes resumes for maximum compatibility, ensuring top candidates never get filtered out by algorithmic screening.
            </p>
            <div className="flex justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Optimize Resumes
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Breakthrough ATS Optimization
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our revolutionary engine analyzes ATS algorithms in real-time, identifying the exact formatting, keywords, and structure requirements for optimal scoring. Every resume is intelligently optimized to pass through even the most restrictive screening systems.
                </p>
                <div className="space-y-4 mb-8">
                  {keyFeatures.map((feature, index) => (
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
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  {coreCapabilities.map((capability, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        {capability.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-synapse-dark mb-2">{capability.title}</h4>
                        <p className="text-sm text-synapse-gray">{capability.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Measurable Impact on Your ATS Performance
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how ATS Bypass Engine transforms your resume success metrics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {businessImpacts.map((impact, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {impact.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Updated CTA Section */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Ready to Transform Your ATS Success Rate?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join leading companies who are already using ATS Bypass Engine to ensure their best candidates never get filtered out by algorithmic screening.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white text-lg px-8 py-3"
                onClick={() => window.location.href = "/recruitment-tools"}
              >
                Explore All Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Your Engine at Work
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers ATS-compatible resumes automatically
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Analyze ATS Systems</h3>
                    <p className="text-synapse-gray text-sm">Engine reverse-engineers target ATS algorithms to understand scoring criteria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Optimize Keywords & Format</h3>
                    <p className="text-synapse-gray text-sm">Intelligently places keywords and adjusts formatting for maximum compatibility</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Test & Validate</h3>
                    <p className="text-synapse-gray text-sm">Simulates ATS processing to ensure optimal scoring and compatibility</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Deliver Optimized Resume</h3>
                    <p className="text-synapse-gray text-sm">Provides ATS-optimized resume with performance insights and recommendations</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/8445fbb5-892b-4cdc-9ee4-54e42033a268.png" 
                  alt="ATS Technology" 
                  className="w-full h-80 object-cover rounded-xl shadow-soft"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <FileText className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-2">Engine Active</h3>
                      <p className="text-sm opacity-90">Optimizing 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Powered by cutting-edge artificial intelligence and machine learning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-synapse-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Format Protection</h3>
                <p className="text-synapse-gray text-sm">Maintains resume integrity while ensuring compatibility across all major ATS platforms</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Real-Time Scoring</h3>
                <p className="text-synapse-gray text-sm">Live ATS compatibility scoring with detailed performance insights and recommendations</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Adaptive Learning</h3>
                <p className="text-synapse-gray text-sm">Continuously learns from ATS updates to maintain peak optimization performance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ATSBypassEngine;
