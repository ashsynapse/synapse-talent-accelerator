
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Heart, Target, Shield, Users, CheckCircle, TrendingUp, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const PermanentPlacement = () => {
  const keyFeatures = [
    {
      title: "Cultural Fit Assessment",
      description: "Deep evaluation of candidate alignment with company values and team dynamics",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Long-term Potential",
      description: "Focus on candidates with growth potential and career advancement opportunities",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Comprehensive Vetting",
      description: "Thorough background checks, skill assessments, and reference verification",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Retention Focus",
      description: "Strategies to ensure long-term employee satisfaction and retention",
      icon: <UserCheck className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Quality Hires",
      description: "Higher success rates through comprehensive candidate evaluation and matching",
      icon: <CheckCircle className="w-6 h-6 text-white" />
    },
    {
      title: "Reduced Turnover",
      description: "Better cultural and role fit leads to improved employee retention rates",
      icon: <Users className="w-6 h-6 text-white" />
    },
    {
      title: "Cost Efficiency",
      description: "Lower long-term hiring costs through reduced turnover and faster onboarding",
      icon: <Target className="w-6 h-6 text-white" />
    },
    {
      title: "Growth Investment",
      description: "Candidates positioned for long-term growth within your organization",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Permanent Placement Services" 
      description="Full-time permanent placement services across all industries and skill levels"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Recruitment Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Permanent Placement Services
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Build lasting teams with permanent placements that drive long-term success. Our AI-enhanced approach ensures perfect matches between candidates and roles, creating foundations for sustained growth and achievement.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Permanent Staff
            </Button>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Permanent Placement Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{feature.title}</h3>
                      <p className="text-synapse-gray">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Permanent Placement Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-synapse-dark">
              Building Lasting Professional Relationships
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our permanent placement services go beyond skill matching to create lasting professional relationships. We understand that permanent hires are investments in your company's future, requiring careful consideration of growth potential, cultural alignment, and long-term success factors.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Quality Focus</h3>
                <p className="text-synapse-gray">Rigorous screening processes ensure only the highest quality candidates.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Cultural Alignment</h3>
                <p className="text-synapse-gray">Deep assessment of cultural fit to ensure seamless team integration.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Long-term Success</h3>
                <p className="text-synapse-gray">Focus on placements that create lasting value for both candidates and employers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default PermanentPlacement;
