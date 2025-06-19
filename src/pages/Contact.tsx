
import React from "react";
import PageTemplate from "../components/PageTemplate";
import ContactFormSection from "../components/contact/ContactFormSection";
import StaticLogosGrid from "../components/StaticLogosGrid";

const Contact = () => {
  return (
    <PageTemplate 
      title="Contact Synapse | AI Recruitment Experts"
      description="Get in touch with Synapse to find top talent fast. Fill out our form or book a demo call with our recruitment experts."
    >
      <ContactFormSection />
      <StaticLogosGrid />
    </PageTemplate>
  );
};

export default Contact;
