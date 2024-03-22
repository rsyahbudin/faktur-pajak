import { useRoutes } from "react-router-dom";

import Homepage from "../pages/Homepage";

export default function Routes() {
  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    // { path: "*", element: <Page404 /> },
  ]);
  return element;
}
