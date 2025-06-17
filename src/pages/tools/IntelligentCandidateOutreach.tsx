
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Users, MessageCircle, Target, Clock, TrendingUp, Heart } from "lucide-react";

const IntelligentCandidateOutreach = () => {
  const features = [
    "Personalized outreach message generation",
    "Behavioral pattern analysis for timing",
    "Multi-channel communication management",
    "Response tracking and optimization",
    "Automated follow-up sequences",
    "Candidate preference learning",
    "A/B testing for message effectiveness",
    "Integration with communication platforms"
  ];

  const benefits = [
    {
      title: "Personalized Engagement",
      description: "Smart personalization based on candidate preferences and behavior patterns",
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      title: "Optimal Timing",
      description: "Intelligent timing optimization for maximum candidate response rates",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Higher Response Rates",
      description: "Achieve 3x higher response rates with personalized, intelligent outreach",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "Executive Search Firm Improves Engagement",
    description: "An executive search firm was struggling with low candidate response rates. Our Intelligent Candidate Outreach system increased their response rates from 15% to 45% while reducing outreach time by 60%.",
    results: ["45% response rate", "60% time reduction", "3x engagement improvement"]
  };

  return (
    <SolutionPageTemplate
      title="Intelligent Candidate Outreach"
      description="Smart candidate engagement system that personalizes outreach based on candidate preferences and behavior"
      heroTitle="Intelligent Candidate Outreach"
      heroDescription="Revolutionize your candidate engagement with intelligent, personalized outreach. Our system learns from candidate behavior to deliver the right message at the right time through the right channel."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default IntelligentCandidateOutreach;
