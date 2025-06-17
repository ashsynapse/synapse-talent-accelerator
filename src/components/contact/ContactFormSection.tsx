
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="py-4 bg-white">
      <div className="container-wide">
        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-2 rounded-lg inline-block mb-2">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">Quick Response</h3>
              <p className="text-xs text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-2 rounded-lg inline-block mb-2">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">24/7 Availability</h3>
              <p className="text-xs text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-2 rounded-lg inline-block mb-2">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">Global Reach</h3>
              <p className="text-xs text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          {/* Left Column - Feature Cards */}
          <div className="space-y-3">
            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-2 rounded-lg inline-block mb-2">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">Quick Response</h3>
              <p className="text-xs text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-2 rounded-lg inline-block mb-2">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">24/7 Availability</h3>
              <p className="text-xs text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-3 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-2 rounded-lg inline-block mb-2">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-synapse-dark mb-1">Global Reach</h3>
              <p className="text-xs text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
