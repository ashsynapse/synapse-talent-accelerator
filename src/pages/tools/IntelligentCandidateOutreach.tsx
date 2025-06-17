
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Users, MessageCircle, Target, Clock, TrendingUp, Heart } from "lucide-react";

const IntelligentCandidateOutreach = () => {
  const features = [
    "Hyper-personalized outreach campaign creation",
    "Automated candidate engagement sequences",
    "Intelligent follow-up message timing",
    "Smart interview coordination system",
    "Real-time engagement tracking",
    "Behavioral pattern analysis",
    "Multi-channel communication management",
    "Continuous candidate relationship nurturing"
  ];

  const benefits = [
    {
      title: "Hyper-Personalization",
      description: "Delivers highly personalized outreach campaigns tailored to each candidate's profile",
      icon: <Heart className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Automation",
      description: "Automated follow-ups and interview coordination keep candidates engaged effortlessly",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "Real-Time Updates",
      description: "Stay informed with live status updates throughout the entire engagement process",
      icon: <Clock className="w-8 h-8 text-white" />
    }
  ];

  return (
    <SolutionPageTemplate
      title="Intelligent Candidate Outreach"
      description="AI outreach agent that delivers hyper-personalized campaigns with intelligent follow-ups and coordination"
      heroTitle="Intelligent Candidate Outreach"
      heroDescription="Delivers hyper-personalized, automated outreach campaigns to prospective candidates and keeps them engaged with intelligent follow-ups and interview coordination, all while you stay updated in real time."
      features={features}
      benefits={benefits}
    />
  );
};

export default IntelligentCandidateOutreach;
