import { Link, useLocation } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../Container/Container";

const Navbar = () => {
    const navlinks = [
        {
            label: "Home",
            path: "/",
        },
        {
            label: "Courses",
            path: "/courses",
        },
        {
            label: "Contact",
            path: "/contact-us",
        },
    ];

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
                        <div className="flex items-center gap-8">
                            {
                                navlinks.map((link, index) => (
                                    <Link key={index} to={link.path} className={`${location.pathname === link.path ? "text-secondary-20" : "text-neutral-10"} leading-6`}>
                                        {link.label}
                                    </Link>
                                ))
                            }
                        </div>

                        <div className="flex items-center gap-8">
                           <Link to={"/cart"}>
                           <img src={ICONS.cartWhite} alt="cart-icon" className="size-6" />
                           </Link>
                        <button className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow">Get Started</button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;