
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Settings, Wrench, Users, Award, Zap, ArrowRight, CheckCircle, Target, Search, Brain, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ManufacturingRecruitmentSolutions = () => {
  const manufacturingChallenges = [
    {
      title: "AI-Powered Manufacturing Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top manufacturing professionals across all production and operations specializations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Technical Skills Assessment",
      description: "Comprehensive evaluation of manufacturing expertise, safety knowledge, and operational excellence capabilities",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Rapid Manufacturing Team Scaling",
      description: "Build robust manufacturing teams quickly to support production growth and operational efficiency initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Production Workers",
      description: "Assembly line workers, machine operators, quality inspectors, and production specialists",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Machine Operation", "Quality Control", "Assembly", "Production Processes", "Safety Protocols", "Equipment Maintenance"]
    },
    {
      title: "Manufacturing Engineers",
      description: "Process engineers, industrial engineers, quality engineers, and manufacturing systems specialists",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Process Engineering", "Industrial Engineering", "Quality Systems", "Lean Manufacturing", "Six Sigma", "CAD/CAM"]
    },
    {
      title: "Maintenance & Technicians",
      description: "Maintenance technicians, equipment specialists, electrical technicians, and mechanical repair professionals",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Equipment Maintenance", "Troubleshooting", "Electrical Systems", "Mechanical Repair", "Preventive Maintenance", "HVAC"]
    },
    {
      title: "Quality Assurance",
      description: "Quality managers, QA inspectors, compliance specialists, and quality control professionals",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Quality Management", "ISO Standards", "Statistical Process Control", "Inspection", "Compliance", "Continuous Improvement"]
    },
    {
      title: "Operations Management",
      description: "Plant managers, production supervisors, operations coordinators, and manufacturing team leaders",
      icon: <Users className="w-6 h-6" />,
      skills: ["Operations Management", "Team Leadership", "Production Planning", "Budget Management", "Process Improvement", "Safety Management"]
    },
    {
      title: "Manufacturing Leadership",
      description: "VP of Manufacturing, plant directors, operations executives, and strategic manufacturing leaders",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Strategic Planning", "Executive Leadership", "Operations Excellence", "Supply Chain", "Capital Planning", "Organizational Development"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Manufacturing Talent Discovery",
      description: "Advanced algorithms scan global networks to identify manufacturing professionals with specific operational expertise"
    },
    {
      number: "2", 
      title: "Technical Skills Validation",
      description: "Comprehensive assessment of manufacturing capabilities, safety knowledge, and operational experience"
    },
    {
      number: "3",
      title: "Safety & Cultural Fit Analysis", 
      description: "Evaluate candidates for safety mindset, teamwork abilities, and organizational alignment"
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
      description="AI-powered recruitment solutions for manufacturing professionals and industrial teams"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Manufacturing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Manufacturing </span>
              <span className="bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary bg-clip-text text-transparent">
                Recruitment Solutions
              </span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your manufacturing hiring with AI-powered recruitment solutions. We specialize in finding exceptional manufacturing professionals who drive operational excellence and production efficiency.
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

      {/* Advanced Manufacturing Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Manufacturing Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the manufacturing talent market, our Manufacturing Recruitment Solutions offer advanced AI algorithms to identify and engage top manufacturing professionals across all production disciplines.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of manufacturing candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and specializations",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global manufacturing talent network access and engagement",
                    "Specialized recruitment for emerging manufacturing technologies",
                    "Executive manufacturing leadership and VP placement"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                      <span className="text-synapse-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="btn-primary"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-primary">
                  <div className="flex items-center space-x-4 w-full">
                    <Target className="w-8 h-8 text-synapse-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Manufacturing Match Accuracy</div>
                      <div className="text-2xl font-bold text-synapse-dark">94%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Manufacturing Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">67%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <Factory className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Production Efficiency</div>
                      <div className="text-2xl font-bold text-synapse-dark">85%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-primary">
                  <div className="flex items-center space-x-4 w-full">
                    <Search className="w-8 h-8 text-synapse-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">AI-Powered Sourcing</div>
                      <div className="text-2xl font-bold text-synapse-dark">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Manufacturing Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Manufacturing Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to manufacturing recruitment combines AI intelligence with deep operational expertise to identify and engage the best professionals.
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

      {/* Critical Manufacturing Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Manufacturing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From production floor to executive suite, we understand the full spectrum of manufacturing talent your organization needs.
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
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Manufacturing Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Manufacturing Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading manufacturers who are already using our AI-powered manufacturing recruitment solutions to build world-class production teams and drive operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-synapse-lighter/30">
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
