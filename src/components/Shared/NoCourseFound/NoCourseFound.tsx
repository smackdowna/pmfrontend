import { Link } from "react-router-dom";
import { IMAGES } from "../../../assets";


const NoCourseFound = ({ message, isBtnAvailable }: { message: string; isBtnAvailable?: boolean; }) => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <img src={IMAGES.KycBG} alt="KYC" className="max-w-[300px]" />

            <p className="text-primary-10 text-2xl font-semibold text-center capitalize">
                {message}
            </p>
            {
                isBtnAvailable &&
                <Link to={"/courses"} className="bg-primary-10 text-white px-9 py-3 font-semibold rounded-xl">
                    Enroll Now
                </Link>
            }
        </div>
    );
};

export default NoCourseFound;