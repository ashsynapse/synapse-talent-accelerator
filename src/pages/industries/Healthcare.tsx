
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Shield, Users, Activity, FileText, Microscope } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Healthcare = () => {
  const keyRoles = [
    {
      title: "Medical Professionals",
      description: "Physicians, nurses, specialists, surgeons, and clinical practitioners across all medical disciplines",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Healthcare Administration",
      description: "Hospital administrators, healthcare managers, medical directors, and operations specialists",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Medical Technology",
      description: "Biomedical engineers, medical device specialists, health informatics, and telemedicine professionals",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Research & Development",
      description: "Clinical researchers, pharmaceutical scientists, biotech professionals, and medical research coordinators",
      icon: <Microscope className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Digital Health",
      description: "Health IT specialists, EHR experts, telehealth professionals, and digital therapeutics developers",
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      title: "Pharmaceutical",
      description: "Drug development specialists, regulatory affairs, clinical trial managers, and pharmacovigilance experts",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "Medical Devices",
      description: "Device engineers, quality assurance specialists, regulatory consultants, and product managers",
      icon: <Activity className="w-6 h-6 text-white" />
    },
    {
      title: "Healthcare Analytics",
      description: "Health data scientists, population health analysts, and healthcare AI/ML specialists",
      icon: <FileText className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Healthcare Recruitment Solutions" 
      description="AI-powered recruitment for healthcare professionals and medical organizations"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Healthcare Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional healthcare professionals through our AI-powered recruitment platform. From clinical practitioners to healthcare technology experts, we understand the critical nature of healthcare staffing.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Healthcare Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Healthcare Roles We Fill
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
            Healthcare Specializations
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
              Why Healthcare Organizations Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven approach recognizes the unique requirements of healthcare recruitment, from clinical competencies to patient care excellence. We match healthcare professionals who combine technical expertise with compassionate care.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Clinical Excellence</h3>
                <p className="text-synapse-gray">Deep understanding of medical specialties, certifications, and clinical competencies.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Compliance Assurance</h3>
                <p className="text-synapse-gray">Thorough credentialing and compliance verification for all healthcare professionals.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Rapid Response</h3>
                <p className="text-synapse-gray">Quick identification of qualified professionals for urgent healthcare staffing needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Healthcare;
