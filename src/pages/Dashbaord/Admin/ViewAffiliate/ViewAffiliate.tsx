import { useState } from "react";
import { ICONS } from "../../../../assets";
import DashboardCard from "../../../../components/Reusable/DashboardCard/DashboardCard";
import ReasonForRejection from "../../../../components/ReasonForRejection/ReasonForRejection";
import PersonalInfo from "../../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import KycDetails from "../../../../components/MyProfilePage/KycDetails/KycDetails";
import TransactionHistory from "../../../../components/ReferralPayoutsPage/TransactionHistory";
import { FormProvider, useForm } from "react-hook-form";
import IdentityInfo from "../../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../../components/MyProfilePage/KycDetails/UploadProof";
import BankInfo from "../../../../components/MyProfilePage/KycDetails/BankInfo";

const payoutHeaders = [
  { key: "no", label: "No.", sortable: true },
  { key: "affiliateName", label: "Affiliate Name", sortable: true },
  { key: "mobile", label: "MOBILE", sortable: true },
  { key: "payoutDate", label: "Payout Date", sortable: true },
  { key: "amount", label: "Amount", sortable: true },
  { key: "adminCharge", label: "Admin Charge", sortable: true },
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

const ViewAffiliate = () => {
  const methods = useForm();

  // State to manage the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    console.log("Opening Modal"); // Debugging line
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    console.log("Closing Modal"); // Debugging line
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col p-6 bg-[#F8FAFC] gap-8 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-[10px] items-center">
          <button>
            <img src={ICONS.arrowLeft} className="w-9 h-9" alt="" />
          </button>
          <span className="text-[#0F172A] font-Inter font-semibold leading-7 tracking-tighter text-2xl">
            View Affiliate
          </span>
        </div>
        <div className="flex items-center gap-[10px]">
          {/* Reject button that opens the modal */}
          <button
            onClick={openModal}
            className="px-4 py-2 bg-error border-[1px] border-[#DFE2E6] rounded-lg text-white"
          >
            Reject
          </button>
          <button className="px-4 py-2 bg-success border-[#051539] rounded-lg text-white">
            Approve KYC
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-start w-full flex-wrap gap-4">
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={"00.00%"} />
        <DashboardCard title="Content" count={200} />
        <DashboardCard title="Content" count={"00.00%"} />
      </div>
      <PersonalInfo />
      <FormProvider {...methods}>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2 gap-4 flex flex-col">
            <div className="bg-white w-full rounded-2xl p-6">
              <div className="flex justify-between items-center">
                <p className="text-neutral-90 font-semibold">KYC Status</p>
                <div className="bg-secondary-35 rounded-md p-2">
                  In-Progress
                </div>
              </div>
            </div>
            <IdentityInfo />
            <UploadProof />
          </div>
          <div className="col-span-2">
            <BankInfo />
          </div>
        </div>
      </FormProvider>
      <TransactionHistory
        headers={payoutHeaders}
        data={payoutData}
        showHeader={true}
      />

      {/* ReasonForRejection Modal */}
      <ReasonForRejection open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ViewAffiliate;
