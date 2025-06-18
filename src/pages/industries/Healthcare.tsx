
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Brain, Shield, Users, Activity, FileText, Microscope, CheckCircle, ArrowRight } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Healthcare = () => {
  const healthcareChallenges = [
    {
      title: "Navigate Credentialing Requirements",
      description: "Find qualified professionals who meet complex licensing and certification standards",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Assess Clinical Competencies",
      description: "Evaluate specialized medical knowledge and patient care skills beyond traditional interviews",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      title: "Address Critical Shortages",
      description: "Fill urgent healthcare positions in a market facing widespread talent shortages",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Ensure Quality Patient Care",
      description: "Recruit professionals who prioritize patient outcomes and healthcare excellence",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const keyRoles = [
    {
      title: "Medical Professionals",
      description: "Physicians, nurses, specialists, surgeons, and clinical practitioners across all medical disciplines",
      icon: <Stethoscope className="w-6 h-6" />,
      skills: ["Clinical Excellence", "Patient Care", "Medical Expertise", "Board Certification"]
    },
    {
      title: "Healthcare Technology",
      description: "Biomedical engineers, health informatics specialists, telemedicine professionals, and medical device experts",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Health IT", "Medical Devices", "Telemedicine", "Healthcare Analytics"]
    },
    {
      title: "Healthcare Administration",
      description: "Hospital administrators, healthcare managers, medical directors, and operations specialists",
      icon: <Users className="w-6 h-6" />,
      skills: ["Healthcare Management", "Operations", "Compliance", "Strategic Planning"]
    },
    {
      title: "Research & Development",
      description: "Clinical researchers, pharmaceutical scientists, biotech professionals, and medical research coordinators",
      icon: <Microscope className="w-6 h-6" />,
      skills: ["Clinical Research", "Drug Development", "Biotech", "Research Design"]
    }
  ];

  const solutionBenefits = [
    {
      title: "Showcase Your Healthcare Mission",
      description: "Highlight your commitment to patient care, medical innovation, and career development to attract healthcare professionals who share your values.",
      icon: <Heart className="w-8 h-8 text-synapse-primary" />
    },
    {
      title: "Build Specialized Healthcare Networks",
      description: "Create targeted connections with medical professionals across different specialties, nurturing relationships before critical needs arise.",
      icon: <Activity className="w-8 h-8 text-synapse-secondary" />
    },
    {
      title: "Deliver Compliant Recruitment",
      description: "Provide secure, HIPAA-compliant recruitment experiences that meet the strict standards expected in healthcare environments.",
      icon: <FileText className="w-8 h-8 text-synapse-tertiary" />
    }
  ];

  const successMetrics = [
    { metric: "45%", description: "faster time-to-hire for healthcare roles" },
    { metric: "95%", description: "candidate satisfaction with recruitment process" },
    { metric: "55%", description: "increase in qualified healthcare applicants" },
    { metric: "80%", description: "improvement in healthcare hire retention rates" }
  ];

  return (
    <PageTemplate 
      title="Healthcare Recruitment Solutions" 
      description="AI-powered recruitment for healthcare professionals and medical organizations"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Healthcare Industry
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Exceptional Experiences for Healthcare Talent
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Compete for critical healthcare positions by revolutionizing how you attract, hire, onboard, and retain highly skilled medical professionals. Our AI-powered platform understands the unique demands of healthcare recruiting.
            </p>
            <div className="flex justify-center">
              <Button 
                className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
                onClick={() => window.location.href = "/contact"}
              >
                <span className="flex items-center gap-2">
                  Find Healthcare Talent
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
              Hire the Best Healthcare Talent for Your Organization
            </h2>
            <p className="text-lg text-synapse-gray leading-relaxed">
              Whether you operate a healthcare facility or are looking to fill specific medical roles in your organization, you need to attract highly skilled, top-tier healthcare professionals by showcasing your employer brand and delivering an outstanding candidate experience. Synapse's AI-powered recruitment platform empowers companies to deliver higher quality healthcare talent and drive hiring results to stay competitive.
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

      {/* Healthcare Challenges Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Solve the Biggest Healthcare Talent Hiring Challenges
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Healthcare organizations face unique recruitment challenges. Our AI platform addresses each one with precision.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {healthcareChallenges.map((challenge, index) => (
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
              Critical Healthcare Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              From clinical care to healthcare technology, we understand the full spectrum of healthcare talent your organization needs.
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
              Proven Results for Healthcare Organizations
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              See how our AI-powered approach delivers measurable improvements for healthcare recruitment.
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

      {/* Healthcare Expertise */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Deep Healthcare Industry Understanding
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our AI platform doesn't just match keywords—it understands medical specialties, licensing requirements, and career progression paths in the healthcare industry.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Clinical Specialties & Certifications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Healthcare Technology & Informatics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Medical Research & Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Healthcare Administration & Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">Regulatory Compliance & Quality Assurance</span>
                  </div>
                </div>
                <Button 
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200"
                  onClick={() => window.location.href = "/contact"}
                >
                  Discover Our Healthcare Expertise <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Clinical Care</h4>
                    <p className="text-sm text-synapse-gray">Physicians, nurses, specialists</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Health Tech</h4>
                    <p className="text-sm text-synapse-gray">Medical devices, health IT</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Administration</h4>
                    <p className="text-sm text-synapse-gray">Healthcare management, operations</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Microscope className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-synapse-dark mb-2">Research</h4>
                    <p className="text-sm text-synapse-gray">Clinical research, drug development</p>
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

export default Healthcare;
