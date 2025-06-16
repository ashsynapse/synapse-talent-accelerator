
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { UserCheck, Target, Shield, TrendingUp, Clock, Users } from "lucide-react";

const PermanentPlacement = () => {
  const features = [
    "Full-time permanent placement across all levels",
    "Comprehensive candidate screening and assessment",
    "Cultural fit evaluation and team integration",
    "Salary benchmarking and negotiation support",
    "Long-term retention strategies and follow-up",
    "Replacement guarantee and ongoing support",
    "Reference verification and background checks",
    "Onboarding assistance and integration planning"
  ];

  const benefits = [
    {
      title: "Long-term Success",
      description: "Build stable teams with permanent hires who grow with your organization",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Quality Assurance",
      description: "Rigorous screening ensures only the best candidates join your permanent team",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "Cultural Integration",
      description: "Perfect cultural fit assessment ensures seamless team integration and retention",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Consulting Firm Builds Core Team",
    description: "A management consulting firm needed to hire 20 permanent consultants to expand their core team. We delivered high-quality candidates with 95% retention after 12 months.",
    results: ["20 permanent hires", "95% retention rate", "Core team expansion"]
  };

  return (
    <SolutionPageTemplate
      title="Permanent Placement"
      description="Full-time permanent placement services across all industries and skill levels"
      heroTitle="Permanent Placement"
      heroDescription="Build your core team with permanent hires who drive long-term success. Our comprehensive placement process ensures perfect matches for lasting employment relationships."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default PermanentPlacement;
