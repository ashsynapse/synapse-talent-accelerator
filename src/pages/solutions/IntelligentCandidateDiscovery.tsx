
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Database, Filter, Target, Zap, Users, Brain, Globe } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const IntelligentCandidateDiscovery = () => {
  const keyFeatures = [
    {
      title: "Multi-Platform Sourcing",
      description: "Comprehensive candidate discovery across professional networks, databases, and platforms",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "AI-Powered Matching",
      description: "Advanced algorithms analyze skills, experience, and cultural fit indicators",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Smart Filtering",
      description: "Intelligent filters that go beyond keywords to understand candidate potential",
      icon: <Filter className="w-6 h-6" />
    },
    {
      title: "Real-Time Discovery",
      description: "Continuous candidate discovery with instant notifications for perfect matches",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Expanded Reach",
      description: "Access talent from multiple sources in a single, unified search experience",
      icon: <Database className="w-6 h-6 text-white" />
    },
    {
      title: "Intelligent Insights",
      description: "Deep candidate analysis including skills assessment and career trajectory",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Faster Discovery",
      description: "Reduce time-to-find from weeks to hours with automated candidate identification",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Quality Matching",
      description: "Higher success rates through AI-driven candidate-role compatibility analysis",
      icon: <Users className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Intelligent Candidate Discovery" 
      description="AI-powered candidate discovery and matching platform"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Intelligent Candidate Discovery
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your candidate sourcing with AI-powered discovery that finds the perfect match faster than ever. Our intelligent platform searches, analyzes, and ranks candidates across multiple channels in real-time.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Discover Candidates
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Discovery Features
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
            Discovery Advantages
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
              Next-Generation Candidate Discovery
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our intelligent discovery platform combines the power of AI with comprehensive talent mapping to revolutionize how you find and engage candidates. Experience the future of recruitment with smart, efficient, and precise candidate discovery.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Advanced Search</h3>
                <p className="text-synapse-gray">Sophisticated search algorithms that understand context, skills, and career patterns.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">AI Intelligence</h3>
                <p className="text-synapse-gray">Machine learning models that improve matching accuracy with every search.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Precision Results</h3>
                <p className="text-synapse-gray">Highly accurate candidate recommendations that save time and improve hiring outcomes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default IntelligentCandidateDiscovery;
