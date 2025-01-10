import { useState } from "react";
import SectionHeading from "../../Reusable/SectionHeading/SectionHeading";
import { ICONS } from "../../../assets";


const FAQ = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState<number>(0);

    const faqs = [
        {
            question: "What is PM Gurukul?",
            answer: "PM Gurukul is an online platform offering a variety of digital courses and skill-based training to help individuals improve their knowledge and stay relevant in today's fast-paced world.",
        },
        {
            question: "Do you provide end-to-end development services?",
            answer: "Yes, we offer end-to-end development services. From conceptualization and design to development, deployment, and maintenance, we ensure a seamless experience for our clients.",
        },
        {
            question: "What industries do you serve?",
            answer: "We work with clients across various industries, including e-commerce, education, healthcare, finance, and more. Our expertise allows us to adapt to the unique needs of each industry.",
        },
        {
            question: "How long does it take to develop a web application?",
            answer: "The development timeline depends on the project’s complexity and scope. Simple applications can take a few weeks, while more complex projects may take several months. We provide a detailed timeline after assessing your requirements.",
        },
        {
            question: "Do you offer UI/UX design as a standalone service?",
            answer: "Absolutely! If you’re only looking for UI/UX design services, our expert team can help create engaging and user-friendly interfaces that align with your brand.",
        }
    ];

    const handleClick = (index: number) =>
        setIsAccordionOpen((prevIndex) => (prevIndex === index ? -1 : index));

    return (
        <div className="bg-white py-[96px] flex flex-col items-center justify-center gap-[56px]">
            <SectionHeading heading="Got Questions? We’ve Got Answers!" description="Here’s everything you’ve been wondering about, explained." />

            <div className="flex gap-3 flex-col items-center justify-center w-full">
                {faqs.map((faq, index) => (
                    <article
                        key={index}
                        className="shadow-faq-box-shadow bg-white py-[14px] px-4 w-full rounded-[10px] max-w-[600px] mx-auto border border-neutral-15"
                    >
                        <div
                            className="flex gap-2 cursor-pointer items-center justify-between w-full"
                            onClick={() => handleClick(index)}
                        >
                            <h1 className="text-primary-10 font-semibold">
                                {faq.question}
                            </h1>
                            <img
                                src={ICONS.downArrow}
                                alt="right-arrow"
                                className={`${isAccordionOpen === index && "rotate-[180deg]"
                                    }`}
                            />
                        </div>
                        <div
                            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${isAccordionOpen === index
                                    ? "grid-rows-[1fr] opacity-100 mt-5"
                                    : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <p className="text-neutral-30 overflow-hidden">{faq.answer}</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default FAQ;