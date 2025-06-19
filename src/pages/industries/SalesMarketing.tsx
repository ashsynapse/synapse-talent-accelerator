import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Megaphone, BarChart3, PieChart, Zap, Award, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const SalesMarketing = () => {
  const salesMarketingChallenges = [
    {
      title: "Find Revenue-Driving Talent",
      description: "Locate sales and marketing professionals with proven track records of driving business growth",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Assess Performance Potential",
      description: "Evaluate sales capabilities, marketing creativity, and customer relationship skills beyond interviews",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Scale Revenue Teams Fast",
      description: "Rapidly build sales and marketing teams to capture market opportunities and drive growth",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Retain Top Performers",
      description: "Keep your best sales and marketing talent engaged in a competitive market full of opportunities",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Sales Executives",
      description: "Account executives, sales managers, business development representatives, and enterprise sales professionals",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Sales Strategy", "Account Management", "Lead Generation", "Revenue Growth"]
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing managers, SEO specialists, PPC experts, and marketing automation professionals",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Digital Marketing", "SEO/SEM", "Marketing Automation", "Analytics"]
    },
    {
      title: "Marketing Strategy",
      description: "Brand managers, content marketers, product marketers, and marketing directors",
      icon: <Megaphone className="w-6 h-6" />,
      skills: ["Brand Management", "Content Marketing", "Product Marketing", "Strategy"]
    },
    {
      title: "Revenue Operations",
      description: "Revenue operations specialists, sales enablement professionals, and CRM managers",
      icon: <PieChart className="w-6 h-6" />,
      skills: ["RevOps", "Sales Enablement", "CRM Management", "Data Analysis"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Growth Culture",
      description: "Highlight your market success, growth opportunities, and performance-driven culture to attract top sales and marketing talent who want to drive business results.",
      icon: <TrendingUp className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Performance-Driven Networks",
      description: "Create targeted connections with sales and marketing professionals across different specializations, nurturing relationships before opportunities arise.",
      icon: <Target className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Results-Focused Experience",
      description: "Provide dynamic, engaging recruitment experiences that emphasize performance metrics and growth potential, matching the energy expected by sales and marketing professionals.",
      icon: <Users className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "65%", description: "faster time-to-hire for sales & marketing roles" },
    { metric: "87%", description: "candidate satisfaction with recruitment process" },
    { metric: "50%", description: "increase in qualified sales & marketing applicants" },
    { metric: "74%", description: "improvement in sales & marketing hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Sales & Marketing Recruitment Solutions" 
      description="AI-powered recruitment for sales and marketing professionals"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Sales & Marketing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Sales & Marketing Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for top revenue-driving positions by revolutionizing how you attract, hire, onboard, and retain highly skilled sales and marketing professionals. Our AI-powered platform understands the unique demands of revenue-focused recruiting.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Sales & Marketing Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Hire the Best Sales & Marketing Talent for Your Business
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate a sales-driven organization or are looking to fill specific revenue roles in your company, you need to attract highly skilled, top-tier sales and marketing professionals by showc asing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality sales and marketing talent and drive hiring results to stay competitive.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutionBenefits.map((benefit, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-soft group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">
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

      {/* Sales Marketing Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Sales & Marketing Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Sales and marketing organizations face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {salesMarketingChallenges.map((challenge, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {challenge.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{challenge.title}</h3>
                      <p className="text-synapse-gray">{challenge.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Sales & Marketing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From revenue generation to brand building, we understand the full spectrum of sales and marketing talent your organization needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {keyRoles.map((role, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {role.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-synapse-dark">{role.title}</h3>
                      <p className="text-synapse-gray mb-4">{role.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Proven Results for Sales & Marketing Organizations
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for sales and marketing recruitment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.metric}</span>
                </div>
                <p className="text-synapse-gray font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Marketing Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Sales & Marketing Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands sales methodologies, marketing channels, and career progression paths in revenue-focused roles.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Sales Strategy & Account Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Digital Marketing & SEO/SEM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Brand Management & Content Marketing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Revenue Operations & Analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Growth Marketing & Performance</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Sales & Marketing Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Sales Excellence</h4>
                    <p className="text-sm text-synapse-gray">Account management, business development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Digital Marketing</h4>
                    <p className="text-sm text-synapse-gray">SEO, PPC, marketing automation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Megaphone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Brand Strategy</h4>
                    <p className="text-sm text-synapse-gray">Content marketing, brand management</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <PieChart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Revenue Ops</h4>
                    <p className="text-sm text-synapse-gray">Sales enablement, analytics</p>
                  </div>
                </div>
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
