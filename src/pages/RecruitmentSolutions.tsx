
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Clock, Globe, UserCheck, Briefcase, GraduationCap, CheckCircle, Zap, Shield } from "lucide-react";
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              End-to-end recruitment solutions powered by intelligent technology and backed by global expertise. From passive recruitment to executive search, we deliver tailored strategies that transform your hiring process.
            </p>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-6">
                  Revolutionizing Recruitment with AI-Powered Intelligence
                </h2>
                <p className="text-lg text-synapse-gray leading-relaxed mb-8">
                  Our comprehensive recruitment solutions leverage cutting-edge artificial intelligence to transform how organizations discover, engage, and hire top talent. From passive candidate identification to executive search, we deliver results that exceed expectations.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-synapse-dark mb-2">Global Talent Network</h3>
                    <p className="text-synapse-gray">Access to millions of qualified candidates worldwide through our advanced AI sourcing algorithms and global recruitment network.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-synapse-dark mb-2">Lightning-Fast Results</h3>
                    <p className="text-synapse-gray">Reduce time-to-hire by up to 75% with automated candidate matching and intelligent screening processes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-synapse-dark mb-2">Quality Guaranteed</h3>
                    <p className="text-synapse-gray">Every placement is backed by comprehensive vetting, cultural fit assessment, and our commitment to long-term success.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = "/contact"}
                >
                  Start Your Recruitment Journey
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/bcf466b1-f6e4-4c1d-ad04-e6de0ade16e9.png"
                  alt="AI-powered recruitment dashboard showing candidate analytics and matching algorithms"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-synapse-primary/10 to-transparent"></div>
              </div>
              
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-synapse-secondary to-synapse-primary rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Our Recruitment Solutions
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Choose from our comprehensive suite of recruitment services designed to meet your specific hiring needs.
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
