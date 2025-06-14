import React, { useState, useEffect } from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from "@/hooks/use-mobile";
import { Calendar, Clock, ArrowLeft, Share2, BookmarkPlus, Copy, Check, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
  const [headings, setHeadings] = useState<Array<{id: string, text: string, level: number}>>([]);
  const [activeHeading, setActiveHeading] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBookmarkDialog, setShowBookmarkDialog] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('synapse-bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }
  }, []);

  // Extract headings from content for table of contents
  useEffect(() => {
    const extractHeadings = () => {
      const headingElements = document.querySelectorAll('.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6');
      const headingList = Array.from(headingElements).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        };
      });
      setHeadings(headingList);
    };

    // Small delay to ensure content is rendered
    setTimeout(extractHeadings, 100);
  }, [children]);

  // Track active heading and reading progress while scrolling
  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress based on article content only
      const articleElement = document.querySelector('article');
      if (articleElement) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const articleTop = articleElement.offsetTop;
        const articleHeight = articleElement.offsetHeight;
        const windowHeight = window.innerHeight;
        
        // Calculate progress from start of article to end of article content
        const scrollableHeight = Math.max(0, articleHeight - windowHeight);
        const articleScrolled = Math.max(0, winScroll - articleTop);
        const scrolled = scrollableHeight > 0 ? Math.min(100, (articleScrolled / scrollableHeight) * 100) : 0;
        
        setReadingProgress(scrolled);
      }

      // Track active heading
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);
      
      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveHeading(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({
        title: "URL Copied!",
        description: "The article URL has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please copy the URL manually from your browser.",
        variant: "destructive",
      });
    }
  };

  const handleBookmark = () => {
    const currentUrl = window.location.href;
    const newBookmarks = [...bookmarks, currentUrl];
    setBookmarks(newBookmarks);
    localStorage.setItem('synapse-bookmarks', JSON.stringify(newBookmarks));
    
    setShowBookmarkDialog(true);
    setTimeout(() => {
      setShowBookmarkDialog(false);
      toast({
        title: "Bookmark Saved!",
        description: "This article has been saved to your bookmarks.",
      });
    }, 1000);
  };

  const recentArticles = [
    {
      title: "AI Recruitment Trends That Will Dominate 2025",
      href: "/blog/ai-recruitment-2025"
    },
    {
      title: "The Future of Remote Recruitment: A Complete Guide",
      href: "/blog/remote-recruitment-guide"
    },
    {
      title: "Building Effective Candidate Engagement Strategies",
      href: "/blog/candidate-engagement"
    },
    {
      title: "Strategic Sourcing: Finding Top Talent in Competitive Markets",
      href: "/blog/strategic-sourcing"
    }
  ];

  return (
    <PageTemplate 
      title={title}
      description={excerpt}
    >
      {/* Reading Progress Bar - Changed to brand primary color */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-synapse-primary transition-all duration-150 ease-out"
            style={{ width: `${readingProgress}%` }}
          />
        </div>
      </div>

      <article className="py-20 bg-white">
        <div className="container-wide">
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

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            {/* Table of Contents - Left Sidebar - Hidden on mobile and tablet */}
            {headings.length > 0 && (
              <div className="hidden xl:block xl:col-span-3">
                <div className="sticky top-32">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-synapse-dark mb-4">Table of Contents</h3>
                    <nav className="space-y-2">
                      {headings.map((heading) => (
                        <button
                          key={heading.id}
                          onClick={() => scrollToHeading(heading.id)}
                          className={`block w-full text-left text-sm py-2 px-3 rounded transition-colors ${
                            activeHeading === heading.id
                              ? 'bg-synapse-primary text-white'
                              : 'text-synapse-gray hover:text-synapse-primary hover:bg-white'
                          } ${heading.level > 2 ? 'ml-4' : ''}`}
                        >
                          {heading.text}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            )}

            {/* Main Article Content */}
            <div className={headings.length > 0 ? "xl:col-span-6" : "xl:col-span-9"}>
              {/* Article Header */}
              <header className="mb-12">
                <div className="mb-4">
                  <span className="text-sm px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                    {category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6 leading-tight">
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
                        className="font-medium hover:text-synapse-primary transition-colors"
                      >
                        {author}
                      </a>
                    ) : (
                      <span className="font-medium">{author}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span>{readTime}</span>
                  </div>
                </div>

                {/* Share Actions */}
                <div className="flex items-center gap-3 pb-6 border-b border-gray-200">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-synapse-primary border-synapse-primary hover:bg-synapse-light"
                    onClick={handleShare}
                  >
                    {copied ? <Check size={16} className="mr-2" /> : <Copy size={16} className="mr-2" />}
                    {copied ? 'Copied!' : 'Share'}
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-synapse-primary border-synapse-primary hover:bg-synapse-light"
                    onClick={handleBookmark}
                  >
                    <BookmarkPlus size={16} className="mr-2" />
                    Save
                  </Button>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </div>

            {/* Right Sidebar - Hidden on mobile, shown on tablet and desktop */}
            <div className="hidden md:block xl:col-span-3">
              <div className="sticky top-32 space-y-8">
                {/* Recent Articles */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-synapse-dark mb-4">Recent Articles</h3>
                  <div className="space-y-4">
                    {recentArticles.map((article, index) => (
                      <a
                        key={index}
                        href={article.href}
                        className="block text-sm text-synapse-gray hover:text-synapse-primary transition-colors"
                      >
                        {article.title}
                      </a>
                    ))}
                  </div>
                  <a 
                    href="/blog" 
                    className="inline-block mt-4 text-sm text-synapse-primary hover:underline font-medium"
                  >
                    See All →
                  </a>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-lg p-6 text-white">
                  <h3 className="text-lg font-semibold mb-3">Ready to Transform Your Hiring?</h3>
                  <p className="text-sm mb-4 text-white/90">
                    Discover how AI-powered recruitment can help you find top talent faster and more efficiently.
                  </p>
                  <Button 
                    className="w-full bg-white text-synapse-primary hover:bg-gray-100"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Book a Demo
                  </Button>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-synapse-dark mb-3">Stay Ahead of the Hiring Curve</h3>
                  <p className="text-sm text-synapse-gray mb-4">
                    Subscribe to receive AI hiring insights, trends, and expert tips — directly in your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-synapse-primary focus:border-transparent"
                    />
                    <Button 
                      className="w-full bg-synapse-primary hover:bg-synapse-primary/90"
                    >
                      <Mail size={16} className="mr-2" />
                      Subscribe
                    </Button>
                    <div className="flex items-start gap-2">
                      <input type="checkbox" id="agree" className="mt-1" />
                      <label htmlFor="agree" className="text-xs text-synapse-gray">
                        I agree to receive email updates from Synapse. You can unsubscribe at any time.
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only sections - Show on mobile what's in the sidebar */}
          <div className="md:hidden mt-12 space-y-8">
            {/* Recent Articles - Mobile */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-synapse-dark mb-4">Recent Articles</h3>
              <div className="space-y-4">
                {recentArticles.map((article, index) => (
                  <a
                    key={index}
                    href={article.href}
                    className="block text-sm text-synapse-gray hover:text-synapse-primary transition-colors"
                  >
                    {article.title}
                  </a>
                ))}
              </div>
              <a 
                href="/blog" 
                className="inline-block mt-4 text-sm text-synapse-primary hover:underline font-medium"
              >
                See All →
              </a>
            </div>

            {/* CTA Section - Mobile */}
            <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-3">Ready to Transform Your Hiring?</h3>
              <p className="text-sm mb-4 text-white/90">
                Discover how AI-powered recruitment can help you find top talent faster and more efficiently.
              </p>
              <Button 
                className="w-full bg-white text-synapse-primary hover:bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                Book a Demo
              </Button>
            </div>

            {/* Newsletter Signup - Mobile */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-synapse-dark mb-3">Stay Ahead of the Hiring Curve</h3>
              <p className="text-sm text-synapse-gray mb-4">
                Subscribe to receive AI hiring insights, trends, and expert tips — directly in your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-synapse-primary focus:border-transparent"
                />
                <Button 
                  className="w-full bg-synapse-primary hover:bg-synapse-primary/90"
                >
                  <Mail size={16} className="mr-2" />
                  Subscribe
                </Button>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="agree-mobile" className="mt-1" />
                  <label htmlFor="agree-mobile" className="text-xs text-synapse-gray">
                    I agree to receive email updates from Synapse. You can unsubscribe at any time.
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Bookmark Dialog */}
      {showBookmarkDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4">
            <div className="text-center">
              <BookmarkPlus size={48} className="mx-auto text-synapse-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Saving Bookmark...</h3>
              <p className="text-sm text-gray-600">This article is being saved to your bookmarks.</p>
            </div>
          </div>
        </div>
      )}
    </PageTemplate>
  );
};

export default BlogPostTemplate;
