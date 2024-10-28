import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DocumentationLayout } from "./app/pages/Docs";
import { HomePage } from "./app/pages/Home";
import { Login } from "./app/pages/Login";
import { Register } from "./app/pages/Register";
import { Support } from "./app/pages/Support";

import { DocsOverview } from "./app/components/Docs/DocsOverview";
import { DocsLogin } from "./app/components/Docs/DocsLogin";
import { DocsWebhooks } from "./app/components/Docs/DocsWebhooks";
import { DocsAnalytics } from "./app/components/Docs/DocsAnalytics";
import { DocsErrorCodes } from "./app/components/Docs/DocsErrorCodes";
import { ScrollToTop } from "./app/utils/scoll";
import { AccountSettings } from "./app/pages/AccountSettings";
import { RequireAuth } from "./app/components/auth/RequireAuth";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/support" element={<Support />} />
        <Route element={<RequireAuth />}>
          <Route path="/settings" element={<AccountSettings />} />
        </Route>

        <Route path="/docs" element={<DocumentationLayout />}>
          <Route path="overview" element={<DocsOverview />} />
          <Route path="login" element={<DocsLogin />} />
          <Route path="webhooks" element={<DocsWebhooks />} />
          <Route path="analytics" element={<DocsAnalytics />} />
          <Route path="error-codes" element={<DocsErrorCodes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
