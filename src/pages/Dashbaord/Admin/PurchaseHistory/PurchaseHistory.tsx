import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { useGetAllOrdersQuery } from "../../../../redux/Features/Admin/adminApi";
import { formatDate } from "../../../../utils/formatDate";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";

type TOrders = {
  _id: string;
  user: {
    _id: string;
    mobileNumber: string;
    full_name: string;
  };
  course: string[];
  discountedPrice: number;
  gst: number;
  totalPrice: number;
  commission: number;
  tds: number;
  amountCredited: number;
  createdAt: string;
  __v: number;
};

const PurchaseHistory = () => {
  const { data: allOrdersHistory, isLoading } = useGetAllOrdersQuery({});

  // All orders history user table headers
  const allOrdersHistoryTableHeaders = [
    { key: "no", label: "No.", sortable: true },
    { key: "orderID", label: "Order #", sortable: true },
    { key: "customerName", label: "Customer Name", sortable: true },
    { key: "mobile", label: "Mobile Number", sortable: true },
    { key: "noOfItems", label: "No. of Items", sortable: true },
    { key: "amount", label: "Amount", sortable: true },
    { key: "orderDate", label: "Order Date", sortable: true },
    { key: "action", label: "Action", sortable: false },
  ];

  // All orders history user table data
  const allOrdersHistoryTableData = allOrdersHistory?.orders?.length
    ? allOrdersHistory?.orders?.map((order: TOrders, index: number) => ({
      no: `${index + 1}`,
      orderID: order?._id,
      customerName: order?.user?.full_name,
      mobile: order?.user?.mobileNumber,
      noOfItems: order?.course?.length || 0,
      amount: `₹${order?.totalPrice}`,
      orderDate: formatDate(order?.createdAt),
      action: "View",
    }))
    : [];

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Purchase History"
          pageDesc="Track and Review Past Orders"
        />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-start w-full flex-wrap gap-4">
        <DashboardCard title="Total Orders" count={allOrdersHistory?.orders?.length} />
      </div>
      {
        isLoading ?
          <div className="flex items-center justify-center mt-5">
            <Spinner />
          </div>
          :
          allOrdersHistoryTableData?.length > 0
            ?
            <Table
              headers={allOrdersHistoryTableHeaders}
              data={allOrdersHistoryTableData}
              showHeader={true}
            />
            :
            <NoDataFound message={"No order found."} />
      }
    </>
  );
};

export default PurchaseHistory;
