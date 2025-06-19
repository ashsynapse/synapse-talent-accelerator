
import React from "react";
import { Badge } from "@/components/ui/badge";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
            Contact Us
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-synapse-dark">Ready to Transform </span>
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Your Hiring?</span>
          </h1>
          <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
            Connect with our team to discover how Synapse's AI-powered recruitment solutions can help you find exceptional talent faster than ever before.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
