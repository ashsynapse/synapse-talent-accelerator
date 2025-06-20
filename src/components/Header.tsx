
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

type HeaderProps = {
  isRecruiterPage?: boolean;
};

const Header = ({ isRecruiterPage = false }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { 
      label: "Tools", 
      href: "/recruitment-tools",
      hasDropdown: true,
      children: [
        { label: "Sourcing Agent", href: "/tools/sourcing-agent" },
        { label: "Outreach Agent", href: "/tools/outreach-agent" },
        { label: "Submission Agent", href: "/tools/submission-agent" },
        { label: "Recruiting Browser Agent", href: "/tools/recruiting-browser-agent" },
        { label: "ATS Bypass Engine", href: "/tools/ats-bypass-engine" }
      ]
    },
    { label: "Contact", href: "mailto:info@synapseint.com" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <div className="flex items-center">
          <a href="/home" className="flex items-center space-x-2">
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

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <div 
                  className="relative"
                  onMouseEnter={() => setToolsDropdownOpen(true)}
                  onMouseLeave={() => setToolsDropdownOpen(false)}
                >
                  <a
                    href={item.href}
                    className="text-synapse-dark hover:text-synapse-primary font-medium transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown size={16} />
                  </a>
                  {toolsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                      {item.children?.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2 text-synapse-dark hover:text-synapse-primary hover:bg-synapse-lighter/20 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-synapse-dark hover:text-synapse-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          
          {isRecruiterPage ? (
            <Button
              className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold px-6 py-2 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              Login
            </Button>
          ) : (
            <Button
              className="btn-primary ml-4"
              onClick={() => window.location.href = "mailto:info@synapseint.com"}
            >
              Hire Talent
            </Button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-synapse-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white absolute w-full py-5 shadow-medium">
          <div className="container-wide flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="text-synapse-dark hover:text-synapse-primary font-medium transition-colors py-2 block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
                {item.hasDropdown && item.children && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="text-synapse-gray hover:text-synapse-primary transition-colors py-1 block text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {isRecruiterPage ? (
              <Button
                className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold w-full mt-4"
                onClick={() => {
                  window.open("https://app.synapserecruiternetwork.com/", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                className="btn-primary w-full mt-4"
                onClick={() => {
                  window.location.href = "mailto:info@synapseint.com";
                  setMobileMenuOpen(false);
                }}
              >
                Hire Talent
              </Button>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
