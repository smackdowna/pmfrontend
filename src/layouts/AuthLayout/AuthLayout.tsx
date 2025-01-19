import { Outlet } from "react-router-dom";
import ScrollToTop from "../../hooks/useScrollToTop";

const AuthLayout = () => {
    return (
        <div className="bg-neutral-80">
            <Outlet />
            <ScrollToTop/>
        </div>
    );
};

export default AuthLayout;