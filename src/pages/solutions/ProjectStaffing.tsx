
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Briefcase, Clock, Users, Target, Zap, Settings, Calendar, CheckCircle } from "lucide-react";

const ProjectStaffing = () => {
  const solutionOverview = {
    title: "Build High-Performance Project Teams Fast",
    description: "Built specifically for project-driven organizations, our Project Staffing solution offers rapid identification and deployment of specialized talent. Leverage AI-powered skill matching and proven team assembly processes to ensure project success from day one.",
    features: [
      "Rapid identification and placement of specialized talent",
      "Complete project teams with complementary skills",
      "Flexible duration from short sprints to long-term initiatives",
      "Proven track record matching for similar project types",
      "Seamless integration with existing project workflows"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Accelerate Project Success & Minimize Risks",
    subtitle: "Transform your project outcomes with strategic staffing that delivers the right expertise when you need it most. Our AI-powered matching ensures optimal team composition for maximum project success.",
    benefits: [
      {
        title: "Expert Access",
        description: "Tap into specialized skills and proven expertise without long-term employment commitments or training overhead.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
      },
      {
        title: "Scalable Resources",
        description: "Scale your team up or down based on project phases, requirements, and budget considerations with complete flexibility.",
        icon: <Calendar className="w-8 h-8 text-white" />
      },
      {
        title: "Risk Mitigation",
        description: "Reduce project risks through proven professionals with demonstrated success in similar roles and industries.",
        icon: <Briefcase className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Project Staffing in Action",
    subtitle: "Strategic project staffing starts here",
    description: "With our platform, project managers can identify, evaluate, and deploy specialized talent — all while ensuring team cohesion and project success. Experience our world-class project staffing suite in action."
  };

  const additionalSections = [
    {
      title: "Skill-Specific Matching",
      description: "Precise matching of technical skills and project requirements ensures optimal fit and immediate productivity from day one.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Team Assembly",
      description: "Complete project teams with complementary skills and proven collaboration experience for maximum project success.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Rapid Deployment",
      description: "Quick identification and placement of specialized talent for immediate project needs and urgent deadlines.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Project Staffing Solutions"
      description="Specialized staffing for short-term and long-term project requirements"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Project Staffing </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Power your projects with specialized talent. Our AI-driven project staffing connects you with expert professionals who deliver results, ensuring project success from conception to completion."
      ctaText="Staff Your Project"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default ProjectStaffing;
