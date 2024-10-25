import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import { DocumentationLayout } from "./app/pages/Docs";
import { HomePage } from "./app/pages/Home";
import { Login } from "./app/pages/Login";
import { Register } from "./app/pages/Register";
import { Support } from "./app/pages/Support";

import { DocsOverview } from "./app/components/Docs/DocsOverview";
import { DocsLogin } from "./app/components/Docs/DocsLogin";
import { DocsWebhooks } from "./app/components/Docs/DocsWebhooks";
import { DocsAnalytics } from "./app/components/Docs/DocsAnalytics";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />

        <Route path="/docs" element={<DocumentationLayout />}>
          <Route path="overview" element={<DocsOverview />} />
          <Route path="login" element={<DocsLogin />} />
          <Route path="webhooks" element={<DocsWebhooks />} />
          <Route path="analytics" element={<DocsAnalytics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
