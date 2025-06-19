
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, DollarSign, FileText, TrendingUp, Users, Zap, ArrowRight, CheckCircle, Target, Search, Brain, BarChart3, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AccountingRecruitmentSolutions = () => {
  const accountingChallenges = [
    {
      title: "AI-Powered Accounting Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top accounting professionals across all financial specializations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Financial Expertise Assessment",
      description: "Comprehensive evaluation of accounting skills, compliance knowledge, and financial analysis capabilities",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Rapid Finance Team Scaling",
      description: "Build robust accounting teams quickly to support growing financial operations and compliance requirements",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Staff Accountants",
      description: "General ledger accountants, accounts payable/receivable specialists, and junior accounting professionals",
      icon: <Calculator className="w-6 h-6" />,
      skills: ["General Ledger", "Accounts Payable", "Accounts Receivable", "Financial Reporting", "QuickBooks", "Excel"]
    },
    {
      title: "Financial Analysts",
      description: "Budget analysts, financial planning professionals, and investment analysis specialists",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Financial Analysis", "Budgeting", "Forecasting", "Excel", "Financial Modeling", "Investment Analysis"]
    },
    {
      title: "Accounting Managers",
      description: "Accounting supervisors, team leads, and senior accounting professionals managing teams",
      icon: <Users className="w-6 h-6" />,
      skills: ["Team Leadership", "Financial Management", "Compliance", "Process Improvement", "Staff Development", "Strategic Planning"]
    },
    {
      title: "Controllers",
      description: "Financial controllers, assistant controllers, and senior finance leadership professionals",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Financial Controls", "Compliance Management", "Financial Reporting", "Leadership", "Strategic Planning", "Risk Management"]
    },
    {
      title: "Tax Specialists",
      description: "Tax preparers, tax analysts, and corporate tax professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Tax Preparation", "Tax Planning", "Corporate Tax", "Compliance", "Tax Research", "IRS Regulations"]
    },
    {
      title: "Audit Professionals",
      description: "Internal auditors, external auditors, and audit managers",
      icon: <Target className="w-6 h-6" />,
      skills: ["Audit Planning", "Risk Assessment", "Internal Controls", "Compliance Testing", "Audit Reporting", "SOX Compliance"]
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
      description: "Comprehensive assessment of accounting capabilities, compliance knowledge, and analytical abilities"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for organizational alignment, attention to detail, and professional ethics"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new accounting hires integrate quickly and add immediate value"
    }
  ];

  return (
    <PageTemplate 
      title="Accounting Recruitment Solutions" 
      description="AI-powered recruitment solutions for accounting professionals and finance teams"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Accounting Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Accounting Recruitment </span>
              <span className="bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your accounting hiring with AI-powered recruitment solutions. We specialize in finding exceptional accounting professionals who drive financial accuracy and business success.
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

      {/* Advanced Accounting Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Accounting Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the accounting talent market, our Accounting Recruitment Solutions offer advanced AI algorithms to identify and engage top accounting professionals across all specializations.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of accounting candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and specializations",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global accounting talent network access and engagement",
                    "Specialized recruitment for emerging financial technologies",
                    "Executive finance leadership and CFO placement"
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
                      <div className="text-sm text-synapse-gray">Accounting Skills Match</div>
                      <div className="text-2xl font-bold text-synapse-dark">97%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Accounting Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">65%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <DollarSign className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Cost Savings</div>
                      <div className="text-2xl font-bold text-synapse-dark">78%</div>
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

      {/* Core Accounting Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Accounting Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to accounting recruitment combines AI intelligence with deep financial expertise to identify and engage the best professionals.
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

      {/* Critical Accounting Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Accounting Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From entry-level to executive, we understand the full spectrum of accounting talent your organization needs.
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
              Ready to Transform Your Accounting Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Accounting Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading organizations who are already using our AI-powered accounting recruitment solutions to build world-class finance teams and drive business success.
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
