
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Cloud, Database, Shield, Cpu, Brain, Zap, ArrowRight, CheckCircle } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ITRecruitmentSolutions = () => {
  const itChallenges = [
    {
      title: "Find Skilled IT Professionals",
      description: "Locate talented IT specialists with expertise in modern technologies and systems",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Assess Technical Competencies",
      description: "Evaluate complex IT skills, system knowledge, and problem-solving abilities",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Scale IT Teams Rapidly",
      description: "Build robust IT departments to support growing technological demands",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Software Developers",
      description: "Full-stack developers, backend engineers, and application specialists",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "React"]
    },
    {
      title: "System Administrators",
      description: "Network administrators, system engineers, and infrastructure specialists",
      icon: <Server className="w-6 h-6" />,
      skills: ["Linux", "Windows Server", "Network Management", "Security"]
    },
    {
      title: "Cloud Engineers",
      description: "AWS/Azure specialists, DevOps engineers, and cloud architects",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes"]
    }
  ];

  return (
    <PageTemplate 
      title="IT Recruitment Solutions" 
      description="Specialized IT recruitment solutions for information technology professionals"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              IT Recruitment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              IT Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Find exceptional IT professionals with our specialized recruitment solutions. We understand the unique demands of information technology recruiting and connect you with top-tier IT talent.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find IT Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {itChallenges.map((challenge, index) => (
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
              Critical IT Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From development to infrastructure, we understand the full spectrum of IT talent your organization needs.
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

export default ITRecruitmentSolutions;
