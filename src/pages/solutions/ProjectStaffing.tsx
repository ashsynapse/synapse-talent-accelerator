
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Users, Clock, Target, Briefcase, Shield, TrendingUp } from "lucide-react";

const ProjectStaffing = () => {
  const features = [
    "Flexible staffing solutions for any project duration",
    "Specialized talent pools for specific project needs",
    "Rapid team assembly and deployment",
    "Project-based contract management",
    "Skills assessment and team compatibility analysis",
    "Agile team scaling up or down",
    "Performance tracking and project analytics",
    "Multi-disciplinary team coordination"
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get your project team assembled and working within 48 hours of requirement finalization",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Flexible Scaling",
      description: "Scale your team up or down based on project phases and requirements",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "Specialized Skills",
      description: "Access highly specialized professionals perfect for your specific project needs",
      icon: <Target className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Fintech Startup Delivers MVP on Time",
    description: "A fintech startup needed a full development team to build their MVP in 4 months. We assembled a team of 8 specialists including developers, designers, and QA engineers who delivered ahead of schedule.",
    results: ["MVP delivered early", "8-person team", "100% client satisfaction"]
  };

  return (
    <SolutionPageTemplate
      title="Project Staffing"
      description="Flexible project-based staffing solutions for short-term and long-term project requirements"
      heroTitle="Project Staffing"
      heroDescription="Build the perfect project team with our flexible staffing solutions. From short-term assignments to complex long-term projects, we provide specialized talent that fits your exact requirements."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default ProjectStaffing;
