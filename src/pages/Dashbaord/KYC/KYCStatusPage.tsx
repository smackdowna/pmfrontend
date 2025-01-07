import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";

const KYCStatusPage = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-white w-full rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <p className="text-neutral-90 font-semibold">KYC Status</p>
            <div className="bg-secondary-35 rounded-md p-2">In-Progress</div>
          </div>
          
        </div>
        {/* <IdentityInfo />
        <UploadProof /> */}
      </div>
      {/* <BankInfo /> */}
    </div>
  );
};

export default KYCStatusPage;
