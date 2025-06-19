import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Code, Database, FileText, Lightbulb, Shield, TrendingUp, Users, Zap } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const ITRecruitmentSolutions = () => {
  return (
    <PageTemplate
      title="IT Recruitment Solutions"
      description="Specialized technology talent acquisition with deep understanding of IT roles, skills, and market dynamics"
    >
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Industry Solution
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              IT Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Specialized technology talent acquisition with deep understanding of IT roles, skills, and market dynamics.
            </p>
            <Button
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Find IT Talent <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section - Moved here */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Ready to Solve Your IT Talent Challenges?
            </h2>
            <p className="text-lg text-synapse-gray mb-8 max-w-2xl mx-auto">
              Join leading companies who are already using our IT recruitment solutions to secure top tech talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white text-lg px-8 py-3"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Powered IT Recruitment Process */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Powered IT Recruitment Process
                </h2>
                <p className="text-synapse-gray mb-6">
                  Our specialized IT recruitment process combines deep industry knowledge with cutting-edge sourcing techniques to identify, attract, and secure top technology talent.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">
                      Deep understanding of IT roles and skills
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">
                      Extensive network of IT professionals
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary flex-shrink-0" />
                    <span className="text-synapse-gray">
                      Proven track record of successful IT placements
                    </span>
                  </div>
                </div>
                <Button
                  className="btn-primary"
                  onClick={() => window.location.href = "/recruitment-solutions"}
                >
                  Explore All Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 rounded-2xl p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">
                        Technical Expertise
                      </h4>
                      <p className="text-sm text-synapse-gray">
                        In-depth knowledge of IT roles, skills, and technologies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">
                        Extensive Network
                      </h4>
                      <p className="text-sm text-synapse-gray">
                        Access to a vast network of qualified IT professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">
                        Proven Results
                      </h4>
                      <p className="text-sm text-synapse-gray">
                        Successful track record of IT placements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Roles Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Technology Roles We Fill
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              We specialize in recruiting for a wide range of IT roles, from
              entry-level positions to senior leadership roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-synapse-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Software Engineers
                </h3>
                <p className="text-synapse-gray text-sm">
                  Full-stack, front-end, back-end, and mobile developers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Cybersecurity Specialists
                </h3>
                <p className="text-synapse-gray text-sm">
                  Security analysts, engineers, and architects
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Lightbulb className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Data Scientists
                </h3>
                <p className="text-synapse-gray text-sm">
                  Data analysts, machine learning engineers, and AI specialists
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-synapse-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  IT Project Managers
                </h3>
                <p className="text-synapse-gray text-sm">
                  Technical project managers and program managers
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Network Engineers
                </h3>
                <p className="text-synapse-gray text-sm">
                  Network administrators and architects
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <FileText className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Database Administrators
                </h3>
                <p className="text-synapse-gray text-sm">
                  Database developers and administrators
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our Streamlined IT Recruitment Process
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              We follow a proven process to ensure we find the best IT talent
              for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                  <Code className="w-8 h-8 text-synapse-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Requirements Gathering
                </h3>
                <p className="text-synapse-gray">
                  We work with you to understand your specific IT needs and
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                  <Database className="w-8 h-8 text-synapse-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Talent Sourcing
                </h3>
                <p className="text-synapse-gray">
                  We leverage our extensive network and resources to identify
                  qualified IT candidates.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                  <Shield className="w-8 h-8 text-synapse-tertiary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Screening & Assessment
                </h3>
                <p className="text-synapse-gray">
                  We conduct thorough screenings and assessments to ensure
                  candidates meet your standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                  <Users className="w-8 h-8 text-synapse-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                  Placement & Onboarding
                </h3>
                <p className="text-synapse-gray">
                  We facilitate the placement and onboarding process to ensure a
                  smooth transition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Why Choose Our IT Recruitment Solutions?
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              We are committed to providing exceptional IT recruitment services
              that deliver measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Code className="w-12 h-12 text-synapse-primary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Technical Expertise
                </h3>
                <p className="text-synapse-gray text-sm">
                  Deep understanding of IT roles, skills, and technologies
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <Database className="w-12 h-12 text-synapse-secondary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Extensive Network
                </h3>
                <p className="text-synapse-gray text-sm">
                  Access to a vast network of qualified IT professionals
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-synapse-tertiary mb-4" />
                <h3 className="text-lg font-bold mb-3 text-synapse-dark">
                  Proven Results
                </h3>
                <p className="text-synapse-gray text-sm">
                  Successful track record of IT placements
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default ITRecruitmentSolutions;
