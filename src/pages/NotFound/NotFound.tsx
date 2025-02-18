import { Link } from "react-router-dom";
import { ICONS } from "../../assets";


const NotFound = () => {
    return (
        <div className="flex flex-col gap-3 items-center justify-center h-screen p-5">
            <img src={ICONS.notFound} alt="PMGURUKKUL" className="max-w-[450px] w-full mx-auto" />
            <h1 className="text-primary-15 text-xl md:text-[32px] font-bold font-Inter text-center">This page is on a coffee☕ break. Try again later...</h1>
            <h1 className="text-primary-15 text-sm md:text-xl font-bold font-Inter text-center">Or</h1>
            <Link to={"/"}
                type="submit"
                className="px-6 py-3 bg-primary-10 text-white rounded-md text-lg font-semibold">
                Back To Home
            </Link>
        </div>
    );
};

export default NotFound;