import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex w-full">
            <div className="bg-primary-10 w-44 h-screen p-10 text-white">Sidebar</div>
            <div className="flex flex-col gap-10 w-full p-6 bg-[#F8FAFC]">
                <div className="p-6 flex flex-col w-full gap-6 ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;