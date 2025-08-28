import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const solutionsMenuItems = [
    { title: "Passive Recruitment", href: "/recruitment-solutions/passive-recruitment" },
    { title: "Candidate Sourcing", href: "/recruitment-solutions/candidate-sourcing" },
    { title: "Project Staffing", href: "/recruitment-solutions/project-staffing" },
    { title: "Executive Search", href: "/recruitment-solutions/executive-search" },
    { title: "Remote Staffing", href: "/recruitment-solutions/remote-staffing" },
    { title: "Permanent Staffing", href: "/recruitment-solutions/permanent-staffing" },
    { title: "Contingent Staffing", href: "/recruitment-solutions/contingent-staffing" }
  ];

  return (
    <header className="bg-white py-4 shadow-sm">
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-synapse-primary">
          <a href="/">
            Synapse
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:grid-cols-3">
                    {solutionsMenuItems.map((item) => (
                      <li key={item.title}>
                        <NavigationMenuLink asChild>
                          <a
                            href={item.href}
                            className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                          >
                            <div className="text-sm font-medium leading-none">{item.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn more about our {item.title} services.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/industries">
                  Industries
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/recruitment-tools">
                  Tools
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/about"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">About</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our company, vision, and team.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/careers"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">Careers</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Join our team and help us change the world.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/contact"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">Contact</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Contact us for more information.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/blog"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Read our latest blog posts.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/case-studies"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">Case Studies</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See how we've helped our clients.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="/events"
                          className="block p-3 leading-tight rounded-md hover:bg-accent focus:outline-none focus:shadow-md"
                        >
                          <div className="text-sm font-medium leading-none">Events</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See our upcoming events.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Button variant="outline" onClick={() => window.location.href = "/contact"}>Contact Us</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu (Conditionally Rendered) */}
        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-8">
            <div className="flex justify-end mb-8">
              <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </Button>
            </div>
            <nav className="flex flex-col space-y-4">
              <a href="/recruitment-solutions" className="block py-2 text-lg font-medium text-synapse-dark">Solutions</a>
              <a href="/industries" className="block py-2 text-lg font-medium text-synapse-dark">Industries</a>
              <a href="/recruitment-tools" className="block py-2 text-lg font-medium text-synapse-dark">Tools</a>
              <a href="/about" className="block py-2 text-lg font-medium text-synapse-dark">Company</a>
              <a href="/resources" className="block py-2 text-lg font-medium text-synapse-dark">Resources</a>
              <Button variant="secondary" onClick={() => window.location.href = "/contact"}>Contact Us</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
