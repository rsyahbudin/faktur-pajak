import { useRoutes } from "react-router-dom";

import Homepage from "../pages/Homepage";
import StatusRequest from "../pages/StatusRequest";
import Login from "../pages/login"

export default function Routes() {
  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/status", element: <StatusRequest /> },
    { path: "/login", element: <Login /> },
    
    // { path: "*", element: <Page404 /> },
  ]);
  return element;
}
