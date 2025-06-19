
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Award, BarChart3, Zap, ArrowRight, CheckCircle, Search, DollarSign, Handshake } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const SalesRecruitmentSolutions = () => {
  const salesChallenges = [
    {
      title: "AI-Powered Sales Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top sales professionals with proven revenue generation track records",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Sales Performance Assessment",
      description: "Comprehensive evaluation of sales capabilities, negotiation skills, and customer relationship building abilities",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Rapid Sales Team Scaling",
      description: "Build high-performing sales teams quickly to capture market opportunities and drive revenue growth",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Sales Representatives",
      description: "Account executives, inside sales reps, field sales specialists, and territory managers",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Lead Generation", "Account Management", "Sales Presentations", "Negotiation", "CRM Management", "Territory Planning"]
    },
    {
      title: "Sales Managers & Directors",
      description: "Regional sales managers, sales directors, VP of sales, and team leadership professionals",
      icon: <Users className="w-6 h-6" />,
      skills: ["Team Leadership", "Sales Coaching", "Performance Management", "Strategic Planning", "Revenue Forecasting", "Process Optimization"]
    },
    {
      title: "Business Development",
      description: "BD representatives, partnership managers, channel sales specialists, and growth strategists",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Business Development", "Partnership Management", "Market Analysis", "Strategic Alliances", "Revenue Growth", "Client Acquisition"]
    },
    {
      title: "Sales Operations",
      description: "Sales operations analysts, revenue operations specialists, and sales enablement professionals",
      icon: <Award className="w-6 h-6" />,
      skills: ["Sales Analytics", "Process Improvement", "Sales Technology", "Revenue Operations", "Performance Metrics", "Sales Enablement"]
    },
    {
      title: "Account Management",
      description: "Key account managers, customer success managers, and client relationship specialists",
      icon: <Handshake className="w-6 h-6" />,
      skills: ["Account Growth", "Customer Retention", "Relationship Management", "Upselling", "Cross-selling", "Customer Success"]
    },
    {
      title: "Sales Leadership",
      description: "Chief Revenue Officers, VP of Sales, and executive sales leadership driving organizational growth",
      icon: <DollarSign className="w-6 h-6" />,
      skills: ["Revenue Strategy", "Executive Leadership", "Market Expansion", "Team Building", "Sales Transformation", "P&L Management"]
    }
  ];

  const benefits = [
    {
      title: "92% Sales Match Accuracy",
      description: "Our AI algorithms ensure precise matching of sales skills with revenue requirements",
      icon: <Target className="w-8 h-8 text-white" />
    },
    {
      title: "65% Faster Sales Hiring",
      description: "Reduce time-to-hire for critical sales positions with automated sourcing and screening",
      icon: <Zap className="w-8 h-8 text-white" />
    },
    {
      title: "24/7 Sales Talent Discovery",
      description: "Continuous AI-powered sourcing ensures you never miss top sales talent opportunities",
      icon: <Search className="w-8 h-8 text-white" />
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI Sales Talent Discovery",
      description: "Advanced algorithms scan global networks to identify sales professionals with specific revenue expertise"
    },
    {
      number: "2", 
      title: "Sales Performance Validation",
      description: "Comprehensive assessment of sales achievements, quota attainment, and relationship building skills"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for team dynamics, communication skills, and organizational alignment"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new sales hires integrate quickly and start producing results"
    }
  ];

  return (
    <PageTemplate 
      title="Sales Recruitment Solutions" 
      description="AI-powered recruitment solutions for sales professionals and revenue-driving teams"
    >
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Sales Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Sales Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your revenue hiring with AI-powered sales recruitment solutions. We specialize in finding exceptional sales professionals who drive business growth and exceed targets consistently.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Sales Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Core Sales Challenges Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Sales Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to sales recruitment combines AI intelligence with deep revenue expertise to identify and engage the best sales professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {salesChallenges.map((challenge, index) => (
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
                Advanced Sales Recruitment Capabilities
              </h2>
              <p className="text-lg text-synapse-gray mb-8">
                Our AI-powered platform delivers comprehensive sales recruitment solutions with unmatched precision and efficiency.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Real-time sales performance assessment and validation",
                  "Automated quota achievement and revenue tracking analysis", 
                  "Comprehensive sales methodology compatibility evaluation",
                  "AI-powered cultural fit and team dynamics assessment",
                  "Global sales talent network access and engagement",
                  "Specialized recruitment for high-growth sales roles",
                  "Executive sales leadership and CRO placement",
                  "Rapid scaling for revenue transformation initiatives"
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

      {/* Critical Sales Roles Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Sales Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From individual contributors to executive leadership, we understand the full spectrum of sales talent your organization needs to drive revenue growth.
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
              Ready to Transform Your Sales Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Sales Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading organizations who are already using our AI-powered sales recruitment solutions to build world-class revenue teams and drive exponential business growth.
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
              Our AI-Powered Sales Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best sales talent automatically
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

export default SalesRecruitmentSolutions;
