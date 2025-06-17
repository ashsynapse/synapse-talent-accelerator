import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Linkedin } from "lucide-react";

interface BlogPostTemplateProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  excerpt: string;
  children: React.ReactNode;
  authorImage?: string;
  authorLinkedIn?: string;
}

const BlogPostTemplate = ({
  title,
  author,
  date,
  readTime,
  category,
  excerpt,
  children,
  authorImage,
  authorLinkedIn
}: BlogPostTemplateProps) => {
  // Only show the existing blog post
  const recentArticles = [
    {
      title: "The Rise of Side Hustles: Why Gen Z is Shaping the Gig Economy",
      excerpt: "In recent years, the gig economy has seen exponential growth, driven largely by Generation Z...",
      category: "Industry Insights",
      readTime: "6 min read",
      href: "/blog/side-hustles-gig-economy"
    }
  ];

  return (
    <PageTemplate title={title} description={excerpt}>
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-white/30">
            <span className="text-white/90 text-sm font-medium">{category}</span>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-4xl mx-auto leading-tight">
            {title}
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-white/80 text-sm mb-4">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8 bg-white">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {children}

            {/* Mobile CTA - After content, before author */}
            <div className="block md:hidden mt-12 mb-8">
              <div className="bg-gradient-to-r from-synapse-primary to-synapse-secondary p-6 rounded-xl text-center">
                <h3 className="text-xl font-bold text-white mb-3">
                  Ready to Transform Your Hiring?
                </h3>
                <p className="text-white/90 mb-4">
                  Book a demo and see how Synapse can revolutionize your recruitment process.
                </p>
                <Button 
                  className="bg-white text-synapse-primary hover:bg-gray-100 font-medium"
                  onClick={() => window.location.href = "/contact"}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* About Author Section */}
            <div className="mt-12 p-6 bg-synapse-light rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold text-synapse-dark mb-4">About the Author</h3>
              <div className="flex items-start gap-4">
                {authorImage && (
                  <img
                    src={authorImage}
                    alt={author}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-synapse-dark">{author}</h4>
                    {authorLinkedIn && (
                      <a
                        href={authorLinkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-synapse-primary hover:text-synapse-secondary transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-synapse-gray mb-2 font-medium">CEO & Co-Founder</p>
                  <p className="text-synapse-gray text-sm leading-relaxed">
                    Ali is driven by a mission to improve how people find the right opportunities. With over a decade of experience in talent and technology, he's focused on using AI to make recruitment more efficient, fair, and human-centered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop CTA */}
      <section className="hidden md:block py-12 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
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
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Book a demo and discover how Synapse can revolutionize your recruitment strategy.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Book a Demo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>

      {/* Recent Articles Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-synapse-dark mb-8">Recent Articles</h2>
            <div className="grid gap-6">
              {recentArticles.map((article, index) => (
                <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-medium text-synapse-primary bg-synapse-light px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <span className="text-xs text-synapse-gray">{article.readTime}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-synapse-dark mb-2 group-hover:text-synapse-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-synapse-gray text-sm mb-4 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <Button 
                          variant="ghost" 
                          className="text-synapse-primary hover:bg-synapse-light p-0 h-auto font-medium"
                          onClick={() => window.location.href = article.href}
                        >
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default BlogPostTemplate;
