import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import ContactUs from "../pages/ContactUs/ContactUs";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Courses from "../pages/Courses/Courses";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import Login from "../pages/Login/Login";
import VerifyPhoneNumber from "../pages/VerifyPhoneNumber/VerifyPhoneNumber";
import DashboardLayout from "../layouts/DashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashbaord/DashboardHome/DashboardHome";
import MyCourses from "../pages/Dashbaord/MyCourses/MyCourses";
import AdminCourses from "../pages/Dashbaord/Admin/Courses/Courses";
import AddCourse from "../pages/Dashbaord/Admin/AddCourse/AddCourse";

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
  {
    path: "auth",
    element: <AuthLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "verify-phone",
        element: <VerifyPhoneNumber />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
    ],
  },
  {
    path: "admin",
    element: <DashboardLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "courses",
        element: <AdminCourses />,
      },
      {
        path:"add-course",
        element:<AddCourse/>
      }
    ]
  }
]);
