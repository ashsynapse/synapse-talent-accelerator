
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { UserCheck, Heart, Target, Shield, Users, CheckCircle, TrendingUp, Clock } from "lucide-react";

const PermanentStaffing = () => {
  const solutionOverview = {
    title: "Create Permanent Teams That Drive Long-Term Success",
    description: "Built specifically for organizations seeking lasting talent solutions, our Permanent Staffing Solutions combine cultural fit assessment with long-term potential evaluation. Leverage comprehensive vetting processes and retention-focused strategies to build teams that grow with your organization.",
    features: [
      "Deep cultural fit assessment and team dynamics evaluation",
      "Comprehensive background checks and skill verification",
      "Long-term potential and career advancement assessment",
      "Retention-focused strategies and onboarding support",
      "Growth trajectory analysis and succession planning alignment"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Invest in Talent That Grows With Your Organization",
    subtitle: "Transform your permanent hiring approach with placements that create lasting value. Our comprehensive assessment process ensures candidates who will thrive long-term and contribute to organizational growth.",
    benefits: [
      {
        title: "Quality Hires",
        description: "Higher success rates through comprehensive candidate evaluation and cultural matching that ensures perfect organizational fit.",
        icon: <CheckCircle className="w-8 h-8 text-white" />
      },
      {
        title: "Reduced Turnover",
        description: "Better cultural and role fit leads to improved employee retention rates and reduced replacement costs over time.",
        icon: <Users className="w-8 h-8 text-white" />
      },
      {
        title: "Growth Investment",
        description: "Candidates positioned for long-term growth within your organization, creating internal advancement opportunities.",
        icon: <TrendingUp className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Permanent Staffing in Action",
    subtitle: "Strategic permanent hiring starts here",
    description: "With our platform, you can evaluate, assess, and place permanent talent — all while ensuring cultural alignment and long-term success potential. Experience our world-class permanent staffing suite in action."
  };

  const additionalSections = [
    {
      title: "Cultural Alignment",
      description: "Deep assessment of candidate alignment with company values, team dynamics, and organizational culture for seamless integration.",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Long-term Focus",
      description: "Focus on candidates with growth potential and career advancement opportunities within your organizational structure.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Rigorous screening processes including background checks, skill assessments, and reference verification for confidence.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Permanent Staffing Solutions"
      description="Full-time permanent staffing services across all industries and skill levels"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Permanent Staffing </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Build lasting teams with permanent staffing that drives long-term success. Our AI-enhanced approach ensures perfect matches between candidates and roles, creating foundations for sustained growth and achievement."
      ctaText="Find Permanent Staff"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default PermanentStaffing;
