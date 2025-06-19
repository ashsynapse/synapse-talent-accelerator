
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Send, MessageSquare, Users, Zap, Target, Clock, CheckCircle, TrendingUp } from "lucide-react";

const OutreachAgent = () => {
  return (
    <SolutionStorylineTemplate
      title="AI Outreach Agent - Intelligent Candidate Engagement"
      description="Revolutionary AI-powered outreach agent that creates personalized engagement campaigns for maximum candidate response rates"
      badge="Outreach Agent"
      heroTitle={
        <>
          <span className="text-synapse-dark">Intelligent </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Outreach Agent</span>
        </>
      }
      heroDescription="Transform your candidate engagement with AI-powered personalization that increases response rates by 300% while maintaining authentic, human-like communication."
      ctaText="Get Started"
      mainChallenge={{
        title: "The Challenge of Effective Candidate Engagement",
        description: "Generic outreach messages get lost in crowded inboxes. Personalizing messages at scale is time-consuming, and maintaining consistent follow-up sequences is nearly impossible manually.",
        icon: <MessageSquare className="w-8 h-8 text-white" />
      }}
      solutionOverview={{
        title: "AI-Powered Personalized Outreach",
        description: "Our Outreach Agent crafts personalized messages that resonate with each candidate, automatically handles follow-ups, and maintains engagement throughout the entire recruitment process.",
        features: [
          "Hyper-personalized message generation based on candidate profiles",
          "Automated follow-up sequences with intelligent timing",
          "Multi-channel outreach across email, LinkedIn, and SMS",
          "A/B testing for message optimization",
          "Real-time response tracking and analytics"
        ],
        ctaText: "Start Engaging"
      }}
      keyBenefits={{
        title: "Maximize Your Outreach Impact",
        subtitle: "Experience the power of AI-driven candidate engagement",
        benefits: [
          {
            title: "300% Higher Response Rates",
            description: "Personalized AI-generated messages significantly outperform generic templates, leading to more meaningful conversations.",
            icon: <TrendingUp className="w-8 h-8 text-white" />
          },
          {
            title: "Intelligent Personalization",
            description: "Each message is crafted based on candidate's background, interests, and career trajectory for maximum relevance.",
            icon: <Target className="w-8 h-8 text-white" />
          },
          {
            title: "Automated Follow-ups",
            description: "Never lose a candidate due to poor follow-up. Our AI manages the entire engagement sequence automatically.",
            icon: <Clock className="w-8 h-8 text-white" />
          },
          {
            title: "Multi-Channel Reach",
            description: "Connect with candidates where they are most active across email, LinkedIn, and SMS platforms.",
            icon: <Send className="w-8 h-8 text-white" />
          },
          {
            title: "Authentic Communication",
            description: "AI-generated messages maintain a human touch while ensuring professional and engaging communication.",
            icon: <CheckCircle className="w-8 h-8 text-white" />
          },
          {
            title: "Scalable Engagement",
            description: "Handle hundreds of outreach campaigns simultaneously without compromising on message quality or timing.",
            icon: <Zap className="w-8 h-8 text-white" />
          }
        ]
      }}
      productTour={{
        title: "See the Outreach Agent in Action",
        subtitle: "Experience AI-Powered Candidate Engagement",
        description: "Schedule a personalized demo to see how our Outreach Agent can transform your candidate communication and dramatically improve your response rates."
      }}
      additionalSections={[
        {
          title: "Message Analytics",
          description: "Track open rates, response rates, and engagement metrics to continuously optimize your outreach strategy.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Template Library",
          description: "Access a comprehensive library of proven message templates that can be customized for your specific needs.",
          icon: <MessageSquare className="w-6 h-6" />
        },
        {
          title: "Compliance Ready",
          description: "All outreach campaigns comply with GDPR, CAN-SPAM, and other relevant regulations automatically.",
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]}
    />
  );
};

export default OutreachAgent;
