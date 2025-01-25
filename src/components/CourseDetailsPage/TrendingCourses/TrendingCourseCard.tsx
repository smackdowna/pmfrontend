import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import { TCourse } from "../../CoursePage/AllCourses/course.types";

const TrendingCourseCard: React.FC<TCourse> = ({ _id, title, author, poster }) => {
    return (
        <Link to={`/course/${_id}`} className="bg-white border border-neutral-45 rounded-[24px] font-Inter w-[312px] h-[344px] relative">
            <img src={poster?.url} alt="" className="rounded-t-[24px] w-full h-[182px] object-cover" />
            <div className="bg-[#6BB870] py-1 px-2 flex items-center gap-[2px] w-fit text-white font-medium text-sm absolute top-4 right-4 rounded-[12px]">
                <img src={ICONS.starWhite} alt="star-icon" className="size-[14px]" />
                4.5
            </div>

            <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-[2px] py-1 px-2 bg-neutral-50 rounded-[12px] w-fit">
                    <img src={ICONS.user} alt="user-icon" className="size-[14px]" />
                    <p className="text-primary-10 text-sm leading-7">100+ Enrolled</p>
                </div>

                <h1 className="text-primary-10 text-xl leading-7 font-semibold capitalize">
                    {title.length > 20 ? `${title.slice(0, 20)}...` : title}
                </h1>


                <div className="flex items-center gap-2">
                    {/* <img src={ICONS.avatar} alt={""} className="size-8 rounded-full" /> */}
                    <h1 className="text-primary-10/70 text-sm leading-6">By -</h1>
                    <h1 className="text-primary-10 font-medium leading-6">{author}</h1>
                </div>
            </div>
        </Link>
    );
};

export default TrendingCourseCard;