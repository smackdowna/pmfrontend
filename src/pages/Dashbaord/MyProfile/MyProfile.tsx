/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICONS } from "../../../assets";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
// import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useGetMeQuery } from "../../../redux/Features/User/userApi";
import { Helmet } from "react-helmet-async";
import UploadedProofs from "../../../components/MyProfilePage/UploadedProofs/UploadedProofs";
import KYCStatus from "../../../components/MyProfilePage/KycDetails/KYCStatus/KYCStatus";
import { TBankInfo, TProfileData } from "../../../types/profileData.types";

const MyProfile = () => {
  // Getting loggedin user profile data
  const { data: myProfile } = useGetMeQuery({});
  console.log(myProfile);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TProfileData>();

  useEffect(() => {
    if (myProfile) {
      setValue("full_name", myProfile?.user?.full_name);
      setValue("email", myProfile?.user?.email);
      setValue("mobileNumber", myProfile?.user?.mobileNumber);
      setValue("gender", myProfile?.user?.gender);
      const formattedDob = myProfile?.user?.dob
        ? new Date(myProfile.user.dob).toISOString().split('T')[0]
        : '';
      setValue("dob", formattedDob);
      setValue("city", myProfile?.user?.city);
      setValue("state", myProfile?.user?.state);
      setValue("country", myProfile?.user?.country);
      setValue("pinCode", myProfile?.user?.pinCode);
      setValue("occupation", myProfile?.user?.occupation);
      setValue("language", myProfile?.user?.language);
      setValue("refralCode", myProfile?.user?.refralCode);
      setValue("adNumber", myProfile?.user?.addharCard?.adNumber);
      setValue("panNumber", myProfile?.user?.panCard?.panNumber);
      if (myProfile?.user?.bankInfo) {
        myProfile.user.bankInfo.forEach((bank: TBankInfo, index: number) => {
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
  }, [myProfile, setValue]);

  const handleEditProfileData = (data: TProfileData) => {
    console.log(data);
  }
  return (
    <div>
      <Helmet>
        <title>PM Gurukul | My Profile</title>
      </Helmet>
      <div className="flex items-center justify-start gap-3">
        <img src={ICONS.ArrowLeft} alt="Profile" className="size-9" />
        <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
      </div>
      <form onSubmit={handleSubmit(handleEditProfileData)} className="flex flex-col gap-8 mt-8">
        <PersonalInfo register={register} errors={errors} />
        <div className="flex flex-col gap-4">
          <p className="text-neutral-90 font-semibold">KYC Details</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <KYCStatus kycStatus={myProfile?.user?.kyc_status} />
              <IdentityInfo register={register} errors={errors} />
              {/* <UploadProof register={register} errors={errors} /> */}
              <UploadedProofs
                addharCardImage={myProfile?.user?.addharCard?.adImage?.url}
                panCardImage={myProfile?.user?.panCard?.panImage?.url}
                passBookImage={myProfile?.user?.passbookImage?.url}
              />
            </div>
            {myProfile?.user?.bankInfo?.map((bank: TBankInfo, index: number) => (
              <BankInfo
                key={index}
                index={index}
                register={register}
                errors={errors}
              />
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
