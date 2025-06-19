
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const CandidateSourcing = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Candidate Sourcing"
      description="Advanced candidate sourcing strategies that go beyond traditional methods to find the right talent for your organization. We leverage cutting-edge technology and proven methodologies to identify and engage top performers."
      ctaText="Start Sourcing"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Strategic Talent Discovery"
      twoColumnDescription="Our candidate sourcing approach combines advanced technology with human expertise to identify talent across multiple channels. From passive candidates to active job seekers, we ensure no qualified professional is overlooked in your search for the perfect hire."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Advanced candidate sourcing and discovery"
      
      // Key Features
      keyFeatures={[
        "Multi-channel candidate discovery",
        "Advanced Boolean search techniques",
        "Social media and professional network mining",
        "Passive candidate engagement strategies",
        "Competitive intelligence and talent mapping",
        "Real-time candidate pipeline management"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "5x More Candidates",
          description: "Dramatically expand your talent pool with comprehensive sourcing strategies"
        },
        {
          metric: "70% Faster Fills",
          description: "Reduce time-to-hire through proactive candidate identification and engagement"
        },
        {
          metric: "Higher Quality Hires",
          description: "Access to passive candidates who aren't actively job searching but are top performers"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Talent Mapping & Market Analysis",
          description: "Comprehensive analysis of talent availability and competitive landscape"
        },
        {
          title: "Multi-Channel Search Strategy",
          description: "Deploy advanced sourcing techniques across all relevant platforms and networks"
        },
        {
          title: "Candidate Identification & Qualification",
          description: "Systematic evaluation and qualification of potential candidates"
        },
        {
          title: "Engagement & Pipeline Management",
          description: "Strategic outreach and continuous relationship building with qualified candidates"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Technology and Software",
        "Financial Services",
        "Healthcare and Pharmaceuticals",
        "Manufacturing and Engineering",
        "Professional Services",
        "Retail and Consumer Goods"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Global tech company needed 100 software engineers in competitive market",
          solution: "Implemented comprehensive sourcing strategy across 15+ platforms and networks",
          result: "Successfully sourced and hired 100 engineers within 6 months, 40% from passive channels"
        },
        {
          challenge: "Healthcare organization required specialized medical professionals in shortage area",
          solution: "Developed targeted sourcing campaign focusing on passive candidates and referrals",
          result: "Filled 25 critical positions with 95% candidate retention rate after one year"
        }
      ]}
    />
  );
};

export default CandidateSourcing;
