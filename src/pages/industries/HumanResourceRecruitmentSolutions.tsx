
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Award, Target, UserCheck, Zap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const HumanResourceRecruitmentSolutions = () => {
  const hrChallenges = [
    {
      title: "Find Strategic HR Professionals",
      description: "Locate experienced HR professionals with strategic thinking and people management skills",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Assess HR Expertise",
      description: "Evaluate HR knowledge, employee relations skills, and compliance understanding",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Build HR Teams",
      description: "Scale your human resources department with qualified HR professionals",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "HR Managers",
      description: "HR business partners, people managers, and employee relations specialists",
      icon: <Users className="w-6 h-6" />,
      skills: ["Employee Relations", "Performance Management", "HR Strategy", "Leadership"]
    },
    {
      title: "Talent Acquisition",
      description: "Recruiters, sourcing specialists, and talent acquisition partners",
      icon: <Target className="w-6 h-6" />,
      skills: ["Recruiting", "Sourcing", "Interviewing", "Employer Branding"]
    },
    {
      title: "HR Operations",
      description: "HRIS specialists, payroll administrators, and benefits coordinators",
      icon: <Heart className="w-6 h-6" />,
      skills: ["HRIS", "Payroll", "Benefits Administration", "Compliance"]
    }
  ];

  return (
    <PageTemplate 
      title="Human Resource Recruitment Solutions" 
      description="Specialized recruitment solutions for human resource professionals"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Human Resource Recruitment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Human Resource Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional human resource professionals who drive organizational success. Our specialized recruitment solutions understand the strategic importance of HR roles.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find HR Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {hrChallenges.map((challenge, index) => (
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
              Critical Human Resource Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From strategy to operations, we understand the full spectrum of human resource talent your organization needs.
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

export default HumanResourceRecruitmentSolutions;
