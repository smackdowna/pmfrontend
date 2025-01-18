/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import TextInput from "../../../components/Reusable/TextInput/TextInput";

type TSetupProfileData = {
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
    panImageFile: any;
    adImageFile: any;
    refralCode: string;
};

const SetupProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TSetupProfileData>();

    const handleSetupProfile = (data: TSetupProfileData) => {
        console.log(data);
    }
    return (
        <div className="max-w-[1200px] mx-auto py-10">
            <form onSubmit={handleSubmit(handleSetupProfile)} className="flex flex-col gap-8">
            <TextInput
            label="Full Name"
            // name="fullName"
            placeholder="Enter full name"
            error={errors.full_name}
            {...register("full_name", {
              required: "Full Name is required",
              minLength: {
                value: 3,
                message: "Full Name must be at least 3 characters",
              },
            })} />
                <h1 className="text-2xl font-semibold text-neutral-90">Setup Your Profile</h1>

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
                        </div>
                        <BankInfo register={register} errors={errors} />
                    </div>
                </div>

                <div className="flex items-center gap-5 justify-end">
                    <button
                        className="px-6 py-3 bg-error text-white rounded-xl text-lg font-semibold"
                    >
                        Cancel
                    </button>
                    <button
                        // disabled={isLoading}
                        type="submit"
                        className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold"
                    >
                        {/* {
                        isLoading ?
                            <LoadingSpinner />
                            :
                            "Login"
                    } */}
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SetupProfile;