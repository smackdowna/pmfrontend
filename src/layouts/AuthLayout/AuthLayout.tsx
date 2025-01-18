import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="bg-neutral-80">
            <Outlet />
        </div>
    );
};

export default AuthLayout;