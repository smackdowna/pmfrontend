
import { ICONS } from "../../../assets";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";

const MyProfile = () => {
  
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-start gap-3">
        <img src={ICONS.ArrowLeft} alt="Profile" className="w-9 h-9" />
        <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
      </div>

      <PersonalInfo />
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">KYC Details</p>
        <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col gap-4">
        <div className="bg-white w-full rounded-2xl p-6">
          <div className="flex justify-between items-center">
            <p className="text-neutral-90 font-semibold">KYC Status</p>
            <div className="bg-secondary-35 rounded-md p-2">In-Progress</div>
          </div>
          
        </div>
        <IdentityInfo />
        <UploadProof />
      </div>
      <BankInfo />
    </div>
      </div>
      
    </div>
  );
};

export default MyProfile;
