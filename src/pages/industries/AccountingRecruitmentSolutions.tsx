
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, PieChart, BarChart3, FileText, Users, Zap, ArrowRight, CheckCircle, Search, Target, TrendingUp } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AccountingRecruitmentSolutions = () => {
  const accountingChallenges = [
    {
      title: "AI-Powered Accounting Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top accounting professionals with proven financial expertise and compliance knowledge",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Financial Skills Assessment",
      description: "Comprehensive evaluation of accounting capabilities, regulatory knowledge, and analytical competencies",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Rapid Finance Team Scaling",
      description: "Build robust accounting and finance teams quickly to support growing business operations and compliance requirements",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Staff Accountants",
      description: "General ledger accountants, accounts payable/receivable specialists, and financial record keepers",
      icon: <Calculator className="w-6 h-6" />,
      skills: ["General Ledger", "AP/AR Management", "Month-end Close", "Financial Reporting", "Bookkeeping", "Journal Entries"]
    },
    {
      title: "Financial Analysts",
      description: "Budget analysts, financial planners, variance analysts, and business performance specialists",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Financial Analysis", "Budgeting & Forecasting", "Variance Analysis", "Financial Modeling", "Business Intelligence", "Data Analysis"]
    },
    {
      title: "Senior Accountants",
      description: "Accounting supervisors, senior financial analysts, and team coordination specialists",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Advanced Financial Reporting", "Team Leadership", "Process Improvement", "Audit Coordination", "Compliance Management", "Training & Development"]
    },
    {
      title: "Controllers & Managers",
      description: "Accounting managers, financial controllers, and department leadership professionals",
      icon: <Users className="w-6 h-6" />,
      skills: ["Financial Management", "Strategic Planning", "Team Leadership", "Regulatory Compliance", "Risk Management", "Executive Reporting"]
    },
    {
      title: "Tax Specialists",
      description: "Tax accountants, compliance specialists, and regulatory reporting professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Tax Preparation", "Tax Compliance", "Regulatory Reporting", "Tax Planning", "Audit Support", "Tax Research"]
    },
    {
      title: "Accounting Leadership",
      description: "CFOs, finance directors, and executive accounting leadership driving organizational growth",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Financial Strategy", "Executive Leadership", "Corporate Finance", "Team Building", "Financial Transformation", "P&L Management"]
    }
  ];

  const benefits = [
    {
      title: "94% Accounting Match Accuracy",
      description: "Our AI algorithms ensure precise matching of accounting skills with financial requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "68% Faster Accounting Hiring",
      description: "Reduce time-to-hire for critical accounting positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Accounting Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top accounting talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Accounting Talent Discovery",
      description: "Advanced algorithms scan global networks to identify accounting professionals with specific financial expertise"
    },
    {
      number: "2", 
      title: "Financial Skills Validation",
      description: "Comprehensive assessment of accounting knowledge, compliance understanding, and analytical capabilities"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for team dynamics, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new accounting hires integrate quickly and maintain accuracy"
    }
  ];

  return (
    <PageTemplate 
      title="Accounting Recruitment Solutions" 
      description="AI-powered recruitment solutions for accounting professionals and financial teams"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Accounting Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Accounting Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your financial hiring with AI-powered accounting recruitment solutions. We specialize in finding exceptional accounting professionals who ensure financial accuracy, compliance, and strategic growth.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Accounting Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Accounting Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Accounting Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to accounting recruitment combines AI intelligence with deep financial expertise to identify and engage the best accounting professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {accountingChallenges.map((challenge, index) => (
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
                Advanced Accounting Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive accounting recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time financial skills assessment and validation",
                  "Automated compliance knowledge and regulatory evaluation", 
                  "Comprehensive accounting software proficiency analysis",
                  "AI-powered cultural fit and team dynamics assessment",
                  "Global accounting talent network access and engagement",
                  "Specialized recruitment for emerging financial technologies",
                  "Executive accounting leadership and CFO placement",
                  "Rapid scaling for financial transformation projects"
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

      {/* Critical Accounting Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Accounting Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From entry-level to executive leadership, we understand the full spectrum of accounting talent your organization needs to maintain financial excellence.
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
              Ready to Transform Your Accounting Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Accounting Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading organizations who are already using our AI-powered accounting recruitment solutions to build world-class finance teams and ensure regulatory compliance.
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
              Our AI-Powered Accounting Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best accounting talent automatically
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

export default AccountingRecruitmentSolutions;
