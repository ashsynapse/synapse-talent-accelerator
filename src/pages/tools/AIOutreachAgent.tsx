
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
      icon: <User className="w-6 h-6 text-white" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Multi-Channel Reach",
      description: "Coordinate outreach across email, LinkedIn, and other platforms",
      icon: <Mail className="w-6 h-6 text-white" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Perfect Timing",
      description: "Intelligent scheduling ensures messages are sent at optimal times",
      icon: <Clock className="w-6 h-6 text-white" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Response Tracking",
      description: "Real-time analytics on engagement and response rates",
      icon: <Target className="w-6 h-6 text-white" />,
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

  const successMetrics = [
    {
      metric: "85%",
      label: "Response Rate",
      description: "Average response rate from personalized outreach campaigns",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      metric: "5x",
      label: "More Engagement",
      description: "Increase in candidate engagement compared to generic messaging",
      icon: <MessageCircle className="w-6 h-6" />
    },
    {
      metric: "Auto",
      label: "Coordination",
      description: "Fully automated interview scheduling and follow-up management",
      icon: <Calendar className="w-6 h-6" />
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
            <div className="flex justify-center">
              <Button 
                className="bg-synapse-dark text-white hover:bg-synapse-dark font-semibold text-lg py-6 px-10 rounded-xl shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Launch Outreach Agent
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
                  Personalization at Scale, Automation at Speed
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI Outreach Agent combines deep personalization with intelligent automation to create meaningful candidate relationships that drive results.
                </p>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                      <span className="text-synapse-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="bg-synapse-dark text-white hover:bg-synapse-dark px-6 py-3"
                  onClick={() => window.location.href = "/recruitment-tools"}
                >
                  Explore All Tools <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {capabilities.map((capability, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                        {capability.icon}
                      </div>
                      <h4 className="font-semibold text-synapse-dark mb-2 text-sm">{capability.title}</h4>
                      <p className="text-xs text-synapse-gray">{capability.description}</p>
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
              Real Results from Real Campaigns
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how companies are transforming their outreach with AI-powered personalization
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft text-synapse-primary">
                    {metric.icon}
                  </div>
                  <div className="text-4xl font-bold text-synapse-primary mb-2">{metric.metric}</div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{metric.label}</h3>
                  <p className="text-synapse-gray text-sm">{metric.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="max-w-4xl mx-auto text-center mt-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Ready to Transform Your Outreach?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Start building meaningful candidate relationships with AI-powered personalization that actually works. Experience higher engagement and better results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-synapse-dark text-white hover:bg-synapse-dark text-lg px-8 py-3"
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

      {/* Campaign Process Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Your Outreach Agent in Action
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent outreach process creates meaningful candidate connections
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
                    <h3 className="font-semibold text-synapse-dark mb-2">Analyze Candidate Profile</h3>
                    <p className="text-synapse-gray text-sm">AI studies candidate background, interests, and career trajectory for personalization</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Craft Personal Message</h3>
                    <p className="text-synapse-gray text-sm">Generate authentic, personalized outreach that resonates with each individual</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Optimize Timing</h3>
                    <p className="text-synapse-gray text-sm">Send messages at optimal times for maximum engagement and response rates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-synapse-dark mb-2">Manage Follow-ups</h3>
                    <p className="text-synapse-gray text-sm">Intelligent follow-up sequences and interview coordination automation</p>
                  </div>
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
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default AIOutreachAgent;
