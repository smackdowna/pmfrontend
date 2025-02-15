import StarRatings from 'react-star-ratings';
import { Testimonial } from './Testimonials';
import { ICONS } from '../../../assets';


const TestimonialCard: React.FC<Testimonial> = ({ feedback, name, role, image, rating }) => {
    console.log(image);
    return (
        <div className="bg-white p-6 rounded-2xl font-Inter h-[264px] flex flex-col justify-between gap-10 w-[450px] mr-6">
            <p className="text-primary-10 text-lg leading-6">{feedback}</p>

            <div className="flex flex-col gap-5">
                <div className="bg-neutral-25 w-[196px] h-[2px]"></div>

                <div className="flex items-center gap-3">
                    {/* <img src={image} alt={name} className="size-12 rounded-full" /> */}
                    <img src={ICONS.student} alt={name} className="size-12 rounded-full" />
                    <div>
                        <h1 className="text-primary-10 font-medium leading-6">{name}, <span className="text-neutral-10">{role}</span></h1>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#FFAD14"
                            numberOfStars={5}
                            name="rating"
                            starDimension="13px"
                            starSpacing="2px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;