
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Settings, Wrench, Factory, Users, Zap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const EngineeringRecruitmentSolutions = () => {
  const engineeringChallenges = [
    {
      title: "Find Skilled Engineers",
      description: "Locate talented engineering professionals with technical expertise and problem-solving skills",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Assess Technical Skills",
      description: "Evaluate complex engineering knowledge, design capabilities, and project management skills",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Build Engineering Teams",
      description: "Scale your engineering department with qualified professionals across disciplines",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Mechanical Engineers",
      description: "Design engineers, project engineers, and manufacturing specialists",
      icon: <Cog className="w-6 h-6" />,
      skills: ["CAD/CAM", "Product Design", "Manufacturing", "Project Management"]
    },
    {
      title: "Civil Engineers",
      description: "Structural engineers, construction managers, and infrastructure specialists",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Structural Design", "Construction", "Project Planning", "AutoCAD"]
    },
    {
      title: "Electrical Engineers",
      description: "Power systems engineers, control engineers, and electronics specialists",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Power Systems", "Control Systems", "Electronics", "PLC Programming"]
    }
  ];

  return (
    <PageTemplate 
      title="Engineering Recruitment Solutions" 
      description="Specialized recruitment solutions for engineering professionals"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Engineering Recruitment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Engineering Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional engineering professionals who design, build, and innovate. Our specialized recruitment solutions understand the technical demands of engineering roles.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Engineering Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {engineeringChallenges.map((challenge, index) => (
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
              Critical Engineering Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From design to implementation, we understand the full spectrum of engineering talent your organization needs.
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

export default EngineeringRecruitmentSolutions;
