
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const RemoteStaffing = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Remote Staffing"
      description="Global remote staffing solutions that connect you with top talent regardless of location. Our comprehensive remote workforce management ensures productivity, collaboration, and success across distributed teams."
      ctaText="Go Remote"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Global Talent Without Boundaries"
      twoColumnDescription="Our remote staffing solutions break down geographical barriers to connect you with the world's best talent. Through proven remote work methodologies and comprehensive support systems, we ensure distributed teams operate with the same efficiency and collaboration as co-located teams."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Remote work and global collaboration"
      
      // Key Features
      keyFeatures={[
        "Global talent pool access",
        "Remote work capability assessment",
        "Digital collaboration tools setup",
        "Time zone optimization strategies",
        "Performance monitoring systems",
        "Cultural integration support"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "50% Cost Savings",
          description: "Significant cost reduction while accessing premium global talent"
        },
        {
          metric: "5x Talent Pool",
          description: "Expanded access to qualified professionals beyond geographical limitations"
        },
        {
          metric: "24/7 Productivity",
          description: "Round-the-clock operations through strategic time zone distribution"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Remote Readiness Assessment",
          description: "Evaluation of roles, processes, and infrastructure for remote work optimization"
        },
        {
          title: "Global Talent Sourcing",
          description: "Worldwide candidate identification with remote work experience and capabilities"
        },
        {
          title: "Digital Infrastructure Setup",
          description: "Implementation of collaboration tools and performance monitoring systems"
        },
        {
          title: "Ongoing Remote Management",
          description: "Continuous support for team productivity, engagement, and professional development"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Software Development and IT",
        "Digital Marketing and Content",
        "Customer Service and Support",
        "Finance and Accounting",
        "Design and Creative Services",
        "Research and Analysis"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Tech startup needed to scale development team while controlling costs",
          solution: "Built distributed development team across 8 countries with 12-hour coverage",
          result: "Doubled development capacity with 40% cost savings and improved time-to-market"
        },
        {
          challenge: "Professional services firm required 24/7 customer support coverage",
          solution: "Established global customer support team with follow-the-sun model",
          result: "Achieved 99.5% uptime with 60% cost reduction vs local staffing"
        }
      ]}
    />
  );
};

export default RemoteStaffing;
