/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICONS } from "../../../assets";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";

const KYCFormPage = () => {
  const navigate = useNavigate();
  const methods = useForm(); 

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
    navigate("../kycstatus");
  };

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={ICONS.ArrowLeft}
              alt="Back"
              onClick={() => navigate("/dashboard/kyc")}
              className="cursor-pointer"
            />
            <h1 className="text-neutral-90 text-2xl font-semibold">
              KYC Verification
            </h1>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="bg-transparent text-primary-10 border-neutral-10 border px-4 py-2 rounded-lg"
              onClick={() => navigate("../kyc")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary-10 text-white px-4 py-2 rounded-lg"
            >
              Send For Approval
            </button>
          </div>
        </div>
        <div className="flex w-1/2 mx-auto justify-center flex-col gap-4">
          <div className="flex flex-col gap-5">
            <IdentityInfo />
            <UploadProof />
            <BankInfo />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default KYCFormPage;
