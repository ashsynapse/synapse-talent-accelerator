
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactHero = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="pt-20 pb-6 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
      <div className="container-wide">
        <div className="text-left max-w-4xl">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-4 py-2 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-base font-medium text-synapse-primary uppercase tracking-wide">Get in Touch</span>
          </div>
          
          <h1 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-4 leading-tight"
          >
            Contact Us
          </h1>
          
          <p 
            ref={addToRefs}
            className="scroll-animate text-lg md:text-xl text-synapse-gray mb-6 leading-relaxed max-w-2xl"
          >
            Ready to transform your hiring process with AI? Let's discuss how our autonomous AI agents can scale your talent acquisition.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
