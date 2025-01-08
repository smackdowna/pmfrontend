// import { IMAGES } from "../../../assets";
// import { Link } from "react-router-dom";
// const Sidebar = () => {
//   return (
//     <div className=" w-60 min-w-60 h-screen px-4 py-14 text-white">
//       <Link to={"/"} className="flex items-center gap-2 w-full mb-8">
//         <img src={IMAGES.pmGurukulLogo} alt="PM-Gurukul" className="size-12" />
//         <h1 className="text-black">PM Gurukul</h1>
//       </Link>
//       <div>
//         <ul className="flex flex-col gap-6">
//             <li className="px-3">
//                 <Link to={"/dashboard"} className="text-neutral-85">
//                 Dashboard
//                 </Link>
//             </li>
//             <li className="px-3">
//                 <Link to={"/dashboard/my-courses"} className="text-neutral-85">
//                 My Courses
//                 </Link>
//             </li>
//             <li className="px-3">
//                 <Link to={"/dashboard/referral"} className="text-neutral-85">
//                 Referrals & Payouts
//                 </Link>
//             </li>
//             <li className="px-3">
//                 <Link to={"/dashboard/kyc"} className="text-neutral-85">
//                 KYC
//                 </Link>
//             </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
import { IMAGES } from "../../../assets";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Helper function to check if the link is active
  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div className="w-60 min-w-60 h-screen px-4 py-14 text-white ">
      <Link to="/" className="flex items-center gap-2 w-full pb-4 mb-2">
        <img src={IMAGES.pmGurukulLogo} alt="PM-Gurukul" className="size-10" />
        <h1 className="text-primary-10 text-xl font-medium">PM Gurukul</h1>
      </Link>
      <div>
        <ul className="flex flex-col gap-2">
          <li className={`px-3 py-2 ${isActive("/dashboard") ? "bg-neutral-60 text-primary-10 rounded-lg" : "text-neutral-85"}`}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li className={`px-3 py-2 ${isActive("/dashboard/my-courses") ? "bg-neutral-60 text-primary-10 rounded-lg" : "text-neutral-85"}`}>
            <Link to="/dashboard/my-courses">My Courses</Link>
          </li>
          <li className={`px-3 py-2 ${isActive("/dashboard/referral") ? "bg-neutral-60 text-primary-10 rounded-lg" : "text-neutral-85"}`}>
            <Link to="/dashboard/referral">Referrals & Payouts</Link>
          </li>
          <li className={`px-3 py-2 ${isActive("/dashboard/kyc") ? "bg-neutral-60 text-primary-10 rounded-lg" : "text-neutral-85"}`}>
            <Link to="/dashboard/kyc">KYC</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
