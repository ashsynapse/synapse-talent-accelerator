
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const ContingentStaffing = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Contingent Staffing"
      description="Flexible workforce solutions that scale with your business needs. Our contingent staffing services provide skilled professionals for temporary, contract, and project-based assignments with seamless integration."
      ctaText="Get Flexible Staffing"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Agile Workforce Solutions"
      twoColumnDescription="Our contingent staffing solutions provide the flexibility to scale your workforce up or down based on project demands and business cycles. With access to pre-vetted professionals across multiple skill sets, you can maintain operational efficiency while managing costs effectively."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Flexible contingent workforce management"
      
      // Key Features
      keyFeatures={[
        "On-demand skilled professional access",
        "Rapid deployment and onboarding",
        "Flexible engagement models",
        "Comprehensive compliance management",
        "Performance monitoring and reporting",
        "Seamless integration with permanent staff"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "40% Cost Reduction",
          description: "Lower overall workforce costs through strategic use of contingent professionals"
        },
        {
          metric: "3x Faster Deployment",
          description: "Rapid access to skilled professionals for immediate project needs"
        },
        {
          metric: "100% Scalability",
          description: "Perfect workforce flexibility to match changing business demands"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Needs Assessment & Planning",
          description: "Comprehensive analysis of your contingent workforce requirements and objectives"
        },
        {
          title: "Talent Pool Development",
          description: "Building and maintaining a pool of pre-qualified professionals across skill areas"
        },
        {
          title: "Rapid Matching & Deployment",
          description: "Quick identification and placement of the right professionals for your projects"
        },
        {
          title: "Ongoing Management & Support",
          description: "Continuous performance monitoring and administrative support throughout engagements"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Information Technology",
        "Engineering and Manufacturing",
        "Finance and Accounting",
        "Marketing and Creative Services",
        "Healthcare and Life Sciences",
        "Operations and Supply Chain"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Technology company needed 50 developers for 6-month product launch",
          solution: "Deployed contingent staffing solution with pre-vetted development team",
          result: "Successfully delivered project on time with 30% cost savings vs permanent hires"
        },
        {
          challenge: "Manufacturing firm required seasonal production increase support",
          solution: "Provided scalable workforce solution for peak production periods",
          result: "Managed 200% production increase with flexible staffing model and zero delays"
        }
      ]}
    />
  );
};

export default ContingentStaffing;
