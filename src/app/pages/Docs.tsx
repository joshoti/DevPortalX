import { Outlet } from "react-router-dom";
import { DocsMenu } from "../components/Docs/DocsMenu";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export function DocumentationLayout() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {/* Constant left-side menu */}
        <DocsMenu />

        {/* Right-side dynamic content */}
        <div style={{ flex: 1, padding: "20px", position: "sticky", top: 80 }}>
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DocumentationLayout;
