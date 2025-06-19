import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle } from "lucide-react";
import FinalCtaSection from "./FinalCtaSection";

interface SolutionStorylineTemplateProps {
  badge: string;
  title: string;
  description: string;
  ctaText: string;
  heroClassName?: string;
  sectionSpacing?: string;
  twoColumnTitle: string;
  twoColumnDescription: string;
  twoColumnImage: string;
  twoColumnImageAlt: string;
  keyFeatures: string[];
  businessImpacts: { metric: string; description: string }[];
  howItWorksSteps: { title: string; description: string }[];
  industryApplications?: string[];
  successStories?: { challenge: string; solution: string; result: string }[];
}

const SolutionStorylineTemplate = ({
  badge,
  title,
  description,
  ctaText,
  heroClassName = "pt-20 pb-12",
  sectionSpacing = "py-12",
  twoColumnTitle,
  twoColumnDescription,
  twoColumnImage,
  twoColumnImageAlt,
  keyFeatures,
  businessImpacts,
  howItWorksSteps,
  industryApplications,
  successStories
}: SolutionStorylineTemplateProps) => {
  return (
    <PageTemplate title={title} description={description}>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br from-white to-synapse-lighter/30 ${heroClassName}`}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              {badge}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              {title}
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              {description}
            </p>
            <Button className="btn-primary">
              {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className={`bg-white ${sectionSpacing}`}>
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                {twoColumnTitle}
              </h2>
              <p className="text-synapse-gray mb-6">{twoColumnDescription}</p>
              <div className="space-y-4 mb-8">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">{feature}</span>
                  </div>
                ))}
              </div>
              <Button className="btn-primary">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <img
                src={twoColumnImage}
                alt={twoColumnImageAlt}
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact Section */}
      <section className={`bg-synapse-lighter/30 ${sectionSpacing}`}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Measurable Business Impact
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our solutions transform your business metrics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {businessImpacts.map((impact, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                    <span className="text-2xl font-bold text-synapse-primary">{impact.metric}</span>
                  </div>
                  <p className="text-synapse-gray">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={`bg-white ${sectionSpacing}`}>
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              How It Works
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our streamlined process delivers exceptional results
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-synapse-primary rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-synapse-dark mb-2">{step.title}</h3>
                  <p className="text-synapse-gray">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      {industryApplications && (
        <section className={`bg-gray-50 ${sectionSpacing}`}>
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-synapse-dark mb-4">
                Industry Applications
              </h2>
              <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
                Our solutions are tailored for a wide range of industries
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {industryApplications.map((industry, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark">{industry}</h3>
                    <p className="text-synapse-gray">
                      Explore how our solutions drive success in {industry}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Success Stories Section */}
      {successStories && (
        <section className={`bg-white ${sectionSpacing}`}>
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-synapse-dark mb-4">
                Success Stories
              </h2>
              <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
                Real-world examples of how we've helped our clients succeed
              </p>
            </div>
            <div className="space-y-8 max-w-4xl mx-auto">
              {successStories.map((story, index) => (
                <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark">Challenge</h3>
                    <p className="text-synapse-gray mb-4">{story.challenge}</p>
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark">Solution</h3>
                    <p className="text-synapse-gray mb-4">{story.solution}</p>
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark">Result</h3>
                    <p className="text-synapse-gray">{story.result}</p>
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
