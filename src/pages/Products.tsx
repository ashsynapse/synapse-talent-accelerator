
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Target, Zap, ArrowRight } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const tools = [
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Sourcing Agent",
    description: "Automatically scans job postings and continuously sources top-matching candidates in the background, offering real-time status updates from discovery to shortlisting.",
    href: "/tools/sourcing-agent"
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "Outreach Agent", 
    description: "Delivers hyper-personalized, automated outreach campaigns to prospective candidates and keeps them engaged with intelligent follow-ups and interview coordination, all while you stay updated in real time.",
    href: "/tools/outreach-agent"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Submission Agent",
    description: "Handles end-to-end candidate submission by coordinating personalized outreach, interview scheduling, and post-interview follow-ups, ensuring seamless engagement and reminders throughout the process.",
    href: "/tools/submission-agent"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "ATS Bypass Engine",
    description: "Smart resume optimizer that reverse-engineers ATS systems for maximum compatibility, ensuring top candidates never get filtered out by algorithmic screening.",
    href: "/tools/ats-bypass-engine"
  }
];

const Products = () => {
  return (
    <PageTemplate 
      title="Recruitment Tools"
      description="Intelligent agents designed to streamline your recruitment process and deliver exceptional results"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Tools
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Tools
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Cutting-edge agents designed to automate and optimize every aspect of your recruitment process, from sourcing to submission.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Explore Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark leading-tight">
                Next-Generation Tools for Modern Recruitment
              </h2>
              <p className="text-lg text-synapse-gray leading-relaxed">
                Harness the power of artificial intelligence with our innovative recruitment technology suite. Our agents work 24/7 to identify, engage, and manage candidates while you focus on strategic decision-making.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Automated candidate sourcing and engagement</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Intelligent resume optimization and ATS bypass</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Real-time status updates and analytics</p>
                </div>
              </div>
              <Button 
                className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Explore Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7558f28a-8bc4-4895-994e-0c2814aa6eaa.png"
                  alt="Professional using VR technology for innovative recruitment solutions"
                  className="w-full h-auto rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Our Recruitment Tools
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Discover our comprehensive suite of recruitment tools designed to revolutionize your hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
