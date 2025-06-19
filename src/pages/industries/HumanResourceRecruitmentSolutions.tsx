
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Award, Target, UserCheck, Zap, ArrowRight, CheckCircle, Search, Brain, TrendingUp, Clock } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const HumanResourceRecruitmentSolutions = () => {
  const hrChallenges = [
    {
      title: "AI-Powered HR Talent Discovery",
      description: "Leverage advanced algorithms to identify and engage top human resources professionals across all HR specializations",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "HR Expertise Assessment",
      description: "Comprehensive evaluation of people management skills, compliance knowledge, and strategic HR capabilities",
      icon: <UserCheck className="w-6 h-6" />
    },
    {
      title: "Rapid HR Team Scaling",
      description: "Build robust human resources teams quickly to support growing organizational development and people initiatives",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "HR Managers",
      description: "HR business partners, people managers, employee relations specialists, and HR team leaders",
      icon: <Users className="w-6 h-6" />,
      skills: ["Employee Relations", "Performance Management", "HR Strategy", "Leadership", "People Development", "HR Analytics"]
    },
    {
      title: "Talent Acquisition",
      description: "Recruiters, sourcing specialists, talent acquisition partners, and employer branding professionals",
      icon: <Target className="w-6 h-6" />,
      skills: ["Recruiting", "Sourcing", "Interviewing", "Employer Branding", "Talent Pipeline", "Candidate Experience"]
    },
    {
      title: "HR Operations",
      description: "HRIS specialists, payroll administrators, benefits coordinators, and HR systems professionals",
      icon: <Heart className="w-6 h-6" />,
      skills: ["HRIS", "Payroll", "Benefits Administration", "Compliance", "HR Technology", "Data Management"]
    },
    {
      title: "Learning & Development",
      description: "Training specialists, organizational development professionals, and learning program managers",
      icon: <TrendingUp className="w-6 h-6" />,
      skills: ["Training Design", "Learning Management", "Organizational Development", "Performance Coaching", "Leadership Development", "Skills Assessment"]
    },
    {
      title: "Compensation & Benefits",
      description: "Compensation analysts, benefits specialists, and total rewards professionals",
      icon: <Award className="w-6 h-6" />,
      skills: ["Compensation Analysis", "Benefits Design", "Total Rewards", "Market Analysis", "Pay Equity", "Incentive Programs"]
    },
    {
      title: "HR Leadership",
      description: "HR directors, CHROs, VP of People, and strategic human resources leaders",
      icon: <Users className="w-6 h-6" />,
      skills: ["HR Strategy", "Executive Leadership", "Change Management", "Organizational Culture", "Strategic Planning", "Business Partnership"]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "AI HR Talent Discovery",
      description: "Advanced algorithms scan global networks to identify human resources professionals with specific expertise"
    },
    {
      number: "2", 
      title: "People Skills Validation",
      description: "Comprehensive assessment of HR capabilities, people management experience, and strategic thinking"
    },
    {
      number: "3",
      title: "Cultural Fit Analysis", 
      description: "Evaluate candidates for organizational alignment, leadership style, and HR philosophy compatibility"
    },
    {
      number: "4",
      title: "Seamless Integration",
      description: "Streamlined onboarding process ensuring new HR hires integrate quickly and drive people success"
    }
  ];

  return (
    <PageTemplate 
      title="Human Resource Recruitment Solutions" 
      description="AI-powered recruitment solutions for human resource professionals and people teams"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-6 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Specialized Human Resource Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Human Resource Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Transform your human resource hiring with AI-powered recruitment solutions. We specialize in finding exceptional human resources professionals who drive organizational success and employee engagement.
            </p>
            <Button 
              className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Find Human Resource Talent
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Advanced HR Recruitment Capabilities Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-synapse-dark mb-12">
              Discover World-Class HR Talent Effortlessly
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <p className="text-lg text-synapse-gray">
                  Built specifically for accessing the HR talent market, our Human Resource Recruitment Solutions offer advanced AI algorithms to identify and engage top HR professionals across all specializations.
                </p>
                <div className="space-y-3">
                  {[
                    "AI-powered identification of HR candidates across all platforms",
                    "Discreet engagement strategies that respect candidate privacy",
                    "Comprehensive talent mapping across industries and specializations",
                    "Long-term relationship building for future opportunities",
                    "Advanced behavioral analysis and engagement optimization",
                    "Global HR talent network access and engagement",
                    "Specialized recruitment for emerging HR technologies",
                    "Executive HR leadership and CHRO placement"
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
                      <div className="text-sm text-synapse-gray">HR Skills Match</div>
                      <div className="text-2xl font-bold text-synapse-dark">95%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-secondary">
                  <div className="flex items-center space-x-4 w-full">
                    <Clock className="w-8 h-8 text-synapse-secondary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Faster HR Hiring</div>
                      <div className="text-2xl font-bold text-synapse-dark">70%</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-white rounded-lg shadow-soft border-l-4 border-synapse-tertiary">
                  <div className="flex items-center space-x-4 w-full">
                    <TrendingUp className="w-8 h-8 text-synapse-tertiary flex-shrink-0" />
                    <div className="flex-grow">
                      <div className="text-sm text-synapse-gray">Employee Engagement</div>
                      <div className="text-2xl font-bold text-synapse-dark">85%</div>
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

      {/* Core HR Challenges Section */}
      <section className="py-10 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Breakthrough Human Resource Talent Acquisition
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Our revolutionary approach to human resource recruitment combines AI intelligence with deep HR expertise to identify and engage the best professionals.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {hrChallenges.map((challenge, index) => (
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

      {/* Critical HR Roles Section */}
      <section className="py-10 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Critical Human Resource Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From strategy to operations, we understand the full spectrum of human resource talent your organization needs.
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
              Ready to Transform Your Human Resource Hiring?
            </h2>
            <h3 className="text-xl font-semibold text-synapse-primary mb-6">
              The Future of Human Resource Recruitment is Here
            </h3>
            <p className="text-lg text-synapse-gray mb-8">
              Join leading organizations who are already using our AI-powered human resource recruitment solutions to build world-class people teams and drive employee success.
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
              Our AI-Powered Human Resource Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our intelligent optimization process delivers the best human resource talent automatically
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

export default HumanResourceRecruitmentSolutions;
