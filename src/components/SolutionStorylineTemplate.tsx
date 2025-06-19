
import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Users, Zap, Target } from "lucide-react";
import FinalCtaSection from "./FinalCtaSection";

interface SolutionStorylineTemplateProps {
  title: string;
  description: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  ctaText: string;
  mainChallenge?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  solutionOverview: {
    title: string;
    description: string;
    features: string[];
    ctaText: string;
  };
  keyBenefits: {
    title: string;
    subtitle: string;
    benefits: {
      title: string;
      description: string;
      icon: React.ReactNode;
    }[];
  };
  productTour?: {
    title: string;
    subtitle: string;
    description: string;
  };
  additionalSections?: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const SolutionStorylineTemplate = ({
  title,
  description,
  badge,
  heroTitle,
  heroDescription,
  ctaText,
  mainChallenge,
  solutionOverview,
  keyBenefits,
  productTour,
  additionalSections
}: SolutionStorylineTemplateProps) => {
  return (
    <PageTemplate title={title} description={description}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
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

      {/* Main Challenge Section - Only render if mainChallenge is provided */}
      {mainChallenge && (
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-medium bg-gradient-to-r from-synapse-primary/5 to-synapse-secondary/5">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      {mainChallenge.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                        {mainChallenge.title}
                      </h2>
                      <p className="text-lg text-synapse-gray">
                        {mainChallenge.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Solution Overview Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                {solutionOverview.title}
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                {solutionOverview.description}
              </p>
              <div className="space-y-3 mb-8">
                {solutionOverview.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">{feature}</span>
                  </div>
                ))}
              </div>
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-white rounded-xl shadow-soft p-8">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-primary/5 rounded-lg p-4 text-center">
                  <Users className="w-8 h-8 text-synapse-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">95%</div>
                  <div className="text-sm text-synapse-gray">Match Accuracy</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-lg p-4 text-center">
                  <Zap className="w-8 h-8 text-synapse-secondary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-synapse-dark">70%</div>
                  <div className="text-sm text-synapse-gray">Faster Discovery</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-lg p-4 text-center">
                <Target className="w-8 h-8 text-synapse-tertiary mx-auto mb-2" />
                <div className="text-2xl font-bold text-synapse-dark">24/7</div>
                <div className="text-sm text-synapse-gray">Intelligent Sourcing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              {keyBenefits.title}
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              {keyBenefits.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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

      {/* Product Tour Section */}
      {productTour && (
        <section className="py-16 bg-synapse-lighter/30">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-synapse-dark mb-4">
                {productTour.title}
              </h2>
              <h3 className="text-xl font-semibold text-synapse-primary mb-6">
                {productTour.subtitle}
              </h3>
              <p className="text-lg text-synapse-gray mb-8">
                {productTour.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white"
                  onClick={() => window.location.href = "/recruitment-solutions"}
                >
                  Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Additional Sections */}
      {additionalSections && (
        <section className="py-16 bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalSections.map((section, index) => (
                <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                      {section.title}
                    </h3>
                    <p className="text-synapse-gray">
                      {section.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SolutionStorylineTemplate;
