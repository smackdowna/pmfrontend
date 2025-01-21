
import { ICONS } from "../../../assets";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useGetMeQuery } from "../../../redux/Features/User/userApi";

type TProfileData = {
  full_name: string;
  email: string;
  gender: string;
  language: string;
  dob: string;
  mobileNumber: string;
  occupation: string;
  country: string;
  state: string;
  city: string;
  pinCode: string;
  panNumber: string;
  adNumber: string;
  bankInfo: [
    {
      accountHolderName: string;
      accountNumber: string;
      accountType: "Savings" | "Current" | "Other";
      ifscCode: string;
      bankName: string;
      bankBranch: string;
      nomineeName: string;
      nomineeRelation: string;
    }
  ];
  panImageFile: string;
  adImageFile: string;
  refralCode: string;
};

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
      // Set other fields as necessary
    }
  }, [myProfile, setValue]);

  const handleSetupProfile = (data) => {
    console.log(data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleSetupProfile)} className="flex flex-col gap-8">
        <div className="flex items-center justify-start gap-3">
          <img src={ICONS.ArrowLeft} alt="Profile" className="w-9 h-9" />
          <h1 className="text-2xl font-semibold text-neutral-90">My Profile</h1>
        </div>

        <PersonalInfo register={register} errors={errors} />
        <div className="flex flex-col gap-4">
          <p className="text-neutral-90 font-semibold">KYC Details</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="bg-white w-full rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <p className="text-neutral-90 font-semibold">KYC Status</p>
                  <div className="bg-secondary-35 rounded-md p-2 text-secondary-65">In-Progress</div>
                  {/* <div className="bg-neutral-100 rounded-md p-2 text-neutral-30">Pending </div>
            <div className="bg-secondary-40 rounded-md p-2 text-secondary-55">Approved </div>
            <div className="bg-secondary-45 rounded-md p-2 text-secondary-60">Rejected</div> */}
                </div>

              </div>
              <IdentityInfo register={register} errors={errors} />
              {/* <UploadProof register={register} errors={errors} /> */}
              <div className="bg-white w-full rounded-2xl p-6">
              <div className="flex flex-col">
                <p className="text-neutral-90 font-semibold">Uploaded Proofs</p>
                <div className="flex items-center gap-2 mt-4">
                <div>
                  <p className="text-neutral-65">Aadhaar Card</p>
                  <img src={myProfile?.user?.addharCard?.adImage?.url} alt="" className="max-h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                </div>
                <div>
                  <p className="text-neutral-65">PAN Card</p>
                  <img src={myProfile?.user?.panCard?.panImage?.url} alt="" className="h-[170px] w-full mt-1 rounded-xl border border-neutral-65/40" />
                </div>
                </div>
              </div>

            </div>
            </div>
            <BankInfo register={register} errors={errors} />
            
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
