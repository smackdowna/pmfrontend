import { useParams } from "react-router-dom";
import CourseContent from "../../components/CourseDetailsPage/CourseContent/CourseContent";
import CourseDetailsHero from "../../components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero";
import TrendingCourses from "../../components/CourseDetailsPage/TrendingCourses/TrendingCourses";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import Container from "../../components/Shared/Container/Container";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import FAQ from "../../components/Shared/FAQ/FAQ";
import { useGetAllCoursesQuery, useGetSingleCourseByIdQuery } from "../../redux/Features/Course/courseApi";
import { Helmet } from "react-helmet-async";
import { TCourse } from "../../components/CoursePage/AllCourses/course.types";

const CourseDetails = () => {
    const { id } = useParams();
    const { data: courseDetails, isLoading } = useGetSingleCourseByIdQuery(id);
    const { data: allCourses, isLoading: isCourseLoading } = useGetAllCoursesQuery({ searchQuery: "", categoryQuery: "" });

    const trendingCourses = allCourses?.courses?.filter((course: TCourse) => course?._id !== courseDetails?.course?._id);

    const courseTitle = courseDetails?.course?.title;

    return (
        <div>
            {courseTitle && (
                <Helmet>
                    <title>PMGURUKKUL | {courseTitle}</title>
                </Helmet>
            )}
            <CourseDetailsHero courseDetails={courseDetails?.course} isDetailsLoading={isLoading} />
            <Container>
                <CourseContent courseDetails={courseDetails?.course} />
                <TrendingCourses trendingCourses={trendingCourses} isCourseLoading={isCourseLoading} />
            </Container>

            <WhyUs />
            <Testimonials />
            <FAQ />
            <CustomerSupport />
        </div>
    );
};

export default CourseDetails;
