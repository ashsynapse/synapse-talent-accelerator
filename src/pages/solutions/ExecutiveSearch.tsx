
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const ExecutiveSearch = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Executive Search"
      description="Strategic executive search services for C-level and senior leadership positions. Our comprehensive approach ensures you find transformational leaders who drive organizational success and growth."
      ctaText="Find Your Executive"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Leadership That Transforms Organizations"
      twoColumnDescription="Our executive search methodology goes beyond traditional recruiting to identify leaders who can transform your organization. Through comprehensive assessment and deep industry knowledge, we connect you with executives who have the vision, experience, and cultural fit to drive sustainable growth."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Executive leadership and strategic planning"
      
      // Key Features
      keyFeatures={[
        "C-level and senior executive recruitment",
        "Comprehensive leadership assessment",
        "Industry expertise and market intelligence",
        "Confidential search processes",
        "Cultural fit and values alignment",
        "Post-placement integration support"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "95% Success Rate",
          description: "Exceptional track record of successful executive placements that drive results"
        },
        {
          metric: "6-Month Guarantee",
          description: "Confidence in our process backed by comprehensive placement guarantees"
        },
        {
          metric: "Leadership Impact",
          description: "Executives who deliver measurable business transformation and growth"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Strategic Consultation & Requirements",
          description: "Deep dive into organizational needs, culture, and leadership requirements"
        },
        {
          title: "Market Mapping & Research",
          description: "Comprehensive analysis of executive talent landscape and target identification"
        },
        {
          title: "Assessment & Evaluation",
          description: "Rigorous evaluation process including leadership competencies and cultural fit"
        },
        {
          title: "Presentation & Integration Support",
          description: "Final candidate presentation and ongoing support through successful integration"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Technology and Innovation",
        "Financial Services",
        "Healthcare and Life Sciences",
        "Manufacturing and Industrial",
        "Professional Services",
        "Non-Profit and Government"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Growing tech unicorn needed experienced CEO to lead IPO preparation",
          solution: "Conducted confidential search for public company-ready CEO with relevant experience",
          result: "Successfully placed CEO who led company through $2B IPO within 18 months"
        },
        {
          challenge: "Traditional manufacturing company required digital transformation leader",
          solution: "Identified CTO with both technical expertise and industrial experience",
          result: "New CTO implemented digital strategy resulting in 40% operational efficiency gain"
        }
      ]}
    />
  );
};

export default ExecutiveSearch;
