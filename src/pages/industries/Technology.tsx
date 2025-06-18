
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, Brain, Shield, Cpu, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Technology = () => {
  const keyRoles = [
    {
      title: "Software Engineers",
      description: "Full-stack developers, frontend specialists, backend engineers, and mobile app developers",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Data Scientists",
      description: "AI/ML engineers, data analysts, business intelligence specialists, and research scientists",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "DevOps Engineers",
      description: "Cloud architects, infrastructure engineers, CI/CD specialists, and security engineers",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Product Managers",
      description: "Technical product managers, UX/UI designers, and digital product strategists",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "AI researchers, ML engineers, deep learning specialists, and NLP experts",
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      title: "Cybersecurity",
      description: "Security analysts, ethical hackers, compliance specialists, and risk assessors",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "Cloud Computing",
      description: "AWS/Azure/GCP specialists, microservices architects, and containerization experts",
      icon: <Cloud className="w-6 h-6 text-white" />
    },
    {
      title: "Emerging Technologies",
      description: "Blockchain developers, IoT specialists, quantum computing researchers, and AR/VR engineers",
      icon: <Zap className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Technology Recruitment Solutions" 
      description="AI-powered recruitment for technology professionals and tech companies"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Technology Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with top technology talent through our AI-powered recruitment platform. From software engineers to AI specialists, we understand the unique challenges of tech hiring and deliver precision matching for your most critical roles.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Tech Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Technology Roles We Fill
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
            Technology Specializations
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
              Why Technology Companies Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-first approach understands the nuances of technology roles, from technical skills assessment to cultural fit evaluation. We leverage advanced algorithms to match candidates not just on experience, but on potential and growth trajectory.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Technical Expertise</h3>
                <p className="text-synapse-gray">Deep understanding of technology stacks, programming languages, and emerging tech trends.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">AI-Powered Matching</h3>
                <p className="text-synapse-gray">Advanced algorithms that evaluate technical skills, cultural fit, and growth potential.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Speed & Precision</h3>
                <p className="text-synapse-gray">Rapid identification and engagement of top-tier technology professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Technology;
