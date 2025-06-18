
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Search, Clock, Target, Users, Zap, Database, CheckCircle } from "lucide-react";
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

  const benefits = [
    {
      title: "24/7 Operation",
      description: "Never miss a qualified candidate with continuous background sourcing that works around the clock",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Real-Time Intelligence",
      description: "Get instant notifications and live updates as candidates are discovered and evaluated",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Precision Matching",
      description: "Advanced AI algorithms ensure only the most relevant and qualified candidates surface",
      icon: <Target className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Sourcing Agent" 
      description="Automatically scans job postings and continuously sources top-matching candidates"
    >
      {/* Hero Section */}
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

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-medium bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Search className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                      Never Miss the Perfect Candidate Again
                    </h2>
                    <p className="text-lg text-synapse-gray">
                      Traditional sourcing requires constant manual effort, leaving gaps in your talent pipeline and causing you to miss qualified candidates. Our AI Sourcing Agent transforms your recruitment process by working continuously in the background, ensuring no opportunity is overlooked.
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
                Intelligent Automation That Never Sleeps
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI Sourcing Agent combines advanced machine learning with comprehensive candidate evaluation to deliver a continuous stream of qualified prospects directly to your pipeline.
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
                  <Users className="w-8 h-8 text-synapse-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">10x</div>
                  <div className="text-sm text-synapse-gray">More Candidates</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-synapse-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">24/7</div>
                  <div className="text-sm text-synapse-gray">Operation</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-lg p-4 text-center">
                <Database className="w-8 h-8 text-synapse-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-synapse-dark">Real-Time</div>
                <div className="text-sm text-synapse-gray">Updates</div>
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
              Transform Your Sourcing Strategy
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Experience the power of AI-driven candidate sourcing that works tirelessly to build your talent pipeline.
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
              Ready to Automate Your Sourcing?
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
