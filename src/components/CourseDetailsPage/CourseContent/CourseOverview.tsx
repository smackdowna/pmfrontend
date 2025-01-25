import Heading1 from "../../Reusable/Heading1/Heading1";
import Paragraph from "../../Reusable/Paragraph/Parahraph";


const CourseOverview = ({ courseOverview }: { courseOverview: string }) => {
    return (
        <div>
            <div className="space-y-3">
                <Heading1 classNames="font-bold">Course Overview</Heading1>
                <Paragraph>
                    {courseOverview}
                </Paragraph>
            </div>
        </div>
    );
};

export default CourseOverview;