
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setOpenDropdown(null);
  };

  const navigationItems = [
    {
      label: "Solutions",
      href: "/recruitment-solutions",
      dropdown: [
        { label: "Passive AI Sourcing", href: "/recruitment-solutions" },
        { label: "AI Candidate Discovery", href: "/recruitment-solutions" },
        { label: "Project Staffing", href: "/recruitment-solutions" },
        { label: "Executive Search", href: "/recruitment-solutions" },
        { label: "Remote Staffing", href: "/recruitment-solutions" },
        { label: "Permanent Placement", href: "/recruitment-solutions" },
        { label: "Contingent Staffing", href: "/recruitment-solutions" },
        { label: "Apprenticeship AI Sourcing", href: "/recruitment-solutions" }
      ]
    },
    {
      label: "Products",
      href: "/recruitment-tools",
      dropdown: [
        { label: "AI Candidate Sourcing", href: "/recruitment-tools" },
        { label: "Pre-Employment AI Screening", href: "/recruitment-tools" },
        { label: "AI Resume Analysis", href: "/recruitment-tools" }
      ]
    },
    {
      label: "Industries",
      href: "/industries",
      dropdown: [
        { label: "Technology", href: "/industries" },
        { label: "Finance", href: "/industries" },
        { label: "Healthcare", href: "/industries" },
        { label: "Legal", href: "/industries" },
        { label: "Manufacturing", href: "/industries" },
        { label: "Sales & Marketing", href: "/industries" },
        { label: "Leadership", href: "/industries" },
        { label: "Operations", href: "/industries" }
      ]
    },
    {
      label: "Resources",
      href: "/blog",
      dropdown: [
        { label: "Blog", href: "/blog" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Events", href: "/events" }
      ]
    },
    {
      label: "Company",
      href: "/about",
      dropdown: [
        { label: "About Us", href: "/about" },
        { label: "Team", href: "/team" },
        { label: "Recruiters", href: "/recruiters" },
        { label: "Careers", href: "/careers" },
        { label: "FAQ", href: "/faq" }
      ]
    }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm' 
        : 'bg-white border-b border-gray-200'
    }`}>
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20" onMouseLeave={closeAllDropdowns}>
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <a href="/" className="flex items-center space-x-2 group">
              <img 
                src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" 
                alt="Synapse Logo" 
                className="h-8 w-8 transition-transform group-hover:scale-105"
              />
              <span className="text-2xl font-bold text-synapse-dark group-hover:text-synapse-primary transition-colors">
                Synapse
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center space-x-1 text-synapse-dark hover:text-synapse-primary transition-colors py-2 px-1 font-medium"
                  onMouseEnter={() => toggleDropdown(item.label)}
                  onClick={() => window.location.href = item.href}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={16} className={`transition-transform ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-white/30 py-2 z-50">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-synapse-dark hover:text-synapse-primary hover:bg-synapse-lighter/50 transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/contact">
              <Button className="btn-primary">
                Book Demo
              </Button>
            </a>
            <a href="/recruiters">
              <Button variant="outline" className="border-synapse-primary text-synapse-primary hover:bg-synapse-light">
                Login
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-synapse-dark hover:text-synapse-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-white/20 py-4 space-y-4">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full text-left text-synapse-dark hover:text-synapse-primary transition-colors py-2 px-4 font-medium"
                  onClick={() => toggleDropdown(item.label)}
                >
                  <span>{item.label}</span>
                  <ChevronDown size={16} className={`transition-transform ${
                    openDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openDropdown === item.label && (
                  <div className="bg-synapse-lighter/30 py-2 ml-4">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-synapse-gray hover:text-synapse-primary transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 px-4 space-y-3 border-t border-gray-200">
              <a href="/contact" className="block">
                <Button className="btn-primary w-full">
                  Book Demo
                </Button>
              </a>
              <a href="/recruiters" className="block">
                <Button variant="outline" className="border-synapse-primary text-synapse-primary hover:bg-synapse-light w-full">
                  Login
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MainHeader;
