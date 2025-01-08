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
import OrderDetails from "../pages/Dashbaord/Admin/OrderDetails/OrderDetails";
import Payouts from "../pages/Dashbaord/Admin/Payouts/Payouts";
import Affiliates from "../pages/Dashbaord/Admin/Affiliates/Affiliates";
import RegisteredUsers from "../pages/Dashbaord/Admin/RegisteredUsers/RegisteredUsers";
import TalentList from "../pages/Dashbaord/Admin/TalentList/TalentList";
import PurchaseHistory from "../pages/Dashbaord/Admin/PurchaseHistory/PurchaseHistory";
import ViewAffiliate from "../pages/Dashbaord/Admin/ViewAffiliate/ViewAffiliate";

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
        path: "add-course",
        element: <AddCourse />,
      },
      {
        path: "order-details",
        element: <OrderDetails />,
      },
      {
        path: "payouts",
        element: <Payouts />,
      },
      {
        path: "affiliates",
        element: <Affiliates />,
      },
      {
        path: "registered-users",
        element: <RegisteredUsers />,
      },
      {
        path: "talent-list",
        element: <TalentList />,
      },
      {
        path: "registered-users",
        element: <RegisteredUsers />,
      },
      {
        path: "purchase-history",
        element: <PurchaseHistory />,
      },
      {
        path: "view-affiliate",
        element: <ViewAffiliate />,
      },
    ],
  },
]);
