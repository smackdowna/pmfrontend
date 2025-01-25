import Heading1 from "../../Reusable/Heading1/Heading1";


const CourseObjective = ({ courseObjective }: { courseObjective: string }) => {
    return (
        <div className="font-Inter mt-12 md:mt-[64px]">
            <Heading1 classNames="font-bold">Course Objectives</Heading1>
            <div className="shadow-faq-box-shadow bg-white p-6 w-full rounded-[10px] border border-neutral-15 mt-5">
            <p className="text-neutral-10 overflow-hidden flex items-center gap-2" dangerouslySetInnerHTML={{ __html: courseObjective }}></p>
            </div>
        </div>
    );
};

export default CourseObjective;