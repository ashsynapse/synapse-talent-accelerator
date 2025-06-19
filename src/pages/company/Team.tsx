import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Team = () => {
  const teamMembers = [
    {
      name: "Ali Taghikhani",
      title: "CEO",
      imageUrl: "/lovable-uploads/0d99c45d-a9a5-4932-89b9-508ef4e99c19.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/alitaghikhani/",
      email: "ali@synapse.com"
    },
    {
      name: "Alex Johnson",
      title: "CTO",
      imageUrl: "/lovable-uploads/5c19934b-a949-493d-b7a5-4835a964f059.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/alex-johnson-012a4567/",
      email: "alex.johnson@synapse.com"
    },
    {
      name: "Emily Carter",
      title: "Head of Marketing",
      imageUrl: "/lovable-uploads/86991593-4444-4a7f-8c69-5ca93e9e5088.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/emilycartermarketing/",
      email: "emily.carter@synapse.com"
    },
    {
      name: "David Lee",
      title: "VP of Sales",
      imageUrl: "/lovable-uploads/49f5995d-414b-419c-b7b1-9c989b34394b.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/davidlee-salesleader/",
      email: "david.lee@synapse.com"
    },
    {
      name: "Sarah Thompson",
      title: "Director of Customer Success",
      imageUrl: "/lovable-uploads/42693a7a-4965-4999-8f9b-c49b154a83e9.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/sarahthompson-customersuccess/",
      email: "sarah.thompson@synapse.com"
    },
    {
      name: "Michael Brown",
      title: "Lead AI Scientist",
      imageUrl: "/lovable-uploads/99199995-f1cb-496a-89a8-c9138e179559.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/michaelbrown-ai/",
      email: "michael.brown@synapse.com"
    }
  ];

  return (
    <PageTemplate 
      title="Our Team | Synapse Leadership"
      description="Meet the talented individuals behind Synapse's AI recruitment innovations"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-synapse-primary/10 text-synapse-primary border-synapse-primary/20">
              Leadership Team
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-synapse-dark">Our </span>
              <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Meet the innovative minds driving Synapse's AI recruitment solutions. Our leadership team combines deep industry expertise with a passion for technology to transform talent acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-64 object-cover rounded-xl mb-4" 
                  />
                  <h3 className="text-xl font-bold text-synapse-dark mb-2">{member.name}</h3>
                  <p className="text-synapse-gray mb-3">{member.title}</p>
                  <div className="flex space-x-4">
                    <a href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href={`mailto:${member.email}`} className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Team;
