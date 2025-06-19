
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Shield, Users, CheckCircle, Clock, Target, Brain } from "lucide-react";

const PreEmploymentScreening = () => {
  const features = [
    "Comprehensive background verification checks",
    "AI-powered resume and credential verification",
    "Reference checking and employment history validation",
    "Skills assessment and technical evaluations",
    "Personality and cultural fit assessments",
    "Criminal background and credit checks",
    "Education and certification verification",
    "Social media and online presence analysis"
  ];

  const benefits = [
    {
      title: "Risk Mitigation",
      description: "Reduce hiring risks by 90% with comprehensive pre-employment screening",
      icon: <Shield className="w-8 h-8 text-white" />
    },
    {
      title: "Quality Assurance",
      description: "Ensure only qualified and trustworthy candidates join your organization",
      icon: <CheckCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Faster Decisions",
      description: "Make confident hiring decisions with complete candidate information in 24 hours",
      icon: <Clock className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Financial Services Firm Ensures Compliance",
    description: "A financial services company needed thorough background checks for regulatory compliance. Our screening platform helped them maintain 100% compliance while reducing screening time by 60%.",
    results: ["100% compliance", "60% faster screening", "Zero compliance issues"]
  };

  return (
    <SolutionPageTemplate
      title="Pre-Employment Screening"
      description="Comprehensive background checks and pre-employment screening to ensure quality hires"
      heroTitle="Pre-Employment AI Screening"
      heroDescription="Protect your organization with comprehensive AI-powered pre-employment screening. Verify credentials, assess skills, and ensure cultural fit before making hiring decisions."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default PreEmploymentScreening;
