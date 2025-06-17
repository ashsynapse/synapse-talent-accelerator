
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="py-6 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Feature Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-3 rounded-lg inline-block mb-3">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Quick Response</h3>
              <p className="text-base text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-3 rounded-lg inline-block mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">24/7 Availability</h3>
              <p className="text-base text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-5 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-3 rounded-lg inline-block mb-3">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Global Reach</h3>
              <p className="text-base text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
