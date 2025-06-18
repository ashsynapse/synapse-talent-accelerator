
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Send, MessageCircle, Calendar, Users, Heart, TrendingUp, CheckCircle, User, Mail, Clock, Target } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AIOutreachAgent = () => {
  const capabilities = [
    {
      title: "Smart Personalization",
      description: "AI analyzes candidate profiles to create authentic, personalized messages",
      icon: <User className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Multi-Channel Reach",
      description: "Coordinate outreach across email, LinkedIn, and other platforms",
      icon: <Mail className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Perfect Timing",
      description: "Intelligent scheduling ensures messages are sent at optimal times",
      icon: <Clock className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Response Tracking",
      description: "Real-time analytics on engagement and response rates",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

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

      {/* Core Capabilities Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              AI-Powered Outreach Capabilities
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Transform your candidate engagement with intelligent automation that feels personal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform text-white`}>
                    {capability.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {capability.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {capability.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Personalization at Scale, Automation at Speed
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI Outreach Agent combines deep personalization with intelligent automation to create meaningful candidate relationships that drive results.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-0.5" />
                    <span className="text-synapse-gray text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-soft p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-synapse-primary/10 to-synapse-secondary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-6 h-6 text-synapse-primary" />
                      <span className="font-semibold text-synapse-dark">Response Rate</span>
                    </div>
                    <span className="text-2xl font-bold text-synapse-primary">85%</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-synapse-secondary/10 to-synapse-tertiary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6 text-synapse-secondary" />
                      <span className="font-semibold text-synapse-dark">Engagement</span>
                    </div>
                    <span className="text-2xl font-bold text-synapse-secondary">5x More</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-synapse-tertiary/10 to-synapse-primary/10 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-synapse-tertiary" />
                      <span className="font-semibold text-synapse-dark">Coordination</span>
                    </div>
                    <span className="text-2xl font-bold text-synapse-tertiary">Auto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Real Results from Real Campaigns
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how companies are transforming their outreach with AI-powered personalization
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Personal Connection
                </h3>
                <p className="text-synapse-gray mb-4">
                  Create authentic, personalized messages that resonate with each candidate's unique background
                </p>
                <div className="text-2xl font-bold text-synapse-primary">92%</div>
                <div className="text-sm text-synapse-gray">Feel It's Personal</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-secondary to-synapse-tertiary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Smart Automation
                </h3>
                <p className="text-synapse-gray mb-4">
                  Never miss a follow-up with intelligent scheduling that maintains perfect timing
                </p>
                <div className="text-2xl font-bold text-synapse-secondary">0</div>
                <div className="text-sm text-synapse-gray">Missed Follow-ups</div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-tertiary to-synapse-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Seamless Coordination
                </h3>
                <p className="text-synapse-gray mb-4">
                  Effortlessly coordinate interviews and keep all stakeholders informed in real-time
                </p>
                <div className="text-2xl font-bold text-synapse-tertiary">100%</div>
                <div className="text-sm text-synapse-gray">Coordination Rate</div>
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
