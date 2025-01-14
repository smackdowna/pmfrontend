import { useState } from "react";
import { ICONS } from "../../../assets";
import { LuDot } from "react-icons/lu";


const Accordian = ({ title, data }: { title: string, data: string[] }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);
    const handleClick = () =>
        setIsAccordionOpen(!isAccordionOpen);
    return (
        <article
            className="shadow-faq-box-shadow bg-white p-6 w-full rounded-[10px] border border-neutral-15 mt-5"
        >
            <div
                className="flex gap-2 cursor-pointer items-center justify-between w-full"
                onClick={handleClick}
            >
                <h1 className="text-primary-10 font-semibold text-xl leading-7">
                    {title}
                </h1>
                <img
                    src={ICONS.downArrow}
                    alt="right-arrow"
                    className={`${isAccordionOpen && "rotate-[180deg]"
                        }`}
                />
            </div>
            <div
                className={`grid transition-all duration-300 overflow-hidden ease-in-out text-neutral-10 ${isAccordionOpen
                    ? "grid-rows-[1fr] opacity-100 mt-5"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                {
                    isAccordionOpen ?
                        <div className="flex flex-col gap-3">
                            {
                                data?.map((item: string) =>
                                    <p key={item} className="text-neutral-10 overflow-hidden flex items-center gap-2"><LuDot className="text-3xl" />{item}</p>
                                )
                            }
                        </div>
                        :
                        ""

                }

            </div>
        </article>
    );
};

export default Accordian;