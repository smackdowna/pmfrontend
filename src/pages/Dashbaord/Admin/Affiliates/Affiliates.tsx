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
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";



const Affiliates = () => {
  const navigate = useNavigate();
  const { data: allUsers, isLoading } = useGetAllUserQuery({});
  const { data: pendingKyc, isLoading: isPendingKycLoading } = useGetAllPendingKYCQuery({});
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
    { key: "kycStatus", label: "KYC STATUS", sortable: true },
    { key: "action", label: "ACTION", sortable: false },
  ];

  const allUsersData = allUsers?.users?.filter((user:TUser) => user?.role !== "admin")
  // Pending KYC user table data
  const pendingKycUserData = allUsersData?.length ? 
    allUsersData?.map((user: TUser, index: number) => ({
      no: `${index + 1}`,
      fullName: user?.full_name,
      email: user?.email,
      mobile: user?.mobileNumber,
      joined: formatDate(user?.createdAt),
      kycStatus: user?.kyc_status,
      action: [
        { label: "View Affiliate", onClick: () => navigate(`/admin/view-affiliate/${user._id}`) },
        { label: "Approve", onClick: () => handleApproveKyc(user._id) },
        { label: "Reject", onClick: () => handleRejectKyc(user._id) },
      ],
    }))
    : [];

  const pendingKYC = allUsers?.users?.filter((user: TUser) => user?.kyc_status === "Pending").map((user: TUser, index: number) => ({
    no: `${index + 1}`,
    fullName: user?.full_name,
    email: user?.email,
    mobile: user?.mobileNumber,
    joined: formatDate(user?.createdAt),
    kycStatus: user?.kyc_status,
    action: [
      { label: "View Affiliate", onClick: () => navigate(`/admin/view-affiliate/${user._id}`) },
      { label: "Approve", onClick: () => handleApproveKyc(user._id) },
      { label: "Reject", onClick: () => handleRejectKyc(user._id) },
    ],
  }));

  const approvedKyc =allUsersData?.filter((user: TUser) => user?.kyc_status === "Approved").map((user: TUser, index: number) => ({
    no: `${index + 1}`,
    fullName: user?.full_name,
    email: user?.email,
    mobile: user?.mobileNumber,
    joined: formatDate(user?.createdAt),
    kycStatus: user?.kyc_status,
    action: [
      { label: "View Affiliate", onClick: () => navigate(`/admin/view-affiliate/${user._id}`) },
      { label: "Reject", onClick: () => handleRejectKyc(user._id) },
    ],
  }));

  const rejectedKyc = allUsers?.users?.filter((user: TUser) => user?.kyc_status === "Rejected").map((user: TUser, index: number) => ({
    no: `${index + 1}`,
    fullName: user?.full_name,
    email: user?.email,
    mobile: user?.mobileNumber,
    joined: formatDate(user?.createdAt),
    kycStatus: user?.kyc_status,
    action: [
      { label: "View Affiliate", onClick: () => navigate(`/admin/view-affiliate/${user._id}`) },
      { label: "Approve", onClick: () => handleApproveKyc(user._id) },
    ],
  }));


  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  useEffect(() => {
    console.log("object");
  }, [selectedFilter]);
  return (
    <>
    <Helmet>
        <title>PM Gurukul | All Affiliates</title>
      </Helmet>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Affiliates"
          pageDesc="Grow with Affiliate Partnerships"
        />
      </div>
      <div className="flex items-center w-full gap-4">
        <DashboardCard onClick={() => setSelectedFilter("All")} title="Total KYC" count={allUsersData?.length} />
        <DashboardCard onClick={() => setSelectedFilter("Pending")} title="Total Pending KYC" count={pendingKyc?.users?.length || 0} />
        <DashboardCard onClick={() => setSelectedFilter("Approved")} title="Total Approved KYC" count={approvedKyc?.length} />
        <DashboardCard onClick={() => setSelectedFilter("Rejected")} title="Total Rejected KYC" count={rejectedKyc?.length} />
      </div>
      {isLoading || isPendingKycLoading ? (
        <div className="flex items-center justify-center mt-5">
          <Spinner />
        </div>
      ) : (
        <>
          {selectedFilter === "All" ? (
            <Table headers={pendingKycTableHeader} data={pendingKycUserData} showHeader={true} />
          ) : selectedFilter === "Pending" ? (
            <Table headers={pendingKycTableHeader} data={pendingKYC} showHeader={true} />
          ) : selectedFilter === "Approved" ? (
            <Table headers={pendingKycTableHeader} data={approvedKyc} showHeader={true} />
          ) : selectedFilter === "Rejected" ? (
            <Table headers={pendingKycTableHeader} data={rejectedKyc} showHeader={true} />
          ) : (
            <NoDataFound message={"No user found."} />
          )}
        </>
      )}
    </>
  );
};

export default Affiliates;
