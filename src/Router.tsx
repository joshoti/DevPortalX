import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DocsTest } from "./app/pages/Docs";
import { HomePage } from "./app/pages/Home";
import { Login } from "./app/pages/Login";
import { Register } from "./app/pages/Register";
import { Support } from "./app/pages/Support";

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
    path: "/docs/overview",
    element: <DocsTest />,
  },
  {
    path: "/docs/login-api",
    element: <DocsTest />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
