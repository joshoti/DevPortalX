import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Docs } from "./app/pages/Docs";
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
    path: "/docs",
    element: <Docs />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
