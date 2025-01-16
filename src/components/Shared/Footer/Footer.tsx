import { Link } from "react-router-dom";
import Container from "../Container/Container";
import { footerLinks } from "./footerLinks";

const Footer = () => {
    
    return (
        <div className="bg-primary-10 py-[64px] font-Inter">
            <Container>
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <h1 className="text-2xl text-white font-semibold leading-7">PM Gurukul</h1>
                            <p className="text-neutral-35 leading-6 max-w-[377px]">Focus on building diverse skills instead of running after opportunities. With PM Gurukul's courses, you can grow and learn in a way that helps you become your best self.</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                            {
                                footerLinks?.map(item =>
                                    <div key={item?.heading} className="flex flex-col gap-[10px]">
                                        <h1 className="text-neutral-40 font-medium leading-6">{item.heading}</h1>
                                        {
                                            item?.links?.map((link, index) =>
                                                <Link key={index} to={link.path} className="text-neutral-35 font-normal leading-6 hover:underline">
                                                    {link.label}
                                                </Link>
                                            )
                                        }
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <hr className="border border-primary-20 h-[1px]" />
                    <p className="text-neutral-35 leading-6 max-w-[377px]">© 2024 TouchToRate. All rights reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;