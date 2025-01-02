import Enrollment from "../../components/HomePage/Enrollment/Enrollment";
// import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import FeaturedOn from "../../components/HomePage/FeaturedOn/FeaturedOn";
import Hero from "../../components/HomePage/Hero/Hero";
import SessionAnnouncement from "../../components/HomePage/SessionAnnouncement/SessionAnnouncement";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";


const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedOn/>
            <Enrollment/>
            <SessionAnnouncement/>
            <WhyUs/>
            {/* <Testimonials/> */}
        </div>
    );
};

export default Home;