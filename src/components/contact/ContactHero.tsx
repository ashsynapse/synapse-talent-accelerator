import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const ContactHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-synapse-dark">Contact </span>
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Synapse</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
