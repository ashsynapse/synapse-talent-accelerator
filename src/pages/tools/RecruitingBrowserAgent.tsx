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
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI Job-Fit Scoring",
      description: "Smart criteria-based evaluation for precise candidate matching"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Instant Breakdown",
      description: "Immediate analysis of candidate strengths and weaknesses"
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Sourcing Templates",
      description: "Ready-to-use templates with personalization tips"
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "Lightning-Fast Evaluation",
      description: "Instantly score candidates with 8.5+ scores being 100% submission-worthy"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "Simple 5-Step Process",
      description: "From job description to candidate submission in minutes"
    },
    {
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />,
      title: "Find Top 1% Talent",
      description: "AI-powered browser extension identifies elite candidates instantly"
    }
  ];

  const keyFeatures = [
    "AI Job-Fit Scoring with SR and FIT evaluators",
    "Instant candidate analysis and breakdown", 
    "Ready-to-use sourcing templates with personalization",
    "Weekly updates with rapid improvements",
    "Simple paste and analyze workflow",
    "Smart criteria-based candidate evaluation"
  ];

  return (
    <PageTemplate 
      title="Recruiting Browser Agent" 
      description="Your AI recruiting browser agent for finding top 1% talent instantly"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI Browser Extension
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Recruiting Browser Agent</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Your AI recruiting browser agent, now live in beta. Simple, powerful, and lightning-fast candidate evaluation with smart criteria-based scoring.
            </p>
            <div className="flex justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.open("https://inspiring-choux-462db3.netlify.app/", "_blank")}
              >
                <span className="flex items-center gap-2">
                  Install Extension (Free for SRN Members)
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
                  Simple, Powerful, Lightning-Fast
                </h2>
                <p className="text-synapse-gray mb-6">
                  Transform your hiring process with our AI recruiting browser agent. From pasting job descriptions to submitting top candidates, our extension provides instant AI scoring with SR and FIT evaluators that identify submission-worthy talent.
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
              Everything You Need to Find Elite Talent
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Powerful features designed for efficient talent discovery and evaluation
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
              Start Finding Elite Talent Today
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join thousands of recruiters already using Synapse to identify top candidates with our AI-powered browser extension.
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
              How It Works
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Simple, powerful, and lightning-fast candidate evaluation
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
                    <h3 className="font-semibold text-synapse-dark mb-2">Paste Job Description</h3>
                    <p className="text-synapse-gray text-sm">Simply paste your job requirements into the extension</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Upload & Analyze</h3>
                    <p className="text-synapse-gray text-sm">Click extension to analyze candidates instantly</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">AI Scores Instantly</h3>
                    <p className="text-synapse-gray text-sm">SR and FIT evaluators provide immediate scores</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">View Analysis</h3>
                    <p className="text-synapse-gray text-sm">See rationale, strengths, and templates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Submit Top Fits</h3>
                    <p className="text-synapse-gray text-sm">8.5+ scores = 100% submission-worthy candidates</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/8445fbb5-892b-4cdc-9ee4-54e42033a268.png" 
                  alt="AI Browser Extension" 
                  className="w-full h-80 object-cover rounded-xl shadow-soft"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <Brain className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-2">AI Brain Active</h3>
                      <p className="text-sm opacity-90">Analyzing talent</p>
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
              Special Beta Offer
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Free for all SRN members during beta! Join our community and access unlimited features at no cost.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-synapse-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Free Tier</h3>
                <p className="text-synapse-gray text-sm mb-4">Perfect for getting started</p>
                <ul className="text-sm text-synapse-gray space-y-2">
                  <li>• 20 candidate evaluations/month</li>
                  <li>• Basic scoring features</li>
                  <li>• Standard templates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 bg-synapse-primary/5">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Unlimited - $9.99/month</h3>
                <p className="text-synapse-gray text-sm mb-4">For serious recruiters</p>
                <ul className="text-sm text-synapse-gray space-y-2">
                  <li>• Unlimited evaluations</li>
                  <li>• Advanced AI scoring</li>
                  <li>• Premium templates</li>
                  <li>• Priority support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Weekly Updates</h3>
                <p className="text-synapse-gray text-sm">Rapid improvements based on user feedback with continuous feature enhancements</p>
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
