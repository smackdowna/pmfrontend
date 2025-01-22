import { ICONS, IMAGES } from "../../../assets";
import Heading1 from "../../Reusable/Heading1/Heading1";
import Ripple from "../../Reusable/Ripple/Ripple";
import Container from "../../Shared/Container/Container";

const Enrollment = () => {
    return (
        <div className="bg-neutral-20 py-[96px]">
            <Container>
                <div className="bg-white  rounded-[64px] shadow-shadow-light-gray font-Inter flex flex-col-reverse lg:flex-row items-center justify-between">
                    <div className="px-5 lg:px-0 lg:pl-[64px] py-[18px] lg:py-[64px] flex flex-col gap-3 md:gap-12">
                        <Heading1>On Every Enrollment, We Contribute to a Child’s Education</Heading1>
                        <Ripple styles="rounded-xl w-fit">
                            <button className="bg-primary-gradient px-5 lg:px-6 py-3 md:py-5 text-primary-10 md:text-xl font-semibold leading-7 rounded-[10px] shadow-primary-shadow flex items-center gap-[10px] w-fit text-sm">
                                <img src={ICONS.coupon} alt="coupon" className="size-6 hidden md:block" />
                                Join us today and make a difference!
                            </button>
                        </Ripple>
                    </div>
                    <img src={IMAGES.enrollment} alt="" className="rounded-r-none lg:rounded-r-[64px] rounded-t-3xl lg:rounded-t-none w-full h-full" />
                </div>
            </Container>
        </div>
    );
};

export default Enrollment;