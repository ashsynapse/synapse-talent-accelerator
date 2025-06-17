
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight, Target, Calendar, Bell, UserCheck } from "lucide-react";
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
      description: "Handle the entire submission process from initial contact to final follow-up",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Scheduling",
      description: "Automatically coordinate interviews and manage calendar conflicts",
      icon: <Calendar className="w-8 h-8 text-white" />
    },
    {
      title: "Continuous Engagement",
      description: "Keep candidates engaged throughout the entire process with timely reminders",
      icon: <UserCheck className="w-8 h-8 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="AI Submission Agent" 
      description="Handles end-to-end candidate submission with automated coordination and follow-ups"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              AI Tool
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI Submission Agent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Handles end-to-end candidate submission by coordinating personalized outreach, interview scheduling, and post-interview follow-ups, ensuring seamless engagement and reminders throughout the process.
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

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-synapse-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-synapse-gray">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
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

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default AISubmissionAgent;
