
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Search, Target, Zap, Clock, TrendingUp, Users } from "lucide-react";

const SmartCandidateSourcing = () => {
  const features = [
    "Real-time candidate polling and fit score analysis",
    "Automated background talent discovery",
    "Multi-platform candidate aggregation",
    "Intelligent matching algorithms",
    "Continuous candidate pool monitoring",
    "Advanced filtering and ranking systems",
    "Behavioral pattern recognition",
    "Skills gap analysis and recommendations"
  ];

  const benefits = [
    {
      title: "Real-Time Discovery",
      description: "Automatically discover and score candidates in real-time as soon as jobs are posted",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Matching",
      description: "Advanced algorithms analyze candidate fit scores for precise job matching",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Continuous Polling",
      description: "Background system continuously polls candidate pools for the best matches",
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Tech Startup Finds Perfect Developers",
    description: "A fast-growing startup posted 5 developer positions. Our Smart Candidate Sourcing system automatically identified and scored 150 candidates within the first hour, delivering the top 20 matches with 95%+ fit scores.",
    results: ["150 candidates sourced", "20 top matches identified", "1 hour response time"]
  };

  return (
    <SolutionPageTemplate
      title="Smart Candidate Sourcing"
      description="Automated talent discovery system that works in the background to identify and score candidates in real-time"
      heroTitle="Smart Candidate Sourcing"
      heroDescription="Transform your recruitment with automated candidate discovery. Our intelligent system works in the background, continuously polling candidate pools and delivering real-time fit scores for every job posting."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default SmartCandidateSourcing;
