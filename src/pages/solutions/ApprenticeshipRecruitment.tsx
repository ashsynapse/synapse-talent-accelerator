
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { GraduationCap, Users, TrendingUp, Target, Brain, BookOpen, Zap, Heart } from "lucide-react";

const ApprenticeshipRecruitment = () => {
  const solutionOverview = {
    title: "Develop Tomorrow's Workforce Today",
    description: "Built specifically for apprenticeship and early career programs, our Apprenticeship Solutions offer comprehensive assessment of learning potential and growth trajectory. Leverage AI-powered evaluation and educational partnerships to build your future workforce from the ground up.",
    features: [
      "Specialized sourcing for apprenticeships and entry-level positions",
      "AI-powered assessment of learning potential and growth trajectory",
      "Educational institution partnerships and career development programs",
      "Skills mapping and transferable abilities identification",
      "Long-term career development and progression monitoring"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Invest in Future Leaders & Build Sustainable Talent",
    subtitle: "Transform your talent development strategy by investing in apprentices who will become your organization's future leaders. Our apprenticeship solutions focus on potential, passion, and cultural alignment for long-term success.",
    benefits: [
      {
        title: "Future Workforce",
        description: "Build your talent pipeline with high-potential early career professionals who develop alongside your organization.",
        icon: <BookOpen className="w-8 h-8 text-white" />
      },
      {
        title: "Cost Effective",
        description: "Develop talent internally while reducing overall recruitment costs and creating long-term employee loyalty.",
        icon: <Zap className="w-8 h-8 text-white" />
      },
      {
        title: "Cultural Development",
        description: "Shape professionals who grow up with your company culture and values, ensuring perfect organizational alignment.",
        icon: <Heart className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Apprenticeship Recruitment in Action",
    subtitle: "Strategic apprenticeship development starts here",
    description: "With our platform, you can identify, assess, and develop apprentice talent — all while building sustainable career pathways and organizational loyalty. Experience our world-class apprenticeship recruitment suite in action."
  };

  const additionalSections = [
    {
      title: "Potential Assessment",
      description: "AI-powered evaluation of learning capacity, professional development potential, and growth mindset for future success.",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Skills Development",
      description: "Comprehensive skills mapping and transferable abilities identification to maximize apprentice potential and productivity.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Career Pathways",
      description: "Long-term career development planning and progression monitoring to ensure sustained growth and organizational value.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Apprenticeship Solutions"
      description="Specialized recruitment for apprenticeship programs and early career professionals"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Apprenticeship </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Invest in the future with smart apprenticeship recruitment. Our AI-enhanced platform identifies high-potential early career talent and matches them with your development programs for long-term organizational success."
      ctaText="Find Apprentices"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default ApprenticeshipRecruitment;
