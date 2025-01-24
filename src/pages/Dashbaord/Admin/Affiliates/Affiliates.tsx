import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { useApproveKycMutation, useGetAllPendingKYCQuery, useGetAllUserQuery, useRejectKycMutation } from "../../../../redux/Features/Admin/adminApi";
import { TUser } from "../../../../types/user.types";
import { formatDate } from "../../../../utils/formatDate";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";



const Affiliates = () => {
  const navigate = useNavigate();
  const { data: allUsers, isLoading } = useGetAllUserQuery({});
  const { data: pendingKyc } = useGetAllPendingKYCQuery({});
  const [approveKyc] = useApproveKycMutation();
  const [rejectKyc] = useRejectKycMutation();

  const handleApproveKyc = async (id: string) => {
    try {
      await toast.promise(
        approveKyc(id).unwrap(),
        {
          loading: "Loading...",
          success: "KYC approved successfully!",
          error: "Failed to approve KYC. Please try again.",
        }
      );
    } catch (err) {
      console.error("Error approving KYC:", err);
    }
  };

  const handleRejectKyc = async (id: string) => {
    try {
      await toast.promise(
        rejectKyc(id).unwrap(),
        {
          loading: "Loading...",
          success: "KYC rejected!",
          error: "Failed to reject KYC. Please try again.",
        }
      );
    } catch (err) {
      console.error("Error rejecting KYC:", err);
    }
  };

  // Pending KYC user table headers
  const pendingKycTableHeader = [
    { key: "no", label: "SR.NO.", sortable: false },
    { key: "fullName", label: "NAME", sortable: true },
    { key: "email", label: "EMAIL", sortable: true },
    { key: "mobile", label: "MOBILE", sortable: true },
    { key: "joined", label: "JOINED", sortable: true },
    { key: "payouts", label: "PAYOUTS", sortable: true },
    { key: "kycStatus", label: "KYC STATUS", sortable: true },
    { key: "action", label: "ACTION", sortable: false },
  ];

  // Pending KYC user table data
  const pendingKycUserData = allUsers?.users?.length
    ? allUsers?.users?.map((user: TUser, index: number) => ({
      no: `${index + 1}`,
      fullName: user?.full_name,
      email: user?.email,
      mobile: user?.mobileNumber,
      joined: formatDate(user?.createdAt),
      payouts: `₹${user?.earnings?.total}`,
      kycStatus: user?.kyc_status,
      action: [
        { label: "View Affiliate", onClick: () => navigate(`/admin/view-affiliate/${user._id}`) },
        { label: "Approve", onClick: () => handleApproveKyc(user._id) },
        { label: "Reject", onClick: () => handleRejectKyc( user._id) },
      ],
    }))
    : [];

    const approvedKyc = allUsers?.users?.filter((user:TUser) => user?.kyc_status === "Approved");
    const rejectedKyc = allUsers?.users?.filter((user:TUser) => user?.kyc_status === "Rejected");

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Affiliates"
          pageDesc="Grow with Affiliate Partnerships"
        />
      </div>
      <div className="flex items-center w-full gap-4">
        <DashboardCard title="Total KYC" count={allUsers?.users?.length} />
        <DashboardCard title="Total Pending KYC" count={pendingKyc?.users?.length} />
        <DashboardCard title="Total Approved KYC" count={approvedKyc?.length} />
        <DashboardCard title="Total Rejected KYC" count={rejectedKyc?.length} />
      </div>

      {
        isLoading ?
          <div className="flex items-center justify-center mt-5">
            <Spinner />
          </div>
          :
          pendingKycUserData?.length > 0
            ?
            <Table
              headers={pendingKycTableHeader}
              data={pendingKycUserData}
              showHeader={true}
            />
            :
            <NoDataFound message={"No user found."} />
      }
    </>
  );
};

export default Affiliates;
