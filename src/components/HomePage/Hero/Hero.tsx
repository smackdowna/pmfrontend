import { Link } from "react-router-dom";
import { ICONS, IMAGES } from "../../../assets";
import Container from "../../Shared/Container/Container";
import HeroContainer from "../../Reusable/HeroContainer/HeroContainer";
import Badge from "../../Reusable/Badge/Badge";
import Ripple from "../../Reusable/Ripple/Ripple";

const Hero = () => {
  return (
    <HeroContainer classNames="pt-12">
      <Container>
        <div className="font-Inter flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col justify-center">
            <Badge title="This is a headline for heading" />
            <h1 className="text-white text-[48px] font-bold leading-[64px] mt-1 max-w-[599px]">
              Achieve Digital Excellence With PM Gurukul
            </h1>
            <p className="text-neutral-10 leading-6 mt-1 max-w-[467px]">
              Unlock your potential with our comprehensive e-learning resources
              and master the skills to Learn, Implement & Grow.
            </p>
            <div className="flex items-center gap-5 mt-7">
              <Ripple styles="rounded-xl">
                <Link
                  to={"/auth/login"}
                  className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow"
                >
                  Register Now
                </Link>
              </Ripple>
              <Link
                to={"/courses"}
                className="text-secondary-15 font-semibold leading-6"
              >
                Find Courses
              </Link>
            </div>

            <div className="flex items-center gap-6 mt-7">
              <div className="flex items-center gap-[6px]">
                <img
                  src={ICONS.starCircle}
                  alt="star-circle"
                  className="size-5"
                />
                <p className="text-neutral-15 leading-6">
                  High Value Certification
                </p>
              </div>
              <div className="flex items-center gap-[6px]">
                <img
                  src={ICONS.infinity}
                  alt="star-circle"
                  className="size-5"
                />
                <p className="text-neutral-15 leading-6">Lifetime Access</p>
              </div>
            </div>
          </div>

          <img
            src={IMAGES.heroImg}
            alt=""
            className="max-h-[497px] md:h-fit object-contain"
          />
        </div>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
