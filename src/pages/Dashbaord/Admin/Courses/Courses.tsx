import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import { Link } from "react-router-dom";
import { useGetAllCoursesQuery } from "../../../../redux/Features/Course/courseApi";
import { formatDate } from "../../../../utils/formatDate";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";

const AdminCourses = () => {
  const { data: allCourses, isLoading } = useGetAllCoursesQuery({ searchQuery: "", categoryQuery: "" });

  // Pending KYC user table headers
  const allCoursesTableHeaders = [
    { key: "no", label: "SL.NO", sortable: true },
    { key: "courseName", label: "COURSE NAME", sortable: true },
    { key: "category", label: "CATEGORY", sortable: true },
    { key: "creator", label: "CREATOR", sortable: true },
    { key: "basePrice", label: "BASE PRICE", sortable: true },
    { key: "discountedPrice", label: "DISCOUNTED PRICE", sortable: true },
    // { key: "status", label: "STATUS", sortable: true },
    { key: "publishedOn", label: "PUBLISHED ON", sortable: true },
    { key: "action", label: "ACTION", sortable: false },
  ];

  // Pending KYC user table data
  const allCoursesTableData = allCourses?.courses?.length
    ? allCourses?.courses?.map((course, index: number) => ({
      no: `${index + 1}`,
      courseName: course?.title,
      category: course?.category,
      creator: course?.author,
      basePrice: `₹${course?.basePrice}`,
      discountedPrice: `₹${course?.discountedPrice}`,
      publishedOn: formatDate(course?.createdAt),
      action: "View",
    }))
    : [];

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
        <DashboardCard title="Total Courses" count={allCourses?.courses?.length} />
      </div>

      {
        isLoading ?
          <div className="flex items-center justify-center mt-5">
            <Spinner />
          </div>
          :
          allCoursesTableData?.length > 0
            ?
            <Table
              headers={allCoursesTableHeaders}
              data={allCoursesTableData}
              showHeader={true}
            />
            :
            <NoDataFound message={"No Course found."} />
      }
    </>
  );
};

export default AdminCourses;
