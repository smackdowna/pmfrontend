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
import MyProfile from "../pages/Dashbaord/MyProfile/MyProfile";
import ReferralPayouts from "../pages/Dashbaord/ReferralPayouts/ReferralPayouts";
import KYC from "../pages/Dashbaord/KYC/KYC";
import KYCFormPage from "../pages/Dashbaord/KYC/KYCFormPage";
import MyCourseVideo from "../pages/Dashbaord/MyCourses/MyCourseVideo";
import KYCStatusPage from "../pages/Dashbaord/KYC/KYCStatusPage";
import CourseVideoLayout from "../layouts/CourseVideoLayout/CourseVideoLayout";
import Forum from "../pages/Dashbaord/MyCourses/Forum";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Cart from "../pages/Cart/Cart";

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
        path: "/course/:id",
        element: <CourseDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
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
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "my-courses",
        element: <MyCourses />,
      },
      {
        path: "forum",
        element: <Forum onClose={function (): void {
          throw new Error("Function not implemented.");
        } }/>,
      },
      {
        path: "referral",
        element: <ReferralPayouts />,
      },
      {
        path: "kyc",
        element: <KYC />,
      },
      {
        path: "kycregister",
        element: <KYCFormPage />,
      },
      {
        path: "kycstatus",
        element: <KYCStatusPage />,
      }
    ],
  },
  {
    path: "coursevideo",
    element: <CourseVideoLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "my-course-video",
        element: <MyCourseVideo />,
      },
    ]
  }
]);
