import Container from './../../Shared/Container/Container';
import { privacyPolicyContent } from './privacyPolicyContentData';

const PrivacyPolicyContent = () => {
    return (
        <Container>
            <div className="flex flex-col gap-4 mt-4 font-Inter py-[64px] max-w-full xl:max-w-[1080px] mx-auto">
                {
                    privacyPolicyContent.map((content, index) => (
                        <div key={index}>
                            <h1 className="text-primary-10 text-2xl font-bold">{content?.heading ? content?.heading : ""}</h1>
                            {
                                content?.details?.map((detail) =>
                                    <p key={detail} className="text-black text-lg leading-6 mt-4">{detail}</p>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default PrivacyPolicyContent;
