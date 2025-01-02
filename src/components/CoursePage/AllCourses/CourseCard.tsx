import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";


const CourseCard = () => {
    return (
        <div className="bg-white border border-neutral-45 rounded-[24px] font-Inter w-[312px] h-[410px] relative">
            <img src={IMAGES.courseImg} alt="" className="rounded-t-[24px] w-full h-[182px] object-cover" />
            <div className="bg-[#6BB870] py-1 px-2 flex items-center gap-[2px] w-fit text-white font-medium text-sm absolute top-4 right-4 rounded-[12px]">
            <img src={ICONS.starWhite} alt="star-icon" className="size-[14px]" />
            4.5
            </div>

            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-[2px] py-1 px-2 bg-neutral-50 rounded-[12px] w-fit">
                    <img src={ICONS.user} alt="user-icon" className="size-[14px]" />
                    <p className="text-primary-10 text-sm leading-7">300+ Enrolled</p>
                </div>

                <h1 className="text-primary-10 text-xl leading-7 font-semibold">UI UX Design Decoded</h1>

                <div className="flex items-center gap-2">
                    <img src={ICONS.avatar} alt={""} className="size-8 rounded-full" />
                    <h1 className="text-primary-10 font-medium leading-6">Rahul Sutradhar</h1>
                </div>

                <Link className="bg-neutral-60 border border-neutral-55 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center">
                    View Course
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;