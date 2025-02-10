import Marquee from "react-fast-marquee";
import { IMAGES } from "../../../assets";

const UpcomingCourses = () => {
    const logos = [IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo, IMAGES.pmGurukulLogo];

    const title = "Learn Modern Web Development with JavaScript";
    return (
        <div className="bg-secondary-80 py-[64px] flex flex-col gap-[38px]">
            <h1 className="text-primary-10 text-[36px] md:text-[40px] font-bold leading-[40px] xl:leading-[48px] text-center">Our Upcoming Courses </h1>

            <Marquee speed={50} pauseOnHover>
                {logos.map((_, index) => (
                    <div key={index} className="bg-white border border-neutral-45 rounded-[24px] font-Inter w-[312px] h-[310px] mr-10">
                        <img src={IMAGES.courseImg} alt="" className="rounded-t-[24px] w-full h-[200px] object-cover" />

                        <div className="p-5 flex flex-col gap-4">

                            <h1 className="text-primary-10 text-xl leading-7 font-semibold capitalize">
                                {title.length > 20 ? `${title.slice(0, 20)}...` : title}
                            </h1>


                            <div className="flex items-center gap-2">
                                {/* <img src={ICONS.avatar} alt={""} className="size-8 rounded-full" /> */}
                                <h1 className="text-primary-10/70 text-sm leading-6">By -</h1>
                                <h1 className="text-primary-10 font-medium leading-6">PMGURUKUL</h1>
                            </div>


                            {/* <Ripple styles="rounded-lg">
                                <Link to={`/course/${_id}`} className="bg-neutral-60 border border-neutral-55 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center">
                                    View Course
                                </Link>
                            </Ripple> */}
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default UpcomingCourses;