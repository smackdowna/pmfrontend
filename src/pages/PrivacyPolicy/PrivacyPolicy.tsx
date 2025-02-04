import { Helmet } from "react-helmet-async";
import PrivacyPolicyContent from "../../components/PrivacyPolicyPage/PrivacyPolicyContent/PrivacyPolicyContent";
import PrivacyPolicyHero from "../../components/PrivacyPolicyPage/PrivacyPolicyHero/PrivacyPolicyHero";


const PrivacyPolicy = () => {
    return (
        <div>
            <Helmet>
                <title>PMGURUKKUL | Privacy Policy</title>
            </Helmet>
            <PrivacyPolicyHero />
            <PrivacyPolicyContent />
        </div>
    );
};

export default PrivacyPolicy;