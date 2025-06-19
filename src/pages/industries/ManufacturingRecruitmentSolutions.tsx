
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cog, Settings, Wrench, Users, Zap, ArrowRight, CheckCircle, Search, Target, TrendingUp, Cpu } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ManufacturingRecruitmentSolutions = () => {
  const manufacturingChallenges = [
    {
      title: "AI-Powered Manufacturing Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top manufacturing professionals with proven technical expertise and safety knowledge",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Technical Skills Assessment",
      description: "Comprehensive evaluation of manufacturing capabilities, equipment operation knowledge, and quality control competencies",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Rapid Production Team Scaling",
      description: "Build robust manufacturing teams quickly to support growing production demands and operational excellence",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Production Workers",
      description: "Machine operators, assembly line workers, production specialists, and quality control technicians",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Machine Operation", "Assembly Processes", "Quality Control", "Safety Protocols", "Production Planning", "Equipment Maintenance"]
    },
    {
      title: "Maintenance Technicians",
      description: "Equipment technicians, maintenance specialists, repair professionals, and preventive maintenance experts",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Equipment Repair", "Preventive Maintenance", "Troubleshooting", "Electrical Systems", "Mechanical Systems", "Safety Compliance"]
    },
    {
      title: "Manufacturing Supervisors",
      description: "Production supervisors, team leaders, shift managers, and manufacturing coordinators",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Team Leadership", "Production Planning", "Process Improvement", "Quality Management", "Safety Management", "Performance Optimization"]
    },
    {
      title: "Quality Assurance",
      description: "Quality inspectors, QA specialists, compliance officers, and testing professionals",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Quality Inspection", "Testing Procedures", "Compliance Management", "Documentation", "Statistical Analysis", "Process Validation"]
    },
    {
      title: "Process Engineers",
      description: "Manufacturing engineers, process improvement specialists, and operational efficiency experts",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Process Engineering", "Lean Manufacturing", "Six Sigma", "Automation", "CAD/CAM", "Project Management"]
    },
    {
      title: "Manufacturing Leadership",
      description: "Plant managers, manufacturing directors, and executive manufacturing leadership driving operational excellence",
      icon: <Users className="w-6 h-6" />,
      skills: ["Operations Management", "Executive Leadership", "Strategic Planning", "Team Building", "Manufacturing Transformation", "P&L Management"]
    }
  ];

  const benefits = [
    {
      title: "93% Manufacturing Match Accuracy",
      description: "Our AI algorithms ensure precise matching of manufacturing skills with production requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "69% Faster Manufacturing Hiring",
      description: "Reduce time-to-hire for critical manufacturing positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Manufacturing Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top manufacturing talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Manufacturing Talent Discovery",
      description: "Advanced algorithms scan global networks to identify manufacturing professionals with specific technical expertise"
    },
    {
      number: "2", 
      title: "Technical Skills Validation",
      description: "Comprehensive assessment of manufacturing knowledge, equipment operation, and safety compliance"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for team dynamics, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new manufacturing hires integrate quickly and maintain productivity"
    }
  ];

  return (
    <PageTemplate 
      title="Manufacturing Recruitment Solutions" 
      description="AI-powered recruitment solutions for manufacturing professionals and production teams"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Manufacturing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Manufacturing Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your production hiring with AI-powered manufacturing recruitment solutions. We specialize in finding exceptional manufacturing professionals who drive operational excellence and ensure quality production.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Manufacturing Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Manufacturing Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to manufacturing recruitment combines AI intelligence with deep operational expertise to identify and engage the best manufacturing professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {manufacturingChallenges.map((challenge, index) => (
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

      {/* Key Features Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Advanced Manufacturing Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive manufacturing recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time technical skills assessment and validation",
                  "Automated safety compliance and certification verification", 
                  "Comprehensive equipment operation compatibility analysis",
                  "AI-powered cultural fit and team dynamics assessment",
                  "Global manufacturing talent network access and engagement",
                  "Specialized recruitment for emerging manufacturing technologies",
                  "Executive manufacturing leadership and plant manager placement",
                  "Rapid scaling for production transformation projects"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-synapse-primary/10 to-synapse-primary/5 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <div className="text-2xl font-bold text-synapse-dark mb-2">{benefit.title}</div>
                    <div className="text-sm text-synapse-gray">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Manufacturing Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Manufacturing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From production workers to executive leadership, we understand the full spectrum of manufacturing talent your organization needs to drive operational excellence.
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

      {/* Ready to Transform CTA Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Manufacturing Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Manufacturing Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading manufacturing companies who are already using our AI-powered manufacturing recruitment solutions to build world-class production teams and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our AI-Powered Manufacturing Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best manufacturing talent automatically
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {step.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {step.description}
                  </p>
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

export default ManufacturingRecruitmentSolutions;
