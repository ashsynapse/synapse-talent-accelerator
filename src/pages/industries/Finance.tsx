
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, DollarSign, BarChart3, Calculator, PieChart, Briefcase, Shield, Target, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Finance = () => {
  const financeChallenges = [
    {
      title: "Navigate Regulatory Complexity",
      description: "Find professionals who understand complex financial regulations and compliance requirements",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Assess Quantitative Skills",
      description: "Evaluate advanced analytical and mathematical competencies beyond traditional interviews",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Compete for Top Performers",
      description: "Attract high-caliber finance professionals in a competitive market with multiple opportunities",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Build Trust with Candidates",
      description: "Establish credibility and demonstrate your firm's reputation and growth potential",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Investment Banking",
      description: "Investment bankers, M&A specialists, equity research analysts, and capital markets professionals",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Financial Modeling", "M&A Analysis", "Valuation", "Capital Markets"]
    },
    {
      title: "Quantitative Finance",
      description: "Quants, algorithmic traders, derivatives specialists, and financial engineers",
      icon: <Calculator className="w-6 h-6" />,
      skills: ["Python/R", "Risk Modeling", "Derivatives", "Statistical Analysis"]
    },
    {
      title: "Financial Advisory",
      description: "Wealth managers, financial planners, investment advisors, and client relationship managers",
      icon: <DollarSign className="w-6 h-6" />,
      skills: ["Portfolio Management", "Client Relations", "Financial Planning", "Investment Strategy"]
    },
    {
      title: "Risk & Compliance",
      description: "Risk analysts, compliance officers, regulatory specialists, and audit professionals",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Risk Assessment", "Regulatory Knowledge", "Compliance", "Audit"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Financial Excellence",
      description: "Highlight your market reputation, investment performance, and career development opportunities to attract top financial talent who want to work with industry leaders.",
      icon: <Briefcase className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Specialized Talent Networks",
      description: "Create targeted connections with finance professionals across different specializations, nurturing relationships before opportunities arise.",
      icon: <BarChart3 className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Professional Experience",
      description: "Provide sophisticated, secure recruitment experiences that match the high standards expected by financial services professionals.",
      icon: <PieChart className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "50%", description: "faster time-to-hire for finance roles" },
    { metric: "90%", description: "candidate satisfaction with recruitment process" },
    { metric: "35%", description: "increase in qualified financial applicants" },
    { metric: "75%", description: "improvement in finance hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Finance Recruitment Solutions" 
      description="AI-powered recruitment for financial services and finance professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Financial Services Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Finance Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for top-tier finance positions by revolutionizing how you attract, hire, onboard, and retain highly skilled financial professionals. Our AI-powered platform understands the unique demands of financial services recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Finance Talent
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
              Hire the Best Finance Talent for Your Business
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate in financial services or are looking to fill specific finance roles in your company, you need to attract highly skilled, top-tier financial professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality finance talent and drive hiring results to stay competitive.
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

      {/* Finance Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Finance Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Financial services companies face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {financeChallenges.map((challenge, index) => (
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
              Critical Finance Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From investment banking to risk management, we understand the full spectrum of finance talent your organization needs.
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
              Proven Results for Financial Companies
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for finance recruitment.
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

      {/* Finance Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Financial Markets Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands financial markets, regulatory requirements, and career progression paths in the finance industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Investment Banking & Capital Markets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Risk Management & Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Quantitative Finance & Trading</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Wealth Management & Advisory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">FinTech & Digital Finance</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Finance Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Investment Banking</h4>
                    <p className="text-sm text-synapse-gray">M&A, capital markets, equity research</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Calculator className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Quantitative</h4>
                    <p className="text-sm text-synapse-gray">Algorithmic trading, risk modeling</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Wealth Management</h4>
                    <p className="text-sm text-synapse-gray">Portfolio management, advisory</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Risk & Compliance</h4>
                    <p className="text-sm text-synapse-gray">Regulatory compliance, risk assessment</p>
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

export default Finance;
