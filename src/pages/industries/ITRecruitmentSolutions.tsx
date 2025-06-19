
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Server, Cloud, Database, Shield, Cpu, Brain, Zap, ArrowRight, CheckCircle, Users, Target, TrendingUp, Search } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ITRecruitmentSolutions = () => {
  const itChallenges = [
    {
      title: "AI-Powered IT Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top IT professionals across all technology domains",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Technical Skills Assessment",
      description: "Comprehensive evaluation of coding abilities, system knowledge, and problem-solving competencies",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Rapid IT Team Scaling",
      description: "Build robust technology teams quickly to support growing digital transformation initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Software Engineers",
      description: "Full-stack developers, backend specialists, frontend experts, and mobile application developers",
      icon: <Code className="w-6 h-6" />,
      skills: ["Java", "Python", "JavaScript", "React", "Node.js", "Angular"]
    },
    {
      title: "DevOps & Cloud Engineers",
      description: "AWS/Azure specialists, Kubernetes experts, CI/CD engineers, and infrastructure architects",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"]
    },
    {
      title: "Data & AI Specialists",
      description: "Data scientists, machine learning engineers, AI researchers, and analytics professionals",
      icon: <Database className="w-6 h-6" />,
      skills: ["Python", "TensorFlow", "SQL", "Machine Learning", "Big Data", "Analytics"]
    },
    {
      title: "Cybersecurity Experts",
      description: "Security analysts, penetration testers, compliance specialists, and security architects",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Cybersecurity", "Penetration Testing", "CISSP", "Compliance", "Risk Management"]
    },
    {
      title: "System Administrators",
      description: "Network administrators, system engineers, database administrators, and IT support specialists",
      icon: <Server className="w-6 h-6" />,
      skills: ["Linux", "Windows Server", "Network Management", "Database Admin", "IT Support"]
    },
    {
      title: "IT Leadership",
      description: "CTOs, IT directors, technical leads, and project managers driving technology initiatives",
      icon: <Users className="w-6 h-6" />,
      skills: ["Leadership", "Strategy", "Project Management", "Team Building", "Technical Vision"]
    }
  ];

  const benefits = [
    {
      title: "95% Technical Match Accuracy",
      description: "Our AI algorithms ensure precise matching of technical skills with job requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "70% Faster IT Hiring",
      description: "Reduce time-to-hire for critical IT positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top IT talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Talent Discovery",
      description: "Advanced algorithms scan global networks to identify IT professionals with specific technical expertise"
    },
    {
      number: "2", 
      title: "Technical Skills Validation",
      description: "Comprehensive assessment of coding abilities, system knowledge, and technology proficiency"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for team dynamics, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new IT hires integrate quickly and effectively"
    }
  ];

  return (
    <PageTemplate 
      title="IT Recruitment Solutions" 
      description="AI-powered recruitment solutions for information technology professionals and technical teams"
    >
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized IT Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              IT Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your technology hiring with AI-powered IT recruitment solutions. We specialize in finding exceptional information technology professionals who drive innovation and digital transformation.
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

      {/* Core IT Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough IT Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to IT recruitment combines AI intelligence with deep technical expertise to identify and engage the best technology professionals.
            </p>
          </div>
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

      {/* Key Features Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Advanced IT Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive IT recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time technical skills assessment and validation",
                  "Automated coding challenge and system design evaluation", 
                  "Comprehensive technology stack compatibility analysis",
                  "AI-powered cultural fit and team dynamics assessment",
                  "Global IT talent network access and engagement",
                  "Specialized recruitment for emerging technologies",
                  "Executive IT leadership and CTO placement",
                  "Rapid scaling for technology transformation projects"
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

      {/* Critical IT Roles Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical IT Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From software development to cybersecurity, we understand the full spectrum of IT talent your organization needs to drive technological innovation.
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
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your IT Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of IT Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading technology companies who are already using our AI-powered IT recruitment solutions to build world-class development teams and drive digital innovation.
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
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our AI-Powered IT Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best IT talent automatically
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

export default ITRecruitmentSolutions;
