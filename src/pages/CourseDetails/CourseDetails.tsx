import { useParams } from "react-router-dom";
import CourseContent from "../../components/CourseDetailsPage/CourseContent/CourseContent";
import CourseDetailsHero from "../../components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero";
import TrendingCourses from "../../components/CourseDetailsPage/TrendingCourses/TrendingCourses";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import Container from "../../components/Shared/Container/Container";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import FAQ from "../../components/Shared/FAQ/FAQ";
import { useGetSingleCourseByIdQuery } from "../../redux/Features/Course/courseApi";

const CourseDetails = () => {
    const { id } = useParams();
    const {data:courseDetails} = useGetSingleCourseByIdQuery(id)
    console.log(courseDetails);
    return (
        <div>
            <CourseDetailsHero courseDetails={courseDetails?.course} />
            <Container>
                <CourseContent />
                <TrendingCourses />
            </Container>

            <WhyUs />
            <Testimonials />
            <FAQ />
            <CustomerSupport />
        </div>
    );
};

export default CourseDetails;