import Heading1 from "../../Reusable/Heading1/Heading1";
import Accordian from "../../Reusable/Accordian/Accordian";


const CourseObjective = ({ courseObjectives }: { courseObjectives: string[] }) => {
    return (
        <div className="font-Inter mt-12 md:mt-[64px]">
            <Heading1 classNames="font-bold">Course Objectives</Heading1>
            <Accordian title="What Will I Learn?"
                data={courseObjectives}
            />
        </div>
    );
};

export default CourseObjective;