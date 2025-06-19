
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, FileText, Gavel, Users, Shield, Zap, ArrowRight, CheckCircle, Target, Search, Brain, BookOpen, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const LegalStaffingSolutions = () => {
  const legalChallenges = [
    {
      title: "AI-Powered Legal Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top legal professionals across all practice areas and specializations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Legal Expertise Assessment",
      description: "Comprehensive evaluation of legal knowledge, case experience, and specialized practice area competencies",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Rapid Legal Team Scaling",
      description: "Build robust legal teams quickly to support growing litigation, compliance, and transactional needs",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Associates & Junior Lawyers",
      description: "Junior associates, law clerks, legal assistants, and entry-level attorneys across practice areas",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Legal Research", "Case Analysis", "Document Review", "Legal Writing", "Client Communication", "Court Filing"]
    },
    {
      title: "Senior Associates",
      description: "Senior attorneys, subject matter experts, and experienced legal professionals in specialized practice areas",
      icon: <Scale className="w-6 h-6" />,
      skills: ["Advanced Legal Analysis", "Case Management", "Client Relations", "Negotiation", "Legal Strategy", "Mentoring"]
    },
    {
      title: "Partners & Senior Counsel",
      description: "Law firm partners, senior counsel, managing attorneys, and legal department heads",
      icon: <Gavel className="w-6 h-6" />,
      skills: ["Business Development", "Practice Management", "Strategic Planning", "Client Relations", "Leadership", "Risk Management"]
    },
    {
      title: "Corporate Counsel",
      description: "In-house attorneys, compliance officers, corporate legal advisors, and general counsel",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Corporate Law", "Compliance Management", "Contract Negotiation", "Risk Assessment", "Regulatory Affairs", "Business Advisory"]
    },
    {
      title: "Legal Support Staff",
      description: "Paralegals, legal secretaries, court reporters, and legal administrative professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Document Preparation", "Case Management", "Client Support", "Legal Administration", "Court Procedures", "Legal Technology"]
    },
    {
      title: "Legal Leadership",
      description: "General counsel, chief legal officers, legal directors, and executive legal leadership",
      icon: <Users className="w-6 h-6" />,
      skills: ["Legal Strategy", "Executive Leadership", "Budget Management", "Team Building", "Corporate Governance", "Strategic Advisory"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Legal Talent Discovery",
      description: "Advanced algorithms scan global networks to identify legal professionals with specific practice area expertise"
    },
    {
      number: "2", 
      title: "Legal Expertise Validation",
      description: "Comprehensive assessment of legal knowledge, case experience, and professional qualifications"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for ethical standards, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new legal hires integrate quickly and add immediate value"
    }
  ];

  return (
    <PageTemplate 
      title="Legal Staffing Solutions" 
      description="AI-powered recruitment solutions for legal professionals and law firms"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Legal Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Legal </span>
              <span className="bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary bg-clip-text text-transparent">
                Staffing Solutions
              </span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your legal hiring with AI-powered recruitment solutions. We specialize in finding exceptional legal professionals who provide expert counsel and drive successful outcomes.
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

      {/* Advanced Legal Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Legal Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the legal talent market, our Legal Staffing Solutions offer advanced AI algorithms to identify and engage top legal professionals across all practice areas.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of legal candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across practice areas and jurisdictions",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global legal talent network access and engagement",
                    "Specialized recruitment for emerging legal technologies",
                    "Executive legal leadership and general counsel placement"
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
                      <div className="text-sm text-synapse-gray">Legal Match Accuracy</div>
                      <div className="text-2xl font-bold text-synapse-dark">93%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Legal Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">62%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <Scale className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Case Success Rate</div>
                      <div className="text-2xl font-bold text-synapse-dark">91%</div>
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

      {/* Core Legal Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Legal Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to legal recruitment combines AI intelligence with deep legal expertise to identify and engage the best professionals.
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

      {/* Critical Legal Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Legal Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From associates to partners, we understand the full spectrum of legal talent your organization needs.
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
              Ready to Transform Your Legal Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Legal Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading law firms and corporations who are already using our AI-powered legal recruitment solutions to build world-class legal teams and achieve better outcomes.
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
