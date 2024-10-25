import { Outlet } from "react-router-dom";
import { DocsMenu } from "../components/Docs/DocsMenu";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function DocumentationLayout() {
  return (
    <>
      <Header />
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Constant left-side menu */}
        <div style={{ padding: "20px", overflowY: "auto" }}>
          <DocsMenu />
        </div>

        {/* Right-side dynamic content */}
        <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DocumentationLayout;
