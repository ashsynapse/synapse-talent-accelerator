
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale, Gavel, FileText, Shield, Building, Users, BookOpen, Target, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Legal = () => {
  const legalChallenges = [
    {
      title: "Navigate Specialization Complexity",
      description: "Find attorneys with specific practice area expertise and the right jurisdictional knowledge",
      icon: <Scale className="w-6 h-6" />
    },
    {
      title: "Assess Legal Competencies",
      description: "Evaluate complex legal knowledge, analytical skills, and client service capabilities",
      icon: <Gavel className="w-6 h-6" />
    },
    {
      title: "Compete for Top Legal Talent",
      description: "Attract high-caliber attorneys in a competitive market with multiple opportunities",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Match Cultural Fit",
      description: "Ensure legal professionals align with your firm's culture and client service approach",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Corporate Lawyers",
      description: "Corporate attorneys, securities lawyers, M&A specialists, and in-house legal counsel",
      icon: <Building className="w-6 h-6" />,
      skills: ["Corporate Law", "Securities", "M&A", "Contract Negotiation"]
    },
    {
      title: "Litigation Specialists",
      description: "Trial attorneys, litigation associates, dispute resolution experts, and legal advocates",
      icon: <Gavel className="w-6 h-6" />,
      skills: ["Civil Litigation", "Trial Advocacy", "Dispute Resolution", "Legal Research"]
    },
    {
      title: "Intellectual Property",
      description: "Patent attorneys, trademark specialists, IP litigation experts, and technology transfer professionals",
      icon: <BookOpen className="w-6 h-6" />,
      skills: ["Patent Law", "Trademark", "IP Licensing", "Technology Law"]
    },
    {
      title: "Compliance & Regulatory",
      description: "Regulatory compliance specialists, risk management attorneys, and governance professionals",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Regulatory Compliance", "Risk Management", "Corporate Governance", "Policy Development"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Legal Excellence",
      description: "Highlight your firm's reputation, notable cases, and career advancement opportunities to attract top legal talent who want to work with industry leaders.",
      icon: <Scale className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Specialized Legal Networks",
      description: "Create targeted connections with legal professionals across different practice areas, nurturing relationships before opportunities arise.",
      icon: <FileText className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Professional Experience",
      description: "Provide sophisticated, confidential recruitment experiences that match the high standards expected by legal professionals.",
      icon: <Target className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "40%", description: "faster time-to-hire for legal roles" },
    { metric: "92%", description: "candidate satisfaction with recruitment process" },
    { metric: "45%", description: "increase in qualified legal applicants" },
    { metric: "78%", description: "improvement in legal hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Legal Recruitment Solutions" 
      description="AI-powered recruitment for legal professionals and law firms"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Legal Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Legal Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for top legal positions by revolutionizing how you attract, hire, onboard, and retain highly skilled legal professionals. Our AI-powered platform understands the unique demands of legal recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Legal Talent
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
              Hire the Best Legal Talent for Your Organization
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate a law firm or are looking to fill specific legal roles in your organization, you need to attract highly skilled, top-tier legal professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality legal talent and drive hiring results to stay competitive.
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

      {/* Legal Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Legal Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Legal organizations face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {legalChallenges.map((challenge, index) => (
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
              Critical Legal Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From corporate law to litigation, we understand the full spectrum of legal talent your organization needs.
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
              Proven Results for Legal Organizations
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for legal recruitment.
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

      {/* Legal Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Legal Practice Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands legal specialties, jurisdictional requirements, and career progression paths in the legal industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Corporate & Securities Law</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Litigation & Dispute Resolution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Intellectual Property & Technology</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Regulatory Compliance & Risk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Employment & Labor Law</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Legal Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Corporate Law</h4>
                    <p className="text-sm text-synapse-gray">M&A, securities, corporate governance</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Gavel className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Litigation</h4>
                    <p className="text-sm text-synapse-gray">Trial advocacy, dispute resolution</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Intellectual Property</h4>
                    <p className="text-sm text-synapse-gray">Patents, trademarks, licensing</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Compliance</h4>
                    <p className="text-sm text-synapse-gray">Regulatory, risk management</p>
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

export default Legal;
