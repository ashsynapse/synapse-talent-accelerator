
import React from "react";
import SolutionStorylineTemplate from "../../components/SolutionStorylineTemplate";
import { Target, FileText, Users, Zap, Calendar, Clock, CheckCircle, TrendingUp } from "lucide-react";

const SubmissionAgent = () => {
  return (
    <SolutionStorylineTemplate
      title="AI Submission Agent - Intelligent Candidate Management"
      description="Revolutionary AI-powered submission agent that manages the entire candidate journey from application to placement"
      badge="Submission Agent"
      heroTitle={
        <>
          <span className="text-synapse-dark">Intelligent </span>
          <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Submission Agent</span>
        </>
      }
      heroDescription="Streamline your candidate submission process with AI that handles coordination, scheduling, follow-ups, and ensures no candidate falls through the cracks."
      ctaText="Get Started"
      mainChallenge={{
        title: "The Challenge of Managing Candidate Submissions",
        description: "Coordinating between candidates, clients, and internal teams is complex and time-consuming. Manual processes lead to delays, miscommunication, and lost opportunities.",
        icon: <FileText className="w-8 h-8 text-white" />
      }}
      solutionOverview={{
        title: "AI-Powered Submission Management",
        description: "Our Submission Agent orchestrates the entire candidate journey, from initial submission to final placement, ensuring seamless communication and optimal timing throughout the process.",
        features: [
          "Automated candidate-client matching and submission",
          "Intelligent interview scheduling and coordination",
          "Real-time status updates for all stakeholders",
          "Automated follow-up sequences and reminders",
          "Comprehensive submission tracking and analytics"
        ],
        ctaText: "Start Managing"
      }}
      keyBenefits={{
        title: "Perfect Your Submission Process",
        subtitle: "Experience seamless candidate journey management",
        benefits: [
          {
            title: "Zero Drop-offs",
            description: "Automated tracking and follow-ups ensure no candidate or opportunity is lost in the submission process.",
            icon: <CheckCircle className="w-8 h-8 text-white" />
          },
          {
            title: "Smart Scheduling",
            description: "AI coordinates schedules across multiple stakeholders to find optimal interview times automatically.",
            icon: <Calendar className="w-8 h-8 text-white" />
          },
          {
            title: "Real-time Updates",
            description: "All parties stay informed with automated status updates and progress notifications throughout the process.",
            icon: <Clock className="w-8 h-8 text-white" />
          },
          {
            title: "Personalized Communication",
            description: "Each stakeholder receives tailored updates and reminders based on their role and preferences.",
            icon: <Users className="w-8 h-8 text-white" />
          },
          {
            title: "Efficient Coordination",
            description: "Streamline complex multi-party coordination with intelligent workflow automation.",
            icon: <Target className="w-8 h-8 text-white" />
          },
          {
            title: "Faster Placements",
            description: "Reduce time-to-hire by 50% through optimized process management and proactive issue resolution.",
            icon: <Zap className="w-8 h-8 text-white" />
          }
        ]
      }}
      productTour={{
        title: "See the Submission Agent in Action",
        subtitle: "Experience AI-Powered Process Management",
        description: "Schedule a personalized demo to see how our Submission Agent can transform your candidate management process and ensure perfect execution every time."
      }}
      additionalSections={[
        {
          title: "Process Analytics",
          description: "Gain insights into your submission process with detailed analytics on timing, success rates, and bottlenecks.",
          icon: <TrendingUp className="w-6 h-6" />
        },
        {
          title: "Custom Workflows",
          description: "Configure submission workflows to match your specific business processes and client requirements.",
          icon: <Target className="w-6 h-6" />
        },
        {
          title: "Integration Ready",
          description: "Seamlessly integrate with your existing CRM, ATS, and calendar systems for unified process management.",
          icon: <CheckCircle className="w-6 h-6" />
        }
      ]}
    />
  );
};

export default SubmissionAgent;
