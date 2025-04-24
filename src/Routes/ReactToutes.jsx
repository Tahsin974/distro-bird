import { createBrowserRouter } from "react-router";
import MainLayOut from "../LayOut/MainLayOut";
import LandingPageLayout from "../Pages/Landing-Page/Landing-page-Layout/LandingPageLayout";
import AccessRequestFormPage from "../Pages/AccessRequestFormPage/AccessRequestFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        path: "/",
        element: <LandingPageLayout />,
      },
      {
        path: "/home",
        element: <LandingPageLayout />,
      },
      {
        path: "/access-request",
        element: <AccessRequestFormPage />,
      },
    ],
  },
]);

export default router;
