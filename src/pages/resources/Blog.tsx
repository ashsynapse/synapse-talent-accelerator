
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

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
  }
];

const categories = ["All", "Industry Insights"];

const Blog = () => {
  const handleBlogClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <PageTemplate 
      title="Recruitment Blog"
      description="Stay updated with the latest insights, trends, and best practices in recruitment and talent acquisition"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Insights & Trends
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Expert insights, industry trends, and actionable strategies to transform your recruitment process
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-primary" : "border-synapse-primary text-synapse-primary hover:bg-synapse-light"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="border hover:border-synapse-primary transition-all duration-300 group h-full cursor-pointer"
                onClick={() => handleBlogClick(post.href)}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Blog Image */}
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="text-xs px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark group-hover:text-synapse-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-synapse-gray mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-synapse-gray mb-4">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="font-medium">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-synapse-gray">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-synapse-primary hover:bg-synapse-light p-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBlogClick(post.href);
                        }}
                      >
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Blog;
