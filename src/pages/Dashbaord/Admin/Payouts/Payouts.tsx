import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { useApprovePayoutMutation, useGetAllEarningsQuery } from "../../../../redux/Features/Admin/adminApi";
import { formatDate } from "../../../../utils/formatDate";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";
import { toast } from "sonner";

type TEarnings = {
  _id: string;
  user: {
    _id: string;
    mobileNumber: string;
    full_name: string;
  };
  order: string;
  discountedPrice: number;
  gst: number;
  totalPrice: number;
  commission: number;
  tds: number;
  amountCredited: number;
  payout_status: "Pending" | "Approved" | "Failed";
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const Payouts = () => {
  const { data: allEarnings, isLoading } = useGetAllEarningsQuery({});
  const [approvePayout] = useApprovePayoutMutation();

  const handleApprovePayout = async (id: string) => {
    try {
      await toast.promise(
        approvePayout(id).unwrap(),
        {
          loading: "Loading...",
          success: "Payout approved successfully!",
          error: "Failed to approve payout. Please try again.",
        }
      );
    } catch (err) {
      console.error("Error approving payout:", err);
    }
  };

  // All earnings table headers
  const allEarningsTableHeaders = [
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

  // All earnings user table data
  const allEarningsTableData = allEarnings?.earnings?.length ?
    allEarnings?.earnings?.map((data: TEarnings, index: number) => ({
      no: `${index + 1}`,
      affiliateName: data?.user?.full_name,
      mobile: data?.user?.mobileNumber,
      payoutDate: formatDate(data?.createdAt),
      amount: `₹${data?.commission}`,
      total: `₹${data?.totalPrice}`,
      tds: `₹${data?.tds}`,
      payableAmount: `₹${data?.amountCredited}`,
      payoutStatus: data?.payout_status,
      action: [
        { label: "Approve Payout", onClick: () => handleApprovePayout(data?._id) },
      ],
    }))
    : [];

    const approvedPayouts = allEarnings?.earnings?.filter((earning: TEarnings) => earning?.payout_status === "Approved");

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader pageName="Payouts" pageDesc="Manage and Track Payments" />
      </div>
      <div className="flex items-center w-full  gap-4">
        <DashboardCard title="Total Payouts" count={allEarnings?.earnings?.length || 0} />
        <DashboardCard title="Approve Payouts" count={approvedPayouts?.length || 0} />
      </div>
      {
        isLoading ?
          <div className="flex items-center justify-center mt-5">
            <Spinner />
          </div>
          :
          allEarningsTableData?.length > 0
            ?
            <Table
              headers={allEarningsTableHeaders}
              data={allEarningsTableData}
              showHeader={true}
            />
            :
            <NoDataFound message={"No data found."} />
      }
    </>
  );
};

export default Payouts;
