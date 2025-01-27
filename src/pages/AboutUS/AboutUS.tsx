import { Helmet } from "react-helmet-async";
import AboutUsContent from "../../components/AboutUsPage/AboutUsContent/AboutUsContent";
import AboutUsHero from "../../components/AboutUsPage/AboutUsHero/AboutUsHero";

const AboutUS = () => {
    return (
        <div>
            <Helmet>
                <title>PM Gurukul | Learn About Us</title>
            </Helmet>
            <AboutUsHero/>
            <AboutUsContent/>
        </div>
    );
};

export default AboutUS;