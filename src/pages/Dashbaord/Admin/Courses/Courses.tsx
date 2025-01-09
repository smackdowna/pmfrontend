import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import { Link } from "react-router-dom";
const AdminCourses = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="My Courses"
          pageDesc="All your courses in one place."
        />
        <Link to="/admin/add-course">
          <button className="px-[14px] py-4 bg-primary-10 text-white text-base font-medium leading-5 tracking-tighter rounded-[10px]">
            Add a course
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-4 items-center w-full  gap-4">
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
      </div>
      <TransactionHistory />
    </>
  );
};

export default AdminCourses;
