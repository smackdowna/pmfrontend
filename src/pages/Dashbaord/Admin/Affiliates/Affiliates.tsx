import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const affiliatesHeaders = [
  { key: "srNo", label: "SR.NO.", sortable: false },
  { key: "fullName", label: "NAME", sortable: true },
  { key: "email", label: "EMAIL", sortable: true },
  { key: "mobile", label: "MOBILE", sortable: true },
  { key: "joined", label: "JOINED", sortable: true },
  { key: "payouts", label: "PAYOUTS", sortable: true },
  { key: "kycStatus", label: "KYC STATUS", sortable: true },
  { key: "action", label: "ACTION", sortable: false },
];

const affiliatesData = [
  {
    srNo: 1,
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "01/01/2021",
    payouts: "₹249",
    kycStatus: "Pending",
    action: "",
  },
  {
    srNo: 1,
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "01/01/2021",
    payouts: "₹249",
    kycStatus: "Pending",
    action: "",
  },
  {
    srNo: 1,
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "01/01/2021",
    payouts: "₹249",
    kycStatus: "Pending",
    action: "",
  },
  {
    srNo: 1,
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "01/01/2021",
    payouts: "₹249",
    kycStatus: "Pending",
    action: "",
  },
  {
    srNo: 1,
    fullName: "John Jacobs",
    email: "johnjacobs@gmail.com",
    mobile: "+91-93642-34274",
    joined: "01/01/2021",
    payouts: "₹249",
    kycStatus: "Pending",
    action: "",
  },
];

const Affiliates = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Affiliates"
          pageDesc="Write something here."
        />
      </div>
      <div className="grid grid-cols-5 items-center w-full gap-4">
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
      </div>
      <TransactionHistory
        headers={affiliatesHeaders}
        data={affiliatesData}
        showHeader={true}
      />
    </>
  );
};

export default Affiliates;
