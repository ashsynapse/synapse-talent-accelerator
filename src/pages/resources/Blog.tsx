
import React, { useState, useEffect } from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
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
    href: "/blog/side-hustles-gig-economy",
    image: "https://cdn-images-1.medium.com/max/800/1*iulfYJoPsSlZl_fdEXouPw.png"
  }
];

const categories = ["All", "Industry Insights"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
      {/* Hero Section - Similar to FAQ */}
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
                    Blog
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Synapse Blog
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Expert insights, industry trends, and actionable strategies to transform your recruitment process
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-synapse-gray h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-4 text-lg border-0 bg-white/95 backdrop-blur-sm shadow-xl rounded-xl focus:ring-2 focus:ring-white/50"
                aria-label="Search blog articles"
              />
            </div>
            <div className="mt-4 text-white/80 text-sm">
              Press <kbd className="px-2 py-1 bg-white/20 rounded">Ctrl + K</kbd> to search
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container-wide">
          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={handleCategoryChange} className="mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-synapse-lighter/50">
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
