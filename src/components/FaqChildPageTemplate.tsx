
import React from "react";
import PageTemplate from "./PageTemplate";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface FaqChildPageTemplateProps {
  title: string;
  description: string;
  breadcrumbTitle: string;
  children: React.ReactNode;
}

const FaqChildPageTemplate = ({ title, description, breadcrumbTitle, children }: FaqChildPageTemplateProps) => {
  return (
    <PageTemplate title={title} description={description}>
      {/* Minimal Hero Section - Exactly like Careers page */}
      <section className="pt-32 pb-8 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href="/" 
                    className="text-synapse-gray hover:text-synapse-primary transition-colors"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href="/faq" 
                    className="text-synapse-gray hover:text-synapse-primary transition-colors"
                  >
                    FAQ
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-synapse-dark font-medium">
                    {breadcrumbTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              {title}
            </h1>
            <p className="text-xl text-synapse-gray max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Immediately visible without scrolling */}
      <section className="py-8 bg-white">
        <div className="container-wide">
          {children}
        </div>
      </section>
    </PageTemplate>
  );
};

export default FaqChildPageTemplate;
