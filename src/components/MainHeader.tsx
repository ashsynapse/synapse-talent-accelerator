
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Plus, Minus, 
         Bot, Users, Building2, Search, UserCheck, 
         Briefcase, Code, TrendingUp, Heart, Scale,
         Factory, Calculator, Crown, FileText, 
         Calendar, Phone, Info, HelpCircle, Target,
         Globe, Clock, GraduationCap, Shield, Brain, Send, Zap } from "lucide-react";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileItem = (itemLabel: string) => {
    setExpandedItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const getIconForSubmenu = (label: string) => {
    const iconMap: { [key: string]: any } = {
      "Passive Recruitment": Brain,
      "Candidate Sourcing": Target,
      "Project Staffing": Briefcase,
      "Executive Search": Crown,
      "Remote Staffing": Globe,
      "Permanent Placement": UserCheck,
      "Permanent Staffing": UserCheck,
      "Contingent Staffing": Clock,
      "Apprenticeship Smart Sourcing": GraduationCap,
      "Apprenticeship Recruitment": GraduationCap,
      "AI Sourcing Agent": Bot,
      "AI Outreach Agent": Send,
      "AI Submission Agent": Target,
      "ATS Bypass Engine": Zap,
      "Sourcing Agent": Bot,
      "Outreach Agent": Send,
      "Submission Agent": Target,
      "Recruiting Browser Agent": Globe,
      "Information Technology": Code,
      "Digital Marketing": TrendingUp,
      "Engineering": Heart,
      "Human Resources (HR)": Scale,
      "Sales": Factory,
      "Accounting": Calculator,
      "Legal": Crown,
      "Manufacturing": Users,
      "Technology": Code,
      "Finance": TrendingUp,
      "Healthcare": Heart,
      "Leadership": Crown,
      "Operations": Users,
      "Sales & Marketing": Calculator,
      "Blog": FileText,
      "Case Studies": FileText,
      "Events": Calendar,
      "About Us": Info,
      "Team": Users,
      "Recruiters": UserCheck,
      "Careers": Briefcase,
      "FAQ": HelpCircle,
      "Contact Us": Phone
    };
    
    return iconMap[label] || FileText;
  };

  const getDescriptionForSubmenu = (label: string) => {
    const descriptionMap: { [key: string]: string } = {
      "Passive Recruitment": "Smart talent discovery",
      "Candidate Sourcing": "Advanced candidate matching",
      "Project Staffing": "Flexible project teams",
      "Executive Search": "Leadership recruitment",
      "Remote Staffing": "Global remote talent",
      "Permanent Staffing": "Long-term hires",
      "Contingent Staffing": "Temporary workforce",
      "Apprenticeship Recruitment": "Entry-level talent",
      "AI Sourcing Agent": "Automated candidate sourcing",
      "AI Outreach Agent": "Personalized candidate outreach",
      "AI Submission Agent": "End-to-end submission handling",
      "ATS Bypass Engine": "Smart resume optimization",
      "Sourcing Agent": "Automated candidate sourcing",
      "Outreach Agent": "Personalized candidate outreach",
      "Submission Agent": "End-to-end submission handling",
      "Recruiting Browser Agent": "Automated web browsing",
      "Technology": "Tech talent solutions",
      "Finance": "Financial sector expertise",
      "Healthcare": "Medical professionals",
      "Legal": "Legal industry specialists",
      "Manufacturing": "Industrial workforce",
      "Sales & Marketing": "Revenue-driving roles",
      "Leadership": "Executive positions",
      "Operations": "Operational excellence",
      "Blog": "Industry insights",
      "Case Studies": "Success stories",
      "Events": "Upcoming events",
      "About Us": "Our company story",
      "Team": "Meet our team",
      "Recruiters": "Join our network",
      "Careers": "Work with us",
      "FAQ": "Common questions",
      "Contact Us": "Get in touch"
    };
    
    return descriptionMap[label] || "Learn more";
  };

  const navItems = [
    { 
      label: "Solutions", 
      href: "/recruitment-solutions",
      submenu: [
        { label: "Passive Recruitment", href: "/recruitment-solutions/passive-recruitment" },
        { label: "Candidate Sourcing", href: "/recruitment-solutions/candidate-sourcing" },
        { label: "Project Staffing", href: "/recruitment-solutions/project-staffing" },
        { label: "Executive Search", href: "/recruitment-solutions/executive-search" },
        { label: "Remote Staffing", href: "/recruitment-solutions/remote-staffing" },
        { label: "Permanent Staffing", href: "/recruitment-solutions/permanent-staffing" },
        { label: "Contingent Staffing", href: "/recruitment-solutions/contingent-staffing" },
        { label: "Apprenticeship Recruitment", href: "/recruitment-solutions/apprenticeship-recruitment" }
      ]
    },
    { 
      label: "Tools", 
      href: "/recruitment-tools",
      submenu: [
        { label: "Sourcing Agent", href: "/tools/sourcing-agent" },
        { label: "Outreach Agent", href: "/tools/outreach-agent" },
        { label: "Submission Agent", href: "/tools/submission-agent" },
        { label: "Recruiting Browser Agent", href: "/tools/recruiting-browser-agent" },
        { label: "ATS Bypass Engine", href: "/tools/ats-bypass-engine" }
      ]
    },
    { 
      label: "Industries", 
      href: "/industries",
      submenu: [
        { label: "Information Technology", href: "/industries/IT-recruitment-solutions" },
        { label: "Digital Marketing", href: "/industries/digital-marketing-recruitment-solutions" },
        { label: "Engineering", href: "/industries/engineering-recruitment-solutions" },
        { label: "Human Resources (HR)", href: "/industries/human-resource-recruitment-solutions" },
        { label: "Sales", href: "/industries/sales-recruitment-solutions" },
        { label: "Accounting", href: "/industries/accounting-recruitment-solutions" },
        { label: "Legal", href: "/industries/Legal-staffing-solutions" },
        { label: "Manufacturing", href: "/industries/manufacturing-recruitment-solutions" }
      ]
    },
    { 
      label: "Resources", 
      href: null,
      submenu: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Events", href: "/events" }
      ]
    },
    { 
      label: "Company", 
      href: null,
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Recruiters", href: "/recruiters" },
        { label: "Careers", href: "/careers" },
        { label: "FAQ", href: "/faq" },
        { label: "Contact Us", href: "/contact" }
      ]
    }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-xl border-b border-white/10 shadow-lg py-2"
          : "bg-white/70 backdrop-blur-lg py-3"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-1">
            <img 
              src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" 
              alt="Synapse Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-synapse-primary">
              Synapse
            </span>
          </a>
        </div>

        {/* Centered Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 space-x-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-synapse-dark hover:text-synapse-primary transition-colors"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </a>
              ) : (
                <span className="flex items-center px-3 py-2 text-sm font-medium text-synapse-dark hover:text-synapse-primary transition-colors cursor-default">
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </span>
              )}
              
              {item.submenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                  <div className="bg-white/95 backdrop-blur-lg shadow-medium border border-white/30 rounded-xl p-6">
                    <div className="grid grid-cols-3 gap-4 min-w-[750px]">
                      {item.submenu.map((subItem) => {
                        const IconComponent = getIconForSubmenu(subItem.label);
                        const description = getDescriptionForSubmenu(subItem.label);
                        return (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="group/item flex items-start p-3 rounded-lg hover:bg-white/80 hover:shadow-soft transition-all duration-200 border border-transparent hover:border-synapse-primary/20 h-[72px]"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-synapse-primary to-synapse-secondary flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-synapse-dark group-hover/item:text-synapse-primary transition-colors text-sm leading-tight mb-1">
                                {subItem.label}
                              </h3>
                              <p className="text-xs text-synapse-gray opacity-0 group-hover/item:opacity-100 transition-opacity duration-200 leading-tight">
                                {description}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right side buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            className="btn-primary"
            onClick={() => window.location.href = "/contact"}
          >
            Book Demo
          </Button>
          <Button
            variant="outline"
            className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors"
            onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
          >
            Login
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-synapse-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 shadow-medium">
          <div className="container-wide py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex-1 py-2 text-synapse-dark hover:text-synapse-primary font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="flex-1 py-2 text-synapse-dark font-medium">
                        {item.label}
                      </span>
                    )}
                    {item.submenu && (
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="p-2 text-synapse-dark hover:text-synapse-primary transition-colors"
                      >
                        {expandedItems.includes(item.label) ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </button>
                    )}
                  </div>
                  {item.submenu && expandedItems.includes(item.label) && (
                    <div className="pl-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-sm text-synapse-gray hover:text-synapse-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-white/20">
              <Button
                className="btn-primary w-full"
                onClick={() => {
                  window.location.href = "/contact";
                  setMobileMenuOpen(false);
                }}
              >
                Book Demo
              </Button>
              <Button
                variant="outline"
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors w-full"
                onClick={() => {
                  window.open("https://app.synapserecruiternetwork.com/", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
