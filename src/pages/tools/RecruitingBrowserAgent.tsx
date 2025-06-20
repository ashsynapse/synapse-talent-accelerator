
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Globe, Clock, Target, Users, Zap, Database, CheckCircle, Settings, Activity, Brain, TrendingUp, Shield, Lightbulb } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const RecruitingBrowserAgent = () => {
  const coreCapabilities = [
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Intelligent Web Navigation",
      description: "Automatically navigates and interacts with job boards, career sites, and professional networks"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Multi-Platform Integration",
      description: "Seamlessly operates across multiple recruiting platforms and databases simultaneously"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Smart Data Extraction",
      description: "Advanced algorithms extract and organize candidate information from various web sources"
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "5x Faster Data Collection",
      description: "Dramatically accelerate candidate research and data gathering across multiple platforms"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "24/7 Automated Browsing",
      description: "Continuous web-based recruiting activities without manual intervention"
    },
    {
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />,
      title: "95% Accuracy Rate",
      description: "Highly accurate data extraction and candidate profile compilation"
    }
  ];

  const keyFeatures = [
    "Automated job board navigation and searching",
    "Real-time candidate profile extraction", 
    "Multi-platform data synchronization",
    "Intelligent form filling and submissions",
    "Compliance with platform terms of service",
    "Comprehensive activity logging and reporting"
  ];

  return (
    <PageTemplate 
      title="Recruiting Browser Agent" 
      description="Automated web browsing and data extraction for comprehensive recruiting research"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Recruiting Browser </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Agent</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your recruiting research with an intelligent browser agent that automatically navigates job boards, career sites, and professional networks. Our agent extracts candidate data, monitors job postings, and conducts comprehensive market research at scale.
            </p>
            <div className="flex justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.open("https://inspiring-choux-462db3.netlify.app/", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Deploy Your Agent
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
                  Intelligent Web-Based Recruiting
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our Recruiting Browser Agent operates like a skilled researcher, automatically navigating the web to gather candidate information, monitor job market trends, and extract valuable recruiting data. With advanced AI capabilities, it understands context and adapts to different platform layouts.
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
                  onClick={() => window.open("https://inspiring-choux-462db3.netlify.app/", "_blank")}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
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
              Measurable Impact on Your Research Efficiency
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how Recruiting Browser Agent transforms your data collection metrics
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
              Ready to Transform Your Recruiting Research?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join leading companies who are already using Recruiting Browser Agent to automate data collection and accelerate their recruiting research processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Demo <ArrowRight className="ml-2 h-5 w-5" />
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
              Your Browser Agent at Work
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent browsing process delivers comprehensive research automatically
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
                    <h3 className="font-semibold text-synapse-dark mb-2">Navigate & Search</h3>
                    <p className="text-synapse-gray text-sm">Agent automatically navigates job boards and career sites to locate relevant information</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Extract & Analyze</h3>
                    <p className="text-synapse-gray text-sm">Intelligently extracts candidate profiles and job market data from various sources</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Organize & Sync</h3>
                    <p className="text-synapse-gray text-sm">Automatically organizes collected data and synchronizes across your recruiting platforms</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Report & Insights</h3>
                    <p className="text-synapse-gray text-sm">Delivers comprehensive reports with actionable recruiting insights and trends</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/8445fbb5-892b-4cdc-9ee4-54e42033a268.png" 
                  alt="Browser Technology" 
                  className="w-full h-80 object-cover rounded-xl shadow-soft"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <Globe className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-2">Browser Active</h3>
                      <p className="text-sm opacity-90">Researching 24/7</p>
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
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Compliance Assured</h3>
                <p className="text-synapse-gray text-sm">Built-in compliance protocols ensure all browsing activities respect platform terms of service</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Real-Time Monitoring</h3>
                <p className="text-synapse-gray text-sm">Live dashboard tracks browsing activities and data collection progress in real-time</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Adaptive Learning</h3>
                <p className="text-synapse-gray text-sm">Continuously learns and adapts to new website layouts and platform changes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default RecruitingBrowserAgent;
