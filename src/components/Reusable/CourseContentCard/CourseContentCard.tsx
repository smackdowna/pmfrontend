import { ReactNode } from "react";


const CourseContentCard = ({ title, children }: { title: string, children: ReactNode }) => {
    return (
        <div className="bg-white rounded-2xl border border-neutral-10 w-[400px]">
            <div className="bg-neutral-10 px-5 py-4 rounded-t-2xl">
                <h1 className="text-white text-xl font-semibold leading-7">{title}</h1>
            </div>

            <div className="flex flex-col gap-5 p-5">
                {children}
            </div>
        </div>
    );
};

export default CourseContentCard;