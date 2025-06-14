
import React, { useState, useMemo, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { 
  ArrowRight, 
  Search, 
  Users, 
  Briefcase, 
  Settings, 
  CreditCard, 
  HelpCircle, 
  BookOpen,
  Zap,
  Shield
} from "lucide-react";

const faqCategories = [
  {
    id: "getting-started",
    title: "Getting Started",
    description: "Learn the basics of SRN and Synapse platform",
    icon: BookOpen,
    faqs: [
      {
        question: "What is SRN / Synapse?",
        answer: "SRN (Synapse Recruiter Network), also known simply as Synapse, is part of Synapse International — a Global AI-First Recruitment Platform built with an extensive worldwide network of professional recruiters.\n\nWe combine the power of AI with the human touch to deliver faster, higher-quality hiring solutions for startups and growing companies across the world.\n\nOn SRN, recruiters collaborate, share client job opportunities, and earn commissions on successful placements — unlocking a new, smarter way to scale talent acquisition globally.\n\nNote: SRN and Synapse refer to the same platform and community."
      },
      {
        question: "How Are Jobs & Clients Shared?",
        answer: "Jobs are posted in Discord and the SRN Job Board. Candidate tracking is done via the ATS Platform."
      },
      {
        question: "What Are Recruiter Responsibilities?",
        answer: "• Candidate Submissions: Recommend top candidates.\n• Client Referrals: Introduce hiring clients to SRN.\n• Compliance & Confidentiality: Follow laws and protect all sensitive data."
      }
    ]
  },
  {
    id: "membership-fees",
    title: "Membership & Fees",
    description: "Information about costs, commissions, and payments",
    icon: CreditCard,
    faqs: [
      {
        question: "Are There Membership Fees?",
        answer: "No. There are no membership fees. SRN earns from placement fees and shares a percentage with recruiters."
      },
      {
        question: "How Much Commission Do Recruiters Earn?",
        answer: "⭐ Recruiters earn 50% of the total placement fee.\n\nExample: If a role pays $500K and SRN's fee is 25% ($125K), your commission = $62,500."
      },
      {
        question: "When Are Commissions Paid?",
        answer: "Within 30 days after SRN receives the placement fee from the client."
      },
      {
        question: "How Do I Receive Commission Payments?",
        answer: "Payments are processed through Deel (which includes Wise for international payments)."
      },
      {
        question: "What if a Candidate Doesn't Complete the Guarantee Period?",
        answer: "Commission payments may be impacted according to specific job terms if the candidate fails to complete the guarantee period."
      }
    ]
  },
  {
    id: "work-policies",
    title: "Work Policies & Guidelines",
    description: "Rules and guidelines for working with SRN",
    icon: Briefcase,
    faqs: [
      {
        question: "Can I Post SRN Jobs Online?",
        answer: "⭐ No. Never. SRN jobs must not be posted online.\n\nYou can, however, share them directly with potential candidates who are a fit for the particular job role."
      },
      {
        question: "Can I Work with My Own Clients?",
        answer: "Yes, you are allowed to work independently with your own clients while also using SRN's job opportunities."
      },
      {
        question: "What is the Recruiter Status?",
        answer: "Recruiters are independent contractors, not employees or partners of SRN."
      },
      {
        question: "How Long Does the Agreement Last?",
        answer: "The agreement lasts indefinitely until terminated by either party with written notice."
      }
    ]
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Compliance",
    description: "Privacy rules and confidentiality requirements",
    icon: Shield,
    faqs: [
      {
        question: "What Are the Confidentiality Rules?",
        answer: "• Use confidential information only for SRN activities.\n• Do not disclose client or candidate details.\n• Protect all sensitive information."
      },
      {
        question: "What Are the Non-Solicitation Rules?",
        answer: "For 1 year after leaving SRN, you must:\n• Not solicit SRN clients.\n• Not recruit SRN employees or members."
      },
      {
        question: "Why Are Some Company Names Hidden?",
        answer: "For confidentiality reasons. You can share general industry and location details with candidates but not company names unless permitted."
      }
    ]
  }
];

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Add keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        const searchInput = document.querySelector('input[placeholder*="Search"]') as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter FAQs based on search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) {
      return selectedCategory 
        ? faqCategories.filter(cat => cat.id === selectedCategory)
        : faqCategories;
    }

    const query = searchQuery.toLowerCase();
    return faqCategories.map(category => ({
      ...category,
      faqs: category.faqs.filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      )
    })).filter(category => category.faqs.length > 0);
  }, [searchQuery, selectedCategory]);

  const totalFAQs = faqCategories.reduce((total, category) => total + category.faqs.length, 0);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery(""); // Clear search when selecting category
  };

  return (
    <PageTemplate 
      title="Help Center - Synapse International"
      description="Find answers to common questions about SRN platform, membership, commissions, and policies"
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container-wide text-center relative">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href="/" 
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white font-medium">
                    FAQ
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SRN Help Center
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Find answers and support for the Synapse Recruiter Network platform
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-synapse-gray h-5 w-5" />
              <Input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 text-lg border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl focus:ring-2 focus:ring-white/50"
              />
            </div>
            <div className="mt-4 text-white/80 text-sm">
              Press <kbd className="px-2 py-1 bg-white/20 rounded">Ctrl + K</kbd> to search
            </div>
          </div>
        </div>
      </section>

      {/* Categories or Search Results */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          {!searchQuery ? (
            <>
              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {faqCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <div
                      key={category.id}
                      className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => handleCategoryClick(category.id)}
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-synapse-lighter rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-synapse-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-synapse-dark group-hover:text-synapse-primary transition-colors">
                            {category.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-synapse-gray mb-4">{category.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-synapse-gray">
                          {category.faqs.length} articles
                        </span>
                        <ArrowRight className="h-4 w-4 text-synapse-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Recent Articles */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-synapse-dark mb-4">
                  Browse all {totalFAQs} articles
                </h2>
                <Button
                  onClick={() => setSelectedCategory(null)}
                  className="bg-synapse-primary hover:bg-synapse-primary/90"
                >
                  View All Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </>
          ) : null}

          {/* FAQ Content */}
          {(searchQuery || selectedCategory) && (
            <div className="max-w-4xl mx-auto">
              {/* Back to Categories */}
              {selectedCategory && !searchQuery && (
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCategory(null)}
                  className="mb-8 text-synapse-primary hover:bg-synapse-light"
                >
                  ← Back to all categories
                </Button>
              )}

              {/* Search Results Header */}
              {searchQuery && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-synapse-dark mb-2">
                    Search results for "{searchQuery}"
                  </h2>
                  <p className="text-synapse-gray">
                    {filteredCategories.reduce((total, cat) => total + cat.faqs.length, 0)} results found
                  </p>
                </div>
              )}

              {/* FAQ Sections */}
              {filteredCategories.map((category) => (
                <div key={category.id} className="mb-12">
                  {(!selectedCategory || searchQuery) && (
                    <div className="flex items-center mb-6">
                      <category.icon className="h-6 w-6 text-synapse-primary mr-3" />
                      <h2 className="text-2xl font-bold text-synapse-dark">
                        {category.title}
                      </h2>
                    </div>
                  )}

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`${category.id}-${index}`} 
                        className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                      >
                        <AccordionTrigger className="text-left hover:text-synapse-primary py-6">
                          <span className="font-medium text-lg">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-synapse-gray pb-6 whitespace-pre-line">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}

              {/* No Results */}
              {filteredCategories.length === 0 && searchQuery && (
                <div className="text-center py-12">
                  <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-synapse-dark mb-2">
                    No results found
                  </h3>
                  <p className="text-synapse-gray mb-6">
                    Try adjusting your search terms or browse our categories above.
                  </p>
                  <Button
                    onClick={() => setSearchQuery("")}
                    variant="outline"
                    className="border-synapse-primary text-synapse-primary hover:bg-synapse-light"
                  >
                    Clear search
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-wide text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Zap className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Still Need Help?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the SRN Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Can't find what you're looking for? Our team is here to help you succeed.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Contact Support
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default FAQ;
