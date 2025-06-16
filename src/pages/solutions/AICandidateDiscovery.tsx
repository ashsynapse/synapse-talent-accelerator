
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Search, Target, Brain, Users, Zap, Filter } from "lucide-react";

const AICandidateDiscovery = () => {
  const features = [
    "Advanced AI search algorithms across multiple platforms",
    "Real-time candidate behavior analysis",
    "Intelligent skill matching and ranking",
    "Automated candidate profiling and assessment",
    "Cross-platform data aggregation",
    "Machine learning-powered recommendations",
    "Instant candidate discovery notifications",
    "Advanced filtering and search parameters"
  ];

  const benefits = [
    {
      title: "Precision Matching",
      description: "Find candidates with exact skill sets and experience levels using advanced AI algorithms",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Faster Discovery",
      description: "Reduce candidate search time by 70% with automated discovery and ranking",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Quality Insights",
      description: "Get detailed candidate insights and compatibility scores for better hiring decisions",
      icon: <Brain className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Healthcare Company Finds Specialized Talent",
    description: "A healthcare technology company needed to find specialized software engineers with both technical skills and healthcare domain knowledge. Our AI Candidate Discovery platform identified perfect matches within hours.",
    results: ["95% match accuracy", "3 hours discovery time", "12 qualified candidates"]
  };

  return (
    <SolutionPageTemplate
      title="AI Candidate Discovery"
      description="Intelligent candidate discovery powered by advanced AI algorithms for precise talent matching"
      heroTitle="AI Candidate Discovery"
      heroDescription="Discover the perfect candidates with intelligent AI-powered search that analyzes skills, experience, and compatibility across multiple platforms in real-time."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default AICandidateDiscovery;
