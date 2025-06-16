
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Brain, Search, Target, Zap, Users, TrendingUp } from "lucide-react";

const AICandidateSourcing = () => {
  const features = [
    "Advanced machine learning algorithms for candidate matching",
    "Multi-platform sourcing across professional networks",
    "Real-time candidate discovery and alerts",
    "Automated candidate scoring and ranking",
    "Intelligent keyword and skill extraction",
    "Behavioral pattern analysis and prediction",
    "Integration with ATS and HR systems",
    "Customizable search parameters and filters"
  ];

  const benefits = [
    {
      title: "AI-Powered Precision",
      description: "Find the perfect candidates with 95% accuracy using advanced machine learning",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Speed & Efficiency",
      description: "Reduce sourcing time by 80% with automated candidate discovery and ranking",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Quality Matches",
      description: "Higher quality hires with intelligent matching based on skills, experience, and culture fit",
      icon: <Target className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Tech Unicorn Scales Engineering Team",
    description: "A fast-growing tech unicorn needed to hire 100 engineers in 6 months. Our AI Candidate Sourcing platform identified qualified candidates 5x faster than traditional methods.",
    results: ["100 engineers hired", "5x faster sourcing", "6-month timeline met"]
  };

  return (
    <SolutionPageTemplate
      title="AI Candidate Sourcing"
      description="Advanced AI algorithms to identify and source the best candidates from our global talent network"
      heroTitle="AI Candidate Sourcing"
      heroDescription="Transform your talent acquisition with our AI-powered candidate sourcing platform. Discover, evaluate, and engage the best candidates faster than ever before."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default AICandidateSourcing;
