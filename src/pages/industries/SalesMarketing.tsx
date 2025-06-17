
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Megaphone, BarChart3, PieChart, Zap, Award } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const SalesMarketing = () => {
  const keyRoles = [
    {
      title: "Sales Executives",
      description: "Account executives, sales managers, business development representatives, and enterprise sales professionals",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Marketing Managers",
      description: "Digital marketing managers, brand managers, content marketers, and marketing directors",
      icon: <Megaphone className="w-6 h-6" />
    },
    {
      title: "Business Development",
      description: "BD managers, partnership specialists, channel managers, and strategic alliance professionals",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Revenue Operations",
      description: "Revenue operations specialists, sales analysts, CRM managers, and sales enablement professionals",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  const specializations = [
    {
      title: "Digital Marketing",
      description: "SEO specialists, PPC managers, social media experts, and marketing automation professionals",
      icon: <Zap className="w-6 h-6 text-white" />
    },
    {
      title: "Enterprise Sales",
      description: "Enterprise account managers, solution consultants, technical sales engineers, and key account directors",
      icon: <Award className="w-6 h-6 text-white" />
    },
    {
      title: "Growth Marketing",
      description: "Growth hackers, conversion specialists, product marketers, and performance marketing experts",
      icon: <TrendingUp className="w-6 h-6 text-white" />
    },
    {
      title: "Sales Analytics",
      description: "Sales analysts, revenue forecasting specialists, CRM experts, and sales intelligence professionals",
      icon: <PieChart className="w-6 h-6 text-white" />
    }
  ];

  return (
    <PageTemplate 
      title="Sales & Marketing Recruitment Solutions" 
      description="AI-powered recruitment for sales and marketing professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Focus
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Sales & Marketing Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Access top sales and marketing talent through our AI-powered recruitment platform. From revenue-driving sales professionals to innovative marketing experts, we connect you with candidates who fuel business growth.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find Sales & Marketing Talent
            </Button>
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Key Sales & Marketing Roles We Fill
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray">{role.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <h2 className="text-3xl font-bold text-center mb-8 text-synapse-dark">
            Sales & Marketing Specializations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {spec.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {spec.description}
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
              Why Companies Choose Synapse for Sales & Marketing
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              Our AI-driven approach identifies sales and marketing professionals who don't just meet quotas, but drive sustainable growth. We match candidates based on performance metrics, cultural fit, and growth potential.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Performance Focus</h3>
                <p className="text-synapse-gray">Data-driven assessment of sales performance, marketing ROI, and revenue impact.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Cultural Alignment</h3>
                <p className="text-synapse-gray">Matching professionals who align with your company culture and values.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Growth Potential</h3>
                <p className="text-synapse-gray">Identifying candidates with proven ability to scale and drive business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default SalesMarketing;
