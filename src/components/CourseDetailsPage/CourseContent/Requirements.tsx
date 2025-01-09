import Accordian from "../../Reusable/Accordian/Accordian";


const Requirements = ({ courseRequirements }: { courseRequirements: string[] }) => {
    return (
        <div className="mt-5">
            <Accordian title="Requirements"
                data={courseRequirements}
            />
        </div>
    );
};

export default Requirements;