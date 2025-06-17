
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Database, Workflow, Zap, Shield, TrendingUp, Settings } from "lucide-react";

const SmartATSIntegration = () => {
  const features = [
    "Seamless ATS connectivity and synchronization",
    "Real-time data exchange and updates",
    "Automated workflow orchestration",
    "Custom field mapping and configuration",
    "Multi-ATS support and management",
    "Data integrity and validation checks",
    "Audit trail and compliance monitoring",
    "API-based integration architecture"
  ];

  const benefits = [
    {
      title: "Unified Systems",
      description: "Seamlessly connect all your recruitment tools with existing ATS platforms",
      icon: <Database className="w-8 h-8 text-white" />
    },
    {
      title: "Automated Workflows",
      description: "Eliminate manual data entry with intelligent workflow automation",
      icon: <Workflow className="w-8 h-8 text-white" />
    },
    {
      title: "Data Security",
      description: "Enterprise-grade security ensures your candidate data remains protected",
      icon: <Shield className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Enterprise Connects Multiple Systems",
    description: "A Fortune 500 company needed to integrate 5 different recruitment tools with their ATS. Our Smart ATS Integration solution created a unified workflow, reducing data processing time by 75% and eliminating manual errors.",
    results: ["5 systems integrated", "75% faster processing", "Zero manual errors"]
  };

  return (
    <SolutionPageTemplate
      title="Smart ATS Integration"
      description="Seamless integration with existing ATS systems for unified candidate management and workflow automation"
      heroTitle="Smart ATS Integration"
      heroDescription="Bridge the gap between your recruitment tools and ATS with intelligent integration. Our platform ensures seamless data flow, automated workflows, and unified candidate management across all systems."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default SmartATSIntegration;
