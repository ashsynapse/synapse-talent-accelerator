
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Brain, FileText, Target, Zap, CheckCircle, TrendingUp } from "lucide-react";

const AIResumeAnalysis = () => {
  const features = [
    "Intelligent resume parsing and data extraction",
    "Skills gap analysis and candidate scoring",
    "Experience relevance assessment",
    "Education and certification verification",
    "Career progression pattern analysis",
    "Keyword matching and optimization suggestions",
    "Bias detection and inclusive screening",
    "Bulk resume processing and ranking"
  ];

  const benefits = [
    {
      title: "Intelligent Parsing",
      description: "Extract and analyze resume data with 98% accuracy using advanced NLP",
      icon: <Brain className="w-8 h-8 text-white" />
    },
    {
      title: "Faster Screening",
      description: "Screen hundreds of resumes in minutes instead of hours with automated analysis",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Better Matches",
      description: "Identify the best candidates with intelligent scoring and ranking algorithms",
      icon: <Target className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Consulting Firm Streamlines Resume Review",
    description: "A top consulting firm was overwhelmed with 5,000 applications for graduate positions. Our AI Resume Analysis tool helped them identify the top 50 candidates in just 2 hours.",
    results: ["5,000 resumes processed", "Top 50 identified", "2 hours total time"]
  };

  return (
    <SolutionPageTemplate
      title="AI Resume Analysis"
      description="Intelligent resume parsing and screening to quickly identify qualified candidates"
      heroTitle="AI Resume Analysis"
      heroDescription="Revolutionize your resume screening process with AI-powered analysis. Parse, score, and rank candidates instantly to find the best matches for your positions."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default AIResumeAnalysis;
