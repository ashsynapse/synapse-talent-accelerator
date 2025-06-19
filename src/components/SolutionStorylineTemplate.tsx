
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
      <section className="pt-32 pb-12 bg-gradient-to-br from-white via-synapse-lighter/40 to-synapse-light/60">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20 px-4 py-2 text-sm font-semibold">
              {badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="text-xl text-synapse-gray max-w-4xl mx-auto mb-8 leading-relaxed">
              {heroDescription}
            </p>
            <Button 
              className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "/contact"}
            >
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Challenge Section - Only render if mainChallenge is provided */}
      {mainChallenge && (
        <section className="py-12 bg-white">
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
      <section className="py-12 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-6">
                {solutionOverview.title}
              </h2>
              <p className="text-lg text-synapse-gray mb-8 leading-relaxed">
                {solutionOverview.description}
              </p>
              <div className="space-y-4 mb-8">
                {solutionOverview.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0 mt-0.5" />
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
            <div className="bg-white rounded-2xl shadow-medium p-8 border border-synapse-light/20">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-primary/5 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <Users className="w-10 h-10 text-synapse-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-synapse-dark">95%</div>
                  <div className="text-sm text-synapse-gray font-medium">Match Accuracy</div>
                </div>
                <div className="bg-gradient-to-br from-synapse-secondary/10 to-synapse-secondary/5 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-synapse-secondary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-synapse-dark">70%</div>
                  <div className="text-sm text-synapse-gray font-medium">Faster Discovery</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-synapse-tertiary/10 to-synapse-tertiary/5 rounded-xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                <Target className="w-10 h-10 text-synapse-tertiary mx-auto mb-3" />
                <div className="text-3xl font-bold text-synapse-dark">24/7</div>
                <div className="text-sm text-synapse-gray font-medium">Intelligent Sourcing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              {keyBenefits.title}
            </h2>
            <p className="text-lg text-synapse-gray max-w-3xl mx-auto leading-relaxed">
              {keyBenefits.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyBenefits.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
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
      {productTour && (
        <section className="py-12 bg-gradient-to-br from-synapse-lighter/30 to-synapse-light/20">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
                {productTour.title}
              </h2>
              <h3 className="text-xl font-semibold text-synapse-primary mb-6">
                {productTour.subtitle}
              </h3>
              <p className="text-lg text-synapse-gray mb-8 leading-relaxed">
                {productTour.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="btn-primary text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = "/contact"}
                >
                  Get a Demo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white text-lg px-8 py-4 rounded-xl transition-all duration-300"
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
        <section className="py-12 bg-white">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {additionalSections.map((section, index) => (
                <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-synapse-dark">
                      {section.title}
                    </h3>
                    <p className="text-synapse-gray leading-relaxed">
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
