
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Gavel, FileText, Shield, Building, Users, BookOpen, Target } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Legal = () => {
  const keyRoles = [
    {
      title: "Corporate Lawyers",
      description: "Corporate attorneys, securities lawyers, M&A specialists, and in-house legal counsel",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Litigation Specialists",
      description: "Trial attorneys, litigation associates, dispute resolution experts, and legal advocates",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Compliance Officers",
      description: "Regulatory compliance specialists, risk management attorneys, and governance professionals",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Legal Support",
      description: "Paralegals, legal assistants, contract managers, and legal operations specialists",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Intellectual Property",
      description: "Patent attorneys, trademark specialists, IP litigation experts, and technology transfer professionals",
      icon: <BookOpen className="w-6 h-6 text-white" />
    },
    {
      title: "Financial Services Law",
      description: "Banking attorneys, securities lawyers, fintech legal experts, and regulatory specialists",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Employment Law",
      description: "Labor attorneys, HR legal specialists, workplace compliance experts, and benefits attorneys",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "Technology Law",
      description: "Privacy attorneys, cybersecurity lawyers, data protection specialists, and tech policy experts",
      icon: <Shield className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Legal Recruitment Solutions" 
      description="AI-powered recruitment for legal professionals and law firms"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Legal Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Access top legal talent through our AI-powered recruitment platform. From corporate attorneys to specialized legal professionals, we connect you with candidates who deliver exceptional legal expertise and strategic value.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Legal Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Legal Roles We Fill
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
            Legal Specializations
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
              Why Legal Organizations Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven platform understands the nuances of legal recruitment, from practice area expertise to client service excellence. We identify legal professionals who combine technical competence with business acumen.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Legal Expertise</h3>
                <p className="text-synapse-gray">Deep understanding of practice areas, jurisdictions, and legal specializations.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Quality Assessment</h3>
                <p className="text-synapse-gray">Comprehensive evaluation of legal credentials, experience, and track record.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Strategic Matching</h3>
                <p className="text-synapse-gray">Advanced algorithms that match legal professionals to organizational needs and culture.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Legal;
