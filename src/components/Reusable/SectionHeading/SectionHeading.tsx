import Heading1 from "../Heading1/Heading1";
import Paragraph from "../Paragraph/Parahraph";

const SectionHeading = ({ heading, description, align="center" }: { heading: string, description: string, align?:string }) => {
    return (
        <div className={`flex flex-col  md:items-center gap-2 text-center ${align === "left" ? "items-start" : align === "right" ? "items-end" : "items-center"}`}>
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