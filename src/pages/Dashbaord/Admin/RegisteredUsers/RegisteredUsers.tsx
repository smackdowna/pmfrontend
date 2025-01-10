import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const registeredUsersData = [
  {
    id: 1,
    userId: "PM123456",
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "24th Dec, 2024",
    action: "",
  },
  {
    id: 1,
    userId: "PM123456",
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "24th Dec, 2024",
    action: "",
  },
  {
    id: 1,
    userId: "PM123456",
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "24th Dec, 2024",
    action: "",
  },
  {
    id: 1,
    userId: "PM123456",
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "24th Dec, 2024",
    action: "",
  },
];

const headers = [
  { key: "userId", label: "User ID", sortable: true },
  { key: "fullName", label: "Full Name", sortable: true },
  { key: "email", label: "Email", sortable: true },
  { key: "mobile", label: "Mobile", sortable: true },
  { key: "joined", label: "Joined", sortable: true },
  { key: "action", label: "Action", sortable: false },
];

const RegisteredUsers = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Registered Users"
          pageDesc="Write something here."
        />
      </div>
      <div className="grid grid-cols-7 items-center w-full  gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
      <TransactionHistory
        data={registeredUsersData}
        headers={headers}
        showHeader={true}
      />
    </>
  );
};

export default RegisteredUsers;
