import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DocumentationLayout } from "./app/pages/Docs";
import { HomePage } from "./app/pages/Home";
import { Login } from "./app/pages/Login";
import { Register } from "./app/pages/Register";
import { Support } from "./app/pages/Support";

import { DocsOverview } from "./app/components/Docs/DocsOverview";
import { DocsLogin } from "./app/components/Docs/DocsLogin";
import { DocsWebhooks } from "./app/components/Docs/DocsWebhooks";
import { DocsAnalytics } from "./app/components/Docs/DocsAnalytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/docs", // Base path
    element: <DocumentationLayout />, // Constant layout
    children: [
      {
        path: "overview",
        element: <DocsOverview />,
      },
      {
        path: "login",
        element: <DocsLogin />,
      },
      {
        path: "webhooks",
        element: <DocsWebhooks />,
      },
      {
        path: "analytics",
        element: <DocsAnalytics />,
      },
    ],
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
