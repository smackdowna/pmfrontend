import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";

const PurchaseHistoryHeaders = [
  { key: "no", label: "No.", sortable: true },
  { key: "orderID", label: "Order #", sortable: true },
  { key: "customerName", label: "Customer Name", sortable: true },
  { key: "mobile", label: "Mobile Number", sortable: true },
  { key: "noOfItems", label: "No. of Items", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "paymentStatus", label: "Payment Status", sortable: true },
  { key: "action", label: "Action", sortable: false },
];

const purchaseHistoryData = [
  {
    no: 1,
    orderID: "ORD-001",
    customerName: "John Jacobs",
    mobile: "+91-93642-34274",
    noOfItems: 5,
    amount: "₹249",
    paymentStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    orderID: "ORD-001",
    customerName: "John Jacobs",
    mobile: "+91-93642-34274",
    noOfItems: 5,
    amount: "₹249",
    paymentStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    orderID: "ORD-001",
    customerName: "John Jacobs",
    mobile: "+91-93642-34274",
    noOfItems: 5,
    amount: "₹249",
    paymentStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    orderID: "ORD-001",
    customerName: "John Jacobs",
    mobile: "+91-93642-34274",
    noOfItems: 5,
    amount: "₹249",
    paymentStatus: "Paid",
    action: "",
  },
  {
    no: 1,
    orderID: "ORD-001",
    customerName: "John Jacobs",
    mobile: "+91-93642-34274",
    noOfItems: 5,
    amount: "₹249",
    paymentStatus: "Paid",
    action: "",
  },
];

const PurchaseHistory = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Purchase History"
          pageDesc="Write something here."
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-start w-full flex-wrap gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
      <TransactionHistory
        headers={PurchaseHistoryHeaders}
        data={purchaseHistoryData}
        showHeader={true}
      />
    </>
  );
};

export default PurchaseHistory;
