import { Helmet } from "react-helmet-async";
import CourseHero from "../../components/CoursePage/CourseHero/CourseHero";

const Courses = () => {
    return (
        <div>
            <Helmet>
                <title>PM Guruokul | Courses</title>
            </Helmet>
            <CourseHero/>
        </div>
    );
};

export default Courses;