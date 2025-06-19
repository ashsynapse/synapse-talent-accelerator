
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calculator, PieChart, BarChart3, FileText, Users, Zap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const AccountingRecruitmentSolutions = () => {
  const accountingChallenges = [
    {
      title: "Find Skilled Accountants",
      description: "Locate experienced accounting professionals with technical expertise and attention to detail",
      icon: <Calculator className="w-6 h-6" />
    },
    {
      title: "Assess Financial Skills",
      description: "Evaluate accounting knowledge, compliance understanding, and analytical capabilities",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Build Finance Teams",
      description: "Scale your accounting and finance department with qualified professionals",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Staff Accountants",
      description: "General ledger accountants, accounts payable/receivable specialists, and bookkeepers",
      icon: <Calculator className="w-6 h-6" />,
      skills: ["General Ledger", "AP/AR", "Bookkeeping", "Month-end Close"]
    },
    {
      title: "Financial Analysts",
      description: "Budget analysts, financial planners, and business analysts",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Financial Analysis", "Budgeting", "Forecasting", "Variance Analysis"]
    },
    {
      title: "Senior Accountants",
      description: "Accounting managers, controllers, and senior financial professionals",
      icon: <FileText className="w-6 h-6" />,
      skills: ["Team Leadership", "Financial Reporting", "Compliance", "Strategic Planning"]
    }
  ];

  return (
    <PageTemplate 
      title="Accounting Recruitment Solutions" 
      description="Specialized recruitment solutions for accounting professionals"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Accounting Recruitment Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Accounting Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Connect with exceptional accounting professionals who ensure financial accuracy and compliance. Our specialized recruitment solutions understand the precision required in accounting roles.
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

      <section className="py-16 bg-white">
        <div className="container-wide">
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

      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Accounting Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From entry-level to leadership, we understand the full spectrum of accounting talent your organization needs.
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

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default AccountingRecruitmentSolutions;
