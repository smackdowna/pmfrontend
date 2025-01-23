import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const payoutHeaders = [
  { key: "no", label: "No.", sortable: true },
  { key: "affiliateName", label: "Affiliate Name", sortable: true },
  { key: "mobile", label: "MOBILE", sortable: true },
  { key: "payoutDate", label: "Payout Date", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "total", label: "Total", sortable: true },
  { key: "tds", label: "TDS", sortable: true },
  { key: "payableAmount", label: "Payable Amount", sortable: true },
  { key: "payoutStatus", label: "Payout Status", sortable: true },
  { key: "action", label: "Action", sortable: true },
];

const payoutData = [
  {
    no: 1,
    affiliateName: "John Jacobs",
    mobile: "+91-93642-34274",
    payoutDate: "01/01/2021",
    amount: "₹249",
    adminCharge: "₹249",
    total: "₹249",
    tds: "₹249",
    payableAmount: "₹249",
    payoutStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    affiliateName: "John Jacobs",
    mobile: "+91-93642-34274",
    payoutDate: "01/01/2021",
    amount: "₹249",
    adminCharge: "₹249",
    total: "₹249",
    tds: "₹249",
    payableAmount: "₹249",
    payoutStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    affiliateName: "John Jacobs",
    mobile: "+91-93642-34274",
    payoutDate: "01/01/2021",
    amount: "₹249",
    adminCharge: "₹249",
    total: "₹249",
    tds: "₹249",
    payableAmount: "₹249",
    payoutStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    affiliateName: "John Jacobs",
    mobile: "+91-93642-34274",
    payoutDate: "01/01/2021",
    amount: "₹249",
    adminCharge: "₹249",
    total: "₹249",
    tds: "₹249",
    payableAmount: "₹249",
    payoutStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    affiliateName: "John Jacobs",
    mobile: "+91-93642-34274",
    payoutDate: "01/01/2021",
    amount: "₹249",
    adminCharge: "₹249",
    total: "₹249",
    tds: "₹249",
    payableAmount: "₹249",
    payoutStatus: "Paid",
    action: "",
  },
];

const Payouts = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader pageName="Payouts" pageDesc="Write something here." />
      </div>
      <div className="grid grid-cols-5 items-center w-full  gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
      <TransactionHistory
        headers={payoutHeaders}
        data={payoutData}
        showHeader={true}
      />
    </>
  );
};

export default Payouts;
