
import CustomerSupport from '../../components/Shared/CustomerSupport/CustomerSupport';
import TermsAndConditionsContent from '../../components/TermsAndConditionsPage/TermsAndConditionsContent/TermsAndConditionsContent';
import TermsAndConditionsHero from './../../components/TermsAndConditionsPage/TermsAndConditionsHero/TermsAndConditionsHero';
const TermsAndConditions = () => {
    return (
        <div>
            <TermsAndConditionsHero/>
            <TermsAndConditionsContent/>
            <CustomerSupport/>
        </div>
    );
};

export default TermsAndConditions;