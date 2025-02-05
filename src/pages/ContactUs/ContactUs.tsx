import { Helmet } from "react-helmet-async";
import ContactUsForm from "../../components/ContactUsPage/ContactUsForm/ContactUsForm";
import ContactUsHero from "../../components/ContactUsPage/ContactUsHero/ContactUsHero";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";
import { IMAGES } from "../../assets";
import Container from "../../components/Shared/Container/Container";

const ContactUs = () => {
    return (
        <div className="text-gray-900">
            <Helmet>
                <title>PMGURUKKUL | Reach Us Out</title>
            </Helmet>
            <ContactUsHero />
            <div className="bg-neutral-20 py-[64px]">
                <Container>
                    <div className="flex flex-col lg:flex-row items-center gap-0 xl:gap-20">
                        <img src={IMAGES.contactUsImg} alt="PMGURUKUL" className="w-full lg:w-[60%] xl:w-full" />
                        <ContactUsForm />
                    </div>
                </Container>
            </div>
            <CustomerSupport />
        </div>
    );
};

export default ContactUs;