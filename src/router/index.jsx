import { useRoutes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import StatusRequest from "../pages/StatusRequest";
import Admin from "../pages/admin"
import Page404 from "../pages/404";
import Dashboard from "../pages/dashboard";

export default function Routes() {
  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/status", element: <StatusRequest /> },
    { path: "/admin", element: <Admin /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "*", element: <Page404 /> },
  ]);
  return element;
}
