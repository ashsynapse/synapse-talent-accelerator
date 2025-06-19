
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Crown, Target, Shield, Users, Brain, Search, CheckCircle, Zap } from "lucide-react";

const ExecutiveSearch = () => {
  const solutionOverview = {
    title: "Connect with Executive Leaders Who Transform Organizations",
    description: "Built specifically for C-level and senior leadership recruitment, our Executive Search service offers comprehensive assessment and confidential processes. Leverage deep market intelligence and proven executive evaluation to secure leaders who align with your vision and drive growth.",
    features: [
      "Specialized focus on CEO, CTO, CFO, and senior executive positions",
      "Confidential search processes protecting all stakeholders",
      "Comprehensive leadership assessment and cultural fit evaluation",
      "Board-level presentations and stakeholder management",
      "Market intelligence and compensation benchmarking"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Secure Leadership That Drives Transformation",
    subtitle: "Transform your organization with executive leaders who have demonstrated success in similar roles and challenges. Our comprehensive search process ensures strategic fit and long-term success.",
    benefits: [
      {
        title: "Strategic Leadership",
        description: "Access transformational leaders with proven track records who drive organizational growth and innovation.",
        icon: <Brain className="w-8 h-8 text-white" />
      },
      {
        title: "Market Intelligence",
        description: "Deep insights into executive compensation, market positioning, and competitive landscape intelligence.",
        icon: <Search className="w-8 h-8 text-white" />
      },
      {
        title: "Cultural Alignment",
        description: "Comprehensive assessment ensuring executives align with your company values, vision, and leadership philosophy.",
        icon: <Zap className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Executive Search in Action",
    subtitle: "Executive leadership recruitment starts here",
    description: "With our platform, you can identify, assess, and secure executive talent — all while maintaining confidentiality and ensuring strategic fit. Experience our world-class executive search suite in action."
  };

  const additionalSections = [
    {
      title: "C-Level Expertise",
      description: "Specialized focus on CEO, CTO, CFO, and other executive-level positions with deep understanding of leadership requirements.",
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: "Confidential Search",
      description: "Discreet executive search processes that protect both client and candidate privacy throughout the engagement.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Leadership Assessment",
      description: "Comprehensive evaluation of leadership capabilities, strategic thinking, and cultural fit for long-term success.",
      icon: <Target className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Executive Search Services"
      description="Specialized recruitment for C-level and senior leadership positions"
      badge="Recruitment Solution"
      heroTitle="Executive Search Services"
      heroDescription="Find transformational leaders who drive success. Our AI-enhanced executive search combines traditional recruiting expertise with cutting-edge technology to identify and attract top-tier leadership talent."
      ctaText="Find Executive Talent"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default ExecutiveSearch;
