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
import AISourcingAgent from "./pages/tools/AISourcingAgent";
import AIOutreachAgent from "./pages/tools/AIOutreachAgent";
import AISubmissionAgent from "./pages/tools/AISubmissionAgent";
import ATSBypassEngine from "./pages/tools/ATSBypassEngine";

// Industry page imports
import Technology from "./pages/industries/Technology";
import Finance from "./pages/industries/Finance";
import Healthcare from "./pages/industries/Healthcare";
import Legal from "./pages/industries/Legal";
import Manufacturing from "./pages/industries/Manufacturing";
import SalesMarketing from "./pages/industries/SalesMarketing";
import Leadership from "./pages/industries/Leadership";
import Operations from "./pages/industries/Operations";

// Solution page imports
import PassiveIntelligentSourcing from "./pages/solutions/PassiveIntelligentSourcing";
import IntelligentCandidateDiscovery from "./pages/solutions/IntelligentCandidateDiscovery";
import ProjectStaffing from "./pages/solutions/ProjectStaffing";
import ExecutiveSearch from "./pages/solutions/ExecutiveSearch";
import RemoteStaffing from "./pages/solutions/RemoteStaffing";
import PermanentPlacement from "./pages/solutions/PermanentPlacement";
import ContingentStaffing from "./pages/solutions/ContingentStaffing";
import ApprenticeshipSmartSourcing from "./pages/solutions/ApprenticeshipSmartSourcing";

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
    to: "/tools/ai-sourcing-agent",
    page: <AISourcingAgent />,
  },
  {
    to: "/tools/ai-outreach-agent",
    page: <AIOutreachAgent />,
  },
  {
    to: "/tools/ai-submission-agent",
    page: <AISubmissionAgent />,
  },
  {
    to: "/tools/ats-bypass-engine",
    page: <ATSBypassEngine />,
  },
  // Industry routes
  {
    to: "/industries/technology",
    page: <Technology />,
  },
  {
    to: "/industries/finance",
    page: <Finance />,
  },
  {
    to: "/industries/healthcare",
    page: <Healthcare />,
  },
  {
    to: "/industries/legal",
    page: <Legal />,
  },
  {
    to: "/industries/manufacturing",
    page: <Manufacturing />,
  },
  {
    to: "/industries/sales-marketing",
    page: <SalesMarketing />,
  },
  {
    to: "/industries/leadership",
    page: <Leadership />,
  },
  {
    to: "/industries/operations",
    page: <Operations />,
  },
  // Solution routes
  {
    to: "/solutions/passive-intelligent-sourcing",
    page: <PassiveIntelligentSourcing />,
  },
  {
    to: "/solutions/intelligent-candidate-discovery",
    page: <IntelligentCandidateDiscovery />,
  },
  {
    to: "/solutions/project-staffing",
    page: <ProjectStaffing />,
  },
  {
    to: "/solutions/executive-search",
    page: <ExecutiveSearch />,
  },
  {
    to: "/solutions/remote-staffing",
    page: <RemoteStaffing />,
  },
  {
    to: "/solutions/permanent-placement",
    page: <PermanentPlacement />,
  },
  {
    to: "/solutions/contingent-staffing",
    page: <ContingentStaffing />,
  },
  {
    to: "/solutions/apprenticeship-smart-sourcing",
    page: <ApprenticeshipSmartSourcing />,
  },
];
