import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./assets/layout/Layout";
import { Home } from "./assets/pages/Home";
import { About } from "./assets/pages/About";
import { Services } from "./assets/pages/Services";
import { Events } from "./assets/pages/Events";
import { Contact } from "./assets/pages/Contact";
import { JoinUs } from "./assets/pages/JoinUs";
import { Resources } from "./assets/pages/Resources";
import { Stories } from "./assets/pages/Stories";
import { BrandingStories } from "./assets/pages/BrandingStories";
import { ContentCreation } from "./assets/pages/ContentCreation";
import { CommunityEngagementPackages } from "./assets/pages/CommunityEngagementPackages";
import { StartupPRMarketing } from "./assets/pages/StartupPRMarketing";
import { WebDev } from "../src/assets/pages/WebDev";
import { Ai_Automation } from "../src/assets/pages/Ai_Automation";
import { SendProposal } from "./assets/pages/SendProposal";
import { NotFound } from "../src/assets/layout/NotFound";
import { BusinessAutomation } from "./assets/pages/BusinessAutomation";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "events", element: <Events /> },
        { path: "contact", element: <Contact /> },
        { path: "joinUs", element: <JoinUs /> },
        { path: "resources", element: <Resources /> },
        { path: "stories", element: <Stories /> },
        { path: "/services/branding", element: <BrandingStories /> },
        { path: "/services/content", element: <ContentCreation /> },
        { path: "/services/marketing", element: <StartupPRMarketing /> },
        { path: "/services/webdev", element: <WebDev /> },
        { path: "/services/Ai_Automation", element: <Ai_Automation /> },
        { path: "/services/webdev", element: <WebDev /> },
        { path: "/services/businessAutomation", element: <BusinessAutomation /> },
        { path: "/services/community", element: <CommunityEngagementPackages /> },
        { path: "/services/proposal", element: <SendProposal /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
