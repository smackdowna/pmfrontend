import Enrollment from "../../components/HomePage/Enrollment/Enrollment";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import FeaturedOn from "../../components/HomePage/FeaturedOn/FeaturedOn";
import Hero from "../../components/HomePage/Hero/Hero";
import SessionAnnouncement from "../../components/HomePage/SessionAnnouncement/SessionAnnouncement";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import FAQ from "../../components/Shared/FAQ/FAQ";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";


const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedOn/>
            <Enrollment/>
            <SessionAnnouncement/>
            <WhyUs/>
            <Testimonials/>
            <FAQ/>
            <CustomerSupport/>
        </div>
    );
};

export default Home;