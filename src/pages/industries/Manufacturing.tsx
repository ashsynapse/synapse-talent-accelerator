
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cog, Truck, Users, Settings, BarChart3, Shield, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Manufacturing = () => {
  const keyRoles = [
    {
      title: "Operations Management",
      description: "Plant managers, operations directors, production supervisors, and manufacturing coordinators",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Quality Engineering",
      description: "Quality engineers, QA managers, process improvement specialists, and Six Sigma professionals",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Supply Chain",
      description: "Supply chain managers, logistics coordinators, procurement specialists, and vendor managers",
      icon: <Truck className="w-6 h-6" />
    },
    {
      title: "Production Staff",
      description: "Production engineers, maintenance technicians, machine operators, and skilled trades professionals",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Lean Manufacturing",
      description: "Lean specialists, continuous improvement experts, process optimization professionals, and efficiency consultants",
      icon: <BarChart3 className="w-6 h-6 text-white" />
    },
    {
      title: "Industrial Automation",
      description: "Automation engineers, robotics specialists, PLC programmers, and Industry 4.0 experts",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Safety & Compliance",
      description: "Safety managers, EHS specialists, regulatory compliance officers, and risk assessment professionals",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "Manufacturing Technology",
      description: "Manufacturing engineers, CAD/CAM specialists, 3D printing experts, and smart factory professionals",
      icon: <Factory className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Manufacturing Recruitment Solutions" 
      description="AI-powered recruitment for manufacturing and industrial professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Manufacturing Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with skilled manufacturing professionals through our AI-powered recruitment platform. From operations management to specialized technical roles, we understand the demands of modern manufacturing.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Manufacturing Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Manufacturing Roles We Fill
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
            Manufacturing Specializations
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
              Why Manufacturing Companies Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven approach understands the technical requirements and operational demands of manufacturing environments. We identify professionals who combine technical expertise with operational excellence.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Industry Knowledge</h3>
                <p className="text-synapse-gray">Deep understanding of manufacturing processes, technologies, and industry standards.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Safety Focus</h3>
                <p className="text-synapse-gray">Emphasis on safety credentials, compliance experience, and risk management expertise.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Operational Excellence</h3>
                <p className="text-synapse-gray">Focus on candidates who drive efficiency, quality, and continuous improvement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Manufacturing;
