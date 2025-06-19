
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Zap, FileText, Target, Search, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";

const ATSBypassEngine = () => {
  return (
    <SolutionStorylineTemplate
      title="ATS Bypass Engine - Smart Resume Optimization"
      description="Revolutionary AI-powered resume optimizer that ensures your candidates never get filtered out by ATS systems"
      badge="ATS Bypass Engine"
      heroTitle={
        <>
          <span className="text-synapse-dark">Smart </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">ATS Bypass Engine</span>
        </>
      }
      heroDescription="Eliminate ATS rejection with our intelligent resume optimization engine that reverse-engineers applicant tracking systems to ensure maximum compatibility and candidate visibility."
      ctaText="Get Started"
      mainChallenge={{
        title: "The ATS Filtering Problem",
        description: "Up to 75% of qualified candidates are automatically rejected by ATS systems due to formatting issues, missing keywords, or incompatible structures, causing you to miss top talent.",
        icon: <Search className="w-8 h-8 text-white" />
      }}
      solutionOverview={{
        title: "AI-Powered Resume Optimization",
        description: "Our ATS Bypass Engine analyzes job descriptions and optimizes candidate resumes in real-time, ensuring perfect ATS compatibility while maintaining the authentic candidate experience.",
        features: [
          "Real-time ATS compatibility analysis and optimization",
          "Intelligent keyword integration based on job descriptions",
          "Format optimization for maximum ATS readability",
          "Bulk resume processing for high-volume recruitment",
          "Success rate tracking and continuous improvement"
        ],
        ctaText: "Start Optimizing"
      }}
      keyBenefits={{
        title: "Maximize Candidate Visibility",
        subtitle: "Ensure your best candidates reach human reviewers",
        benefits: [
          {
            title: "99% ATS Pass Rate",
            description: "Our optimization engine ensures virtually all candidate resumes successfully pass through ATS screening processes.",
            icon: <CheckCircle className="w-8 h-8 text-white" />
          },
          {
            title: "Intelligent Keyword Matching",
            description: "Automatically identify and integrate relevant keywords from job descriptions without compromising resume authenticity.",
            icon: <Target className="w-8 h-8 text-white" />
          },
          {
            title: "Format Standardization",
            description: "Optimize resume formatting for maximum ATS compatibility while maintaining professional appearance.",
            icon: <FileText className="w-8 h-8 text-white" />
          },
          {
            title: "Bulk Processing",
            description: "Handle hundreds of resumes simultaneously, perfect for high-volume recruitment campaigns.",
            icon: <Users className="w-8 h-8 text-white" />
          },
          {
            title: "Real-time Optimization",
            description: "Instant resume enhancement ensures candidates can be submitted immediately without delays.",
            icon: <Clock className="w-8 h-8 text-white" />
          },
          {
            title: "Continuous Learning",
            description: "Our AI continuously improves by learning from successful placements and ATS feedback patterns.",
            icon: <TrendingUp className="w-8 h-8 text-white" />
          }
        ]
      }}
      productTour={{
        title: "See the ATS Bypass Engine in Action",
        subtitle: "Experience Intelligent Resume Optimization",
        description: "Schedule a personalized demo to see how our ATS Bypass Engine can eliminate candidate filtering and ensure your top talent reaches decision makers."
      }}
      additionalSections={[
        {
          title: "ATS Database",
          description: "Access our comprehensive database of ATS system requirements and optimization patterns for maximum compatibility.",
          icon: <Search className="w-6 h-6" />
        },
        {
          title: "Quality Assurance",
          description: "Every optimized resume undergoes quality checks to ensure improvements enhance rather than compromise content.",
          icon: <CheckCircle className="w-6 h-6" />
        },
        {
          title: "Performance Analytics",
          description: "Track optimization success rates and candidate progression through different ATS systems.",
          icon: <TrendingUp className="w-6 h-6" />
        }
      ]}
    />
  );
};

export default ATSBypassEngine;
