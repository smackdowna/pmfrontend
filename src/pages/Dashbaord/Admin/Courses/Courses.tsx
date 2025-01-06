import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
const AdminCourses = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="My Courses"
          pageDesc="All your courses in one place."
        />
        <button className="px-[14px] py-4 bg-primary-10 text-white text-base font-medium leading-5 tracking-tighter rounded-[10px]">
          Add a course
        </button>
      </div>
      <div className="flex items-center justify-start w-full flex-wrap gap-4">
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
        <DashboardCard title="Total Courses" count={5} />
      </div>
    </>
  );
};

export default AdminCourses;
