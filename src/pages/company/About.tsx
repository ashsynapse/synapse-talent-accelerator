import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Heart, Lightbulb, Globe, Award } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const About = () => {
  const companyValues = [
    {
      icon: <Target className="w-6 h-6 text-white" />,
      title: "Client Success",
      description: "We are relentlessly focused on delivering exceptional results and value to our clients."
    },
    {
      icon: <Heart className="w-6 h-6 text-white" />,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to transform recruitment."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Integrity",
      description: "We operate with the highest ethical standards, transparency, and trust."
    },
    {
      icon: <Globe className="w-6 h-6 text-white" />,
      title: "Collaboration",
      description: "We foster a culture of teamwork, knowledge sharing, and mutual support."
    }
  ];

  const awardsAndRecognition = [
    {
      icon: <Award className="w-8 h-8 text-synapse-primary" />,
      title: "Top AI Recruitment Firm",
      description: "Awarded by Industry Tech Insights for innovation in AI-driven recruitment solutions."
    },
    {
      icon: <Users className="w-8 h-8 text-synapse-secondary" />,
      title: "Best Places to Work",
      description: "Recognized for fostering a positive, inclusive, and growth-oriented work environment."
    },
    {
      icon: <Target className="w-8 h-8 text-synapse-tertiary" />,
      title: "Client Satisfaction Award",
      description: "Consistently ranked high in client satisfaction surveys for exceptional service delivery."
    }
  ];

  return (
    <PageTemplate 
      title="About Synapse | AI Recruitment Innovation"
      description="Learn about Synapse's mission to revolutionize recruitment through artificial intelligence and human expertise"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Our Story
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">About </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Synapse</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Synapse is at the forefront of AI-driven recruitment, transforming how companies find and retain top talent. Our mission is to empower organizations with intelligent solutions that drive efficiency, improve candidate engagement, and foster lasting success.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Connect With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-synapse-gray mb-6">
                  To revolutionize recruitment through the power of artificial intelligence, enabling companies to build exceptional teams and achieve their strategic goals.
                </p>
                <h3 className="text-xl font-bold text-synapse-dark mb-4">
                  Our Core Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {companyValues.map((value, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-synapse-dark mb-2">{value.title}</h4>
                        <p className="text-sm text-synapse-gray">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <img 
                  src="/lovable-uploads/a54a956b-1f21-4c95-a917-a9ff0a299192.png" 
                  alt="Synapse Team" 
                  className="w-full rounded-2xl shadow-soft" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Recognition & Awards
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Synapse is proud to be recognized for its innovation, client success, and positive work environment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {awardsAndRecognition.map((award, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-soft">
                    {award.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">
                    {award.title}
                  </h3>
                  <p className="text-synapse-gray">
                    {award.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-synapse-gray mb-8">
              We are committed to driving innovation in recruitment, delivering exceptional value to our clients, and fostering a culture of integrity, collaboration, and growth.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default About;
