/* eslint-disable @typescript-eslint/no-explicit-any */
import Marquee from "react-fast-marquee";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import Container from "../../Shared/Container/Container";
import TestimonialCard from "./TestimonialCard";
import { ICONS } from "../../../assets";

export type Testimonial = {
    _id: number | string;
    feedback: string;
    name: string;
    role: string;
    image: string | any;
    rating: number;
};

const Testimonials = () => {
    const testimonials: Testimonial[] = [
        {
            _id: 1,
            feedback: "I never thought learning could be this fun and effective. The marketing course gave me the skills I needed to grow my small business online. Truly life-changing!",
            name: "Harry Potter",
            role: "Student",
            image: ICONS.avatar,
            rating: 5,
        },
        {
            _id: 2,
            feedback: "The courses are incredibly well-designed, and the instructors are highly knowledgeable. This platform helped me achieve my career goals!",
            name: "Emma Watson",
            role: "Professional",
            image: ICONS.avatar,
            rating: 5,
        },
        {
            _id: 3,
            feedback: "Learning at my own pace was the best decision. The flexibility and quality of content made the experience enjoyable.",
            name: "John Doe",
            role: "Entrepreneur",
            image: ICONS.avatar,
            rating: 4,
        },
    ];

    return (
        <div style={{
            background: "linear-gradient(0deg, rgba(255, 162, 57, 0.10) 0%, rgba(255, 162, 57, 0.10) 100%), #FFF",
        }} className="py-[64px]">
            <Container>
                <div className="flex flex-col gap-[64px] items-center justify-center">
                    <SectionHeading heading="What People Are Saying About Us" description="Discover how PM Gurukul has reshaped learning and sparked success stories." />

                    <Marquee speed={30} className="flex items-center" direction="right" pauseOnHover>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial._id} {...testimonial} />
                        ))}
                    </Marquee>
                </div>
            </Container>
        </div>
    );
};

export default Testimonials;