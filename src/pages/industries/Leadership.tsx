
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, TrendingUp, Target, Building, Globe, Award, Briefcase } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Leadership = () => {
  const keyRoles = [
    {
      title: "C-Suite Executives",
      description: "CEOs, CTOs, CFOs, CMOs, CHROs, and other C-level leadership positions across all industries",
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: "Vice Presidents",
      description: "VPs of Sales, Marketing, Operations, Technology, Finance, and other senior leadership roles",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Directors & GMs",
      description: "Managing directors, general managers, division heads, and regional leadership positions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Senior Management",
      description: "Senior managers, department heads, team leaders, and emerging leadership roles",
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Technology Leadership",
      description: "Tech executives, digital transformation leaders, innovation directors, and engineering VPs",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    },
    {
      title: "Global Leadership",
      description: "International executives, regional heads, global operations leaders, and expansion specialists",
      icon: <Globe className="w-6 h-6 text-white" />
    },
    {
      title: "Growth Leadership",
      description: "Revenue leaders, growth executives, business development VPs, and scaling specialists",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Transformational Leaders",
      description: "Change management executives, turnaround specialists, and organizational transformation leaders",
      icon: <Award className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Executive Leadership Recruitment Solutions" 
      description="AI-powered recruitment for executive and senior leadership positions"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Executive Leadership Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional executive leaders through our AI-powered recruitment platform. From C-suite executives to emerging leaders, we identify visionary professionals who drive organizational success and transformation.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Executive Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Leadership Roles We Fill
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Leadership Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {spec.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {spec.description}
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
              Why Organizations Choose Synapse for Executive Search
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven approach goes beyond traditional executive search, evaluating leadership competencies, cultural alignment, and transformational potential. We identify leaders who not only fit today's needs but drive tomorrow's success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Crown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Executive Excellence</h3>
                <p className="text-synapse-gray">Comprehensive assessment of leadership track record, vision, and execution capabilities.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Strategic Fit</h3>
                <p className="text-synapse-gray">Matching leaders whose vision and capabilities align with organizational strategy.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Proven Impact</h3>
                <p className="text-synapse-gray">Focus on leaders with demonstrated ability to drive growth and transformation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Leadership;
