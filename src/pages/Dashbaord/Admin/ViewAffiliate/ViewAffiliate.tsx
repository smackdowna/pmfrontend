import { useEffect } from "react";
import { ICONS } from "../../../../assets";
import PersonalInfo from "../../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import { useForm } from "react-hook-form";
import IdentityInfo from "../../../../components/MyProfilePage/KycDetails/IdentityInfo";
import BankInfo from "../../../../components/MyProfilePage/KycDetails/BankInfo";
import { TBankInfo, TProfileData } from "../../../../types/profileData.types";
import KYCStatus from "../../../../components/MyProfilePage/KycDetails/KYCStatus/KYCStatus";
import UploadedProofs from "../../../../components/MyProfilePage/UploadedProofs/UploadedProofs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApproveKycMutation, useGetSingleUserByIdQuery, useRejectKycMutation } from "../../../../redux/Features/Admin/adminApi";
import { toast } from "sonner";
import LoadingSpinner from "../../../../components/Loaders/LoadingSpinner/LoadingSpinner";
import Ripple from "../../../../components/Reusable/Ripple/Ripple";

const ViewAffiliate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  // Getting user profile data
  const { data: user } = useGetSingleUserByIdQuery(id);
  const [approveKyc, { isLoading: isApproving }] = useApproveKycMutation();
  const [rejectKyc, { isLoading: isRejecting }] = useRejectKycMutation();

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
        navigate("/admin/affiliates");
      }
    } catch (err) {
      console.error("Error approving KYC:", err);
    }
  };


  const handleRejectKyc = async () => {
    try {
      const response = await rejectKyc(id).unwrap();
      console.log(response);
      if (response?.success) {
        toast.success("KYC rejected");
        navigate("/admin/affiliates");
      }
    } catch (err) {
      console.error("Error rejecting KYC:", err);
    }
  };

  // State to manage the modal visibility
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  // Function to close the modal
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  console.log(user?.user?.bankInfo);

  return (
    <div className="flex flex-col p-6 bg-[#F8FAFC] gap-8 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-[10px] items-center">
          <Link to={"/admin/affiliates"}>
            <img src={ICONS.arrowLeft} className="w-9 h-9" alt="" />
          </Link>
          <span className="text-[#0F172A] font-Inter font-semibold leading-7 tracking-tighter text-2xl">
            View Affiliate
          </span>
        </div>
        <div className="flex items-center gap-[10px]">


          {/* Reject button that opens the modal */}
          <button
            onClick={handleRejectKyc}
            className="px-4 py-2 bg-error border-[1px] border-[#DFE2E6] rounded-lg text-white"
          >
            {
              isRejecting ?
                <LoadingSpinner />
                :
                "Reject"
            }
          </button>

          <button disabled={isApproving} onClick={handleApproveKyc} className="px-4 py-2 bg-success border-[#051539] rounded-lg text-white">
            {
              isApproving ?
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
            {user?.user?.bankInfo?.length > 0
              ? user?.user?.bankInfo?.map((_: TBankInfo, index: number) => (
                <BankInfo
                  key={index}
                  index={index}
                  register={register}
                  errors={errors}
                />
              ))
              : [0].map((_, index) => (
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

      <div className="flex items-center justify-end gap-4">
        <Ripple styles="rounded-xl">
          <Link to={"/admin/affiliates"} className="bg-neutral-60 border border-neutral-55 py-[10px] px-4 text-primary-10 text-sm leading-5 font-semibold w-full rounded-lg text-center flex items-center gap-2 justify-center">
            Go Back
          </Link>
        </Ripple>
        <Ripple styles="rounded-xl">
          <button className="bg-primary-10 border border-neutral-55 py-[10px] px-4 text-white text-sm leading-5 font-semibold w-full rounded-lg text-center">
            Save Details
          </button>
        </Ripple>
      </div>

      {/* ReasonForRejection Modal */}
      {/* <ReasonForRejection open={isModalOpen} onClose={closeModal} /> */}
    </div>
  );
};

export default ViewAffiliate;
