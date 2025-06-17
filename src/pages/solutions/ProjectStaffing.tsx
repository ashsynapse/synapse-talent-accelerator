
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Clock, Users, Target, Zap, Settings, Calendar, CheckCircle } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ProjectStaffing = () => {
  const keyFeatures = [
    {
      title: "Rapid Deployment",
      description: "Quick identification and placement of specialized talent for immediate project needs",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Skill-Specific Matching",
      description: "Precise matching of technical skills and project requirements for optimal fit",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Flexible Duration",
      description: "Staffing solutions for short-term sprints to long-term project initiatives",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Team Assembly",
      description: "Complete project teams with complementary skills and proven collaboration",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Cost Efficiency",
      description: "Reduce overhead costs while accessing specialized expertise when needed",
      icon: <Settings className="w-6 h-6 text-white" />
    },
    {
      title: "Scalable Resources",
      description: "Scale your team up or down based on project phases and requirements",
      icon: <Calendar className="w-6 h-6 text-white" />
    },
    {
      title: "Expert Access",
      description: "Tap into specialized skills without long-term employment commitments",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
      title: "Risk Mitigation",
      description: "Reduce project risks through proven professionals with track records",
      icon: <Briefcase className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Project Staffing Solutions" 
      description="Specialized staffing for short-term and long-term project requirements"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Project Staffing Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Power your projects with specialized talent. Our AI-driven project staffing connects you with the right professionals for any duration, ensuring project success from start to finish.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Staff Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Project Staffing Features
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
            Project Staffing Benefits
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
              Project Success Through Strategic Staffing
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our project staffing solutions combine AI-powered talent matching with deep project management expertise. We understand that successful projects require the right mix of skills, experience, and team dynamics delivered at the right time.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Project Expertise</h3>
                <p className="text-synapse-gray">Deep understanding of project dynamics and the specific skills needed for success.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Rapid Response</h3>
                <p className="text-synapse-gray">Quick turnaround times to meet urgent project deadlines and changing requirements.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Team Integration</h3>
                <p className="text-synapse-gray">Professionals who integrate seamlessly with existing teams and company culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ProjectStaffing;
