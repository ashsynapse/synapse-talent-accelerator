
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Gavel, FileText, Shield, Users, Zap, ArrowRight, CheckCircle, Search, Target, TrendingUp } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const LegalStaffingSolutions = () => {
  const legalChallenges = [
    {
      title: "AI-Powered Legal Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top legal professionals with proven expertise and jurisdictional knowledge",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Legal Expertise Assessment",
      description: "Comprehensive evaluation of legal knowledge, case management skills, and client service capabilities",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Rapid Legal Team Scaling",
      description: "Build robust legal departments quickly to support growing compliance and litigation requirements",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Attorneys & Lawyers",
      description: "Corporate attorneys, litigation lawyers, transactional counsel, and specialized legal practitioners",
      icon: <Scale className="w-6 h-6" />,
      skills: ["Legal Research", "Case Management", "Client Relations", "Court Proceedings", "Contract Negotiation", "Legal Writing"]
    },
    {
      title: "Paralegals",
      description: "Legal assistants, case coordinators, document specialists, and litigation support professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Document Preparation", "Legal Research", "Case Support", "Client Communication", "Discovery Management", "File Organization"]
    },
    {
      title: "Legal Support Staff",
      description: "Legal secretaries, court reporters, legal administrators, and administrative specialists",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Administrative Support", "Document Management", "Scheduling", "Client Services", "Court Filing", "Legal Technology"]
    },
    {
      title: "Compliance Specialists",
      description: "Regulatory compliance officers, legal analysts, and policy implementation professionals",
      icon: <Gavel className="w-6 h-6" />,
      skills: ["Regulatory Compliance", "Policy Development", "Risk Assessment", "Audit Support", "Legal Analysis", "Training & Education"]
    },
    {
      title: "Contract Specialists",
      description: "Contract managers, legal analysts, and agreement negotiation professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Contract Management", "Legal Review", "Negotiation", "Risk Analysis", "Vendor Relations", "Agreement Drafting"]
    },
    {
      title: "Legal Leadership",
      description: "General Counsel, legal directors, and executive legal leadership driving organizational protection",
      icon: <Users className="w-6 h-6" />,
      skills: ["Legal Strategy", "Executive Leadership", "Risk Management", "Team Building", "Legal Transformation", "Corporate Governance"]
    }
  ];

  const benefits = [
    {
      title: "96% Legal Match Accuracy",
      description: "Our AI algorithms ensure precise matching of legal skills with jurisdictional requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "72% Faster Legal Hiring",
      description: "Reduce time-to-hire for critical legal positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Legal Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top legal talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Legal Talent Discovery",
      description: "Advanced algorithms scan global networks to identify legal professionals with specific jurisdictional expertise"
    },
    {
      number: "2", 
      title: "Legal Skills Validation",
      description: "Comprehensive assessment of legal knowledge, case experience, and professional competencies"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for team dynamics, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new legal hires integrate quickly and maintain compliance"
    }
  ];

  return (
    <PageTemplate 
      title="Legal Staffing Solutions" 
      description="AI-powered recruitment solutions for legal professionals and law departments"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Legal Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Legal Staffing Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your legal hiring with AI-powered legal staffing solutions. We specialize in finding exceptional legal professionals who provide expert counsel, ensure compliance, and protect organizational interests.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Legal Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Legal Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Legal Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to legal recruitment combines AI intelligence with deep legal expertise to identify and engage the best legal professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {legalChallenges.map((challenge, index) => (
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
                Advanced Legal Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive legal recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time legal expertise assessment and validation",
                  "Automated jurisdictional knowledge and bar admission verification", 
                  "Comprehensive legal specialization compatibility analysis",
                  "AI-powered cultural fit and team dynamics assessment",
                  "Global legal talent network access and engagement",
                  "Specialized recruitment for emerging legal technologies",
                  "Executive legal leadership and General Counsel placement",
                  "Rapid scaling for legal transformation initiatives"
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

      {/* Critical Legal Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Legal Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From legal counsel to support staff, we understand the full spectrum of legal talent your organization needs to maintain legal excellence.
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
              Ready to Transform Your Legal Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Legal Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading organizations who are already using our AI-powered legal recruitment solutions to build world-class legal teams and ensure comprehensive legal protection.
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
              Our AI-Powered Legal Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best legal talent automatically
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

export default LegalStaffingSolutions;
