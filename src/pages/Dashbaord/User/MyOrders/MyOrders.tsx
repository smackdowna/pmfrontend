import { Helmet } from "react-helmet-async";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";
import { useMyOrdersQuery } from "../../../../redux/Features/User/userApi";

type TMyOrders = {
  _id: string;
  user: string;
  course: string[];
  discountedPrice: number;
  gst: number;
  totalPrice: number;
  commission: number;
  tds: number;
  amountCredited: number;
  createdAt: string; // ISO date string
  __v: number;
}

const MyOrders = () => {
  const { data: myOrders, isLoading } = useMyOrdersQuery({});

  const myOrdersTableHeaders = [
    { key: "no", label: "NO.", sortable: true },
    { key: "orderId", label: "Order #", sortable: true },
    { key: "noOfItems", label: "No. of Items", sortable: true },
    { key: "amount", label: "Amount", sortable: true },
    { key: "action", label: "Action" },
  ];

  // Table data
  const myOrdersTableData = myOrders?.orders?.length
    ? myOrders?.orders?.map((order: TMyOrders, index: number) => ({
      no: `${index + 1}`,
      orderId: order?._id,
      noOfItems: order?.course?.length,
      amount: `₹${order?.amountCredited}`,
      action: "View",
    }))
    : [];

  return (
    <div>
      <Helmet>
        <title>PM Gurukul |My Orders</title>
      </Helmet>
      <DashboardHeader pageName="My Orders" pageDesc="View Your Recent Order History" />

      <div className="mt-8">
        {/* Show loading state or table */}
        {isLoading ? (
          <div className="flex items-center justify-center mt-20">
            <Spinner />
          </div>
        ) : myOrdersTableData.length > 0 ? (
          <Table data={myOrdersTableData} headers={myOrdersTableHeaders} showHeader={true} />
        ) : (
          <NoDataFound message={"You haven’t Enrolled on any course"} isBtnAvailable={true} />
        )}
      </div>
    </div>
  );
};

export default MyOrders;
