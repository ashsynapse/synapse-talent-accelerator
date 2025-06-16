
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Crown, Target, Users, Shield, TrendingUp, Brain } from "lucide-react";

const ExecutiveSearch = () => {
  const features = [
    "C-level and senior leadership recruitment",
    "Comprehensive executive assessment and evaluation",
    "Market intelligence and compensation analysis",
    "Confidential search and discrete candidate approach",
    "Leadership competency mapping",
    "Cultural fit assessment and integration support",
    "Board advisory and succession planning",
    "Executive onboarding and transition support"
  ];

  const benefits = [
    {
      title: "Leadership Excellence",
      description: "Find transformational leaders who drive organizational growth and success",
      icon: <Crown className="w-8 h-8 text-white" />
    },
    {
      title: "Strategic Impact",
      description: "Place executives who create measurable business impact and long-term value",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Cultural Alignment",
      description: "Ensure perfect cultural fit with comprehensive assessment and integration support",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Manufacturing Giant Finds New CEO",
    description: "A Fortune 500 manufacturing company needed a new CEO to lead digital transformation. We identified and placed a visionary leader who increased company valuation by 40% in 18 months.",
    results: ["CEO placement", "40% value increase", "Digital transformation"]
  };

  return (
    <SolutionPageTemplate
      title="Executive Search"
      description="Specialized recruitment for C-level and senior leadership positions"
      heroTitle="Executive Search"
      heroDescription="Find exceptional leaders who transform organizations. Our executive search practice specializes in placing C-level executives and senior leaders who drive strategic growth and innovation."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default ExecutiveSearch;
