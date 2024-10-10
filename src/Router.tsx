import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./app/pages/Home.page";
import { Register } from "./app/pages/Register.page";
import { Login } from "./app/pages/Login.page";

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
]);

export function Router() {
  return <RouterProvider router={router} />;
}
