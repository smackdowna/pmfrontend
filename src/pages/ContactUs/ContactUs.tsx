import ContactUsForm from "../../components/ContactUsPage/ContactUsForm/ContactUsForm";
import ContactUsHero from "../../components/ContactUsPage/ContactUsHero/ContactUsHero";
import CustomerSupport from "../../components/Shared/CustomerSupport/CustomerSupport";

const ContactUs = () => {
    return (
        <div className="text-gray-900">
            <ContactUsHero />
            <ContactUsForm />
            <CustomerSupport />
        </div>
    );
};

export default ContactUs;