
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Send, CheckCircle, Zap, Clock, Calendar, Users } from "lucide-react";

const AutomatedApplicationSubmission = () => {
  const features = [
    "End-to-end candidate submission coordination",
    "Personalized outreach message automation",
    "Intelligent interview scheduling system",
    "Automated post-interview follow-ups",
    "Seamless engagement tracking",
    "Smart reminder notifications",
    "Multi-stage process management",
    "Real-time submission status updates"
  ];

  const benefits = [
    {
      title: "Complete Automation",
      description: "Handles the entire submission process from initial outreach to final follow-up",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "Smart Coordination",
      description: "Intelligently coordinates interview scheduling and manages all communication",
      icon: <Calendar className="w-8 h-8 text-white" />
    },
    {
      title: "Seamless Engagement",
      description: "Ensures continuous candidate engagement with automated reminders and updates",
      icon: <CheckCircle className="w-8 h-8 text-white" />
    }
  ];

  return (
    <SolutionPageTemplate
      title="Automated Application Submission"
      description="AI submission agent that handles end-to-end candidate coordination with personalized outreach and scheduling"
      heroTitle="Automated Application Submission"
      heroDescription="Handles end-to-end candidate submission by coordinating personalized outreach, interview scheduling, and post-interview follow-ups, ensuring seamless engagement and reminders throughout the process."
      features={features}
      benefits={benefits}
    />
  );
};

export default AutomatedApplicationSubmission;
