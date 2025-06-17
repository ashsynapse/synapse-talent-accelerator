
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Settings, BarChart3, Target, Cog, Activity, FileText, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Operations = () => {
  const keyRoles = [
    {
      title: "Operations Managers",
      description: "Operations directors, general managers, operations coordinators, and process improvement specialists",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Business Analysts",
      description: "Business analysts, data analysts, process analysts, and systems analysts across various domains",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Project Coordinators",
      description: "Project managers, program coordinators, implementation specialists, and change management professionals",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Process Specialists",
      description: "Process engineers, workflow specialists, efficiency experts, and operational excellence professionals",
      icon: <Cog className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Digital Operations",
      description: "Digital transformation specialists, automation experts, workflow optimization, and tech operations professionals",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Performance Analytics",
      description: "Operations analysts, KPI specialists, performance management experts, and data-driven decision makers",
      icon: <Activity className="w-6 h-6 text-white" />
    },
    {
      title: "Quality Management",
      description: "Quality managers, process improvement specialists, Six Sigma professionals, and compliance experts",
      icon: <FileText className="w-6 h-6 text-white" />
    },
    {
      title: "Strategic Operations",
      description: "Strategic planners, operational strategists, business optimization experts, and growth operations specialists",
      icon: <Target className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Operations Recruitment Solutions" 
      description="AI-powered recruitment for operations and business management professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Operations Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Access top operations professionals through our AI-powered recruitment platform. From operations managers to process specialists, we connect you with candidates who drive efficiency, innovation, and operational excellence.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Operations Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Operations Roles We Fill
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
            Operations Specializations
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
              Why Companies Choose Synapse for Operations
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven approach identifies operations professionals who excel at optimization, efficiency, and strategic execution. We match candidates who combine analytical thinking with practical implementation skills.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Operational Excellence</h3>
                <p className="text-synapse-gray">Deep understanding of operational frameworks, methodologies, and best practices.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Data-Driven Approach</h3>
                <p className="text-synapse-gray">Focus on professionals who leverage data and analytics for operational decisions.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Cog className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Process Optimization</h3>
                <p className="text-synapse-gray">Identifying candidates with proven ability to streamline and improve operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Operations;
