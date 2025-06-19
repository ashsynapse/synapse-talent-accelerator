
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Brain, Search, Target, Users, Eye, Zap, Shield, Clock } from "lucide-react";

const PassiveRecruitment = () => {
  const solutionOverview = {
    title: "Discover World-Class Passive Talent Effortlessly",
    description: "Built specifically for accessing the hidden talent market, our Passive Recruitment Solutions offer advanced AI algorithms to identify and engage professionals who aren't actively seeking new roles. Leverage stealth engagement strategies and relationship building to attract top-tier talent.",
    features: [
      "AI-powered identification of passive candidates across all platforms",
      "Discreet engagement strategies that respect candidate privacy",
      "Comprehensive talent mapping across industries and skill sets",
      "Long-term relationship building for future opportunities",
      "Advanced behavioral analysis and engagement optimization"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Unlock Premium Talent & Gain Competitive Advantage",
    subtitle: "Transform your talent acquisition strategy by accessing the 70% of professionals who aren't actively job searching but are open to exceptional opportunities. Our passive sourcing delivers quality over quantity.",
    benefits: [
      {
        title: "Hidden Talent Access",
        description: "Reach top-tier professionals who aren't visible through traditional recruitment channels but represent the best in their fields.",
        icon: <Search className="w-8 h-8 text-white" />
      },
      {
        title: "Competitive Advantage", 
        description: "Access candidates before they enter the active job market, giving you first-mover advantage on premium talent.",
        icon: <Zap className="w-8 h-8 text-white" />
      },
      {
        title: "Quality Focus",
        description: "Focus on high-caliber candidates who are currently employed and successful, ensuring proven track records.",
        icon: <Shield className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Passive Recruitment in Action",
    subtitle: "Intelligence-driven passive talent discovery starts here",
    description: "With our platform, you can identify, analyze, and engage passive talent — all while maintaining discretion and building meaningful professional relationships. Experience our world-class passive recruitment suite in action."
  };

  const additionalSections = [
    {
      title: "Stealth Discovery",
      description: "Advanced algorithms identify passive candidates who aren't actively job searching but match your specific requirements perfectly.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Relationship Building",
      description: "Long-term engagement strategies to nurture passive talent for current and future opportunities with personalized outreach.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Strategic Pipeline",
      description: "Build comprehensive talent pipelines for future hiring needs and succession planning with continuous market intelligence.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Passive Recruitment Solutions"
      description="AI-powered passive talent discovery and engagement strategies"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Passive Recruitment </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Unlock the hidden talent market with our AI-powered passive recruitment solution. Identify, engage, and attract top-tier professionals who aren't actively looking but are open to exceptional opportunities."
      ctaText="Start Passive Recruitment"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default PassiveRecruitment;
