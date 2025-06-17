import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Link } from "react-router-dom";

interface NavItem {
  title: string;
  to: string;
  icon?: React.ComponentType<any>;
  description?: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    title: "Solutions",
    to: "/solutions",
    children: [
      {
        title: "Passive Intelligent Sourcing",
        to: "/solutions/passive-intelligent-sourcing",
        description: "Smart sourcing to identify and engage top talent who aren't actively job searching",
      },
      {
        title: "Intelligent Candidate Discovery",
        to: "/solutions/intelligent-candidate-discovery",
        description: "Comprehensive candidate sourcing strategies to find the perfect match for your roles",
      },
      {
        title: "Project Staffing",
        to: "/solutions/project-staffing",
        description: "Specialized staffing solutions for short-term and long-term project requirements",
      },
      {
        title: "Executive Search",
        to: "/solutions/executive-search",
        description: "Specialized recruitment for C-level and senior leadership positions",
      },
      {
        title: "Remote Staffing",
        to: "/solutions/remote-staffing",
        description: "Global remote talent acquisition for distributed teams and remote-first companies",
      },
      {
        title: "Permanent Placement",
        to: "/solutions/permanent-placement",
        description: "Full-time permanent placement services across all industries and skill levels",
      },
      {
        title: "Contingent Staffing",
        to: "/solutions/contingent-staffing",
        description: "Flexible staffing solutions for temporary and contract positions",
      },
      {
        title: "Apprenticeship Smart Sourcing",
        to: "/solutions/apprenticeship-smart-sourcing",
        description: "Specialized recruitment for apprenticeship programs and early career professionals",
      },
    ],
  },
  {
    title: "Tools",
    to: "/tools",
    children: [
      {
        title: "AI Sourcing Agent",
        to: "/tools/ai-sourcing-agent",
        description: "Automated candidate sourcing with AI-powered agents",
      },
      {
        title: "AI Outreach Agent",
        to: "/tools/ai-outreach-agent",
        description: "Personalized candidate outreach using AI-driven communication",
      },
      {
        title: "AI Submission Agent",
        to: "/tools/ai-submission-agent",
        description: "Streamlined candidate submission process with AI assistance",
      },
      {
        title: "ATS Bypass Engine",
        to: "/tools/ats-bypass-engine",
        description: "Bypass applicant tracking systems with intelligent automation",
      },
    ],
  },
  {
    title: "Industries",
    to: "/industries",
    children: [
      {
        title: "Technology",
        to: "/industries/technology",
        description: "Recruitment solutions for the fast-paced tech industry",
      },
      {
        title: "Finance",
        to: "/industries/finance",
        description: "Specialized recruitment for financial institutions and services",
      },
      {
        title: "Healthcare",
        to: "/industries/healthcare",
        description: "Talent acquisition for healthcare providers and organizations",
      },
      {
        title: "Legal",
        to: "/industries/legal",
        description: "Recruitment services for law firms and legal departments",
      },
      {
        title: "Manufacturing",
        to: "/industries/manufacturing",
        description: "Staffing solutions for manufacturing companies and facilities",
      },
      {
        title: "Sales & Marketing",
        to: "/industries/sales-marketing",
        description: "Recruiting top sales and marketing professionals",
      },
      {
        title: "Leadership",
        to: "/industries/leadership",
        description: "Executive search and leadership recruitment services",
      },
      {
        title: "Operations",
        to: "/industries/operations",
        description: "Staffing solutions for operations and supply chain management",
      },
    ],
  },
  {
    title: "Resources",
    to: "/resources",
    children: [
      {
        title: "Blog",
        to: "/blog",
        description: "Insights and articles on AI recruitment and talent acquisition",
      },
      {
        title: "Case Studies",
        to: "/case-studies",
        description: "Real-world examples of successful AI recruitment strategies",
      },
      {
        title: "Events",
        to: "/events",
        description: "Upcoming webinars, conferences, and industry events",
      },
    ],
  },
  {
    title: "Company",
    to: "/company",
    children: [
      {
        title: "About Us",
        to: "/about",
        description: "Learn about our mission, vision, and values",
      },
      {
        title: "Team",
        to: "/team",
        description: "Meet our team of AI experts and recruitment specialists",
      },
      {
        title: "Recruiters",
        to: "/recruiters",
        description: "Join our network of AI-powered recruiters",
      },
      {
        title: "Careers",
        to: "/careers",
        description: "Explore job opportunities at Synapse",
      },
      {
        title: "FAQ",
        to: "/faq",
        description: "Frequently asked questions about our services",
      },
      {
        title: "Contact Us",
        to: "/contact",
        description: "Get in touch with our team",
      },
    ],
  },
];

const MainHeader = () => {
  return (
    <header className="bg-white sticky top-0 z-50 border-b">
      <div className="container-wide py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png"
            alt="Synapse Logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-bold text-synapse-dark">Synapse</span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] gap-3 p-4 md:w-[450px] md:grid-cols-2 lg:w-[500px]">
                      {item.children?.map((child) => (
                        <div key={child.to} className="group">
                          <NavigationMenuLink asChild>
                            <a
                              href={child.to}
                              className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md hover:bg-accent transition-colors"
                            >
                              <div className="mb-2 flex items-center gap-2">
                                {child.icon && <child.icon className="h-4 w-4 text-synapse-primary" />}
                                <div className="text-sm font-medium leading-none text-synapse-dark line-clamp-1">
                                  {child.title}
                                </div>
                              </div>
                              <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
                                {child.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="secondary">Book a Demo</Button>
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="sm:max-w-xs p-0">
            <SheetHeader className="pl-6 pt-6">
              <SheetTitle>Synapse</SheetTitle>
              <SheetDescription>
                Navigate through our solutions, tools, and resources.
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              {navItems.map((item) => (
                <div key={item.title} className="mb-2">
                  <div className="px-6 py-2 font-bold text-synapse-dark">{item.title}</div>
                  {item.children?.map((child) => (
                    <a
                      key={child.to}
                      href={child.to}
                      className="block px-6 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {child.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
            <div className="p-6">
              <Button variant="secondary" className="w-full">Book a Demo</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MainHeader;
