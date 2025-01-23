import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { useGetAllUserQuery } from "../../../../redux/Features/Admin/adminApi";
import { formatDate } from "../../../../utils/formatDate";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import { TUser } from "../../../../types/user.types";

const RegisteredUsers = () => {
  const { data: allUsers, isLoading } = useGetAllUserQuery({});

  // Registered user table headers
  const headers = [
    { key: "userId", label: "User ID", sortable: true },
    { key: "fullName", label: "Full Name", sortable: true },
    { key: "email", label: "Email", sortable: true },
    { key: "mobile", label: "Mobile", sortable: true },
    { key: "joined", label: "Joined", sortable: true },
    { key: "role", label: "Role", sortable: true },
    { key: "action", label: "Action", sortable: false },
  ];

  // Registered user table data
  const registeredUsersData = allUsers?.users?.length
    ? allUsers?.users?.map((user: TUser, index: number) => ({
      no: `${index + 1}`,
      userId: user?._id,
      fullName: user?.full_name,
      email: user?.email,
      mobile: user?.mobileNumber,
      joined: formatDate(user?.createdAt),
      role: user?.role,
      action: "View",
    }))
    : [];

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Registered Users"
          pageDesc="Manage and View User Details"
        />
      </div>
      <div className="flex items-center w-full gap-4">
        <DashboardCard title="Total Users" count={allUsers?.users?.length} />
      </div>

      {
        isLoading ?
          <div className="flex items-center justify-center mt-5">
            <Spinner />
          </div>
          :
          registeredUsersData?.length > 0
            ?
            <Table
              data={registeredUsersData}
              headers={headers}
              showHeader={true}
            />
            :
            <NoDataFound message={"No registered user found."} />
      }
    </>
  );
};

export default RegisteredUsers;
