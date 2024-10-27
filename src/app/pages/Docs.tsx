import { Outlet } from "react-router-dom";
import { DocsMenu } from "../components/Docs/DocsMenu";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

export const docsScrollOptions: ScrollIntoViewOptions = {
  behavior: "auto",
  block: "end",
};
export const prodUrl = "https://api.devportalx.com";
export const localUrl = "http://localhost:8080";

export function DocumentationLayout() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        {/* Constant left-side menu */}
        <div
          style={{
            padding: "20px",
            overflowY: "auto",
            // position: "fixed", // Keeps the menu fixed in place
            // height: "100vh",
            // top: 80,
            // left: 0,
          }}
        >
          <DocsMenu />
        </div>

        {/* Right-side dynamic content */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            // marginLeft: "300px",
            overflowY: "auto",
            // scrollBehavior: "smooth",
          }}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
