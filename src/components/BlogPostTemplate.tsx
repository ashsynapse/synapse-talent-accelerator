
import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, User } from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { useToast } from "@/hooks/use-toast";
import TableOfContents from "./blog/TableOfContents";
import BlogSidebar from "./blog/BlogSidebar";

interface BlogPostTemplateProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
  excerpt?: string;
  authorImage?: string;
  authorLinkedIn?: string;
}

const BlogPostTemplate = ({ 
  title, 
  author, 
  date, 
  readTime, 
  category, 
  children,
  excerpt,
  authorImage,
  authorLinkedIn
}: BlogPostTemplateProps) => {
  const { toast } = useToast();
  
  const handleShare = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      toast({
        title: "URL Copied!",
        description: "The blog post URL has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Unable to copy URL to clipboard.",
        variant: "destructive",
      });
    }
  };
  
  // Table of contents items - these would be generated dynamically in a real implementation
  const tocItems = [
    { id: "why-businesses-leverage", title: "Why Businesses Should Leverage Gen Z's Side Hustle Mentality", level: 2 },
    { id: "key-benefits", title: "Key Benefits for Companies Engaging Gen Z Talent", level: 3 },
    { id: "gig-economy-benefits", title: "How Businesses Can Benefit from the Gig Economy", level: 2 },
    { id: "strategic-implementation", title: "Strategic Implementation Areas", level: 3 },
    { id: "recruitment-firms-role", title: "The Role of Recruitment Firms in Connecting Businesses with Gen Z Talent", level: 2 }
  ];

  // Related articles - these would come from your CMS or API
  const relatedArticles = [
    {
      title: "AI Recruitment Trends 2025: What Every HR Leader Should Know",
      href: "/blog/ai-recruitment-trends-2025",
      date: "Feb 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=200&fit=crop&crop=center"
    },
    {
      title: "Remote Recruitment: Best Practices for Global Hiring",
      href: "/blog/remote-recruitment-guide",
      date: "Feb 10, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop&crop=center"
    },
    {
      title: "Building Your Employer Brand in the Digital Age",
      href: "/blog/employer-branding-2025",
      date: "Feb 5, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <PageTemplate 
      title={title}
      description={excerpt}
    >
      <article className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
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

          {/* Back to Blog */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-synapse-primary hover:bg-synapse-light"
              onClick={() => window.location.href = '/blog'}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Table of Contents - Left Sidebar */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={tocItems} />
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              {/* Article Header */}
              <header className="mb-12">
                <div className="mb-4">
                  <span className="text-sm px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                    {category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-synapse-dark mb-6 leading-tight">
                  {title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-synapse-gray mb-6">
                  <div className="flex items-center gap-3">
                    {authorImage && (
                      <img 
                        src={authorImage} 
                        alt={author}
                        className="w-10 h-10 rounded-full object-cover border-2 border-synapse-lighter"
                      />
                    )}
                    {authorLinkedIn ? (
                      <a 
                        href={authorLinkedIn} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="font-medium hover:text-synapse-primary transition-colors flex items-center gap-2"
                      >
                        <User size={16} />
                        {author}
                      </a>
                    ) : (
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="font-medium">{author}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span>{readTime}</span>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="flex items-center gap-3 pt-6 border-t border-gray-200">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-synapse-primary border-synapse-primary hover:bg-synapse-light"
                    onClick={handleShare}
                  >
                    <Share2 size={16} className="mr-2" />
                    Share Article
                  </Button>
                  <Button variant="outline" size="sm" className="text-synapse-primary border-synapse-primary hover:bg-synapse-light">
                    <BookmarkPlus size={16} className="mr-2" />
                    Save
                  </Button>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {children}
              </div>

              {/* Article Footer */}
              <footer className="mt-16 pt-8 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-synapse-gray">
                    <p className="text-sm">Published by {author} on {date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-synapse-primary border-synapse-primary hover:bg-synapse-light"
                      onClick={handleShare}
                    >
                      <Share2 size={16} className="mr-2" />
                      Share Article
                    </Button>
                  </div>
                </div>
              </footer>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3 order-3">
              <div className="lg:sticky lg:top-24">
                <BlogSidebar relatedArticles={relatedArticles} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageTemplate>
  );
};

export default BlogPostTemplate;
