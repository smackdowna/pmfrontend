import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Reusable/Sidebar/Sidebar";
import HeaderDashboard from "../../components/Reusable/HeaderDashboard/HeaderDashboard";
import ScrollToTop from "../../hooks/useScrollToTop";

const DashboardLayout = () => {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="flex flex-col w-full">
        <HeaderDashboard />
        <div className="p-6 bg-neutral-80 min-h-screen flex flex-col gap-6">
          <Outlet />
        </div>
      </div>
      <ScrollToTop/>
    </div>
  );
};

export default DashboardLayout;
