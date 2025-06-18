import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Search, Clock, Target, Users, Zap, Database, CheckCircle, Settings, Activity, Brain } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AISourcingAgent = () => {
  const features = [
    "Automated job posting scanning and analysis",
    "Real-time candidate matching and scoring", 
    "Continuous background sourcing operation",
    "Live status updates from discovery to shortlist",
    "Advanced AI-powered candidate evaluation",
    "Multi-platform candidate database search",
    "Intelligent skill and experience matching",
    "Automated candidate pipeline management"
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Scan & Analyze",
      description: "AI automatically scans job postings and analyzes requirements to understand your needs",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: "02", 
      title: "Source & Match",
      description: "Continuous sourcing across multiple platforms with intelligent matching algorithms",
      icon: <Target className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Evaluate & Score",
      description: "Advanced evaluation system scores candidates based on fit and experience",
      icon: <Brain className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Deliver Results",
      description: "Real-time updates and qualified candidate delivery to your pipeline",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Sourcing Agent" 
      description="Automatically scans job postings and continuously sources top-matching candidates"
    >
      {/* Hero Section - Keep Same */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI-Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI Sourcing Agent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Revolutionize your talent acquisition with an AI agent that automatically scans job postings and continuously sources top-matching candidates in the background, delivering real-time status updates from discovery to shortlisting.
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

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              How AI Sourcing Agent Works
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our intelligent workflow ensures no qualified candidate is ever missed
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {step.icon}
                  </div>
                  <div className="text-sm font-bold text-synapse-primary mb-2">{step.step}</div>
                  <h3 className="text-lg font-bold text-synapse-dark mb-3">{step.title}</h3>
                  <p className="text-synapse-gray text-sm">{step.description}</p>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-synapse-primary/20 to-synapse-secondary/20"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-synapse-dark mb-4">
                Powerful Features for Smarter Sourcing
              </h2>
              <p className="text-lg text-synapse-gray">
                Experience the next generation of talent acquisition technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-soft">
                  <div className="w-8 h-8 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-synapse-gray">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Proven Performance That Delivers
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See the measurable impact on your talent acquisition process
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-synapse-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-synapse-dark mb-2">10x</div>
                <div className="text-sm text-synapse-gray">More Candidates</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="p-6">
                <Clock className="w-12 h-12 text-synapse-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-synapse-dark mb-2">24/7</div>
                <div className="text-sm text-synapse-gray">Operation</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-synapse-tertiary mx-auto mb-4" />
                <div className="text-3xl font-bold text-synapse-dark mb-2">Real-Time</div>
                <div className="text-sm text-synapse-gray">Updates</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-soft">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-synapse-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-synapse-dark mb-2">90%</div>
                <div className="text-sm text-synapse-gray">Time Saved</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Sourcing Strategy?
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Let our AI Sourcing Agent work around the clock to build your perfect candidate pipeline. Experience the future of talent acquisition today.
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

export default AISourcingAgent;
