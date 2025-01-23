import DashboardHeader from "../../../../components/Reusable/DashboardHeader/DashboardHeader";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import { Table } from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { useGetAllPendingKYCQuery } from "../../../../redux/Features/Admin/adminApi";
import { TUser } from "../../../../types/user.types";
import { formatDate } from "../../../../utils/formatDate";
import Spinner from "../../../../components/Loaders/Spinner/Spinner";
import NoDataFound from "../../../../components/Shared/NoDataFound/NoDataFound";



const Affiliates = () => {
  const { data: pendingKyc, isLoading } = useGetAllPendingKYCQuery({});

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
  const pendingKycUserData = pendingKyc?.users?.length
    ? pendingKyc?.users?.map((user: TUser, index: number) => ({
      no: `${index + 1}`,
      fullName: user?.full_name,
      email: user?.email,
      mobile: user?.mobileNumber,
      joined: formatDate(user?.createdAt),
      payouts: user?.earnings?.total,
      kycStatus: user?.kyc_status,
      action: "View",
    }))
    : [];

  return (
    <>
      <div className="flex items-center justify-between w-full">
        <DashboardHeader
          pageName="Affiliates"
          pageDesc="Write something here."
        />
      </div>
      <div className="grid grid-cols-4 items-center w-full gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
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
