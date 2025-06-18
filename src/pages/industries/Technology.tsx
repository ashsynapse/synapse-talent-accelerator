
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Smartphone, Brain, Shield, Cpu, Zap, Users, TrendingUp, Target, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Technology = () => {
  const techChallenges = [
    {
      title: "Compete for Scarce Tech Talent",
      description: "Stand out in the competitive landscape where skilled developers and engineers have multiple opportunities",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Assess Technical Skills Accurately",
      description: "Evaluate complex technical competencies beyond traditional interview methods",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Scale Your Tech Team Fast",
      description: "Rapidly build development teams to meet aggressive product roadmaps and market demands",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Retain Top Performers",
      description: "Keep your best engineers engaged and committed in a market full of opportunities",
      icon: <Target className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Software Engineers",
      description: "Full-stack developers, frontend specialists, backend engineers, and mobile app developers driving your product innovation",
      icon: <Code className="w-6 h-6" />,
      skills: ["React/Angular", "Node.js", "Python", "Mobile Development"]
    },
    {
      title: "Data Scientists & AI Engineers",
      description: "ML engineers, data analysts, and AI researchers transforming data into competitive advantages",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Machine Learning", "Python/R", "TensorFlow", "Data Analytics"]
    },
    {
      title: "DevOps & Cloud Engineers",
      description: "Infrastructure architects, CI/CD specialists, and security engineers ensuring scalable operations",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS/Azure", "Kubernetes", "Docker", "Infrastructure as Code"]
    },
    {
      title: "Product & Technical Leaders",
      description: "Engineering managers, technical architects, and product managers guiding strategic technology decisions",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Team Leadership", "System Architecture", "Product Strategy", "Agile Management"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Tech Culture",
      description: "Highlight your innovative projects, cutting-edge technology stack, and engineering excellence to attract top talent who want to work on meaningful challenges.",
      icon: <Shield className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Robust Talent Pipelines",
      description: "Create continuous engagement with passive developers and engineers, nurturing relationships long before you have open positions.",
      icon: <Database className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Modern Candidate Experience",
      description: "Provide mobile-first, tech-savvy recruitment experiences that match the digital expectations of software professionals.",
      icon: <Smartphone className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "60%", description: "faster time-to-hire for technical roles" },
    { metric: "85%", description: "candidate satisfaction with tech recruitment process" },
    { metric: "40%", description: "increase in qualified technical applicants" },
    { metric: "70%", description: "improvement in technical hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Technology Recruitment Solutions" 
      description="AI-powered recruitment for technology professionals and tech companies"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Technology Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Tech Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for hard-to-fill tech positions by revolutionizing how you attract, hire, onboard, and retain highly skilled talent. Our AI-powered platform understands the unique demands of technology recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-synapse-primary hover:bg-synapse-primary/90 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Tech Talent
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
              Hire the Best Tech Talent for Your Business
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate in the tech sector or are looking to fill specific technology roles in your company, you need to attract highly skilled, top-tier tech candidates by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality tech talent and drive hiring results to stay competitive.
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

      {/* Tech Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Tech Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Technology companies face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {techChallenges.map((challenge, index) => (
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
              Critical Technology Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From coding to leadership, we understand the full spectrum of technology talent your organization needs.
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
              Proven Results for Technology Companies
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for tech recruitment.
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

      {/* Technology Stack Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Technology Stack Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands technology ecosystems, complementary skills, and career progression paths in the tech industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Frontend & Backend Technology Stacks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Cloud Platform & DevOps Expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">AI/ML & Data Science Specializations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Cybersecurity & Compliance Requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Mobile & Emerging Technology Trends</span>
                  </div>
                </div>
                <Button 
                  className="bg-synapse-primary hover:bg-synapse-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Tech Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Development</h4>
                    <p className="text-sm text-synapse-gray">Full-stack, mobile, web development roles</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">AI & Data</h4>
                    <p className="text-sm text-synapse-gray">Machine learning, data science expertise</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Cloud & DevOps</h4>
                    <p className="text-sm text-synapse-gray">Infrastructure, deployment, scaling</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Security</h4>
                    <p className="text-sm text-synapse-gray">Cybersecurity, compliance, risk management</p>
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

export default Technology;
