
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, BarChart3, Target, Cog, Users, TrendingUp, Activity, FileText, Zap, CheckCircle, ArrowRight, Building } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Operations = () => {
  const operationsChallenges = [
    {
      title: "Find Process Optimization Experts",
      description: "Locate operations professionals with proven ability to streamline processes and drive efficiency improvements",
      icon: <Cog className="w-6 h-6" />
    },
    {
      title: "Assess Analytical Competencies",
      description: "Evaluate data analysis skills, process improvement methodologies, and operational excellence capabilities",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Compete for Operations Leaders",
      description: "Attract experienced operations managers and directors in a competitive market with multiple opportunities",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Match Operational Culture",
      description: "Ensure operations professionals align with your company's operational philosophy and continuous improvement mindset",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Operations Managers",
      description: "Operations directors, general managers, operations coordinators, and process improvement specialists",
      icon: <Settings className="w-6 h-6" />,
      skills: ["Process Optimization", "Team Leadership", "Performance Management", "Strategic Planning"]
    },
    {
      title: "Business Analysts",
      description: "Business analysts, data analysts, process analysts, and systems analysts across various domains",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Data Analysis", "Process Mapping", "Requirements Gathering", "System Optimization"]
    },
    {
      title: "Project Coordinators",
      description: "Project managers, program coordinators, implementation specialists, and change management professionals",
      icon: <Target className="w-6 h-6" />,
      skills: ["Project Management", "Change Management", "Stakeholder Coordination", "Implementation"]
    },
    {
      title: "Process Specialists",
      description: "Process engineers, workflow specialists, efficiency experts, and operational excellence professionals",
      icon: <Cog className="w-6 h-6" />,
      skills: ["Process Engineering", "Lean Six Sigma", "Workflow Design", "Quality Management"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Operational Excellence",
      description: "Highlight your company's operational achievements, efficiency initiatives, and growth opportunities to attract operations professionals who want to drive meaningful impact.",
      icon: <Target className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Operations Talent Networks",
      description: "Create targeted connections with operations professionals across different specializations, nurturing relationships before opportunities arise.",
      icon: <Activity className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Professional Experience",
      description: "Provide streamlined, data-driven recruitment experiences that match the efficiency standards expected by operations professionals.",
      icon: <Zap className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "45%", description: "faster time-to-hire for operations roles" },
    { metric: "88%", description: "candidate satisfaction with recruitment process" },
    { metric: "40%", description: "increase in qualified operations applicants" },
    { metric: "72%", description: "improvement in operations hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Operations Recruitment Solutions" 
      description="AI-powered recruitment for operations and business management professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Operations Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Operations Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for critical operations positions by revolutionizing how you attract, hire, onboard, and retain highly skilled operations professionals. Our AI-powered platform understands the unique demands of operations recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Operations Talent
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
              Hire the Best Operations Talent for Your Business
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate in operations-focused industries or are looking to fill specific operations roles in your company, you need to attract highly skilled, top-tier operations professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality operations talent and drive hiring results to stay competitive.
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

      {/* Operations Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Operations Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Operations-driven companies face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {operationsChallenges.map((challenge, index) => (
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
              Critical Operations Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From operations management to process optimization, we understand the full spectrum of operations talent your organization needs.
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
              Proven Results for Operations Companies
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for operations recruitment.
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

      {/* Operations Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Operations Excellence Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands operational frameworks, process improvement methodologies, and career progression paths in operations management.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Process Optimization & Lean Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Data Analytics & Performance Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Project Management & Implementation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Supply Chain & Logistics Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Quality Management & Continuous Improvement</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Operations Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Settings className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Operations Management</h4>
                    <p className="text-sm text-synapse-gray">Team leadership, process optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Business Analysis</h4>
                    <p className="text-sm text-synapse-gray">Data analysis, systems optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Project Management</h4>
                    <p className="text-sm text-synapse-gray">Implementation, coordination</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Cog className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Process Engineering</h4>
                    <p className="text-sm text-synapse-gray">Workflow design, efficiency</p>
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

export default Operations;
