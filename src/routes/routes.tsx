import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ContactUs from "../pages/ContactUs/ContactUs";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Courses from "../pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);
