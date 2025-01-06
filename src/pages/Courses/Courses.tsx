import { Helmet } from "react-helmet-async";
import CourseHero from "../../components/CoursePage/CourseHero/CourseHero";
import AllCourses from "../../components/CoursePage/AllCourses/AllCourses";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import FAQ from "../../components/Shared/FAQ/FAQ";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";

const Courses = () => {
    return (
        <div>
            <Helmet>
                <title>PM Gurukul | Courses</title>
            </Helmet>
            <CourseHero/>
            <AllCourses/>
            <WhyUs/>
            <Testimonials/>
            <FAQ/>
            <CustomerSupport/>
        </div>
    );
};

export default Courses;