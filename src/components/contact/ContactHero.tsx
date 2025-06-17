
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactHero = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="pt-24 pb-4 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
      <div className="container-wide">
        <div className="max-w-3xl">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-3 py-1 rounded-full mb-3"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">Get in Touch</span>
          </div>
          
          <h1 
            ref={addToRefs}
            className="scroll-animate text-2xl md:text-3xl lg:text-4xl font-bold text-synapse-dark mb-3 leading-tight"
          >
            Contact Us
          </h1>
          
          <p 
            ref={addToRefs}
            className="scroll-animate text-base text-synapse-gray mb-4 leading-relaxed"
          >
            Ready to transform your hiring process with AI? Let's discuss how our autonomous AI agents can scale your talent acquisition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
