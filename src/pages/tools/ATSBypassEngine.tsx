import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, FileText, TrendingUp, Shield, Lock, Brain, CheckCircle, Eye, Search, Target, Settings } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ATSBypassEngine = () => {
  const engineFeatures = [
    {
      title: "Invisible Optimization",
      description: "Embed keywords seamlessly without compromising resume authenticity",
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      title: "ATS Reverse Engineering",
      description: "Analyze and understand specific ATS systems to create perfect compatibility",
      icon: <Search className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Success Prediction",
      description: "Get precise data-driven scores that predict screening success rates",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Format Optimization",
      description: "Ensure perfect formatting for maximum ATS readability and parsing",
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const bypassTechniques = [
    "Smart resume optimization and enhancement",
    "ATS system reverse-engineering analysis", 
    "Invisible keyword embedding technology",
    "Personalized screening failure reports",
    "Data-driven success score calculation",
    "Digital hiring filter bypass strategies",
    "Resume format optimization",
    "Industry-specific ATS compatibility"
  ];

  const successMetrics = [
    {
      metric: "98%",
      label: "Pass Rate",
      description: "Resumes successfully bypass ATS filters",
      icon: <Zap className="w-6 h-6" />
    },
    {
      metric: "3x",
      label: "More Interviews", 
      description: "Increase in interview invitations received",
      icon: <FileText className="w-6 h-6" />
    },
    {
      metric: "24hrs",
      label: "Turnaround",
      description: "Average time for complete optimization",
      icon: <TrendingUp className="w-6 h-6" />
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

      {/* Engine Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Advanced ATS Bypass Technology
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Four core engines working together to ensure your resume beats every digital filter
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {feature.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technique Overview Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Precision Engineering Meets Stealth Technology
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our ATS Bypass Engine combines advanced reverse-engineering with invisible optimization techniques to create resumes that pass through digital filters while maintaining authenticity.
              </p>
              <div className="grid grid-cols-1 gap-3">
                {bypassTechniques.map((technique, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-soft">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">{technique}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-soft p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-synapse-dark mb-2">Live Bypass Analysis</h3>
                  <p className="text-synapse-gray text-sm">Real-time ATS compatibility scoring</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <span className="text-sm font-medium text-gray-700">Keyword Density</span>
                    <span className="text-green-600 font-bold">Optimal</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                    <span className="text-sm font-medium text-gray-700">Format Compatibility</span>
                    <span className="text-blue-600 font-bold">Perfect</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                    <span className="text-sm font-medium text-gray-700">ATS Score</span>
                    <span className="text-purple-600 font-bold">98/100</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Proven Results That Break Barriers
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See the measurable impact of our ATS bypass technology on candidate success rates
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-white">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-synapse-primary mb-2">{metric.metric}</div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{metric.label}</h3>
                  <p className="text-synapse-gray text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Solution Section */}
      <section className="py-16 bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-medium">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                      Break Through Digital Hiring Barriers
                    </h2>
                    <p className="text-lg text-synapse-gray mb-6">
                      Over 98% of Fortune 500 companies use ATS systems that automatically filter out qualified candidates based on keyword matching and formatting. Our ATS Bypass Engine levels the playing field by understanding and outsmarting these digital gatekeepers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
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
