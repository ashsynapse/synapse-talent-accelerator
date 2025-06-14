
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface RelatedArticle {
  title: string;
  href: string;
  date: string;
  readTime: string;
  image?: string;
}

interface BlogSidebarProps {
  relatedArticles: RelatedArticle[];
}

const BlogSidebar = ({ relatedArticles }: BlogSidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Related Articles */}
      <div className="bg-white rounded-lg border border-synapse-lighter shadow-sm p-6">
        <h3 className="text-lg font-semibold text-synapse-dark mb-4 flex items-center">
          <BookOpen size={20} className="mr-2 text-synapse-primary" />
          Recent Articles
        </h3>
        <div className="space-y-4">
          {relatedArticles.map((article, index) => (
            <Card key={index} className="border-0 shadow-none hover:shadow-sm transition-shadow cursor-pointer group">
              <CardContent className="p-4 bg-synapse-lighter/30 rounded-lg">
                {article.image && (
                  <div className="w-full h-32 mb-3 overflow-hidden rounded-md">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h4 className="font-medium text-synapse-dark group-hover:text-synapse-primary transition-colors mb-2 line-clamp-2 leading-tight">
                  {article.title}
                </h4>
                <div className="flex items-center gap-4 text-xs text-synapse-gray mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0 text-synapse-primary hover:bg-transparent font-medium"
                  onClick={() => window.location.href = article.href}
                >
                  Read More
                  <ArrowRight size={14} className="ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-lg p-6 text-white">
        <div className="text-center">
          <div className="mb-4">
            <img 
              src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" 
              alt="Synapse Logo" 
              className="h-10 w-10 mx-auto bg-white/20 rounded-full p-2"
            />
          </div>
          <h3 className="text-xl font-bold mb-3">
            Transform Your Hiring Process
          </h3>
          <p className="text-white/90 mb-4 text-sm leading-relaxed">
            Experience the power of AI-driven talent acquisition. Automate your entire hiring lifecycle with Synapse.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-white/90 font-medium w-full"
            onClick={() => window.location.href = '/contact'}
          >
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-white rounded-lg border border-synapse-lighter shadow-sm p-6">
        <h3 className="text-lg font-semibold text-synapse-dark mb-3">
          Stay Updated
        </h3>
        <p className="text-synapse-gray text-sm mb-4">
          Get the latest insights on recruitment trends and AI-powered hiring delivered to your inbox.
        </p>
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-synapse-lighter rounded-md focus:outline-none focus:ring-2 focus:ring-synapse-primary focus:border-transparent text-sm"
          />
          <Button className="btn-primary w-full text-sm">
            Subscribe
          </Button>
        </div>
        <p className="text-xs text-synapse-gray mt-2">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default BlogSidebar;
