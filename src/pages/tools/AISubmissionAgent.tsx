import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Calendar, Bell, UserCheck, Shield, Workflow, CheckCircle, FileText, Clock, Users, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AISubmissionAgent = () => {
  const processStages = [
    {
      stage: "Initial Contact",
      description: "Automated personalized outreach with candidate information and role details",
      icon: <UserCheck className="w-6 h-6" />,
      status: "Active"
    },
    {
      stage: "Interview Scheduling",
      description: "Smart calendar coordination handling conflicts and preferences automatically",
      icon: <Calendar className="w-6 h-6" />,
      status: "Automated"
    },
    {
      stage: "Follow-up Management",
      description: "Continuous engagement with timely updates and next-step communications",
      icon: <Bell className="w-6 h-6" />,
      status: "Intelligent"
    },
    {
      stage: "Status Tracking",
      description: "Real-time progress monitoring with detailed analytics and reporting",
      icon: <Shield className="w-6 h-6" />,
      status: "Complete"
    }
  ];

  const benefits = [
    {
      title: "Zero Manual Work",
      description: "Complete automation from first contact to final placement",
      metric: "100%",
      label: "Automated",
      icon: <Workflow className="w-8 h-8" />
    },
    {
      title: "Perfect Timing",
      description: "Smart scheduling that respects everyone's preferences",
      metric: "0",
      label: "Conflicts",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Continuous Engagement",
      description: "Keep candidates informed and excited throughout the process",
      metric: "95%",
      label: "Satisfaction",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Submission Agent" 
      description="End-to-end candidate submission with automated coordination and follow-ups"
    >
      {/* Hero Section - Keep Same */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI-Powered Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI Submission Agent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Streamline your entire candidate submission process with intelligent automation that coordinates personalized outreach, manages interview scheduling, and ensures seamless follow-ups from start to finish.
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

      {/* Process Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Complete Submission Process Automation
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From initial contact to final placement, every step is optimized for candidate experience
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {processStages.map((stage, index) => (
                <Card key={index} className="border-l-4 border-l-synapse-primary shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center text-white">
                          {stage.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-synapse-dark">{stage.stage}</h3>
                          <p className="text-synapse-gray">{stage.description}</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-synapse-primary/10 text-synapse-primary">
                        {stage.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Showcase Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Perfect Submissions, Every Time
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Deliver flawless candidate experiences while eliminating manual work and reducing time-to-hire
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray mb-6">
                    {benefit.description}
                  </p>
                  <div className="text-3xl font-bold text-synapse-primary mb-1">{benefit.metric}</div>
                  <div className="text-sm text-synapse-gray">{benefit.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Advanced Automation Features
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Experience the most comprehensive submission management system designed for modern recruitment.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-synapse-dark">End-to-end submission management</h4>
                    <p className="text-synapse-gray text-sm">Complete automation from initial outreach to final placement</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-synapse-dark">Intelligent interview coordination</h4>
                    <p className="text-synapse-gray text-sm">Smart scheduling that handles conflicts and preferences automatically</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-synapse-dark">Real-time status updates</h4>
                    <p className="text-synapse-gray text-sm">Live tracking and reporting throughout the entire process</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-synapse-dark">Automated follow-up sequences</h4>
                    <p className="text-synapse-gray text-sm">Perfect timing for all communications and reminders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Target className="w-6 h-6 text-synapse-primary" />
                    <span className="font-semibold">Process Coverage</span>
                  </div>
                  <span className="text-xl font-bold text-synapse-primary">100%</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Bell className="w-6 h-6 text-synapse-secondary" />
                    <span className="font-semibold">Auto Reminders</span>
                  </div>
                  <span className="text-xl font-bold text-synapse-secondary">Always</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-synapse-tertiary" />
                    <span className="font-semibold">Missed Steps</span>
                  </div>
                  <span className="text-xl font-bold text-synapse-tertiary">0%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Perfect Your Submission Process?
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Transform your candidate submission workflow with AI that handles every detail, ensuring perfect experiences and faster placements.
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

export default AISubmissionAgent;
