import { Helmet } from "react-helmet-async";
import CourseHero from "../../components/CoursePage/CourseHero/CourseHero";
import AllCourses from "../../components/CoursePage/AllCourses/AllCourses";

const Courses = () => {
    return (
        <div>
            <Helmet>
                <title>PM Guruokul | Courses</title>
            </Helmet>
            <CourseHero/>
            <AllCourses/>
        </div>
    );
};

export default Courses;