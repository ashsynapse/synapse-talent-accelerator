
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Database, Cloud, Smartphone, Brain, Shield, Cpu, Zap, TrendingUp, Users, Target, Clock, CheckCircle, Lightbulb, Activity, Settings } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Technology = () => {
  const keyRoles = [
    {
      title: "Software Engineers",
      description: "Full-stack developers, frontend specialists, backend engineers, and mobile app developers",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Data Scientists",
      description: "AI/ML engineers, data analysts, business intelligence specialists, and research scientists",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "DevOps Engineers",
      description: "Cloud architects, infrastructure engineers, CI/CD specialists, and security engineers",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Product Managers",
      description: "Technical product managers, UX/UI designers, and digital product strategists",
      icon: <Smartphone className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description: "AI researchers, ML engineers, deep learning specialists, and NLP experts",
      icon: <Brain className="w-6 h-6 text-white" />
    },
    {
      title: "Cybersecurity",
      description: "Security analysts, ethical hackers, compliance specialists, and risk assessors",
      icon: <Shield className="w-6 h-6 text-white" />
    },
    {
      title: "Cloud Computing",
      description: "AWS/Azure/GCP specialists, microservices architects, and containerization experts",
      icon: <Cloud className="w-6 h-6 text-white" />
    },
    {
      title: "Emerging Technologies",
      description: "Blockchain developers, IoT specialists, quantum computing researchers, and AR/VR engineers",
      icon: <Zap className="w-6 h-6 text-white" />
    }
  ];

  const businessImpacts = [
    {
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />,
      title: "Accelerate Innovation",
      description: "Find top-tier engineers who drive product development and technological breakthroughs"
    },
    {
      icon: <Clock className="w-8 h-8 text-synapse-secondary" />,
      title: "Reduce Time-to-Market",
      description: "Build high-performing teams faster to launch products ahead of competitors"
    },
    {
      icon: <Target className="w-8 h-8 text-synapse-tertiary" />,
      title: "Scale Technical Teams",
      description: "Rapidly expand engineering capacity while maintaining code quality and culture fit"
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-synapse-primary" />,
      title: "AI-Powered Technical Assessment",
      description: "Advanced algorithms evaluate coding skills, system design capabilities, and technical problem-solving abilities to identify top engineering talent."
    },
    {
      icon: <Users className="w-12 h-12 text-synapse-secondary" />,
      title: "Cultural Fit Analysis",
      description: "Ensure new hires align with your startup culture, work style, and collaborative approach through intelligent personality and values matching."
    },
    {
      icon: <Zap className="w-12 h-12 text-synapse-tertiary" />,
      title: "Rapid Scaling Solutions",
      description: "Build entire engineering teams quickly with our specialized network of pre-vetted developers, architects, and technical leaders."
    }
  ];

  const keyFeatures = [
    "Technical skill assessment and validation",
    "Startup culture and agility matching",
    "Rapid team scaling capabilities",
    "Remote-first talent acquisition",
    "Competitive compensation benchmarking",
    "Retention-focused placement strategies"
  ];

  return (
    <PageTemplate 
      title="Technology Industry Recruitment" 
      description="AI-powered recruitment solutions for technology companies and startups"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Expertise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Power Your Tech Innovation with Elite Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              In the fast-paced technology sector, the right talent can make or break your next breakthrough. Our AI-powered recruitment platform specializes in connecting innovative tech companies with exceptional engineers, developers, and technical leaders who drive digital transformation.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Start Building Your Tech Team
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition with Storytelling */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Overcome Technology Hiring Challenges
                </h2>
                <p className="text-synapse-gray mb-6">
                  The technology landscape evolves at lightning speed, and finding talent who can keep pace is your biggest competitive advantage. Whether you're a startup building your first engineering team or an enterprise scaling for growth, we understand the unique challenges of tech recruitment.
                </p>
                <div className="space-y-4 mb-8">
                  {keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                      <span className="text-synapse-gray">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent text-lg"
                  onClick={() => window.location.href = "/recruitment-tools"}
                >
                  Explore Our Tech Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft">
                        {solution.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-synapse-dark mb-2">{solution.title}</h4>
                        <p className="text-sm text-synapse-gray">{solution.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Drive Technology Excellence Across Your Organization
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Transform your technical capabilities with strategic talent acquisition that fuels innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {businessImpacts.map((impact, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                    {impact.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {impact.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {impact.description}
                  </p>
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
              Critical Technology Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From individual contributors to technical leaders, we find talent that drives your technology forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Technology Specializations & Emerging Fields
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Stay ahead of the curve with experts in cutting-edge technologies
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {spec.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {spec.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-synapse-dark">
              Why Technology Leaders Choose Synapse
            </h2>
            <p className="text-lg text-synapse-gray mb-12">
              Our AI-first approach goes beyond traditional recruiting. We understand technology stacks, evaluate problem-solving capabilities, and assess cultural alignment to ensure every placement drives your innovation forward.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Deep Technical Expertise</h3>
                <p className="text-synapse-gray">Our platform understands programming languages, frameworks, and emerging technologies to match the right skills with your needs.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">AI-Powered Assessment</h3>
                <p className="text-synapse-gray">Advanced algorithms evaluate technical skills, problem-solving abilities, and learning capacity to identify top performers.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Rapid Team Building</h3>
                <p className="text-synapse-gray">Scale your engineering teams quickly without compromising on quality or cultural fit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Ready to Transform Your Technology Team?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join innovative tech companies who are already using Synapse to build world-class engineering teams that drive breakthrough innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Start Building Your Team <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white text-lg px-8 py-4 rounded-xl"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Explore Our Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Technology;
