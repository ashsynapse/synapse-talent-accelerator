
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="py-8 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          {/* Left Column - Hero Text + Feature Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Hero Text */}
            <div 
              ref={addToRefs}
              className="scroll-animate mb-6"
            >
              <p className="text-lg text-synapse-gray leading-relaxed">
                Ready to transform your hiring process with AI? Let's discuss how our autonomous AI agents can scale your talent acquisition.
              </p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-4 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-2.5 rounded-lg inline-block mb-2.5">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-1.5">Quick Response</h3>
              <p className="text-sm text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-4 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-2.5 rounded-lg inline-block mb-2.5">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-1.5">24/7 Availability</h3>
              <p className="text-sm text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-4 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-2.5 rounded-lg inline-block mb-2.5">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-bold text-synapse-dark mb-1.5">Global Reach</h3>
              <p className="text-sm text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
