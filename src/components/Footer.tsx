import React from "react";
import { Linkedin, Twitter, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-synapse-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" 
                alt="Synapse Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold text-white">Synapse</span>
            </div>
            <p className="mb-6 text-gray-300">
              Global AI-powered talent acquisition platform automating the entire hiring lifecycle — from job intake to offer — with autonomous AI agents for infinite scale.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/synapse-international/?viewAsMember=true"
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/synapseint"
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                aria-label="X (Twitter)"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/hiringwithsynapse/"
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                { label: "Passive Recruitment", href: "/recruitment-solutions/passive-recruitment" },
                { label: "Candidate Sourcing", href: "/recruitment-solutions/candidate-sourcing" }, 
                { label: "Project Staffing", href: "/recruitment-solutions/project-staffing" },
                { label: "Executive Search", href: "/recruitment-solutions/executive-search" },
                { label: "Remote Staffing", href: "/recruitment-solutions/remote-staffing" },
                { label: "Permanent Staffing", href: "/recruitment-solutions/permanent-staffing" },
                { label: "Contingent Staffing", href: "/recruitment-solutions/contingent-staffing" },
                { label: "Apprenticeship Recruitment", href: "/recruitment-solutions/apprenticeship-recruitment" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Tools</h4>
            <ul className="space-y-2">
              {[
                { label: "Sourcing Agent", href: "/tools/sourcing-agent" },
                { label: "Outreach Agent", href: "/tools/outreach-agent" },
                { label: "Submission Agent", href: "/tools/submission-agent" },
                { label: "Recruiting Browser Agent", href: "/tools/recruiting-browser-agent" },
                { label: "ATS Bypass Engine", href: "/tools/ats-bypass-engine" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Locations</h4>
            <ul className="space-y-2">
              {[
                { label: "USA", href: "/locations" },
                { label: "Canada", href: "/locations" },
                { label: "Others", href: "/locations" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              {[
                { label: "Information Technology", href: "/industries/IT-recruitment-solutions" },
                { label: "Digital Marketing", href: "/industries/digital-marketing-recruitment-solutions" },
                { label: "Engineering", href: "/industries/engineering-recruitment-solutions" },
                { label: "Human Resources (HR)", href: "/industries/human-resource-recruitment-solutions" },
                { label: "Sales", href: "/industries/sales-recruitment-solutions" },
                { label: "Accounting", href: "/industries/accounting-recruitment-solutions" },
                { label: "Legal", href: "/industries/Legal-staffing-solutions" },
                { label: "Manufacturing", href: "/industries/manufacturing-recruitment-solutions" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Events", href: "/events" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Team", href: "/team" },
                { label: "Recruiters", href: "/recruiters" },
                { label: "Careers", href: "/careers" },
                { label: "FAQ", href: "/faq" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Synapse International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/glossary" className="hover:text-white transition-colors">
              Glossary
            </a>
            <a href="/partners" className="hover:text-white transition-colors">
              Partners
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
