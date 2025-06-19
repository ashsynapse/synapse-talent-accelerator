import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Send, Target, Users, Zap, Database, CheckCircle, Settings, Activity, Brain, TrendingUp, Shield, Lightbulb } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const SubmissionAgent = () => {
  const coreCapabilities = [
    {
      icon: <Send className="w-6 h-6 text-white" />,
      title: "Intelligent Profile Matching",
      description: "Automatically matches candidate profiles to job requirements and submits the best-fit candidates"
    },
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "End-to-End Coordination",
      description: "Manages entire submission process from initial contact through final placement coordination"
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Automated Follow-Ups",
      description: "Intelligent follow-up sequences ensure no submission falls through communication gaps"
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "3x Faster Submissions",
      description: "Dramatically accelerate candidate submission timelines while maintaining quality standards with our Submission Agent"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "24/7 Process Management",
      description: "Continuous coordination ensures submissions progress smoothly around the clock"
    },
    {
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />,
      title: "95% Coordination Accuracy",
      description: "Eliminate manual errors and miscommunication in the submission process"
    }
  ];

  const keyFeatures = [
    "Automated candidate-job matching algorithms",
    "Real-time submission status tracking", 
    "Intelligent follow-up sequence management",
    "Multi-stakeholder coordination workflows",
    "Document automation and compliance checks",
    "Performance analytics and success metrics"
  ];

  return (
    <PageTemplate 
      title="Submission Agent" 
      description="Automated candidate submission and application management"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Submission </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Agent</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Streamline your entire candidate submission process with intelligent automation that handles everything from profile matching to final coordination. Our Submission Agent ensures seamless communication, timely follow-ups, and successful placements.
            </p>
            <div className="flex justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Automate Submissions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Seamless Submission Coordination
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our Submission Agent orchestrates the entire submission workflow, from initial candidate evaluation to final placement coordination. With intelligent matching algorithms and automated communication, every submission is handled with precision and professionalism.
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
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Measurable Impact on Your Submission Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how Submission Agent transforms your placement coordination metrics
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
              Ready to Transform Your Submission Process?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join leading companies who are already using Submission Agent to streamline placements and coordinate submissions with unprecedented efficiency.
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
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Your Submission Agent at Work
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent submission process delivers seamless coordination automatically
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
                    <h3 className="font-semibold text-synapse-dark mb-2">Match & Evaluate</h3>
                    <p className="text-synapse-gray text-sm">Agent analyzes candidate profiles against job requirements for optimal matching</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Prepare & Submit</h3>
                    <p className="text-synapse-gray text-sm">Automatically prepares submission materials and coordinates with all stakeholders</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Track & Coordinate</h3>
                    <p className="text-synapse-gray text-sm">Manages communication flow and tracks submission progress in real-time</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Follow-Up & Close</h3>
                    <p className="text-synapse-gray text-sm">Intelligent follow-up sequences ensure successful placement coordination</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/8445fbb5-892b-4cdc-9ee4-54e42033a268.png" 
                  alt="Submission Technology" 
                  className="w-full h-80 object-cover rounded-xl shadow-soft"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-56 h-56 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center shadow-lg">
                    <div className="text-center text-white">
                      <Send className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl font-bold mb-2">Submission Active</h3>
                      <p className="text-sm opacity-90">Coordinating 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-12 bg-synapse-lighter/30">
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
                <p className="text-synapse-gray text-sm">Built-in quality checks ensure all submissions meet the highest professional standards</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Activity className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Real-Time Tracking</h3>
                <p className="text-synapse-gray text-sm">Live dashboard shows submission status and coordination progress at every stage</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">Smart Optimization</h3>
                <p className="text-synapse-gray text-sm">Continuously improves submission success rates based on placement outcomes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SubmissionAgent;
