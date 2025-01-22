import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import Navbar from "../../components/Shared/Navbar/Navbar";
import ScrollToTop from "../../hooks/useScrollToTop";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop/>
        </div>
    );
};

export default MainLayout;