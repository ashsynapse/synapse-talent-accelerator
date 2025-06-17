
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Search, Target, Zap, Clock, TrendingUp, Users } from "lucide-react";

const SmartCandidateSourcing = () => {
  const features = [
    "Automatic job posting scanning and analysis",
    "Continuous background candidate sourcing",
    "Real-time candidate fit scoring and ranking",
    "Top-matching candidate identification",
    "Automated candidate discovery pipeline",
    "Smart talent pool monitoring",
    "Intelligent candidate shortlisting",
    "Live status updates from discovery to selection"
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
      title: "Continuous Sourcing",
      description: "Background system continuously sources the best talent while you focus on other tasks",
      icon: <Zap className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Tech Company Accelerates Hiring Process",
    description: "A growing technology company needed to fill 15 developer positions quickly. Our Smart Candidate Sourcing automatically scanned job postings and sourced 300+ qualified candidates within 48 hours, delivering the top 50 matches with detailed fit scores.",
    results: ["300+ candidates sourced", "Top 50 matches delivered", "48-hour turnaround"]
  };

  return (
    <SolutionPageTemplate
      title="Smart Candidate Sourcing"
      description="AI-powered sourcing agent that automatically scans job postings and continuously sources top-matching candidates"
      heroTitle="Smart Candidate Sourcing"
      heroDescription="Automatically scans job postings and continuously sources top-matching candidates in the background, offering real-time status updates from discovery to shortlisting."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default SmartCandidateSourcing;
