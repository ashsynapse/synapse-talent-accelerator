
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, Heart, Scale, Factory, Calculator, Crown, Users, ArrowRight } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const industries = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Technology",
    description: "Specialized recruitment for software engineers, data scientists, AI/ML experts, and tech leadership",
    href: "/industries/technology",
    roles: ["Software Engineers", "Data Scientists", "DevOps Engineers", "Product Managers"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Finance",
    description: "Finance professionals including investment bankers, financial advisors, analysts, and portfolio managers",
    href: "/industries/finance",
    roles: ["Investment Bankers", "Financial Advisors", "Analysts", "Portfolio Managers"]
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Healthcare",
    description: "Medical professionals, administrators, technicians, and healthcare support staff",
    href: "/industries/healthcare",
    roles: ["Medical Professionals", "Healthcare Admins", "Technicians", "Support Staff"]
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal",
    description: "Legal professionals specializing in corporate law, litigation, compliance, and legal operations",
    href: "/industries/legal",
    roles: ["Corporate Lawyers", "Paralegals", "Legal Assistants", "Compliance Officers"]
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Manufacturing professionals from operations to supply chain management and quality control",
    href: "/industries/manufacturing",
    roles: ["Operations Managers", "Quality Engineers", "Supply Chain", "Plant Managers"]
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Sales & Marketing",
    description: "Sales executives, marketing managers, business development professionals, and revenue drivers",
    href: "/industries/sales-marketing",
    roles: ["Sales Executives", "Marketing Managers", "Business Development", "Revenue Specialists"]
  },
  {
    icon: <Crown className="w-8 h-8" />,
    title: "Leadership",
    description: "C-Suite executives, VPs, directors, and senior management professionals",
    href: "/industries/leadership",
    roles: ["C-Suite Executives", "VPs", "Directors", "Senior Management"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Operations",
    description: "Operations managers, business analysts, project coordinators, and process specialists",
    href: "/industries/operations",
    roles: ["Operations Managers", "Business Analysts", "Project Coordinators", "Process Specialists"]
  }
];

const Industries = () => {
  return (
    <PageTemplate 
      title="Industry-Specific Recruitment Solutions"
      description="Specialized recruitment solutions tailored to industry-specific needs and challenges"
    >
      <section className="pt-24 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Deep industry knowledge combined with AI-powered recruitment technology. We understand the unique challenges and requirements of each sector, delivering specialized talent acquisition solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Two-Column Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark leading-tight">
                Specialized Recruitment Across All Industries
              </h2>
              <p className="text-lg text-synapse-gray leading-relaxed">
                Leverage our deep industry expertise and extensive network to find the right talent for your sector. From precision manufacturing to cutting-edge technology, we understand what makes each industry unique.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Industry-specific talent pools and expertise</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Specialized screening and assessment processes</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-synapse-primary rounded-full mt-2"></div>
                  <p className="text-synapse-gray">Sector-focused recruitment strategies</p>
                </div>
              </div>
              <Button 
                className="bg-synapse-dark text-white hover:bg-synapse-dark/90 px-8 py-3 text-lg"
                onClick={() => window.location.href = "/contact"}
              >
                Find Industry Talent
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="lg:order-last">
              <div className="relative">
                <img 
                  src="/lovable-uploads/df0c195a-592f-40dc-ab94-4b262b0ece13.png"
                  alt="Industrial manufacturing with sparks and precision machinery"
                  className="w-full h-auto rounded-lg shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
              Explore our specialized recruitment expertise across diverse industries and professional sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{industry.title}</h3>
                  <p className="text-synapse-gray mb-4 flex-grow leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-synapse-dark mb-3">Key Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="text-xs px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = industry.href}
                  >
                    Explore {industry.title}
                  </Button>
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

export default Industries;
