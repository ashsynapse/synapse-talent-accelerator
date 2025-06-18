
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Send, MessageCircle, Calendar, Users, Heart, TrendingUp, CheckCircle } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AIOutreachAgent = () => {
  const features = [
    "Hyper-personalized outreach campaign creation",
    "Automated candidate engagement sequences",
    "Intelligent follow-up scheduling and management",
    "Real-time interview coordination",
    "Multi-channel communication support",
    "Candidate response tracking and analytics",
    "Dynamic message customization",
    "Engagement optimization algorithms"
  ];

  const benefits = [
    {
      title: "Personal Connection",
      description: "Create authentic, personalized messages that resonate with each candidate's unique background",
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Automation",
      description: "Never miss a follow-up with intelligent scheduling that maintains perfect timing",
      icon: <MessageCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Seamless Coordination",
      description: "Effortlessly coordinate interviews and keep all stakeholders informed in real-time",
      icon: <Calendar className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Outreach Agent" 
      description="Hyper-personalized, automated outreach campaigns for candidate engagement"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI-Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI Outreach Agent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform candidate engagement with hyper-personalized, automated outreach campaigns that keep prospects engaged through intelligent follow-ups and seamless interview coordination, all while providing real-time updates.
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
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                      Break Through the Noise with Personal Touch
                    </h2>
                    <p className="text-lg text-synapse-gray">
                      Generic outreach messages get lost in overcrowded inboxes, and manual personalization doesn't scale. Our AI Outreach Agent creates authentic, personalized connections that candidates actually respond to, while automating the entire engagement process.
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
                Personalization at Scale, Automation at Speed
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI Outreach Agent combines deep personalization with intelligent automation to create meaningful candidate relationships that drive results.
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
                  <TrendingUp className="w-8 h-8 text-synapse-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">85%</div>
                  <div className="text-sm text-synapse-gray">Response Rate</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-lg p-4 text-center">
                  <MessageCircle className="w-8 h-8 text-synapse-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">5x</div>
                  <div className="text-sm text-synapse-gray">More Engaged</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-lg p-4 text-center">
                <Calendar className="w-8 h-8 text-synapse-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-synapse-dark">Auto</div>
                <div className="text-sm text-synapse-gray">Coordination</div>
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
              Build Meaningful Candidate Relationships
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Transform your outreach strategy with AI that understands the art of human connection.
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
              Ready to Transform Your Outreach?
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Start building meaningful candidate relationships with AI-powered personalization that actually works. Experience higher engagement and better results.
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

export default AIOutreachAgent;
