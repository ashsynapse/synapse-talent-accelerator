
import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import FinalCtaSection from "./FinalCtaSection";

interface SolutionOverview {
  title: string;
  description: string;
  features: string[];
  ctaText: string;
}

interface KeyBenefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface KeyBenefits {
  title: string;
  subtitle: string;
  benefits: KeyBenefit[];
}

interface ProductTour {
  title: string;
  subtitle: string;
  description: string;
}

interface AdditionalSection {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SolutionStorylineTemplateProps {
  title: string;
  description: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  ctaText: string;
  solutionOverview: SolutionOverview;
  keyBenefits: KeyBenefits;
  productTour: ProductTour;
  additionalSections: AdditionalSection[];
}

const SolutionStorylineTemplate = ({
  title,
  description,
  badge,
  heroTitle,
  heroDescription,
  ctaText,
  solutionOverview,
  keyBenefits,
  productTour,
  additionalSections
}: SolutionStorylineTemplateProps) => {
  return (
    <PageTemplate title={title} description={description}>
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              {badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              {heroTitle}
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              {heroDescription}
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Solution Overview Section - Reduced top padding */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark leading-tight">
                {solutionOverview.title}
              </h2>
              <p className="text-lg text-synapse-gray leading-relaxed">
                {solutionOverview.description}
              </p>
              <div className="space-y-4">
                {solutionOverview.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                    <p className="text-synapse-gray">{feature}</p>
                  </div>
                ))}
              </div>
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                {solutionOverview.ctaText} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="lg:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/6c7b520d-1b7f-4b14-9afd-af1404a725fc.png"
                  alt="Professional team collaboration"
                  className="w-full h-auto rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              {keyBenefits.title}
            </h2>
            <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
              {keyBenefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyBenefits.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Tour Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              {productTour.title}
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto mb-8">
              {productTour.description}
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-synapse-primary/10 to-synapse-secondary/10 rounded-xl flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white/90 hover:bg-white text-synapse-primary border-2 border-synapse-primary/20 shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            <p className="text-center text-synapse-gray mt-4 italic">
              {productTour.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8">
            {additionalSections.map((section, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {section.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  {section.title}
                </h3>
                <p className="text-synapse-gray leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SolutionStorylineTemplate;
