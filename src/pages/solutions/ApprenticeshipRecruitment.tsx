
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";

const ApprenticeshipRecruitment = () => {
  return (
    <SolutionStorylineTemplate
      // Hero Section
      badge="Solution"
      title="Apprenticeship Recruitment"
      description="Connect with the next generation of talent through our specialized apprenticeship recruitment programs. We bridge the gap between education and industry, helping you build skilled workforce pipelines."
      ctaText="Start Apprenticeship Program"
      heroClassName="pt-20 pb-12"
      
      // Content sections with consistent spacing
      sectionSpacing="py-12"
      
      // Two-Column Section
      twoColumnTitle="Building Tomorrow's Workforce Today"
      twoColumnDescription="Our apprenticeship recruitment programs create pathways for emerging talent while addressing your long-term workforce needs. We partner with educational institutions and training providers to identify motivated candidates ready to learn and grow within your organization."
      twoColumnImage="/lovable-uploads/7a0c2330-d0d6-49c8-9ed2-b824e1c54b9c.png"
      twoColumnImageAlt="Apprenticeship training and development"
      
      // Key Features
      keyFeatures={[
        "Partnership with educational institutions",
        "Skills-based candidate assessment",
        "Structured onboarding programs",
        "Progress tracking and mentorship support",
        "Industry-specific apprenticeship programs",
        "Long-term workforce development planning"
      ]}
      
      // Business Impacts
      businessImpacts={[
        {
          metric: "60% Cost Savings",
          description: "Reduce hiring costs while building a skilled workforce from the ground up"
        },
        {
          metric: "95% Retention Rate",
          description: "Apprentices show exceptional loyalty and long-term commitment to organizations"
        },
        {
          metric: "Skills Gap Solution",
          description: "Address industry skills shortages with targeted training and development"
        }
      ]}
      
      // How It Works Steps
      howItWorksSteps={[
        {
          title: "Program Design & Partnership",
          description: "Collaborate with educational institutions to design apprenticeship programs aligned with your needs"
        },
        {
          title: "Candidate Sourcing & Assessment",
          description: "Identify and evaluate candidates based on aptitude, motivation, and cultural fit"
        },
        {
          title: "Structured Training Implementation",
          description: "Launch comprehensive training programs combining theoretical knowledge with practical experience"
        },
        {
          title: "Progress Monitoring & Support",
          description: "Continuous monitoring and mentorship to ensure successful program completion and integration"
        }
      ]}
      
      // Industry Applications
      industryApplications={[
        "Manufacturing and Engineering",
        "Information Technology",
        "Healthcare and Life Sciences",
        "Financial Services",
        "Construction and Infrastructure",
        "Energy and Utilities"
      ]}
      
      // Success Stories
      successStories={[
        {
          challenge: "Manufacturing company faced skilled technician shortage with aging workforce",
          solution: "Developed 3-year apprenticeship program with local technical colleges",
          result: "Successfully trained 50 apprentices with 98% completion rate and full-time placement"
        },
        {
          challenge: "Tech startup needed junior developers but struggled with inexperienced hires",
          solution: "Created software development apprenticeship with coding bootcamp partnership",
          result: "Built team of 25 junior developers with 90% retention after 2 years"
        }
      ]}
    />
  );
};

export default ApprenticeshipRecruitment;
