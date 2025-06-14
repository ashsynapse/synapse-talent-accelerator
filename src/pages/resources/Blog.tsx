
import React, { useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Calendar, User, ArrowRight, Clock, Search } from "lucide-react";
import NewsletterSignup from "../../components/NewsletterSignup";

const blogPosts = [
  {
    title: "The Rise of Side Hustles: Why Gen Z is Shaping the Gig Economy",
    excerpt: "In recent years, the gig economy has seen exponential growth, driven largely by Generation Z. This digitally savvy generation is redefining work culture by embracing flexibility, entrepreneurship, and multiple streams of income.",
    author: "Ali Taghikhani",
    authorLinkedIn: "https://www.linkedin.com/in/alitaghikhani/",
    date: "February 21, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    href: "/blogs/side-hustles-gig-economy",
    image: "https://cdn-images-1.medium.com/max/800/1*iulfYJoPsSlZl_fdEXouPw.png"
  },
  {
    title: "AI Recruitment Trends for 2025: What's Coming Next",
    excerpt: "Artificial Intelligence is revolutionizing recruitment processes. From automated screening to predictive analytics, discover the key AI trends that will shape hiring in 2025 and beyond.",
    author: "Sarah Johnson",
    authorLinkedIn: "#",
    date: "February 18, 2025",
    readTime: "8 min read",
    category: "Technology",
    href: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
  },
  {
    title: "Remote Work Culture: Building Strong Teams Across Distances",
    excerpt: "Remote work has become the new normal. Learn how to build and maintain strong team cultures, improve communication, and boost productivity in distributed teams.",
    author: "Michael Chen",
    authorLinkedIn: "#",
    date: "February 15, 2025",
    readTime: "5 min read",
    category: "Remote Work",
    href: "#",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
  },
  {
    title: "The Future of Talent Acquisition: Strategies for Success",
    excerpt: "Traditional recruitment methods are evolving rapidly. Explore innovative strategies for attracting, engaging, and retaining top talent in today's competitive market.",
    author: "Emma Rodriguez",
    authorLinkedIn: "#",
    date: "February 12, 2025",
    readTime: "7 min read",
    category: "Strategy",
    href: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop"
  }
];

const categories = ["All", "Industry Insights", "Technology", "Remote Work", "Strategy"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const handleBlogClick = (href: string) => {
    if (href !== "#") {
      window.location.href = href;
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  return (
    <PageTemplate 
      title="Synapse Blog"
      description="Stay updated with the latest insights, trends, and best practices in recruitment and talent acquisition"
    >
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
                  <BreadcrumbPage className="text-synapse-dark font-medium">
                    Blog
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Synapse Blog
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Expert insights, industry trends, and actionable strategies to transform your recruitment process
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-synapse-gray" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-12 h-12 text-base border-synapse-primary/20 focus:border-synapse-primary"
                aria-label="Search blog articles"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 bg-synapse-lighter/50">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-synapse-primary data-[state=active]:text-white text-synapse-dark hover:bg-synapse-light transition-colors min-h-[44px]"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={activeCategory} className="mt-8">
              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {currentPosts.map((post, index) => (
                  <Card 
                    key={index} 
                    className="border hover:border-synapse-primary transition-all duration-300 group h-full cursor-pointer hover:shadow-medium focus-within:ring-2 focus-within:ring-synapse-primary focus-within:outline-none"
                    onClick={() => handleBlogClick(post.href)}
                    role="article"
                  >
                    <CardContent className="p-0 flex flex-col h-full">
                      {/* Blog Image */}
                      <div className="w-full h-64 overflow-hidden rounded-t-lg">
                        <img 
                          src={post.image} 
                          alt={`Featured image for ${post.title}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          <Badge 
                            variant="secondary" 
                            className="bg-synapse-lighter text-synapse-primary hover:bg-synapse-light"
                          >
                            {post.category}
                          </Badge>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-3 text-synapse-dark group-hover:text-synapse-primary transition-colors leading-tight">
                          {post.title}
                        </h2>
                        
                        <p className="text-synapse-gray mb-6 flex-grow line-clamp-3 text-base leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-synapse-gray mb-4">
                          <div className="flex items-center gap-2">
                            <User size={16} aria-hidden="true" />
                            <span className="font-medium">
                              {post.author}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={16} aria-hidden="true" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-synapse-gray">
                            <Calendar size={16} aria-hidden="true" />
                            <span>{post.date}</span>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="text-synapse-primary hover:bg-synapse-light p-3 min-h-[44px] min-w-[44px]"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBlogClick(post.href);
                            }}
                            aria-label={`Read article: ${post.title}`}
                          >
                            <ArrowRight size={18} />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination className="mb-16">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) setCurrentPage(currentPage - 1);
                        }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : "hover:bg-synapse-light text-synapse-primary"}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink 
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                          isActive={currentPage === page}
                          className={currentPage === page 
                            ? "bg-synapse-primary text-white hover:bg-synapse-secondary" 
                            : "hover:bg-synapse-light text-synapse-primary"
                          }
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : "hover:bg-synapse-light text-synapse-primary"}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}

              {/* No Results Message */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold text-synapse-dark mb-4">
                    No articles found
                  </h3>
                  <p className="text-synapse-gray mb-6">
                    Try adjusting your search terms or browse all categories.
                  </p>
                  <Button 
                    onClick={() => {
                      setSearchTerm("");
                      setActiveCategory("All");
                      setCurrentPage(1);
                    }}
                    className="btn-primary"
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </PageTemplate>
  );
};

export default Blog;
