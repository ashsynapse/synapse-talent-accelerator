
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Send, CheckCircle, Zap, Clock, TrendingUp, Users } from "lucide-react";

const AutomatedApplicationSubmission = () => {
  const features = [
    "Intelligent application routing and submission",
    "Automated candidate qualification checks",
    "Multi-platform application management",
    "Real-time application status tracking",
    "Customizable submission workflows",
    "Integration with major job boards",
    "Automated follow-up sequences",
    "Compliance and audit trail maintenance"
  ];

  const benefits = [
    {
      title: "Instant Submissions",
      description: "Automatically submit qualified candidates to relevant positions within minutes",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Quality Control",
      description: "Built-in qualification checks ensure only suitable candidates are submitted",
      icon: <CheckCircle className="w-8 h-8 text-white" />
    },
    {
      title: "Streamlined Process",
      description: "Eliminate manual application processes and reduce time-to-submission",
      icon: <Clock className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Recruitment Agency Automates Applications",
    description: "A recruitment agency was spending 40 hours per week manually submitting applications. Our Automated Application Submission system reduced this to 2 hours while increasing submission accuracy by 85%.",
    results: ["40 hours reduced to 2 hours", "85% accuracy improvement", "500+ weekly submissions"]
  };

  return (
    <SolutionPageTemplate
      title="Automated Application Submission"
      description="Streamlined application process that automatically submits qualified candidates to relevant positions"
      heroTitle="Automated Application Submission"
      heroDescription="Eliminate manual application processes with intelligent automation. Our system automatically submits qualified candidates to the right positions, ensuring faster placements and higher success rates."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default AutomatedApplicationSubmission;
