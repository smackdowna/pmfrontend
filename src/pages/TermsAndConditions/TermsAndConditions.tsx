
import { Helmet } from 'react-helmet-async';
import CustomerSupport from '../../components/Shared/CustomerSupport/CustomerSupport';
import TermsAndConditionsContent from '../../components/TermsAndConditionsPage/TermsAndConditionsContent/TermsAndConditionsContent';
import TermsAndConditionsHero from './../../components/TermsAndConditionsPage/TermsAndConditionsHero/TermsAndConditionsHero';
const TermsAndConditions = () => {
    return (
        <div>
            <Helmet>
                <title>PM Gurukul | Terms & Conditions</title>
            </Helmet>
            <TermsAndConditionsHero />
            <TermsAndConditionsContent />
            <CustomerSupport />
        </div>
    );
};

export default TermsAndConditions;