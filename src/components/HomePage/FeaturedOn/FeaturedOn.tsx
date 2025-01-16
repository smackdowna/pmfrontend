import Marquee from "react-fast-marquee";
import { IMAGES } from "../../../assets";

const FeaturedOn = () => {
    const logos = [IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo,]
    return (
        <div className="bg-[#fff6eb] py-[64px] flex flex-col gap-[38px]">
            <h1 className="text-primary-10 text-[36px] md:text-[40px] font-bold leading-[40px] xl:leading-[48px] text-center">As Featured On</h1>

            <Marquee speed={50}>
                {logos.map((logo, index) => (
                    <div className="w-[257px] h-[133px] flex justify-center items-center bg-white rounded-[24px] mr-[22px]">
                        <img key={index} src={logo} alt={''} className="" />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default FeaturedOn;