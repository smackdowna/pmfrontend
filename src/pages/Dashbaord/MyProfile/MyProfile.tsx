/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICONS } from "../../../assets";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
// import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useGetMeQuery } from "../../../redux/Features/User/userApi";
import { Helmet } from "react-helmet-async";
import UploadedProofs from "../../../components/MyProfilePage/UploadedProofs/UploadedProofs";
import KYCStatus from "../../../components/MyProfilePage/KycDetails/KYCStatus/KYCStatus";
import { TBankInfo, TProfileData } from "../../../types/profileData.types";

const MyProfile = () => {
  // Getting loggedin user profile data
  const { data: myProfile } = useGetMeQuery({});
  const [isKycClicked, setIsKycClicked] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string>("");
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
      setValue("addline1", myProfile?.user?.addline1);
      setValue("addline2", myProfile?.user?.addline2);
      setValue("country", myProfile?.user?.country);
      setValue("pinCode", myProfile?.user?.pinCode);
      setValue("occupation", myProfile?.user?.occupation);
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
  console.log(myProfile);


   const [frontFileNames, setFrontFileNames] = useState({
        adImageFile: "",
        panImageFile: "",
        passbookImageFile: "",
        docImage: "",
    });

   const [backFileNames, setBackFileNames] = useState({
        adImageFile: "",
        panImageFile: "",
        passbookImageFile: "",
        docImage: "",
    });

    const [frontFiles, setFrontFiles] = useState({
        adImageFile: null,
        panImageFile: null,
        passbookImageFile: null,
        docImage: null,
    });

    const [backFiles, setBackFiles] = useState({
        adImageFile: null,
        panImageFile: null,
        passbookImageFile: null,
        docImage: null,
    });

    const handleFileChangeFront = (name: string, file: File | null) => {
        if (file) {
          setFrontFileNames((prev) => ({
                ...prev,
                [name]: file.name,
            }));
            setFrontFiles((prev) => ({
                ...prev,
                [name]: file,
            }));
        }
    };

    const handleFileChangeBack = (name: string, file: File | null) => {
        if (file) {
            setBackFileNames((prev) => ({
                ...prev,
                [name]: file.name,
            }));
            setBackFiles((prev) => ({
                ...prev,
                [name]: file,
            }));
        }
    };

  const handleEditProfileData = (data: TProfileData) => {
    console.log(data);
  }
  return (
    <div>
      <Helmet>
        <title>PMGURUKKUL | My Profile</title>
      </Helmet>
      <div className="flex items-center justify-start gap-3">
        <img src={ICONS.ArrowLeft} alt="Profile" className="size-9" />
        <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
      </div>
      <form onSubmit={handleSubmit(handleEditProfileData)} className="flex flex-col gap-8 mt-8">
        <PersonalInfo register={register} errors={errors} />
        <div className="flex justify-end">
          <button
            onClick={() => setIsKycClicked(!isKycClicked)}
            type="submit"
            className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold">
            Submit KYC Information
          </button>
        </div>
        {
          isKycClicked &&
          <div className="flex flex-col gap-4">
            <p className="text-neutral-90 font-semibold">KYC Details</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <KYCStatus kycStatus={myProfile?.user?.kyc_status} />
                <IdentityInfo register={register} errors={errors} setSelectedDocument={setSelectedDocument} selectedDocument={selectedDocument} frontFileNames={frontFileNames} backFileNames={backFileNames} onFileChangeFront={handleFileChangeFront} onFileChangeBack={handleFileChangeBack} />
                {/* <UploadProof register={register} errors={errors} /> */}
                <UploadedProofs
                  addharCardImage={myProfile?.user?.addharCard?.adImage?.url}
                  panCardImage={myProfile?.user?.panCard?.panImage?.url}
                  passBookImage={myProfile?.user?.passbookImage?.url}
                />
              </div>
              {(myProfile?.user?.bankInfo?.length ? myProfile.user.bankInfo : [{}]).map(
                (_: TBankInfo, index: number) => (
                  <BankInfo key={index} index={index} register={register} errors={errors} />
                )
              )}

            </div>
          </div>
        }
      </form>
    </div>
  );
};

export default MyProfile;
