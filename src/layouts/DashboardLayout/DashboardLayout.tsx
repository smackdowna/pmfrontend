import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex w-full">
            <div className="bg-primary-10 w-44 h-screen p-10 text-white">Sidebar</div>
            <div className="flex flex-col gap-10 w-full">
                <div className="bg-white p-10 h-10 text-3xl">Dashboard Header</div>
                <div className="p-10">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;