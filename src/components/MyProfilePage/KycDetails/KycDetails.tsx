
import BankInfo from "./BankInfo";
import IdentityInfo from "./IdentityInfo";
import UploadProof from "./UploadProof";

const KycDetails = () => {
  return (
    <div className="flex w-1/2 mx-auto justify-center flex-col gap-4">
      <div className="flex flex-col gap-5">
        <IdentityInfo />
        <UploadProof />
        <BankInfo />
      </div>
    </div>
  );
};

export default KycDetails;
