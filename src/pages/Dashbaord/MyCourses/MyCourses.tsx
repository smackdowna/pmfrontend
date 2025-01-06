import { IMAGES } from "../../../assets";
import { TMyCourse } from "../../../components/MyCoursesPage/mycourse.types";
import MyCoursesCard from "../../../components/MyCoursesPage/MyCoursesCard";

const MyCourses = () => {

    const courses: TMyCourse[] = [
            {
                _id: "1",
                title: "UI UX Design Decoded",
                instructor: "Pani Puri",
                progress: 0,
                enrolled: "20th Oct 2024",
                image: IMAGES.courseImg,
                category: "Design",
            },
            {
                _id: "2",
                title: "React for Beginners",
                instructor: "John Smith",
                progress: 90,
                enrolled: "20th Oct 2024",
                image: IMAGES.courseImg,
                category: "Development",
            },
            {
                _id: "3",
                title: "Mastering JavaScript",
                instructor: "Jane Doe",
                progress: 50,
                enrolled: "20th Oct 2024",
                image: IMAGES.courseImg,
                category: "IT & Software",
            },
            {
                _id: "4",
                title: "Business Strategy Essentials",
                instructor: "Alice Brown",
                progress: 50,
                enrolled: "20th Oct 2024",
                image: IMAGES.courseImg,
                category: "Business",
            },
        ];

    return (
        <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold text-neutral-90">My Courses</h1>
            <div className="flex flex-wrap gap-6">
                {courses.map(course => (
                    <MyCoursesCard key={course._id} {...course} />
                ))}
            </div>
        </div>
    );
};

export default MyCourses;