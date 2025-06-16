
import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import FinalCtaSection from "./FinalCtaSection";

interface SolutionPageTemplateProps {
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
  caseStudy?: {
    title: string;
    description: string;
    results: string[];
  };
}

const SolutionPageTemplate = ({
  title,
  description,
  heroTitle,
  heroDescription,
  features,
  benefits,
  caseStudy
}: SolutionPageTemplateProps) => {
  return (
    <PageTemplate title={title} description={description}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary">
        <div className="container-wide text-center text-white">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Solution
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {heroTitle}
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            {heroDescription}
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-white/90 transition-colors"
            onClick={() => window.location.href = "/contact"}
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-synapse-dark">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-synapse-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-synapse-gray">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-12 text-synapse-dark">
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      {caseStudy && (
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 text-synapse-dark">
                Success Story
              </h2>
              <Card className="border-0 shadow-medium">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-synapse-dark">
                    {caseStudy.title}
                  </h3>
                  <p className="text-synapse-gray mb-6 text-lg">
                    {caseStudy.description}
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-synapse-primary mb-2">
                          {result}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SolutionPageTemplate;
