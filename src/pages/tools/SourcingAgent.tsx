import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Search, Clock, Target, Users, Zap, Database, CheckCircle, Settings, Activity, Brain, TrendingUp, Shield, Lightbulb } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const SourcingAgent = () => {
  const coreCapabilities = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "Intelligent Job Analysis",
      description: "Automatically scans and analyzes job postings to understand precise requirements and qualifications needed"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Multi-Platform Sourcing",
      description: "Continuously searches across multiple platforms and databases to identify the best talent matches"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Advanced Matching",
      description: "Advanced algorithms evaluate and score candidates based on skills, experience, and cultural fit"
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "10x More Qualified Candidates",
      description: "Discover significantly more qualified candidates than traditional sourcing methods with our Sourcing Agent"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "24/7 Continuous Operation",
      description: "Never miss top talent with round-the-clock automated sourcing and candidate discovery"
    },
    {
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />,
      title: "90% Time Reduction",
      description: "Dramatically reduce manual sourcing time while improving candidate quality and quantity"
    }
  ];

  const keyFeatures = [
    "Real-time candidate pipeline updates",
    "Advanced scoring and ranking algorithms", 
    "Automated candidate profile enrichment",
    "Integration with existing ATS systems",
    "Customizable search parameters and filters",
    "Comprehensive candidate analytics and reporting"
  ];

  return (
    <PageTemplate 
      title="Sourcing Agent" 
      description="Automatically scans job postings and continuously sources top-matching candidates"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Sourcing </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Agent</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Revolutionize your talent acquisition with an intelligent Sourcing Agent that automatically scans job postings and continuously sources top-matching candidates in the background, delivering real-time status updates from discovery to shortlisting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
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
                  Intelligent Sourcing That Never Sleeps
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our Sourcing Agent continuously monitors job requirements, scans multiple talent databases, and identifies candidates who perfectly match your criteria. With advanced machine learning algorithms, it gets smarter with every search, delivering increasingly precise results.
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
                  onClick={() => window.location.href = "/contact"}
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
              Measurable Impact on Your Hiring Performance
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how Sourcing Agent transforms your talent acquisition metrics
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
              Ready to Transform Your Talent Sourcing?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join leading companies who are already using Sourcing Agent to discover top talent faster and more efficiently than ever before.
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
              Your Sourcing Agent at Work
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent sourcing process delivers results automatically
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
                    <h3 className="font-semibold text-synapse-dark mb-2">Analyze Job Requirements</h3>
                    <p className="text-synapse-gray text-sm">Agent scans and understands job posting requirements, skills, and qualifications</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Search & Discover</h3>
                    <p className="text-synapse-gray text-sm">Continuous searching across multiple platforms and talent databases</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Evaluate & Score</h3>
                    <p className="text-synapse-gray text-sm">Advanced algorithms score candidates based on fit and experience</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Deliver Results</h3>
                    <p className="text-synapse-gray text-sm">Real-time pipeline updates with qualified candidate profiles</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/8445fbb5-892b-4cdc-9ee4-54e42033a268.png" 
                  alt="Sourcing Technology" 
                  className="w-full h-80 object-cover rounded-xl shadow-soft"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <Search className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-2">Sourcing Active</h3>
                      <p className="text-sm opacity-90">Discovering 24/7</p>
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
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Quality Assurance</h3>
                <p className="text-synapse-gray text-sm">Built-in quality filters ensure only the most relevant candidates reach your pipeline</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Real-Time Monitoring</h3>
                <p className="text-synapse-gray text-sm">Live dashboard shows sourcing progress and candidate discovery status</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Smart Learning</h3>
                <p className="text-synapse-gray text-sm">Continuously improves matching accuracy based on your hiring decisions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SourcingAgent;
