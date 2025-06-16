
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { GraduationCap, Users, TrendingUp, Target, Brain, Shield } from "lucide-react";

const ApprenticeshipAISourcing = () => {
  const features = [
    "AI-powered identification of apprenticeship candidates",
    "Skills potential assessment and career mapping",
    "Industry-specific apprenticeship program design",
    "Mentorship matching and support systems",
    "Progress tracking and development analytics",
    "Career pathway planning and guidance",
    "Educational institution partnerships",
    "Certification and qualification management"
  ];

  const benefits = [
    {
      title: "Future Talent Pipeline",
      description: "Build a sustainable talent pipeline with apprentices who grow into your company culture",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Cost-Effective Growth",
      description: "Develop talent at lower costs while building loyalty and long-term commitment",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Skills Development",
      description: "Shape apprentices with exactly the skills your organization needs for the future",
      icon: <Brain className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Manufacturing Company Builds Skilled Workforce",
    description: "A manufacturing company launched an apprenticeship program to address skills shortages. We helped them recruit and train 30 apprentices, with 90% converting to full-time roles.",
    results: ["30 apprentices recruited", "90% conversion rate", "Skills shortage solved"]
  };

  return (
    <SolutionPageTemplate
      title="Apprenticeship AI Sourcing"
      description="Specialized recruitment for apprenticeship programs and early career professionals"
      heroTitle="Apprenticeship AI Sourcing"
      heroDescription="Discover and develop the next generation of talent with our AI-powered apprenticeship sourcing. Build your future workforce while providing meaningful career opportunities."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default ApprenticeshipAISourcing;
