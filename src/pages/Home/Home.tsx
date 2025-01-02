import Enrollment from "../../components/HomePage/Enrollment/Enrollment";
import Testimonials from "../../components/HomePage/Testimonials/Testimonials";
import FeaturedOn from "../../components/HomePage/FeaturedOn/FeaturedOn";
import Hero from "../../components/HomePage/Hero/Hero";
import SessionAnnouncement from "../../components/HomePage/SessionAnnouncement/SessionAnnouncement";
import WhyUs from "../../components/HomePage/WhyUs/WhyUs";
import FAQ from "../../components/Shared/FAQ/FAQ";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>PM Guruokul | Achieve Digital Excellence</title>
            </Helmet>
            <Hero />
            <FeaturedOn />
            <Enrollment />
            <SessionAnnouncement />
            <WhyUs />
            <Testimonials />
            <FAQ />
            <CustomerSupport />
        </div>
    );
};

export default Home;