
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Bot, Search, Users, Zap, Target, Clock, CheckCircle, TrendingUp } from "lucide-react";

const SourcingAgent = () => {
  return (
    <SolutionStorylineTemplate
      title="AI Sourcing Agent - Intelligent Candidate Discovery"
      description="Revolutionary AI-powered sourcing agent that automatically discovers and engages top-tier candidates 24/7"
      badge="Sourcing Agent"
      heroTitle={
        <>
          <span className="text-synapse-dark">Intelligent </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Sourcing Agent</span>
        </>
      }
      heroDescription="Revolutionize your talent acquisition with our AI-powered sourcing agent that works around the clock to discover, evaluate, and engage the perfect candidates for your roles."
      ctaText="Get Started"
      mainChallenge={{
        title: "The Challenge of Finding Quality Candidates",
        description: "Traditional sourcing methods are time-consuming, limited in scope, and often miss the best passive candidates who aren't actively job searching. Manual processes can't scale with your hiring needs.",
        icon: <Search className="w-8 h-8 text-white" />
      }}
      solutionOverview={{
        title: "AI-Powered Candidate Discovery",
        description: "Our Sourcing Agent leverages advanced AI algorithms to scan millions of profiles across multiple platforms, identifying candidates who match your specific requirements with unprecedented accuracy.",
        features: [
          "24/7 automated candidate discovery across 50+ platforms",
          "AI-powered skill matching with 95% accuracy",
          "Passive candidate identification and engagement",
          "Real-time candidate scoring and ranking",
          "Automated initial outreach and follow-up sequences"
        ],
        ctaText: "Start Sourcing"
      }}
      keyBenefits={{
        title: "Transform Your Sourcing Process",
        subtitle: "Experience the power of AI-driven talent acquisition",
        benefits: [
          {
            title: "10x Faster Discovery",
            description: "Find qualified candidates in minutes, not weeks, with our advanced AI algorithms scanning multiple platforms simultaneously.",
            icon: <Zap className="w-8 h-8 text-white" />
          },
          {
            title: "95% Match Accuracy",
            description: "Our proprietary matching engine ensures candidates meet your exact requirements with industry-leading precision.",
            icon: <Target className="w-8 h-8 text-white" />
          },
          {
            title: "24/7 Operation",
            description: "Never miss great candidates. Our AI works continuously, even while you sleep, building your talent pipeline.",
            icon: <Clock className="w-8 h-8 text-white" />
          },
          {
            title: "Passive Candidate Reach",
            description: "Access the hidden talent market with candidates who aren't actively job searching but are perfect for your roles.",
            icon: <Users className="w-8 h-8 text-white" />
          },
          {
            title: "Quality Over Quantity",
            description: "Receive pre-qualified candidates with detailed scoring and analysis, focusing your time on the best prospects.",
            icon: <CheckCircle className="w-8 h-8 text-white" />
          },
          {
            title: "Scalable Growth",
            description: "Handle multiple roles and high-volume hiring without compromising on candidate quality or speed.",
            icon: <TrendingUp className="w-8 h-8 text-white" />
          }
        ]
      }}
      productTour={{
        title: "See the Sourcing Agent in Action",
        subtitle: "Experience AI-Powered Talent Discovery",
        description: "Schedule a personalized demo to see how our Sourcing Agent can transform your recruitment process and help you discover top-tier candidates faster than ever before."
      }}
      additionalSections={[
        {
          title: "Advanced Analytics",
          description: "Get detailed insights into your sourcing performance with comprehensive analytics and reporting dashboards.",
          icon: <Bot className="w-6 h-6" />
        },
        {
          title: "Custom Integrations",
          description: "Seamlessly integrate with your existing ATS and workflow tools for a unified recruitment experience.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Expert Support",
          description: "Our dedicated team provides ongoing support and optimization to maximize your sourcing success.",
          icon: <Users className="w-6 h-6" />
        }
      ]}
    />
  );
};

export default SourcingAgent;
