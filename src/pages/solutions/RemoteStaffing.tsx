
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Clock, Zap, Monitor, MapPin, Shield, Target } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const RemoteStaffing = () => {
  const keyFeatures = [
    {
      title: "Global Talent Pool",
      description: "Access to skilled professionals worldwide across all time zones and specializations",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Remote-Ready Professionals",
      description: "Pre-vetted candidates with proven remote work experience and digital collaboration skills",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Time Zone Optimization",
      description: "Strategic placement considering time zone alignment for optimal collaboration",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cultural Integration",
      description: "Focus on candidates who align with your company culture despite geographical distance",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Cost Effectiveness",
      description: "Reduce operational costs while accessing top-tier talent from global markets",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Diverse Perspectives",
      description: "Bring fresh perspectives and diverse thinking to your remote teams",
      icon: <MapPin className="w-6 h-6 text-white" />
    },
    {
      title: "Scalable Teams",
      description: "Quickly scale your remote workforce up or down based on business needs",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Compliance Support",
      description: "Navigate international employment laws and regulations with expert guidance",
      icon: <Shield className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Remote Staffing Solutions" 
      description="Global remote talent acquisition for distributed teams and remote-first companies"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Remote Staffing Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Build exceptional remote teams with global talent. Our AI-powered remote staffing platform connects you with skilled professionals worldwide, ensuring seamless integration and productivity from day one.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Build Remote Team
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Remote Staffing Features
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
            Remote Staffing Benefits
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
              The Future of Work is Remote
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our remote staffing solutions recognize that the best talent isn't limited by geography. We leverage AI-powered matching with deep remote work expertise to build distributed teams that outperform traditional in-office setups.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Global Reach</h3>
                <p className="text-synapse-gray">Access the world's best talent regardless of location or time zone.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Monitor className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Remote Expertise</h3>
                <p className="text-synapse-gray">Specialists in remote work dynamics and digital collaboration best practices.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Team Integration</h3>
                <p className="text-synapse-gray">Seamless onboarding and integration processes for remote team success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default RemoteStaffing;
