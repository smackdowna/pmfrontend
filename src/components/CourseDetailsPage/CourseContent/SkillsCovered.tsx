import Accordian from '../../Reusable/Accordian/Accordian';

const SkillsCovered = ({ skillsCovered }: { skillsCovered: string[] }) => {
    return (
        <div className="mt-5">
            <Accordian title="Skills Covered in this course"
                data={skillsCovered}
            />
        </div>
    );
};

export default SkillsCovered;