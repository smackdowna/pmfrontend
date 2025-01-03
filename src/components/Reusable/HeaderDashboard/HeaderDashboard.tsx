import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
const HeaderDashboard = () => {
  return (
    <div className="bg-white h-12 text-3xl flex justify-end items-center">
      <ul className="flex gap-5">
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
