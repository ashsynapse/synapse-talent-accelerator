
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const PermanentStaffing = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Permanent Staffing"
      description="Strategic permanent staffing solutions that build the foundation of your organization. We specialize in finding full-time professionals who become long-term contributors to your company's success and culture."
      ctaText="Build Your Team"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Building Your Core Team"
      twoColumnDescription="Our permanent staffing approach focuses on finding professionals who will become integral parts of your organization. Through comprehensive assessment and cultural alignment, we ensure every placement contributes to long-term organizational success and growth."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Permanent team building and collaboration"
      
      // Key Features
      keyFeatures={[
        "Full-time professional recruitment",
        "Cultural fit and values assessment",
        "Long-term career alignment",
        "Comprehensive background verification",
        "Skills and competency evaluation",
        "Post-placement support and follow-up"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "90% Retention Rate",
          description: "Exceptional retention rates through careful matching and cultural alignment"
        },
        {
          metric: "50% Faster Hiring",
          description: "Streamlined process reduces time-to-hire while maintaining quality standards"
        },
        {
          metric: "Long-Term Value",
          description: "Permanent hires who grow with your organization and contribute to sustained success"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Role Definition & Strategy",
          description: "Comprehensive understanding of role requirements, team dynamics, and growth potential"
        },
        {
          title: "Candidate Sourcing & Screening",
          description: "Multi-channel sourcing approach with rigorous initial screening and qualification"
        },
        {
          title: "Assessment & Cultural Fit",
          description: "Detailed evaluation of skills, experience, and alignment with organizational culture"
        },
        {
          title: "Integration & Follow-Up",
          description: "Support through the hiring process and post-placement integration monitoring"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Corporate and Business Services",
        "Technology and Software",
        "Healthcare and Medical",
        "Engineering and Manufacturing",
        "Financial Services",
        "Marketing and Communications"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Fast-growing startup needed to build core engineering team of 20 developers",
          solution: "Implemented systematic permanent staffing approach with cultural fit emphasis",
          result: "Successfully built cohesive engineering team with 95% retention after 2 years"
        },
        {
          challenge: "Established company required replacement for key leadership positions",
          solution: "Conducted confidential search for senior management roles with succession planning",
          result: "Filled 5 critical leadership positions with internal promotion potential candidates"
        }
      ]}
    />
  );
};

export default PermanentStaffing;
