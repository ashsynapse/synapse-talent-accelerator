
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, Users, TrendingUp, Target, Building, Globe, Award, Briefcase, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Leadership = () => {
  const leadershipChallenges = [
    {
      title: "Find Transformational Leaders",
      description: "Locate executive talent with proven ability to drive organizational change and business transformation",
      icon: <Crown className="w-6 h-6" />
    },
    {
      title: "Assess Leadership Competencies",
      description: "Evaluate strategic thinking, team building, and organizational impact beyond traditional assessments",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Attract Top Executive Talent",
      description: "Compete for C-level executives and senior leaders who have multiple high-level opportunities",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Ensure Cultural Alignment",
      description: "Match leadership styles and values with your organizational culture and strategic direction",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "C-Suite Executives",
      description: "CEOs, CTOs, CFOs, CMOs, CHROs, and other C-level leadership positions across all industries",
      icon: <Crown className="w-6 h-6" />,
      skills: ["Strategic Leadership", "Business Transformation", "P&L Management", "Stakeholder Relations"]
    },
    {
      title: "Senior Vice Presidents",
      description: "SVPs of Sales, Marketing, Operations, Technology, Finance, and other senior leadership roles",
      icon: <Building className="w-6 h-6" />,
      skills: ["Divisional Leadership", "Team Management", "Growth Strategy", "Operational Excellence"]
    },
    {
      title: "General Managers",
      description: "Managing directors, general managers, division heads, and regional leadership positions",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Regional Management", "Business Development", "Cross-functional Leadership", "Market Expansion"]
    },
    {
      title: "Emerging Leaders",
      description: "Senior directors, emerging executives, and high-potential leaders ready for advancement",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Leadership Development", "Strategic Planning", "Change Management", "Innovation"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Vision & Culture",
      description: "Highlight your organizational mission, growth opportunities, and leadership development programs to attract executive talent who want to make strategic impact.",
      icon: <Award className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Executive Networks",
      description: "Create targeted relationships with senior leaders across industries and functions, nurturing connections before executive needs arise.",
      icon: <Briefcase className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Executive-Level Experience",
      description: "Provide sophisticated, confidential recruitment experiences that match the expectations and standards of C-level professionals.",
      icon: <Globe className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "35%", description: "faster time-to-hire for executive roles" },
    { metric: "95%", description: "candidate satisfaction with executive recruitment" },
    { metric: "30%", description: "increase in qualified executive applicants" },
    { metric: "85%", description: "improvement in executive hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Executive Leadership Recruitment Solutions" 
      description="AI-powered recruitment for executive and senior leadership positions"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Executive Leadership
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Executive Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for top executive positions by revolutionizing how you attract, hire, onboard, and retain highly skilled leadership professionals. Our AI-powered platform understands the unique demands of executive recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Executive Talent
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Hire the Best Executive Talent for Your Organization
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you need C-suite executives or senior leaders for your organization, you need to attract highly skilled, top-tier leadership professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality executive talent and drive hiring results to stay competitive.
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

      {/* Leadership Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Executive Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Organizations seeking executive talent face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {leadershipChallenges.map((challenge, index) => (
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
              Critical Leadership Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From C-suite executives to emerging leaders, we understand the full spectrum of leadership talent your organization needs.
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
              Proven Results for Executive Search
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for executive recruitment.
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

      {/* Leadership Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Executive Leadership Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands leadership competencies, organizational dynamics, and executive career progression paths across industries.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">C-Suite & Executive Leadership</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Strategic Planning & Execution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Organizational Transformation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Global & Regional Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Leadership Development & Succession</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Leadership Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">C-Suite</h4>
                    <p className="text-sm text-synapse-gray">CEO, CTO, CFO, CMO roles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Senior VPs</h4>
                    <p className="text-sm text-synapse-gray">Division heads, senior leadership</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">General Managers</h4>
                    <p className="text-sm text-synapse-gray">Regional, business unit leaders</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Emerging Leaders</h4>
                    <p className="text-sm text-synapse-gray">High-potential, succession ready</p>
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

export default Leadership;
