
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Clock, Users, Zap, Shield, Target, TrendingUp } from "lucide-react";

const ContingentStaffing = () => {
  const features = [
    "Flexible temporary and contract staffing solutions",
    "Rapid deployment for urgent staffing needs",
    "Scalable workforce management",
    "Contract-to-hire conversion options",
    "Specialized skills for short-term projects",
    "Vendor management and compliance handling",
    "Performance tracking and quality assurance",
    "Seamless extension and conversion processes"
  ];

  const benefits = [
    {
      title: "Ultimate Flexibility",
      description: "Scale your workforce up or down instantly based on business demands",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Cost Control",
      description: "Optimize labor costs with flexible staffing that matches your budget cycles",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Risk Mitigation",
      description: "Reduce hiring risks with try-before-you-buy contract-to-hire options",
      icon: <Shield className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "E-commerce Peak Season Success",
    description: "An e-commerce company needed 50 temporary workers for their peak holiday season. We provided qualified staff within 48 hours, helping them achieve 30% higher order fulfillment.",
    results: ["50 temp workers", "48-hour deployment", "30% higher fulfillment"]
  };

  return (
    <SolutionPageTemplate
      title="Contingent Staffing"
      description="Flexible staffing solutions for temporary and contract positions"
      heroTitle="Contingent Staffing"
      heroDescription="Get the flexibility you need with our contingent staffing solutions. From temporary assignments to contract projects, we provide quality talent exactly when you need it."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default ContingentStaffing;
