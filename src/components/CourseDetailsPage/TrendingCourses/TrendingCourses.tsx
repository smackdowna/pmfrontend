import { TCourse } from "../../CoursePage/AllCourses/course.types";
import CourseCardLoader from "../../Loaders/CourseCardLoader/CourseCardLoader";
import TrendingCourseCard from "./TrendingCourseCard";

type TTrendingCourses = {
    isCourseLoading : boolean;
    trendingCourses : TCourse[];
}

const TrendingCourses:React.FC<TTrendingCourses> = ({ trendingCourses, isCourseLoading }) => {
    return (
        <div className="py-8 md:py-12 xl:py-[96px] bg-white">
            <h1 className="text-primary-15 text-xl md:text-[48px] text-start md:text-center font-semibold leading-7 md:leading-[56px] font-Inter">Trending Courses</h1>
            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:12 xl:mt-20">
                {
                    isCourseLoading ?
                        <CourseCardLoader />
                        :
                        trendingCourses?.map((course) =>
                            <TrendingCourseCard {...course} />
                        )
                }
            </div>
        </div>
    );
};

export default TrendingCourses;