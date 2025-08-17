import {createBrowserRouter} from "react-router";
import Root from "./pages/Root.jsx";
import EarlyAccess from "./pages/EarlyAccess.jsx";
import Contribute from "./pages/Contribute.jsx";
import Features from "./pages/Features.jsx";
import WhyOpenEnterprise from "./pages/WhyOpenEnterprise.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <EarlyAccess />,
      },
      {
        path: "/Contribute",
        element: <Contribute />,
      },
      {
        path: "/Features",
        element: <Features />,
      },
      {
        path: "/Why Open Enterprise",
        element: <WhyOpenEnterprise />,
      },
    ],
  },
]);

export default router;