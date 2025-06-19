
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, TrendingUp, Target, BarChart3, Users, Zap, ArrowRight, CheckCircle, Search, Brain, PieChart } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const DigitalMarketingRecruitmentSolutions = () => {
  const digitalMarketingChallenges = [
    {
      title: "AI-Powered Digital Marketing Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top digital marketing professionals across all marketing disciplines",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Marketing Skills Assessment",
      description: "Comprehensive evaluation of creative abilities, analytical skills, and campaign management competencies",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Rapid Marketing Team Scaling",
      description: "Build robust digital marketing teams quickly to support growing brand awareness and lead generation initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Digital Marketing Managers",
      description: "Campaign managers, marketing strategists, growth specialists, and digital marketing coordinators",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["SEO/SEM", "PPC", "Content Marketing", "Marketing Analytics", "Growth Hacking", "Campaign Management"]
    },
    {
      title: "Social Media Specialists",
      description: "Social media managers, community managers, influencer specialists, and social advertising experts",
      icon: <Users className="w-6 h-6" />,
      skills: ["Social Media Marketing", "Community Management", "Influencer Marketing", "Social Advertising", "Brand Management", "Content Creation"]
    },
    {
      title: "Performance Marketers",
      description: "PPC specialists, conversion optimization experts, data analysts, and marketing automation professionals",
      icon: <Target className="w-6 h-6" />,
      skills: ["PPC Advertising", "Conversion Optimization", "A/B Testing", "Marketing Analytics", "Google Ads", "Facebook Ads"]
    },
    {
      title: "Content Marketing Specialists",
      description: "Content strategists, copywriters, video marketers, and brand storytelling professionals",
      icon: <Megaphone className="w-6 h-6" />,
      skills: ["Content Strategy", "Copywriting", "Video Marketing", "Brand Storytelling", "Content Creation", "Editorial Planning"]
    },
    {
      title: "Marketing Analytics & Automation",
      description: "Marketing analysts, automation specialists, CRM managers, and data-driven marketing professionals",
      icon: <PieChart className="w-6 h-6" />,
      skills: ["Marketing Automation", "Analytics", "CRM Management", "Data Analysis", "Lead Scoring", "Marketing Technology"]
    },
    {
      title: "Digital Marketing Leadership",
      description: "Marketing directors, CMOs, digital heads, and strategic marketing leaders driving business growth",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Marketing Strategy", "Team Leadership", "Budget Management", "ROI Optimization", "Brand Development", "Growth Strategy"]
    }
  ];

  const benefits = [
    {
      title: "95% Digital Marketing Match Accuracy",
      description: "Our AI algorithms ensure precise matching of creative and analytical skills with marketing requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "70% Faster Marketing Hiring",
      description: "Reduce time-to-hire for critical digital marketing positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Marketing Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top digital marketing talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Marketing Talent Discovery",
      description: "Advanced algorithms scan global networks to identify digital marketing professionals with specific expertise"
    },
    {
      number: "2", 
      title: "Creative & Analytical Skills Validation",
      description: "Comprehensive assessment of marketing creativity, campaign performance, and analytical capabilities"
    },
    {
      number: "3",
      title: "Brand Fit Analysis", 
      description: "Evaluate candidates for creative alignment, communication skills, and marketing vision compatibility"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new marketing hires integrate quickly and drive results"
    }
  ];

  return (
    <PageTemplate 
      title="Digital Marketing Recruitment Solutions" 
      description="AI-powered recruitment solutions for digital marketing professionals and marketing teams"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Digital Marketing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Digital Marketing Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your digital marketing hiring with AI-powered recruitment solutions. We specialize in finding exceptional digital marketing professionals who drive brand growth and customer engagement.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Digital Marketing Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Digital Marketing Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Digital Marketing Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to digital marketing recruitment combines AI intelligence with deep marketing expertise to identify and engage the best professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {digitalMarketingChallenges.map((challenge, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <div className="text-white">
                      {challenge.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">
                    {challenge.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Advanced Digital Marketing Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive digital marketing recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time creative portfolio assessment and validation",
                  "Automated campaign performance and ROI evaluation", 
                  "Comprehensive marketing stack compatibility analysis",
                  "AI-powered brand fit and creative vision assessment",
                  "Global digital marketing talent network access",
                  "Specialized recruitment for emerging marketing technologies",
                  "Executive marketing leadership and CMO placement",
                  "Rapid scaling for digital transformation initiatives"
                ].map((feature, index) => (
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
              <div className="grid grid-cols-1 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-synapse-primary/10 to-synapse-primary/5 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      {benefit.icon}
                    </div>
                    <div className="text-2xl font-bold text-synapse-dark mb-2">{benefit.title}</div>
                    <div className="text-sm text-synapse-gray">{benefit.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Critical Digital Marketing Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Digital Marketing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From strategy to execution, we understand the full spectrum of digital marketing talent your organization needs to drive growth.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
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

      {/* Ready to Transform CTA Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Digital Marketing Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Digital Marketing Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading companies who are already using our AI-powered digital marketing recruitment solutions to build world-class marketing teams and drive customer engagement.
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our AI-Powered Digital Marketing Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best digital marketing talent automatically
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                    {step.title}
                  </h3>
                  <p className="text-synapse-gray text-sm">
                    {step.description}
                  </p>
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

export default DigitalMarketingRecruitmentSolutions;
