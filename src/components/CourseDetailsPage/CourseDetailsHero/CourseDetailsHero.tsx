import { Link } from "react-router-dom";
import HeroContainer from "../../Reusable/HeroContainer/HeroContainer";
import Container from "../../Shared/Container/Container";
import Badge from "../../Reusable/Badge/Badge";
import { ICONS, IMAGES } from "../../../assets";


const CourseDetailsHero = () => {
    return (
        <HeroContainer classNames="pt-12">
            <Container>
                <div className="font-Inter flex flex-col lg:flex-row justify-between py-[80px]">
                    <div className="flex flex-col justify-center">
                        <Badge title="Design" />
                        <h1 className="text-white text-[48px] font-bold leading-[64px] mt-1 max-w-[599px]">UI UX Design Decoded</h1>
                        <p className="text-neutral-10 leading-6 mt-1 max-w-[599px]">The UI/UX Decoded Course covers design principles, prototyping, and user research, with three practical projects for hands-on experience.</p>

                        <div className="flex items-center gap-2 mt-7">
                            <img src={ICONS.avatar} alt="avatar" className="size-10" />
                            <p className="text-neutral-15 leading-6 text-lg font-medium">Pani Puri</p>
                        </div>

                        <div className="flex items-center gap-5 mt-7">
                            <button className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow">Buy now</button>
                            <Link to={"/courses"} className="text-secondary-15 font-semibold leading-6 rounded-[10px] border border-secondary-15 px-5 py-[10px]">Add to Cart</Link>
                        </div>
                    </div>

                    <img src={IMAGES.courseDetailsImg} alt="" className="h-full max-h-[300px] w-full max-w-[404px]" />
                </div>
            </Container>
        </HeroContainer>
    );
};

export default CourseDetailsHero;