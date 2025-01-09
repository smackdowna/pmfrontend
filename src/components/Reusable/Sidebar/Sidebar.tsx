import { IMAGES } from "../../../assets";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Set isAdmin based on the current route
  useEffect(() => {
    setIsAdmin(location.pathname.startsWith("/admin"));
  }, [location.pathname]);

  // Helper function to check if the link is active
  const isActive = (path: string): boolean => location.pathname === path;

  // Objects to store the menus and their links
  const userMenus = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "My Courses", link: "/dashboard/my-courses" },
    { name: "Referrals & Payouts", link: "/dashboard/referral" },
    { name: "KYC", link: "/dashboard/kyc" },
  ];

  const adminMenus = [
    { name: "Dashboard", link: "/admin/dashboard" },
    { name: "Registered Users", link: "/admin/registered-users" },
    { name: "Affiliates", link: "/admin/affiliates" },
    { name: "Courses", link: "/admin/courses" },
    { name: "Payouts", link: "/admin/payouts" },
    { name: "Talent List", link: "/admin/talent-list" },
    { name: "Purchase History", link: "/admin/purchase-history" },
  ];

  // Choose menus based on user type
  const menus = isAdmin ? adminMenus : userMenus;

  return (
    <div className="w-60 min-w-60 h-screen px-4 py-14 text-white">
      <Link to="/" className="flex items-center gap-2 w-full pb-4 mb-2">
        <img src={IMAGES.pmGurukulLogo} alt="PM-Gurukul" className="size-10" />
        <h1 className="text-primary-10 text-xl font-medium">PM Gurukul</h1>
      </Link>
      <div>
        <ul className="flex flex-col gap-2">
          {menus.map((menu) => (
            <li
              key={menu.link}
              className={`px-3 py-2 ${
                isActive(menu.link)
                  ? "bg-neutral-60 text-primary-10 rounded-lg"
                  : "text-neutral-85"
              }`}
            >
              <Link to={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
