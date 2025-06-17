
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Send, Target, Zap } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const tools = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI Sourcing Agent",
    description: "Automatically scans job postings and continuously sources top-matching candidates in the background, offering real-time status updates from discovery to shortlisting.",
    href: "/tools/ai-sourcing-agent"
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "AI Outreach Agent",
    description: "Delivers hyper-personalized, automated outreach campaigns to prospective candidates and keeps them engaged with intelligent follow-ups and interview coordination, all while you stay updated in real time.",
    href: "/tools/ai-outreach-agent"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "AI Submission Agent",
    description: "Handles end-to-end candidate submission by coordinating personalized outreach, interview scheduling, and post-interview follow-ups, ensuring seamless engagement and reminders throughout the process.",
    href: "/tools/ai-submission-agent"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "ATS Bypass Engine",
    description: "This smart resume optimizer reverse-engineers applicant tracking systems (ATS) to instantly generate a stealth-enhanced resume with invisible keyword embedding, a personalized screening failure report, and a data-driven success score to outmaneuver digital hiring filters.",
    href: "/tools/ats-bypass-engine"
  }
];

const Products = () => {
  return (
    <PageTemplate 
      title="AI-Powered Recruitment Tools"
      description="Intelligent AI agents designed to streamline your recruitment process and deliver exceptional results"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI-Powered Recruitment Tools
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Cutting-edge AI agents designed to automate and optimize every aspect of your recruitment process, from sourcing to submission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {tool.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{tool.title}</h3>
                  <p className="text-synapse-gray mb-6 flex-grow leading-relaxed">{tool.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = tool.href}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Products;
