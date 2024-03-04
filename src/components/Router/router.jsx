import { createBrowserRouter } from "react-router-dom";
import About from "../FrontPage/About";
import Home from "../FrontPage/Home";
import Main from "../layout/Main";
import ViewDetails from "../SupportPage/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/details/:id",
    element: <ViewDetails />,
  },
]);

export default router;
