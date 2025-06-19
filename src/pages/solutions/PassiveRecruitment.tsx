
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const PassiveRecruitment = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Passive Recruitment"
      description="Discover and engage top-tier talent who aren't actively job searching but are open to the right opportunities. Our advanced sourcing techniques uncover passive candidates through strategic outreach and relationship building."
      ctaText="Start Passive Sourcing"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Strategic Passive Talent Discovery"
      twoColumnDescription="Our approach goes beyond traditional recruiting to identify and engage passive candidates who represent the highest quality talent in your industry. Through intelligent research and personalized outreach, we build relationships with professionals who aren't actively seeking new roles but are open to exceptional opportunities."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Professional networking and talent discovery"
      
      // Key Features
      keyFeatures={[
        "Advanced passive candidate identification",
        "Strategic outreach and relationship building",
        "Industry-specific talent mapping",
        "Personalized engagement strategies",
        "Long-term talent pipeline development",
        "Confidential recruitment processes"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "3x Higher Quality",
          description: "Passive candidates typically demonstrate higher job performance and cultural fit"
        },
        {
          metric: "40% Better Retention",
          description: "Passive hires show significantly longer tenure and career satisfaction"
        },
        {
          metric: "Access to Hidden Talent",
          description: "Reach the 85% of professionals not actively searching but open to opportunities"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Talent Mapping & Research",
          description: "Comprehensive market analysis to identify passive talent pools and key professionals"
        },
        {
          title: "Strategic Outreach Design",
          description: "Crafting personalized, value-driven messages that resonate with passive candidates"
        },
        {
          title: "Relationship Building",
          description: "Nurturing long-term relationships through consistent, valuable professional interactions"
        },
        {
          title: "Opportunity Presentation",
          description: "Presenting compelling career opportunities when timing and fit align perfectly"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Executive and C-level positions",
        "Specialized technical roles",
        "Niche industry expertise",
        "High-demand skill sets",
        "Strategic leadership positions",
        "Innovation and R&D roles"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "A Fortune 500 company needed a CTO with specific blockchain expertise",
          solution: "Identified and engaged passive candidates from leading tech companies",
          result: "Successfully recruited a top-tier CTO who wasn't actively job searching"
        },
        {
          challenge: "Healthcare organization required specialized medical device engineers",
          solution: "Mapped passive talent across medical technology companies",
          result: "Built a pipeline of qualified engineers, reducing future hiring time by 60%"
        }
      ]}
    />
  );
};

export default PassiveRecruitment;
