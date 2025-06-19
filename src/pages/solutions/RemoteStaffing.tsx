
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Globe, Users, Clock, Zap, Monitor, MapPin, Shield, Target } from "lucide-react";

const RemoteStaffing = () => {
  const solutionOverview = {
    title: "Build World-Class Remote Teams Effortlessly",
    description: "Built specifically for the remote-first future, our Remote Staffing solution offers access to global talent with proven remote work capabilities. Leverage AI-powered cultural matching and time zone optimization to build distributed teams that outperform traditional setups.",
    features: [
      "Access to skilled professionals worldwide across all time zones",
      "Pre-vetted candidates with proven remote work experience",
      "Cultural integration and communication skills assessment",
      "Time zone optimization for optimal collaboration",
      "Remote onboarding and integration support"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Unlock Global Potential & Drive Innovation",
    subtitle: "Transform your hiring approach with access to the world's best talent. Our remote staffing solutions bring diverse perspectives and specialized skills directly to your distributed teams.",
    benefits: [
      {
        title: "Global Reach",
        description: "Access the world's best talent regardless of location, opening unlimited possibilities for your team composition.",
        icon: <MapPin className="w-8 h-8 text-white" />
      },
      {
        title: "Cost Effectiveness",
        description: "Reduce operational costs while accessing top-tier talent from global markets with competitive rates.",
        icon: <Target className="w-8 h-8 text-white" />
      },
      {
        title: "Diverse Perspectives",
        description: "Bring fresh perspectives and diverse thinking to your remote teams, driving innovation and creative solutions.",
        icon: <Shield className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Remote Staffing in Action",
    subtitle: "Global talent acquisition starts here",
    description: "With our platform, you can discover, evaluate, and onboard global talent — all while ensuring cultural fit and seamless remote collaboration. Experience our world-class remote staffing suite in action."
  };

  const additionalSections = [
    {
      title: "Remote-Ready Professionals",
      description: "Pre-vetted candidates with proven remote work experience and digital collaboration skills for immediate productivity.",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: "Time Zone Optimization",
      description: "Strategic placement considering time zone alignment for optimal collaboration and communication effectiveness.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Cultural Integration",
      description: "Focus on candidates who align with your company culture despite geographical distance for seamless team integration.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Remote Staffing Solutions"
      description="Global remote talent acquisition for distributed teams and remote-first companies"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Remote Staffing </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Build exceptional remote teams with global talent. Our AI-powered remote staffing platform connects you with skilled professionals worldwide, ensuring seamless integration and productivity from day one."
      ctaText="Build Remote Team"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default RemoteStaffing;
