
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Search, Target, Brain, Users, Zap, Database, Globe, Filter, Clock, Shield } from "lucide-react";

const CandidateSourcing = () => {
  const solutionOverview = {
    title: "Connect with Quality Candidates in Real Time",
    description: "Built specifically for modern recruitment challenges, our Candidate Sourcing Solutions offer advanced AI algorithms to find candidates across multiple platforms instantly. Leverage automation and deliver a streamlined discovery experience that engages the right talent faster.",
    features: [
      "Multi-platform candidate sourcing across professional networks",
      "AI-powered matching with cultural fit indicators",
      "Real-time discovery with instant notifications",
      "Smart filtering beyond traditional keyword searches",
      "Automated candidate profiling and assessment"
    ],
    ctaText: "Learn More"
  };

  const keyBenefits = {
    title: "Remove Discovery Roadblocks & Streamline Efficiency",
    subtitle: "Pinpoint where bottlenecks exist in finding quality candidates. Streamline discovery, engagement, and conversion by leveraging AI to eliminate manual searches and increase recruiter capacity.",
    benefits: [
      {
        title: "Expanded Talent Access",
        description: "Access comprehensive talent pools from multiple sources in a unified search experience, reaching candidates you never knew existed.",
        icon: <Globe className="w-8 h-8 text-white" />
      },
      {
        title: "Intelligent Matching",
        description: "Advanced AI analyzes skills, experience, and cultural compatibility to surface the most relevant candidates for your roles.",
        icon: <Brain className="w-8 h-8 text-white" />
      },
      {
        title: "Instant Discovery",
        description: "Reduce discovery time from weeks to hours with automated candidate identification and real-time matching alerts.",
        icon: <Zap className="w-8 h-8 text-white" />
      }
    ]
  };

  const productTour = {
    title: "Product Tour: See Candidate Sourcing in Action",
    subtitle: "Smarter candidate sourcing starts here",
    description: "With our platform, recruiters can discover, analyze, and engage the right talent — all while maintaining quality and delivering great candidate experiences. Watch the product tour to see our world-class candidate sourcing suite in action."
  };

  const additionalSections = [
    {
      title: "Build a Robust Talent Pipeline",
      description: "Find, attract, and engage with active and passive job seekers to build a strong pool of quality candidates. Tap into AI-powered insights to develop personalized outreach campaigns.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "Showcase Your Employer Brand",
      description: "Build a strong, visible employer brand during the discovery process. Provide candidates with an authentic expression of what it's like to work at your company.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Automate Discovery Tasks",
      description: "Discover the best talent faster, smarter, and with confidence. Lean on the power of automation to streamline sourcing and screening processes.",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <SolutionStorylineTemplate
      title="Candidate Sourcing Solutions"
      description="Advanced talent sourcing and candidate discovery"
      badge="Recruitment Solution"
      heroTitle={
        <>
          <span className="text-synapse-dark">Candidate Sourcing </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Solutions</span>
        </>
      }
      heroDescription="Transform your candidate sourcing with AI-powered discovery that finds the perfect match faster than ever. Our intelligent platform searches, analyzes, and ranks candidates across multiple channels in real-time."
      ctaText="Request a Demo"
      solutionOverview={solutionOverview}
      keyBenefits={keyBenefits}
      productTour={productTour}
      additionalSections={additionalSections}
    />
  );
};

export default CandidateSourcing;
