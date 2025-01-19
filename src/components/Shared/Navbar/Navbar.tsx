import { Link, useLocation } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../Container/Container";
import HamburgerMenu from "./HamburgerMenu";
import { navlinks } from "./navlinks";

const Navbar = () => {
    const location = useLocation();

    return (
        <div className="bg-primary-10 py-4 font-Inter">
            <Container>
                <div className="flex items-center justify-between">
                    <Link to={"/"} className="flex items-center gap-2">
                        <img src={IMAGES.pmGurukulLogo} alt="PM-Gurukul" className="size-12" />
                        <h1 className="text-white">PM Gurukul</h1>
                    </Link>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-8">
                            {
                                navlinks.map((link, index) => (
                                    <Link key={index} to={link.path} className={`${location.pathname === link.path ? "text-secondary-20" : "text-neutral-10"} leading-6`}>
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </div>

                        <div className="flex items-center gap-5 lg:gap-8">
                            <div className="flex flex-row-reverse lg:flex-row items-center gap-5 lg:gap-8">
                            <Link to={"/cart"} className="relative">
                                <img src={location.pathname === "/cart" ? ICONS.cartYellow : ICONS.cartWhite} alt="cart-icon" className="size-6" />
                                <div className="size-4 rounded-full bg-secondary-10 text-primary-10 flex items-center justify-center text-xs absolute -top-2 -right-2">0</div>
                            </Link>
                            <button className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow">Get Started</button>
                            </div>
                            <HamburgerMenu />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;