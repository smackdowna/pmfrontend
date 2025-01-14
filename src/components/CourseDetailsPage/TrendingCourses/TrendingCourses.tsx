import { IMAGES } from "../../../assets";
import { TCourse } from "../../CoursePage/AllCourses/course.types";
import TrendingCourseCard from "./TrendingCourseCard";


const TrendingCourses = () => {
    const courses: TCourse[] = [
            {
                _id: "1",
                title: "UI UX Design Decoded",
                instructor: "Pani Puri",
                enrolled: "300+ Enrolled",
                rating: 4.5,
                image: IMAGES.courseImg,
                category: "Design",
            },
            {
                _id: "2",
                title: "React for Beginners",
                instructor: "John Smith",
                enrolled: "500+ Enrolled",
                rating: 4.8,
                image: IMAGES.courseImg,
                category: "Development",
            },
            {
                _id: "3",
                title: "Mastering JavaScript",
                instructor: "Jane Doe",
                enrolled: "700+ Enrolled",
                rating: 4.7,
                image: IMAGES.courseImg,
                category: "IT & Software",
            },
            {
                _id: "4",
                title: "Business Strategy Essentials",
                instructor: "Alice Brown",
                enrolled: "1,000+ Enrolled",
                rating: 4.9,
                image: IMAGES.courseImg,
                category: "Business",
            },
        ];
    return (
        <div className="py-8 md:py-12 xl:py-[96px] bg-white">
            <h1 className="text-primary-15 text-xl md:text-[48px] text-start md:text-center font-semibold leading-7 md:leading-[56px] font-Inter">Trending Courses</h1>
            {/* Courses */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:12 xl:mt-20">
                    {
                       courses?.map(course => 
                        <TrendingCourseCard {...course} />
                       )
                    }
                </div>
        </div>
    );
};

export default TrendingCourses;