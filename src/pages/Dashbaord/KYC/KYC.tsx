import { IMAGES } from "../../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const KYC = () => {
  const [isKYCVerified] = useState(false);
    const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-neutral-90">KYC Verification</h1>
        <p className="text-neutral-90">Write something here</p>
      </div>
      <div className="flex flex-col items-center">
      
      {isKYCVerified ? (
        <div className="flex flex-col gap-4 items-center"></div>
      ) : (
        <div className="flex flex-col gap-4 items-center">
          <img src={IMAGES.KycBG} alt="KYC" className="w-[540px]" />

          <p className="text-primary-10 text-2xl font-semibold text-center">
            You haven’t Verified Your KYC Yet
          </p>
          <button className="bg-primary-10 text-white px-9 py-3 font-semibold rounded-xl" onClick={
            () => navigate("/dashboard/kycregister")
          }>
            Verify Your KYC Now
          </button>
        </div>
      )}
    </div>
    </div>
    
  );
};

export default KYC;
