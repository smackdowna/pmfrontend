import { IMAGES } from "../../../assets";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className=" w-60 min-w-60 h-screen px-4 py-14 text-white">
      <Link to={"/"} className="flex items-center gap-2 w-full mb-3">
        <img src={IMAGES.pmGurukulLogo} alt="PM-Gurukul" className="size-12" />
        <h1 className="text-black">PM Gurukul</h1>
      </Link>
      <div>
        <ul className="flex flex-col gap-2">
            <li>
                <Link to={"/dashboard"} className="text-neutral-85">
                Dashboard
                </Link>
            </li>
            <li>
                <Link to={"/dashboard/my-courses"} className="text-neutral-85">
                My Courses
                </Link>
            </li>
            <li>
                <Link to={"/dashboard/referrals"} className="text-neutral-85">
                Referrals & Payouts
                </Link>
            </li>
            <li>
                <Link to={"/dashboard/kyc"} className="text-neutral-85">
                KYC
                </Link>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
