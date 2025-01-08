import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Reusable/Sidebar/Sidebar";
import HeaderDashboard from "../../components/Reusable/HeaderDashboard/HeaderDashboard";

const DashboardLayout = () => {
    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="flex flex-col w-full">
                <HeaderDashboard />
                <div className="p-6 bg-neutral-80 min-h-screen">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;