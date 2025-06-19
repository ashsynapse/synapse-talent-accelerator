
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, TrendingUp, Users, Target, BarChart3, Zap, ArrowRight, CheckCircle, Search, Brain, PenTool, Monitor } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const DigitalMarketingRecruitmentSolutions = () => {
  const marketingChallenges = [
    {
      title: "AI-Powered Marketing Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top digital marketing professionals across all channels and specializations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Marketing Skills Assessment",
      description: "Comprehensive evaluation of campaign management, analytics expertise, and creative marketing capabilities",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Rapid Marketing Team Scaling",
      description: "Build high-performing marketing teams quickly to support brand growth and customer acquisition initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Digital Marketing Managers",
      description: "Campaign managers, marketing coordinators, digital strategists, and growth marketing professionals",
      icon: <Megaphone className="w-6 h-6" />,
      skills: ["Campaign Management", "Google Ads", "Facebook Ads", "Marketing Strategy", "Growth Hacking", "Analytics"]
    },
    {
      title: "Content Marketing",
      description: "Content creators, copywriters, content strategists, and brand storytelling specialists",
      icon: <PenTool className="w-6 h-6" />,
      skills: ["Content Creation", "Copywriting", "SEO", "Content Strategy", "Brand Storytelling", "Editorial Planning"]
    },
    {
      title: "Social Media Specialists",
      description: "Social media managers, community managers, influencer marketing coordinators, and social strategists",
      icon: <Users className="w-6 h-6" />,
      skills: ["Social Media Management", "Community Building", "Influencer Marketing", "Social Strategy", "Engagement", "Brand Voice"]
    },
    {
      title: "Performance Marketing",
      description: "PPC specialists, conversion optimization experts, and performance advertising professionals",
      icon: <Target className="w-6 h-6" />,
      skills: ["PPC", "Google Ads", "Conversion Optimization", "A/B Testing", "Performance Analytics", "ROI Optimization"]
    },
    {
      title: "Marketing Analytics",
      description: "Marketing analysts, data scientists, attribution specialists, and marketing technology experts",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Marketing Analytics", "Data Analysis", "Attribution Modeling", "Marketing Technology", "Reporting", "KPI Tracking"]
    },
    {
      title: "Marketing Leadership",
      description: "Marketing directors, CMOs, VP of Marketing, and strategic marketing leaders driving growth",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Marketing Strategy", "Team Leadership", "Budget Management", "Growth Strategy", "Brand Development", "Executive Leadership"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Marketing Talent Discovery",
      description: "Advanced algorithms scan global networks to identify marketing professionals with specific campaign expertise"
    },
    {
      number: "2", 
      title: "Marketing Skills Validation",
      description: "Comprehensive assessment of campaign performance, creative abilities, and analytical thinking"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for brand alignment, creativity, and collaborative marketing approach"
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
      description="AI-powered recruitment solutions for digital marketing professionals and creative teams"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Marketing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Digital Marketing Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your marketing hiring with AI-powered recruitment solutions. We specialize in finding exceptional digital marketing professionals who drive brand growth and customer engagement.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Marketing Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Marketing Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Marketing Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the marketing talent market, our Digital Marketing Recruitment Solutions offer advanced AI algorithms to identify and engage top marketing professionals across all channels.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of marketing candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and specializations",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global marketing talent network access and engagement",
                    "Specialized recruitment for emerging marketing technologies",
                    "Executive marketing leadership and CMO placement"
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
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-primary">
                  <div className="flex items-center space-x-4 w-full">
                    <Target className="w-8 h-8 text-synapse-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Campaign Match Accuracy</div>
                      <div className="text-2xl font-bold text-synapse-dark">96%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Zap className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Marketing Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">65%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <TrendingUp className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">ROI Improvement</div>
                      <div className="text-2xl font-bold text-synapse-dark">80%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-primary">
                  <div className="flex items-center space-x-4 w-full">
                    <Search className="w-8 h-8 text-synapse-primary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">AI-Powered Sourcing</div>
                      <div className="text-2xl font-bold text-synapse-dark">24/7</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Marketing Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Marketing Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to marketing recruitment combines AI intelligence with deep campaign expertise to identify and engage the best professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {marketingChallenges.map((challenge, index) => (
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

      {/* Critical Marketing Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Marketing Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From creative to analytics, we understand the full spectrum of marketing talent your organization needs to drive growth.
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
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Marketing Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Marketing Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading companies who are already using our AI-powered marketing recruitment solutions to build world-class creative teams and drive brand success.
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
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our AI-Powered Marketing Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best marketing talent automatically
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
