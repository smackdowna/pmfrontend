import CourseContent from "../../components/CourseDetailsPage/CourseContent/CourseContent";
import CourseDetailsHero from "../../components/CourseDetailsPage/CourseDetailsHero/CourseDetailsHero";
import TrendingCourses from "../../components/CourseDetailsPage/TrendingCourses/TrendingCourses";
import Container from "../../components/Shared/Container/Container";

const CourseDetails = () => {
    return (
        <div>
            <CourseDetailsHero />
           <Container>
           <CourseContent/>
           <TrendingCourses/>
           </Container>
        </div>
    );
};

export default CourseDetails;