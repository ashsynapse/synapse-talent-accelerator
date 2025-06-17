
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
      {/* Minimal Hero Section - Similar to Careers page */}
      <section className="pt-24 pb-6 bg-white">
        <div className="container-wide">
          {/* Breadcrumbs */}
          <div className="mb-4">
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

          <div className="max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-2">
              {title}
            </h1>
            <p className="text-base text-synapse-gray">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Immediately visible */}
      <section className="pb-8 bg-white">
        <div className="container-wide">
          {children}
        </div>
      </section>
    </PageTemplate>
  );
};

export default FaqChildPageTemplate;
