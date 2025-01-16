import { ICONS } from "../../../assets";
import Badge from "../../Reusable/Badge/Badge";
import Heading1 from "../../Reusable/Heading1/Heading1";
import HeroContainer from "../../Reusable/HeroContainer/HeroContainer";
import Paragraph from "../../Reusable/Paragraph/Parahraph";
import Container from "../../Shared/Container/Container";

const CourseHero = () => {
    return (
        <HeroContainer>
            <Container>
                <div className="flex flex-col items-start md:items-center justify-center py-[64px]">
                    <Badge title="This is a headline for heading" />
                    <Heading1 classNames="text-white mt-[6px]">Our Courses</Heading1>
                    <Paragraph classNames="text-neutral-10">Unleash Your Potential with Our Inspiring Online Courses.</Paragraph>
                    
                    <div className="relative max-w-[722px] w-full mx-auto mt-7">
                        <img src={ICONS.search} alt="search-icon" className="size-5 absolute top-3.5 bottom-0 left-4" />
                        <input type="text" placeholder="Search" className="pl-11 pr-4 py-3 bg-white rounded-3xl w-full focus:border focus:border-secondary-10 transition duration-300 focus:outline-none" />
                    </div>
                </div>
            </Container>
        </HeroContainer>
    );
};

export default CourseHero;