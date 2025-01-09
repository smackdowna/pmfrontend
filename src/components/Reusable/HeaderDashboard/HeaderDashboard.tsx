import { Link, useLocation } from "react-router-dom";
import { ICONS } from "../../../assets";
import { useState, useEffect } from "react";
const HeaderDashboard = () => {
  const location = useLocation();
  const [isAdmin, setIsAdmin] = useState(false);

  // Set isAdmin based on the current route
  useEffect(() => {
    setIsAdmin(location.pathname.startsWith("/admin"));
  }, [location.pathname]);

  return (
    <div className="bg-white h-12 text-3xl flex justify-end items-center pr-4">
      <ul className="flex gap-5">
        {!isAdmin && (
          <>
            <li>
              <Link to="/dashboard">
                <img src={ICONS.Cart} />
              </Link>
            </li>
          </>
        )}
        <li>
          <Link to="/dashboard">
            <img src={ICONS.Bell} />
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <img src={ICONS.UserCircle} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderDashboard;
