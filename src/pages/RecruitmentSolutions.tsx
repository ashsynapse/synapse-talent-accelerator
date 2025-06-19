
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Users, Target, Clock, Globe, UserCheck, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const solutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Passive Recruitment",
    description: "Smart sourcing to identify and engage top talent who aren't actively job searching",
    href: "/recruitment-solutions/passive-recruitment"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Candidate Sourcing",
    description: "Comprehensive candidate sourcing strategies to find the perfect match for your roles",
    href: "/recruitment-solutions/candidate-sourcing"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Staffing",
    description: "Specialized staffing solutions for short-term and long-term project requirements",
    href: "/recruitment-solutions/project-staffing"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Executive Search",
    description: "Specialized recruitment for C-level and senior leadership positions",
    href: "/recruitment-solutions/executive-search"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Remote Staffing",
    description: "Global remote talent acquisition for distributed teams and remote-first companies",
    href: "/recruitment-solutions/remote-staffing"
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Permanent Staffing",
    description: "Full-time permanent staffing services across all industries and skill levels",
    href: "/recruitment-solutions/permanent-staffing"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Contingent Staffing",
    description: "Flexible staffing solutions for temporary and contract positions",
    href: "/recruitment-solutions/contingent-staffing"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Apprenticeship Recruitment",
    description: "Specialized recruitment for apprenticeship programs and early career professionals",
    href: "/recruitment-solutions/apprenticeship-recruitment"
  }
];

const RecruitmentSolutions = () => {
  return (
    <PageTemplate 
      title="Recruitment Solutions"
      description="Comprehensive intelligent recruitment solutions for modern hiring challenges"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment <span className="text-synapse-primary">Solutions</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              End-to-end recruitment solutions powered by intelligent technology and backed by global expertise. From passive recruitment to executive search, we deliver tailored strategies that transform your hiring process.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Start Recruitment Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark leading-tight">
                Transform Your Hiring with AI-Powered Recruitment Solutions
              </h2>
              <p className="text-lg text-synapse-gray leading-relaxed">
                Experience the future of recruitment with our comprehensive suite of intelligent solutions. From identifying passive talent to managing complex staffing projects, we deliver results that drive your business forward.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Advanced AI algorithms for precise candidate matching</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Global talent pool access across all industries</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">End-to-end recruitment process automation</p>
                </div>
              </div>
              <Button 
                className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6c7b520d-1b7f-4b14-9afd-af1404a725fc.png"
                  alt="Professional handshake in modern office setting"
                  className="w-full h-auto rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Our Recruitment Solutions
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Discover our comprehensive range of recruitment solutions designed to meet your unique hiring needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{solution.title}</h3>
                  <p className="text-synapse-gray mb-6 flex-grow leading-relaxed">{solution.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = solution.href}
                  >
                    Learn More
                  </Button>
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

export default RecruitmentSolutions;
