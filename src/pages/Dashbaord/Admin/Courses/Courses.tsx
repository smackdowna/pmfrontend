import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import { Link } from "react-router-dom";

const coursesHeaders = [
  { key: "courseName", label: "COURSE NAME", sortable: true },
  { key: "category", label: "CATEGORY", sortable: true },
  { key: "creator", label: "CREATOR", sortable: true },
  { key: "price", label: "PRICE", sortable: true },
  { key: "status", label: "STATUS", sortable: true },
  { key: "publishedOn", label: "PUBLISHED ON", sortable: true },
  { key: "action", label: "ACTION", sortable: false },
];

const coursesData = [
  {
    courseName: "Course Name",
    category: "Category",
    creator: "Creator",
    price: "₹249",
    status: "Active",
    publishedOn: "01/01/2021",
    action: "",
  },
  {
    courseName: "Course Name",
    category: "Category",
    creator: "Creator",
    price: "₹249",
    status: "Active",
    publishedOn: "01/01/2021",
    action: "",
  },
  {
    courseName: "Course Name",
    category: "Category",
    creator: "Creator",
    price: "₹249",
    status: "Active",
    publishedOn: "01/01/2021",
    action: "",
  },
  {
    courseName: "Course Name",
    category: "Category",
    creator: "Creator",
    price: "₹249",
    status: "Active",
    publishedOn: "01/01/2021",
    action: "",
  },
  {
    courseName: "Course Name",
    category: "Category",
    creator: "Creator",
    price: "₹249",
    status: "Active",
    publishedOn: "01/01/2021",
    action: "",
  },
];

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
      <TransactionHistory
        headers={coursesHeaders}
        data={coursesData}
        showHeader={true}
      />
    </>
  );
};

export default AdminCourses;
