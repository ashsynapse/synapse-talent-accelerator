
import React from "react";
import SolutionPageTemplate from "../../components/SolutionPageTemplate";
import { Globe, Users, Clock, Shield, Target, TrendingUp } from "lucide-react";

const RemoteStaffing = () => {
  const features = [
    "Global talent pool access across all time zones",
    "Remote work readiness assessment",
    "Virtual team integration and onboarding",
    "Cross-cultural communication training",
    "Remote collaboration tools setup",
    "Performance tracking for distributed teams",
    "Compliance management across jurisdictions",
    "24/7 support for global operations"
  ];

  const benefits = [
    {
      title: "Global Reach",
      description: "Access top talent from around the world without geographical limitations",
      icon: <Globe className="w-8 h-8 text-white" />
    },
    {
      title: "Cost Efficiency",
      description: "Reduce hiring costs by 50% while accessing premium talent in global markets",
      icon: <TrendingUp className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Operations",
      description: "Build teams across time zones for continuous productivity and support",
      icon: <Clock className="w-8 h-8 text-white" />
    }
  ];

  const caseStudy = {
    title: "SaaS Company Builds Global Team",
    description: "A growing SaaS company needed to build a 24/7 support and development team. We helped them hire 25 remote professionals across 8 countries, enabling round-the-clock operations.",
    results: ["25 remote hires", "8 countries", "24/7 operations"]
  };

  return (
    <SolutionPageTemplate
      title="Remote Staffing"
      description="Global remote talent acquisition for distributed teams and remote-first companies"
      heroTitle="Remote Staffing"
      heroDescription="Build exceptional remote teams with global talent. Our remote staffing solutions help you access the best professionals worldwide while ensuring seamless integration and productivity."
      features={features}
      benefits={benefits}
      caseStudy={caseStudy}
    />
  );
};

export default RemoteStaffing;
