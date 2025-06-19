
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const ProjectStaffing = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Project Staffing"
      description="Specialized project staffing solutions that deliver the right expertise for your critical initiatives. Our project-focused approach ensures you have skilled professionals who can execute and deliver results within defined timelines."
      ctaText="Staff Your Project"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Expert Teams for Critical Projects"
      twoColumnDescription="Our project staffing methodology assembles dedicated teams with the specific skills and experience needed for successful project execution. From short-term initiatives to multi-year programs, we provide professionals who understand project dynamics and deliver measurable outcomes."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Project team collaboration and execution"
      
      // Key Features
      keyFeatures={[
        "Project-specific skill matching",
        "Rapid team assembly and deployment",
        "Flexible engagement models",
        "Project lifecycle support",
        "Performance tracking and reporting",
        "Seamless team integration"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "85% Project Success",
          description: "Higher project success rates through specialized talent acquisition"
        },
        {
          metric: "60% Faster Assembly",
          description: "Rapid team formation reduces project startup time significantly"
        },
        {
          metric: "Cost Effective",
          description: "Project-based staffing optimizes resource allocation and budget management"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Project Analysis & Requirements",
          description: "Detailed assessment of project scope, timeline, and required expertise"
        },
        {
          title: "Team Design & Sourcing",
          description: "Strategic team composition and targeted sourcing for project-specific skills"
        },
        {
          title: "Rapid Deployment & Integration",
          description: "Quick onboarding and seamless integration with existing project structures"
        },
        {
          title: "Performance Management & Support",
          description: "Ongoing performance monitoring and support throughout project lifecycle"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "IT and Digital Transformation",
        "Engineering and Construction",
        "Consulting and Advisory",
        "Research and Development",
        "Marketing and Campaign Management",
        "Operations and Process Improvement"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Fortune 500 company needed specialized team for digital transformation project",
          solution: "Assembled cross-functional team of 30 experts across technology and change management",
          result: "Delivered $50M digital transformation project on time and 15% under budget"
        },
        {
          challenge: "Pharmaceutical company required regulatory compliance team for FDA submission",
          solution: "Provided specialized regulatory affairs professionals with FDA submission experience",
          result: "Successfully navigated FDA approval process with zero compliance issues"
        }
      ]}
    />
  );
};

export default ProjectStaffing;
