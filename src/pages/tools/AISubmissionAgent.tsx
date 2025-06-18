
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Calendar, Bell, UserCheck, Shield, Workflow, CheckCircle } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AISubmissionAgent = () => {
  const features = [
    "End-to-end candidate submission management",
    "Automated personalized outreach coordination",
    "Intelligent interview scheduling system",
    "Post-interview follow-up automation",
    "Engagement tracking and analytics",
    "Reminder and notification management",
    "Multi-stage process optimization",
    "Real-time status updates and reporting"
  ];

  const benefits = [
    {
      title: "Complete Automation",
      description: "Seamlessly handle every step from initial contact to final placement without manual intervention",
      icon: <Workflow className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Scheduling",
      description: "Intelligently coordinate interviews while managing conflicts and preferences automatically",
      icon: <Calendar className="w-8 h-8 text-white" />
    },
    {
      title: "Continuous Engagement",
      description: "Keep candidates engaged and informed throughout the entire submission process",
      icon: <UserCheck className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Submission Agent" 
      description="End-to-end candidate submission with automated coordination and follow-ups"
    >
      {/* Hero Section */}
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

      {/* Challenge Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-medium bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                      Eliminate Submission Process Bottlenecks
                    </h2>
                    <p className="text-lg text-synapse-gray">
                      Manual candidate submission processes are prone to delays, missed communications, and scheduling conflicts. Our AI Submission Agent eliminates these bottlenecks by automating every touchpoint, ensuring a smooth experience for both candidates and hiring teams.
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
                Orchestrate Perfect Candidate Journeys
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI Submission Agent transforms complex submission workflows into seamless, automated experiences that delight candidates and streamline operations.
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
                  <Shield className="w-8 h-8 text-synapse-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">0%</div>
                  <div className="text-sm text-synapse-gray">Missed Steps</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-lg p-4 text-center">
                  <Bell className="w-8 h-8 text-synapse-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">Auto</div>
                  <div className="text-sm text-synapse-gray">Reminders</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-lg p-4 text-center">
                <Target className="w-8 h-8 text-synapse-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-synapse-dark">100%</div>
                <div className="text-sm text-synapse-gray">Process Coverage</div>
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
              Perfect Submissions, Every Time
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Deliver flawless candidate experiences while eliminating manual work and reducing time-to-hire.
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
