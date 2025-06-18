
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Factory, Cog, Truck, Users, Settings, BarChart3, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Manufacturing = () => {
  const manufacturingChallenges = [
    {
      title: "Find Skilled Trade Workers",
      description: "Locate experienced technicians and skilled tradespeople in a market facing significant shortages",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Assess Technical Competencies",
      description: "Evaluate hands-on manufacturing skills, safety knowledge, and equipment expertise",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Scale Operations Quickly",
      description: "Rapidly expand your workforce to meet production demands and manufacturing goals",
      icon: <Factory className="w-6 h-6" />
    },
    {
      title: "Ensure Safety Standards",
      description: "Recruit professionals who prioritize workplace safety and regulatory compliance",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Operations Management",
      description: "Plant managers, operations directors, production supervisors, and manufacturing coordinators",
      icon: <Factory className="w-6 h-6" />,
      skills: ["Operations Management", "Production Planning", "Team Leadership", "Process Optimization"]
    },
    {
      title: "Quality & Process Engineering",
      description: "Quality engineers, process improvement specialists, Six Sigma professionals, and manufacturing engineers",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Quality Control", "Lean Manufacturing", "Six Sigma", "Process Improvement"]
    },
    {
      title: "Supply Chain & Logistics",
      description: "Supply chain managers, logistics coordinators, procurement specialists, and inventory managers",
      icon: <Truck className="w-6 h-6" />,
      skills: ["Supply Chain", "Logistics", "Procurement", "Inventory Management"]
    },
    {
      title: "Skilled Production Workers",
      description: "Machine operators, maintenance technicians, assemblers, and skilled trades professionals",
      icon: <Users className="w-6 h-6" />,
      skills: ["Machine Operation", "Maintenance", "Assembly", "Technical Skills"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Manufacturing Excellence",
      description: "Highlight your advanced facilities, safety culture, and career advancement opportunities to attract skilled manufacturing professionals who want to work with industry leaders.",
      icon: <Factory className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Skilled Workforce Networks",
      description: "Create targeted connections with manufacturing professionals across different specializations, nurturing relationships before production needs arise.",
      icon: <BarChart3 className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Safety-First Experience",
      description: "Provide recruitment experiences that emphasize safety standards and professional development, matching the values expected by manufacturing professionals.",
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "55%", description: "faster time-to-hire for manufacturing roles" },
    { metric: "88%", description: "candidate satisfaction with recruitment process" },
    { metric: "65%", description: "increase in qualified manufacturing applicants" },
    { metric: "72%", description: "improvement in manufacturing hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Manufacturing Recruitment Solutions" 
      description="AI-powered recruitment for manufacturing and industrial professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Manufacturing Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Manufacturing Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for skilled manufacturing positions by revolutionizing how you attract, hire, onboard, and retain highly skilled industrial professionals. Our AI-powered platform understands the unique demands of manufacturing recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Manufacturing Talent
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Hire the Best Manufacturing Talent for Your Operations
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate a manufacturing facility or are looking to fill specific industrial roles in your organization, you need to attract highly skilled, top-tier manufacturing professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality manufacturing talent and drive hiring results to stay competitive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutionBenefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Manufacturing Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Manufacturing companies face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {manufacturingChallenges.map((challenge, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {challenge.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{challenge.title}</h3>
                      <p className="text-synapse-gray">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Manufacturing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From operations management to skilled production, we understand the full spectrum of manufacturing talent your organization needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
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

      {/* Success Metrics Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Proven Results for Manufacturing Companies
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for manufacturing recruitment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.metric}</span>
                </div>
                <p className="text-synapse-gray font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Manufacturing Industry Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands manufacturing processes, safety requirements, and career progression paths in the industrial sector.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Operations & Production Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Quality Control & Process Engineering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Supply Chain & Logistics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Safety & Compliance Standards</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Automation & Industry 4.0</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Manufacturing Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Factory className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Operations</h4>
                    <p className="text-sm text-synapse-gray">Plant management, production</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Quality Engineering</h4>
                    <p className="text-sm text-synapse-gray">Process improvement, Six Sigma</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Truck className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Supply Chain</h4>
                    <p className="text-sm text-synapse-gray">Logistics, procurement</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Skilled Trades</h4>
                    <p className="text-sm text-synapse-gray">Technicians, operators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Manufacturing;
