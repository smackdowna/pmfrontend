import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";

const MyOrders = () => {
    const myOrdersTableHeaders = [
        { key: "no", label: "NO.", sortable: true },
        { key: "orderId", label: "Order #", sortable: true },
        { key: "noOfItems", label: "No. of Items", sortable: true },
        { key: "amount", label: "Amount", sortable: true },
        { key: "paymentStatus", label: "Payment Status", sortable: true },
        { key: "action", label: "Action" },
      ];
      
      const myOrdersTableData = [
        {
          no: "1",
          orderId: "98324283",
          noOfItems: "2",
          amount: "₹15,000.00",
          paymentStatus: "Paid",
        },
        {
          no: "1",
          orderId: "98324283",
          noOfItems: "2",
          amount: "₹15,000.00",
          paymentStatus: "Paid",
        },
        {
          no: "1",
          orderId: "98324283",
          noOfItems: "2",
          amount: "₹15,000.00",
          paymentStatus: "Paid",
        },
        {
          no: "1",
          orderId: "98324283",
          noOfItems: "2",
          amount: "₹15,000.00",
          paymentStatus: "Paid",
        },
      ];
    return (
        <div>
            <DashboardHeader
                pageName="Your Orders"
                pageDesc="Write Something Here"
            />

           <div className="mt-8">
           <Table data={myOrdersTableData} headers={myOrdersTableHeaders} showHeader={true} />
           </div>
        </div>
    );
};

export default MyOrders;