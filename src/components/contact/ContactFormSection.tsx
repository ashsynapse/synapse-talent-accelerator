
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="pt-32 pb-12 bg-white min-h-screen">
      <div className="container-wide">
        <div className="grid lg:grid-cols-5 gap-8 items-start max-w-7xl mx-auto">
          {/* Mobile: Header Section - Shows first on mobile */}
          <div className="lg:hidden mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="text-synapse-dark">Ready to Transform </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Your Hiring?</span>
            </h1>
            <p className="text-lg text-synapse-gray">
              Let's discuss how our AI-powered solutions can revolutionize your talent acquisition process.
            </p>
          </div>

          {/* Left Column - Feature Cards - Narrower */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-6">
            {/* Desktop: Header Section - Shows in left column on desktop */}
            <div className="mb-6 hidden lg:block">
              <h1 className="text-2xl lg:text-3xl font-bold mb-3">
                <span className="text-synapse-dark">Ready to Transform </span>
                <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Your Hiring?</span>
              </h1>
              <p className="text-base text-synapse-gray">
                Let's discuss how our AI-powered solutions can revolutionize your talent acquisition process.
              </p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-2.5 rounded-lg inline-block mb-3">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-2">Quick Response</h3>
              <p className="text-sm text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-2.5 rounded-lg inline-block mb-3">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-2">24/7 Availability</h3>
              <p className="text-sm text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-2.5 rounded-lg inline-block mb-3">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-2">Global Reach</h3>
              <p className="text-sm text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>

          {/* Right Column - Contact Form - Wider */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
