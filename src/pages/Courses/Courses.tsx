import { Helmet } from "react-helmet-async";
import CourseHero from "../../components/CoursePage/CourseHero/CourseHero";
import AllCourses from "../../components/CoursePage/AllCourses/AllCourses";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import FAQ from "../../components/Shared/FAQ/FAQ";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import { useGetAllCoursesQuery } from "../../redux/Features/Course/courseApi";
import { useState } from "react";

const Courses = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { data: allCourses, isLoading, isFetching } = useGetAllCoursesQuery(searchQuery);
    const [selectedCategory, setSelectedCategory] = useState("All Courses");

    return (
        <div>
            <Helmet>
                <title>PM Gurukul | Explore Courses</title>
            </Helmet>
            <CourseHero
                setSearchQuery={setSearchQuery}
            />
            <AllCourses
                allCourses={allCourses}
                isLoading={isLoading}
                isFetching={isFetching}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}

            />
            <WhyUs />
            <Testimonials />
            <FAQ />
            <CustomerSupport />
        </div>
    );
};

export default Courses;