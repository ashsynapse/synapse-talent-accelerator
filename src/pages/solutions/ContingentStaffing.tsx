
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Clock, Zap, Users, Settings, Briefcase, Target, Calendar, TrendingUp } from "lucide-react";

const ContingentStaffing = () => {
  const mainChallenge = {
    title: "Reduce Workforce Flexibility Challenges and Control Costs",
    description: "Traditional staffing approaches struggle with fluctuating demands, seasonal peaks, and urgent project needs. Our AI-powered contingent staffing platform transforms how you access skilled professionals, providing the flexibility to scale your workforce up or down while maintaining quality and cost control.",
    icon: <Clock className="w-8 h-8 text-white" />
  };

  const solutionOverview = {
    title: "Access Flexible Talent When You Need It",
    description: "Built specifically for dynamic business environments, our Contingent Staffing solution offers rapid deployment of skilled professionals for temporary, contract, and project-based roles. Leverage AI-powered matching and streamlined processes to get the right talent working for you faster than ever.",
    features: [
      "Rapid placement of skilled professionals within 24-48 hours",
      "Flexible contract terms from short-term to extended projects",
      "Pre-vetted talent pools across all skill levels and industries",
      "Automated compliance and risk management",
      "Seamless onboarding and integration processes"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Transform Your Workforce Strategy & Maximize Efficiency",
    subtitle: "Eliminate the constraints of traditional hiring while accessing top-tier talent. Our contingent staffing solutions provide the agility and cost-effectiveness modern businesses need to thrive.",
    benefits: [
      {
        title: "Cost Control",
        description: "Manage labor costs effectively with flexible staffing arrangements that scale with your business needs.",
        icon: <Briefcase className="w-8 h-8 text-white" />
      },
      {
        title: "Agile Workforce",
        description: "Quickly adapt to changing business requirements and market conditions with on-demand talent access.",
        icon: <Calendar className="w-8 h-8 text-white" />
      },
      {
        title: "Risk Mitigation",
        description: "Reduce employment risks while maintaining operational flexibility and compliance with local regulations.",
        icon: <Users className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Contingent Staffing in Action",
    subtitle: "Flexible workforce solutions start here",
    description: "With our platform, businesses can access, evaluate, and deploy contingent talent — all while maintaining quality and compliance. Experience our world-class contingent staffing suite in action."
  };

  const additionalSections = [
    {
      title: "Rapid Deployment",
      description: "Get skilled professionals working for you within hours, not weeks. Our pre-vetted talent pools ensure quality matches for urgent staffing needs.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Easily scale your workforce based on business demands, seasonal fluctuations, and project requirements without long-term commitments.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Flexible Terms",
      description: "Customize contract terms and arrangements to match your specific business requirements and budget constraints.",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Contingent Staffing Solutions"
      description="Flexible staffing solutions for temporary and contract positions"
      badge="Recruitment Solution"
      heroTitle="Contingent Staffing Solutions"
      heroDescription="Access skilled professionals on-demand with flexible contingent staffing. Our AI-powered platform delivers quality talent for temporary, contract, and project-based roles with speed, flexibility, and cost control."
      ctaText="Get Contingent Staff"
      mainChallenge={mainChallenge}
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default ContingentStaffing;
