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

// Tool page imports
import SourcingAgent from "./pages/tools/SourcingAgent";
import OutreachAgent from "./pages/tools/OutreachAgent";
import SubmissionAgent from "./pages/tools/SubmissionAgent";
import RecruitingBrowserAgent from "./pages/tools/RecruitingBrowserAgent";
import ATSBypassEngine from "./pages/tools/ATSBypassEngine";

// Industry child page imports
import ITRecruitmentSolutions from "./pages/industries/ITRecruitmentSolutions";
import DigitalMarketingRecruitmentSolutions from "./pages/industries/DigitalMarketingRecruitmentSolutions";
import EngineeringRecruitmentSolutions from "./pages/industries/EngineeringRecruitmentSolutions";
import HumanResourceRecruitmentSolutions from "./pages/industries/HumanResourceRecruitmentSolutions";
import HumanSalesRecruitmentSolutions from "./pages/industries/HumanSalesRecruitmentSolutions";
import AccountingRecruitmentSolutions from "./pages/industries/AccountingRecruitmentSolutions";
import LegalStaffingSolutions from "./pages/industries/LegalStaffingSolutions";
import ManufacturingRecruitmentSolutions from "./pages/industries/ManufacturingRecruitmentSolutions";

// Solution page imports
import PassiveRecruitment from "./pages/solutions/PassiveRecruitment";
import CandidateSourcing from "./pages/solutions/CandidateSourcing";
import ProjectStaffing from "./pages/solutions/ProjectStaffing";
import ExecutiveSearch from "./pages/solutions/ExecutiveSearch";
import RemoteStaffing from "./pages/solutions/RemoteStaffing";
import PermanentStaffing from "./pages/solutions/PermanentStaffing";
import ContingentStaffing from "./pages/solutions/ContingentStaffing";
import AIInfo from "./pages/AIInfo";

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
  // Tool routes
  {
    to: "/tools/sourcing-agent",
    page: <SourcingAgent />,
  },
  {
    to: "/tools/outreach-agent",
    page: <OutreachAgent />,
  },
  {
    to: "/tools/submission-agent",
    page: <SubmissionAgent />,
  },
  {
    to: "/tools/recruiting-browser-agent",
    page: <RecruitingBrowserAgent />,
  },
  {
    to: "/tools/ats-bypass-engine",
    page: <ATSBypassEngine />,
  },
  // Industry child routes
  {
    to: "/industries/IT-recruitment-solutions",
    page: <ITRecruitmentSolutions />,
  },
  {
    to: "/industries/digital-marketing-recruitment-solutions",
    page: <DigitalMarketingRecruitmentSolutions />,
  },
  {
    to: "/industries/engineering-recruitment-solutions",
    page: <EngineeringRecruitmentSolutions />,
  },
  {
    to: "/industries/human-resource-recruitment-solutions",
    page: <HumanResourceRecruitmentSolutions />,
  },
  {
    to: "/industries/sales-recruitment-solutions",
    page: <HumanSalesRecruitmentSolutions />,
  },
  {
    to: "/industries/accounting-recruitment-solutions",
    page: <AccountingRecruitmentSolutions />,
  },
  {
    to: "/industries/Legal-staffing-solutions",
    page: <LegalStaffingSolutions />,
  },
  {
    to: "/industries/manufacturing-recruitment-solutions",
    page: <ManufacturingRecruitmentSolutions />,
  },
  // Solution routes
  {
    to: "/recruitment-solutions/passive-recruitment",
    page: <PassiveRecruitment />,
  },
  {
    to: "/recruitment-solutions/candidate-sourcing",
    page: <CandidateSourcing />,
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
    to: "/recruitment-solutions/permanent-staffing",
    page: <PermanentStaffing />,
  },
  {
    to: "/recruitment-solutions/contingent-staffing",
    page: <ContingentStaffing />,
  },
  {
    to: "/ai-info",
    page: <AIInfo />,
  },
];
