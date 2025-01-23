import { useEffect, useState } from "react";
import { ICONS } from "../../../../assets";
import ReasonForRejection from "../../../../components/ReasonForRejection/ReasonForRejection";
import PersonalInfo from "../../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import { useForm } from "react-hook-form";
import IdentityInfo from "../../../../components/MyProfilePage/KycDetails/IdentityInfo";
import BankInfo from "../../../../components/MyProfilePage/KycDetails/BankInfo";
import { TBankInfo, TProfileData } from "../../../../types/profileData.types";
import KYCStatus from "../../../../components/MyProfilePage/KycDetails/KYCStatus/KYCStatus";
import UploadedProofs from "../../../../components/MyProfilePage/UploadedProofs/UploadedProofs";
import { useNavigate, useParams } from "react-router-dom";
import { useApproveKycMutation, useGetSingleUserByIdQuery } from "../../../../redux/Features/Admin/adminApi";
import { toast } from "sonner";
import LoadingSpinner from "../../../../components/Loaders/LoadingSpinner/LoadingSpinner";

const ViewAffiliate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // Getting user profile data
  const { data: user } = useGetSingleUserByIdQuery(id);
  const [approveKyc, { isLoading }] = useApproveKycMutation();

  const {
    register,
    formState: { errors },
    setValue,
  } = useForm<TProfileData>();

  useEffect(() => {
    if (user) {
      setValue("full_name", user?.user?.full_name);
      setValue("email", user?.user?.email);
      setValue("mobileNumber", user?.user?.mobileNumber);
      setValue("gender", user?.user?.gender);
      const formattedDob = user?.user?.dob
        ? new Date(user.user.dob).toISOString().split('T')[0]
        : '';
      setValue("dob", formattedDob);
      setValue("city", user?.user?.city);
      setValue("state", user?.user?.state);
      setValue("country", user?.user?.country);
      setValue("pinCode", user?.user?.pinCode);
      setValue("occupation", user?.user?.occupation);
      setValue("language", user?.user?.language);
      setValue("refralCode", user?.user?.refralCode);
      setValue("adNumber", user?.user?.addharCard?.adNumber);
      setValue("panNumber", user?.user?.panCard?.panNumber);
      if (user?.user?.bankInfo) {
        user.user.bankInfo.forEach((bank: TBankInfo, index: number) => {
          setValue(`bankInfo.${index}.accholderName` as keyof TProfileData, bank.accholderName);
          setValue(`bankInfo.${index}.accNumber` as keyof TProfileData, bank.accNumber);
          setValue(`bankInfo.${index}.accType` as keyof TProfileData, bank.accType);
          setValue(`bankInfo.${index}.ifscCode` as keyof TProfileData, bank.ifscCode);
          setValue(`bankInfo.${index}.bankName` as keyof TProfileData, bank.bankName);
          setValue(`bankInfo.${index}.bankBranch` as keyof TProfileData, bank.bankBranch);
          setValue(`bankInfo.${index}.nominName` as keyof TProfileData, bank.nominName);
          setValue(`bankInfo.${index}.nomiRelation` as keyof TProfileData, bank.nomiRelation);
        });
      }
    }
  }, [user, setValue]);



  const handleApproveKyc = async () => {
    try {
      const response = await approveKyc(id).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success("KYC approved successfully!");
        navigate("/admin/affiliates")
      }
    } catch (err) {
      console.error("Error approving KYC:", err);
    }
  };

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
          <button disabled={isLoading} onClick={handleApproveKyc} className="px-4 py-2 bg-success border-[#051539] rounded-lg text-white">
            {
              isLoading ?
                <LoadingSpinner />
                :
                "Approve KYC"
            }
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <PersonalInfo register={register} errors={errors} />
        <div className="flex flex-col gap-4">
          <p className="text-neutral-90 font-semibold">KYC Details</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <KYCStatus kycStatus={user?.user?.kyc_status} />
              <IdentityInfo register={register} errors={errors} />
              {/* <UploadProof register={register} errors={errors} /> */}
              <UploadedProofs
                addharCardImage={user?.user?.addharCard?.adImage?.url}
                panCardImage={user?.user?.panCard?.panImage?.url}
                passBookImage={user?.user?.passbookImage?.url}
              />
            </div>
            {user?.user?.bankInfo?.map((bank: TBankInfo, index: number) => (
              <BankInfo
                key={index}
                index={index}
                register={register}
                errors={errors}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ReasonForRejection Modal */}
      <ReasonForRejection open={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ViewAffiliate;
