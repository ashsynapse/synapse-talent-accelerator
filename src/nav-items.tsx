import Index from "./pages/Index";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/company/About";
import Team from "./pages/company/Team";
import Careers from "./pages/company/Careers";
import FAQ from "./pages/company/FAQ";
import Products from "./pages/Products";
import RecruitmentSolutions from "./pages/RecruitmentSolutions";
import Industries from "./pages/Industries";
import Recruiters from "./pages/Recruiters";
import Blog from "./pages/resources/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import Events from "./pages/resources/Events";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import Partners from "./pages/Partners";
import Locations from "./pages/Locations";
import Glossary from "./pages/Glossary";

// Blog post imports
import SideHustlesGigEconomy from "./pages/blog/SideHustlesGigEconomy";

// Solution page imports
import PassiveAISourcing from "./pages/solutions/PassiveAISourcing";
import AICandidateDiscovery from "./pages/solutions/AICandidateDiscovery";
import ProjectStaffing from "./pages/solutions/ProjectStaffing";
import ExecutiveSearch from "./pages/solutions/ExecutiveSearch";
import RemoteStaffing from "./pages/solutions/RemoteStaffing";
import PermanentPlacement from "./pages/solutions/PermanentPlacement";
import ContingentStaffing from "./pages/solutions/ContingentStaffing";
import ApprenticeshipAISourcing from "./pages/solutions/ApprenticeshipAISourcing";

// Product page imports
import AICandidateSourcing from "./pages/products/AICandidateSourcing";
import PreEmploymentScreening from "./pages/products/PreEmploymentScreening";
import AIResumeAnalysis from "./pages/products/AIResumeAnalysis";

export const navItems = [
  {
    to: "/",
    page: <Index />,
  },
  {
    to: "/home",
    page: <Home />,
  },
  {
    to: "/contact",
    page: <Contact />,
  },
  {
    to: "/about",
    page: <About />,
  },
  {
    to: "/team",
    page: <Team />,
  },
  {
    to: "/careers",
    page: <Careers />,
  },
  {
    to: "/faq",
    page: <FAQ />,
  },
  {
    to: "/recruitment-tools",
    page: <Products />,
  },
  {
    to: "/recruitment-solutions",
    page: <RecruitmentSolutions />,
  },
  {
    to: "/industries",
    page: <Industries />,
  },
  {
    to: "/recruiters",
    page: <Recruiters />,
  },
  {
    to: "/blog",
    page: <Blog />,
  },
  {
    to: "/case-studies",
    page: <CaseStudies />,
  },
  {
    to: "/events",
    page: <Events />,
  },
  {
    to: "/privacy",
    page: <Privacy />,
  },
  {
    to: "/terms",
    page: <Terms />,
  },
  {
    to: "/cookies",
    page: <Cookies />,
  },
  {
    to: "/partners",
    page: <Partners />,
  },
  {
    to: "/locations",
    page: <Locations />,
  },
  {
    to: "/glossary",
    page: <Glossary />,
  },
  // Blog post routes
  {
    to: "/blog/side-hustles-gig-economy",
    page: <SideHustlesGigEconomy />,
  },
  // Solution page routes
  {
    to: "/recruitment-solutions/passive-ai-sourcing",
    page: <PassiveAISourcing />,
  },
  {
    to: "/recruitment-solutions/ai-candidate-discovery",
    page: <AICandidateDiscovery />,
  },
  {
    to: "/recruitment-solutions/project-staffing",
    page: <ProjectStaffing />,
  },
  {
    to: "/recruitment-solutions/executive-search",
    page: <ExecutiveSearch />,
  },
  {
    to: "/recruitment-solutions/remote-staffing",
    page: <RemoteStaffing />,
  },
  {
    to: "/recruitment-solutions/permanent-placement",
    page: <PermanentPlacement />,
  },
  {
    to: "/recruitment-solutions/contingent-staffing",
    page: <ContingentStaffing />,
  },
  {
    to: "/recruitment-solutions/apprenticeship-ai-sourcing",
    page: <ApprenticeshipAISourcing />,
  },
  // Product page routes
  {
    to: "/recruitment-tools/ai-candidate-sourcing",
    page: <AICandidateSourcing />,
  },
  {
    to: "/recruitment-tools/pre-employment-screening",
    page: <PreEmploymentScreening />,
  },
  {
    to: "/recruitment-tools/ai-resume-analysis",
    page: <AIResumeAnalysis />,
  },
];
