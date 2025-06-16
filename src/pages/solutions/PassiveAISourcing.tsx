
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Brain, Users, Target, Clock, TrendingUp, Shield } from "lucide-react";

const PassiveAISourcing = () => {
  const features = [
    "AI-powered candidate identification from social platforms",
    "Advanced matching algorithms for skill assessment",
    "Automated outreach and engagement sequences",
    "Real-time candidate profile analysis",
    "Integration with major professional networks",
    "Customizable search parameters and filters",
    "Detailed candidate scoring and ranking",
    "Automated follow-up and nurturing workflows"
  ];

  const benefits = [
    {
      title: "Faster Results",
      description: "Reduce time-to-hire by 60% with automated candidate discovery and engagement",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Higher Quality",
      description: "Access to passive candidates who aren't actively job searching but are open to opportunities",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Scalable Process",
      description: "Handle multiple searches simultaneously with AI-driven automation",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Tech Startup Scales Engineering Team",
    description: "A fast-growing tech startup needed to hire 15 senior engineers within 3 months. Using our Passive AI Sourcing solution, they were able to identify and engage top-tier candidates who weren't actively job searching.",
    results: ["15 hires in 2 months", "85% acceptance rate", "40% cost reduction"]
  };

  return (
    <SolutionPageTemplate
      title="Passive AI Sourcing"
      description="Leverage AI to discover and engage passive candidates who aren't actively job searching"
      heroTitle="Passive AI Sourcing"
      heroDescription="Discover hidden talent with AI-powered sourcing that identifies and engages passive candidates across professional networks and social platforms."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default PassiveAISourcing;
