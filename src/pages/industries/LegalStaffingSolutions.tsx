
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Gavel, FileText, Shield, Users, Zap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const LegalStaffingSolutions = () => {
  const legalChallenges = [
    {
      title: "Find Qualified Legal Professionals",
      description: "Locate experienced legal professionals with specialized expertise and jurisdictional knowledge",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Assess Legal Expertise",
      description: "Evaluate legal knowledge, case management skills, and client service capabilities",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Build Legal Teams",
      description: "Scale your legal department with qualified attorneys and support staff",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Attorneys",
      description: "Corporate lawyers, litigation attorneys, and legal counsel specialists",
      icon: <Scale className="w-6 h-6" />,
      skills: ["Legal Research", "Case Management", "Client Relations", "Court Proceedings"]
    },
    {
      title: "Paralegals",
      description: "Legal assistants, case coordinators, and document specialists",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Document Preparation", "Legal Research", "Case Support", "Client Communication"]
    },
    {
      title: "Legal Support",
      description: "Legal secretaries, court reporters, and administrative specialists",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Administrative Support", "Document Management", "Scheduling", "Client Services"]
    }
  ];

  return (
    <PageTemplate 
      title="Legal Staffing Solutions" 
      description="Specialized recruitment solutions for legal professionals"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Legal Staffing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Legal Staffing Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional legal professionals who provide expert counsel and support. Our specialized recruitment solutions understand the demanding nature of legal staffing requirements.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Legal Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {legalChallenges.map((challenge, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {challenge.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">
                    {challenge.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Legal Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From attorneys to support staff, we understand the full spectrum of legal talent your organization needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray mb-4">{role.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
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

export default LegalStaffingSolutions;
