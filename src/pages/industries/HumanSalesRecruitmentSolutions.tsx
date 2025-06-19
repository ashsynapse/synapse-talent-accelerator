
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Users, Award, BarChart3, Zap, ArrowRight, CheckCircle, Search, DollarSign, Handshake, Clock } from "lucide-react";
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
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Specialized Sales Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sales Recruitment Solutions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Transform your revenue hiring with AI-powered sales recruitment solutions. We specialize in finding exceptional sales professionals who drive business growth and exceed targets consistently.
            </p>
            <Button 
              className="bg-white text-synapse-primary hover:bg-white/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Sales Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced Sales Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class Sales Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the sales talent market, our Sales Recruitment Solutions offer advanced AI algorithms to identify and engage top sales professionals across all revenue domains.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of sales candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and territories",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global sales talent network access and engagement",
                    "Specialized recruitment for emerging sales technologies",
                    "Executive sales leadership and CRO placement"
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
                      <div className="text-sm text-synapse-gray">Sales Match Accuracy</div>
                      <div className="text-2xl font-bold text-synapse-dark">92%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster Sales Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">65%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <DollarSign className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Revenue Increase</div>
                      <div className="text-2xl font-bold text-synapse-dark">120%</div>
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

      {/* Core Sales Challenges Section */}
      <section className="py-10 bg-white">
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

      {/* Critical Sales Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
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
      <section className="py-10 bg-white">
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
      <section className="py-10 bg-synapse-lighter/30">
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
