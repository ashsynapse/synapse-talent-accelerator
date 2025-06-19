
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Settings, Wrench, Factory, Users, Zap, ArrowRight, CheckCircle, Target, Search, Brain, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const EngineeringRecruitmentSolutions = () => {
  const engineeringChallenges = [
    {
      title: "AI-Powered Engineering Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top engineering professionals across all technical disciplines",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Technical Engineering Assessment",
      description: "Comprehensive evaluation of design capabilities, problem-solving skills, and engineering project management competencies",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Rapid Engineering Team Scaling",
      description: "Build robust engineering teams quickly to support growing infrastructure and product development initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Mechanical Engineers",
      description: "Design engineers, project engineers, manufacturing specialists, and mechanical systems experts",
      icon: <Cog className="w-6 h-6" />,
      skills: ["CAD/CAM", "Product Design", "Manufacturing", "Project Management", "AutoCAD", "SolidWorks"]
    },
    {
      title: "Civil Engineers",
      description: "Structural engineers, construction managers, infrastructure specialists, and civil project coordinators",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Structural Design", "Construction Management", "Project Planning", "AutoCAD", "Civil Engineering", "Infrastructure"]
    },
    {
      title: "Electrical Engineers",
      description: "Power systems engineers, control engineers, electronics specialists, and electrical design professionals",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Power Systems", "Control Systems", "Electronics", "PLC Programming", "Electrical Design", "Circuit Analysis"]
    },
    {
      title: "Chemical Engineers",
      description: "Process engineers, plant engineers, chemical specialists, and process optimization professionals",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Process Engineering", "Chemical Analysis", "Plant Operations", "Process Optimization", "Safety Management", "Quality Control"]
    },
    {
      title: "Industrial Engineers",
      description: "Manufacturing engineers, process improvement specialists, and operations optimization professionals",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Process Improvement", "Manufacturing Engineering", "Operations Research", "Lean Manufacturing", "Six Sigma", "Supply Chain"]
    },
    {
      title: "Engineering Leadership",
      description: "Engineering managers, technical directors, project leads, and engineering team leaders",
      icon: <Users className="w-6 h-6" />,
      skills: ["Engineering Management", "Team Leadership", "Project Management", "Technical Strategy", "Engineering Excellence", "Innovation"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Engineering Talent Discovery",
      description: "Advanced algorithms scan global networks to identify engineering professionals with specific technical expertise"
    },
    {
      number: "2", 
      title: "Technical Skills Validation",
      description: "Comprehensive assessment of engineering capabilities, design knowledge, and project management experience"
    },
    {
      number: "3",
      title: "Project Fit Analysis", 
      description: "Evaluate candidates for technical alignment, problem-solving approach, and engineering methodology compatibility"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new engineering hires integrate quickly and contribute effectively"
    }
  ];

  return (
    <PageTemplate 
      title="Engineering Recruitment Solutions" 
      description="AI-powered recruitment solutions for engineering professionals and technical teams"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Engineering Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Engineering Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your engineering hiring with AI-powered recruitment solutions. We specialize in finding exceptional engineering professionals who design, build, and innovate across all technical disciplines.
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

      {/* Advanced Engineering Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Engineering Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the engineering talent market, our Engineering Recruitment Solutions offer advanced AI algorithms to identify and engage top engineering professionals across all technical disciplines.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of engineering candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and specializations",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global engineering talent network access and engagement",
                    "Specialized recruitment for emerging engineering technologies",
                    "Executive engineering leadership and director placement"
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
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-primary">
                  <div className="flex items-center space-x-4 w-full">
                    <Target className="w-8 h-8 text-synapse-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Engineering Match Accuracy</div>
                      <div className="text-2xl font-bold text-synapse-dark">95%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Engineering Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">70%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <Wrench className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Project Success Rate</div>
                      <div className="text-2xl font-bold text-synapse-dark">88%</div>
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

      {/* Core Engineering Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Engineering Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to engineering recruitment combines AI intelligence with deep technical expertise to identify and engage the best professionals.
            </p>
          </div>
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

      {/* Critical Engineering Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Engineering Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From design to implementation, we understand the full spectrum of engineering talent your organization needs to drive innovation.
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
              Ready to Transform Your Engineering Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Engineering Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading engineering companies who are already using our AI-powered engineering recruitment solutions to build world-class technical teams and drive innovation.
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
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our AI-Powered Engineering Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best engineering talent automatically
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

export default EngineeringRecruitmentSolutions;
