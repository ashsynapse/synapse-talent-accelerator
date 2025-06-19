import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MapPin, Clock, Users, Heart, Award, Coffee } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Careers = () => {
  const jobOpenings = [
    {
      title: "AI Research Scientist",
      location: "Remote",
      type: "Full-time",
      description: "Join our AI team to develop cutting-edge recruitment technologies.",
      link: "/contact"
    },
    {
      title: "Senior Software Engineer",
      location: "New York, NY",
      type: "Full-time",
      description: "Build and scale our AI-powered recruitment platform.",
      link: "/contact"
    },
    {
      title: "Sales Development Representative",
      location: "Remote",
      type: "Full-time",
      description: "Drive growth by introducing Synapse to new clients.",
      link: "/contact"
    }
  ];

  const benefits = [
    {
      title: "Competitive Salary",
      description: "We offer competitive salaries based on experience and market standards."
    },
    {
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance plans."
    },
    {
      title: "Unlimited PTO",
      description: "Flexible time off policy to support work-life balance."
    },
    {
      title: "Professional Development",
      description: "Opportunities for continuous learning and career growth."
    },
    {
      title: "Remote Work",
      description: "Flexible remote work options to suit your lifestyle."
    },
    {
      title: "Stock Options",
      description: "Employee stock options to share in the company's success."
    }
  ];

  return (
    <PageTemplate 
      title="Careers at Synapse | Join Our Team"
      description="Join the future of AI-powered recruitment. Explore career opportunities at Synapse."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Careers at </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Synapse</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Be part of a team that's revolutionizing recruitment with AI. Explore our open positions and find out how you can contribute to our mission.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Explore Opportunities <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Explore current job openings at Synapse and find the perfect fit for your skills and ambitions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-synapse-primary" />
                    <span className="text-synapse-gray">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4 text-synapse-secondary" />
                    <span className="text-synapse-gray">{job.type}</span>
                  </div>
                  <p className="text-synapse-gray mb-4">
                    {job.description}
                  </p>
                  <Button 
                    className="btn-primary w-full"
                    onClick={() => window.location.href = job.link}
                  >
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Benefits Section */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Why Join Synapse?
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Discover the benefits of working at Synapse, where innovation meets a supportive and rewarding work environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
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

      {/* Culture and Values Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Our Culture & Values
            </h2>
            <p className="text-xl text-synapse-gray mb-8">
              At Synapse, we foster a culture of innovation, collaboration, and continuous growth. We value our employees and are committed to creating a supportive and inclusive work environment.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Heart className="w-12 h-12 text-synapse-primary mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">Employee Well-being</h3>
                  <p className="text-synapse-gray text-sm">We prioritize the health and happiness of our team members.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 text-synapse-secondary mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">Recognition & Rewards</h3>
                  <p className="text-synapse-gray text-sm">We celebrate achievements and reward outstanding performance.</p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <Coffee className="w-12 h-12 text-synapse-tertiary mb-4" />
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">Work-Life Balance</h3>
                  <p className="text-synapse-gray text-sm">We support a healthy balance between work and personal life.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Careers;
