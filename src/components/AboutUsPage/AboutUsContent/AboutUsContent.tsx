import Container from "../../Shared/Container/Container";

const AboutUsContent = () => {
    const aboutUsContent = [
        {
            heading: "PMGURUKKUL is a leading ed-tech company in India",
            details: [
                "which provides you with trending courses to improve your skills which are needed by everyone today. We provide flexible courses to all which allow them to learn practical skills, making online learning convenient and practical. From students to professionals looking to upskill, PMGURUKKUL is providing lifelong learning opportunities for everyone. We introduce courses that help students to thrive in their personal and professional lives.",
                "Everyone wants to move ahead but nobody tries to help them move ahead, but we at PMGURUKKUL try our best to make them entrepreneurs with the education we provide."
            ]
        },
        {
            heading: "MISSION",
            details: [
                "Our mission is to help people with the knowledge and skills so that everyone contributes to society and the economy."
            ]
        },
        {
            heading: "VISION",
            details: [
                "Our vision is to become India’s best Ed-tech company by providing the trending online education and empower everyone to move forward on the path to a better financial future."
            ]
        },
    ];

    return (
        <Container>
            <div className="font-Inter py-[64px] max-w-full xl:max-w-[1080px] mx-auto">
                <div className="flex flex-col gap-4 mt-4">
                    {
                        aboutUsContent.map((content, index) => (
                            <div key={index}>
                                <h1 className="text-primary-10 text-2xl font-bold">{content?.heading}</h1>
                                {
                                    content?.details?.map((detail) =>
                                        <p key={detail} className="text-black text-lg leading-6 mt-4">{detail}</p>
                                    )
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};

export default AboutUsContent;