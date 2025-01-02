import Heading1 from "../Heading1/Heading1";
import Paragraph from "../Paragraph/Parahraph";

const SectionHeading = ({ heading, description }: { heading: string, description: string }) => {
    return (
        <div className="flex flex-col gap-2">
            <Heading1>
                {heading}
            </Heading1>
            <Paragraph >
                {description}
            </Paragraph>
        </div>
    );
};

export default SectionHeading;