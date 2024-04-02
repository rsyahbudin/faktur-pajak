import { useRoutes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import StatusRequest from "../pages/StatusRequest";
import Admin from "../pages/admin"
import Page404 from "../pages/404";
import Dashboard from "../pages/dashboard";
import Timeline from "../pages/timeline"
import Register from "../pages/register";

export default function Routes() {
  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/status", element: <StatusRequest /> },
    { path: "/admin", element: <Admin /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/timeline", element: <Timeline /> },
    { path: "*", element: <Page404 /> },
  ]);
  return element;
}
