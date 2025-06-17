
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe, Zap, Users, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Quick Response",
      description: "Get a response within 24 hours from our AI hiring specialists",
      gradient: "from-synapse-primary to-synapse-secondary"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "24/7 Availability", 
      description: "Our AI systems work around the clock, just like your hiring needs",
      gradient: "from-synapse-secondary to-synapse-tertiary"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: "Global Reach",
      description: "Access talent worldwide with our AI-powered sourcing network",
      gradient: "from-synapse-tertiary to-synapse-primary"
    },
    {
      icon: <Zap className="h-6 w-6 text-white" />,
      title: "Lightning Fast",
      description: "Accelerate your hiring process with autonomous AI agents",
      gradient: "from-purple-500 to-synapse-primary"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Expert Team",
      description: "Backed by recruitment professionals and AI specialists",
      gradient: "from-synapse-primary to-purple-600"
    },
    {
      icon: <Target className="h-6 w-6 text-white" />,
      title: "Precision Matching",
      description: "AI-powered candidate matching for perfect job fits",
      gradient: "from-indigo-500 to-synapse-secondary"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Feature Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              ref={addToRefs}
              className="scroll-animate mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
                Why Choose Synapse?
              </h2>
              <p className="text-lg text-synapse-gray leading-relaxed">
                Transform your hiring with cutting-edge AI technology and unparalleled expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  ref={addToRefs}
                  className="scroll-animate bg-white p-6 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">{feature.title}</h3>
                  <p className="text-synapse-gray leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
