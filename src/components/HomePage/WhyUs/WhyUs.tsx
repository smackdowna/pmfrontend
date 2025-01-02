import Heading1 from "../../Reusable/Heading1/Heading1";
import Paragraph from "../../Reusable/Paragraph/Parahraph";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import Container from "../../Shared/Container/Container";


const WhyUs = () => {
    const whyChooseUsDetails = [
        {
            label: "Experienced Trainers",
            value: "35+"
        },
        {
            label: "Courses Rolling Out",
            value: "30k+"
        },
        {
            label: "Trained Students",
            value: "100k+"
        },
        {
            label: "Community Earning",
            value: "10k+"
        },
    ]
    return (
        <div className="bg-gradient-gray py-[64px]">
            <Container>
                <div className="flex flex-col gap-9 items-center justify-center">
                    <SectionHeading heading="Why PM Gurukul?" description="Your Pathway to Growth, Learning, and Success." />

                    <div className="flex items-center gap-[90px]">
                        {whyChooseUsDetails.map((item, index) => (
                            <div key={index} className="flex items-center gap-[90px]">
                                <div>
                                    <Heading1>{item.value}</Heading1>
                                    <Paragraph>{item.label}</Paragraph>
                                </div>
                                {index !== whyChooseUsDetails.length - 1 && (
                                    <div className="w-[3px] h-[100px] bg-neutral-10/40"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUs;