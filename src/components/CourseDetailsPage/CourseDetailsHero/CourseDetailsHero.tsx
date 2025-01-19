import { useState } from "react";
import HeroContainer from "../../Reusable/HeroContainer/HeroContainer";
import Container from "../../Shared/Container/Container";
import Badge from "../../Reusable/Badge/Badge";
import { IMAGES } from "../../../assets";
import { toast } from "sonner";
import SuccessWithTick from "../../Reusable/SuccessWithTick/SuccessWithTick";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const CourseDetailsHero = ({ courseDetails }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddCourseToCart = () => {
        const cartData = {
            _id: courseDetails._id,
            title: courseDetails.title,
            category: courseDetails?.category,
            image: courseDetails?.poster?.url,
            basePrice: courseDetails?.basePrice,
            discountedPrice: courseDetails.discountedPrice
        };

        const existingCartData = localStorage.getItem("cart");
        const cartArray = existingCartData ? JSON.parse(existingCartData) : [];

        const courseAlreadyInCart = cartArray.some((item: { _id: string }) => item._id === courseDetails._id);

        if (courseAlreadyInCart) {
            toast.error("Course already added to cart.");
            return;
        }

        setIsLoading(true);

        setTimeout(() => {
            cartArray.push(cartData);
            localStorage.setItem('cart', JSON.stringify(cartArray));
            setIsLoading(false);
            setIsAdded(true);
            toast.success("Course added to cart.");
        }, 1000);
    };

    return (
        <HeroContainer classNames="pt-12">
            <Container>
                <div className="font-Inter flex flex-col-reverse lg:flex-row gap-12 xl:gap-0 justify-between py-6 md:py-12 xl:py-[80px]">
                    <div className="flex flex-col justify-center">
                        <Badge title={courseDetails?.category} />
                        <h1 className="text-white capitalize text-[48px] font-bold leading-[64px] mt-1 max-w-[599px]">{courseDetails?.title}</h1>
                        <p className="text-neutral-10 leading-6 mt-1 max-w-[599px]">{courseDetails?.description}</p>

                        <div className="flex items-center gap-6 mt-7">
                            <div className="flex items-center gap-2">
                                <img src={IMAGES.pmGurukulLogo} alt="avatar" className="size-10" />
                                <p className="text-neutral-15 leading-6 text-lg font-medium">{courseDetails?.author}</p>
                            </div>

                            <span className="text-neutral-10 text-lg">|</span>

                            <div className="flex items-center gap-2">
                                <h1 className="text-neutral-15 leading-6 text-lg font-medium">₹{courseDetails?.discountedPrice}</h1>
                                <span className="line-through text-neutral-10 text-sm">₹{courseDetails?.basePrice}</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 mt-7">
                            <button className="bg-primary-gradient-light px-5 py-[10px] text-primary-10 font-semibold leading-6 rounded-[10px] shadow-primary-shadow">Buy now for ₹{courseDetails?.discountedPrice}</button>
                            <button onClick={handleAddCourseToCart} className="text-secondary-15 font-semibold leading-6 rounded-[10px] border border-secondary-15 px-5 py-[10px]">
                                {isLoading ? <LoadingSpinner fontSize="text-[15px]" /> : isAdded ? <SuccessWithTick message="Added" /> : "Add to Cart"}
                            </button>
                        </div>
                    </div>

                    <img src={courseDetails?.poster?.url} alt="" className="h-full max-h-full md:max-h-[349px] xl:max-h-[300px] w-full max-w-full xl:max-w-[404px] rounded-2xl" />
                </div>
            </Container>
        </HeroContainer>
    );
};

export default CourseDetailsHero;
