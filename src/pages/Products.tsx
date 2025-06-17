
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Send, Users, Database } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const products = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Smart Candidate Sourcing",
    description: "Automated talent discovery system that works in the background to identify and score candidates in real-time",
    href: "/tools/smart-candidate-sourcing"
  },
  {
    icon: <Send className="w-8 h-8" />,
    title: "Automated Application Submission",
    description: "Streamlined application process that automatically submits qualified candidates to relevant positions",
    href: "/tools/automated-application-submission"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Intelligent Candidate Outreach",
    description: "Smart candidate engagement system that personalizes outreach based on candidate preferences and behavior",
    href: "/tools/intelligent-candidate-outreach"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "ATS Bypass Engine",
    description: "Smart resume optimizer that reverse-engineers ATS systems with invisible keyword embedding and success scoring",
    href: "/tools/ats-bypass-engine"
  }
];

const Products = () => {
  return (
    <PageTemplate 
      title="Recruitment Tools"
      description="Intelligent recruitment tools and products for modern hiring needs"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Tools
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Cutting-edge intelligent tools designed to streamline your recruitment process and deliver exceptional results for your hiring needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{product.title}</h3>
                  <p className="text-synapse-gray mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = product.href}
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
