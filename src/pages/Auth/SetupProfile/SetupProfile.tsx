/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import BankInfo from "../../../components/MyProfilePage/KycDetails/BankInfo";
import IdentityInfo from "../../../components/MyProfilePage/KycDetails/IdentityInfo";
import UploadProof from "../../../components/MyProfilePage/KycDetails/UploadProof";
import PersonalInfo from "../../../components/MyProfilePage/PersonalInfo/PersonalInfo";
import { useEffect, useState } from "react";
import { useSetupProfileMutation } from "../../../redux/Features/Auth/authApi";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner/LoadingSpinner";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ICONS } from "../../../assets";
import { removeOtpDataFromLocalStorage } from "../../../utils/removeOtpDataFromLocalStorage";
import useOtpDataFromLocalStorage from "../../../hooks/useOtpDataFromLocalStorage";
import { OtpFormData } from "../Login/Login";

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

export type BankInfoField = 'accountHolderName' | 'accountNumber' | 'accountType' | 'ifscCode' | 'bankName' | 'bankBranch' | 'nomineeName' | 'nomineeRelation';

const SetupProfile = () => {
    // Getting OTP data from localstorage
    const [otpData] = useOtpDataFromLocalStorage<OtpFormData>("otpData");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<TSetupProfileData>();
    useEffect(() => {
        if (otpData) {
            setValue("mobileNumber", otpData.mobileNumber);
        }
    }, [otpData, setValue]);

    const navigate = useNavigate();


    const [setupProfile, { isLoading }] = useSetupProfileMutation();

    const [bankInfo, setBankInfo] = useState([
        {
            accountHolderName: "",
            accountNumber: "",
            accountType: "Savings",
            ifscCode: "",
            bankName: "",
            bankBranch: "",
            nomineeName: "",
            nomineeRelation: "",
        },
    ]);

    const [fileNames, setFileNames] = useState({
        adImageFile: "",
        panImageFile: "",
        passbookImageFile: "",
    });

    const [files, setFiles] = useState({
        adImageFile: null,
        panImageFile: null,
        passbookImageFile: null,
    });



    const handleFileChange = (name: string, file: File | null) => {
        if (file) {
            setFileNames((prev) => ({
                ...prev,
                [name]: file.name,
            }));
            setFiles((prev) => ({
                ...prev,
                [name]: file,
            }));
        }
    };



    const handleBankInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, field: BankInfoField) => {
        setBankInfo(prev => {
            const updatedBankInfo = [...prev];
            updatedBankInfo[0][field] = e.target.value;
            return updatedBankInfo;
        });
    };


    const handleSetupProfile = async (data: TSetupProfileData) => {
        if (files.adImageFile === null) {
            toast.error("Please upload Adhar Card Image");
            return;
        } else if (files.panImageFile === null) {
            toast.error("Please upload PAN Card Image");
            return;
        } else if (files.passbookImageFile === null) {
            toast.error("Please upload Passbook Image");
            return;
        }
        try {
            const formData = new FormData();

            // Appending text fields
            formData.append('full_name', data.full_name);
            formData.append('email', data.email);
            formData.append('gender', data.gender);
            formData.append('language', data.language);
            formData.append('dob', data.dob);
            if (otpData?.mobileNumber) {
                formData.append('mobileNumber', otpData?.mobileNumber);
            }
            formData.append('occupation', data.occupation);
            formData.append('country', data.country);
            formData.append('state', data.state);
            formData.append('city', data.city);
            formData.append('pinCode', data.pinCode);
            formData.append('panNumber', data.panNumber);
            formData.append('adNumber', data.adNumber);
            formData.append('refralCode', data.refralCode);

            // Appending bank info
            formData.append('bankInfo', JSON.stringify(bankInfo));

            // Appending image files
            if (files.adImageFile) formData.append('adImageFile', files.adImageFile);
            if (files.panImageFile) formData.append('panImageFile', files.panImageFile);
            if (files.passbookImageFile) formData.append('passbookImageFile', files.passbookImageFile);

            const response = await setupProfile(formData).unwrap();
            if (response?.user) {
                toast.success(response?.message);
                removeOtpDataFromLocalStorage();
                navigate("/dashboard/my-courses");
                reset();

            }
            console.log(response);
        } catch (err) {
            toast.error((err as any)?.data?.message);
        }
    };


    return (
        <div className="max-w-[1200px] mx-auto py-10">
            <form onSubmit={handleSubmit(handleSetupProfile)} className="flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <Link to={"/auth/login"}>
                        <img src={ICONS.ArrowLeft} alt="Profile" className="size-8" />
                    </Link>
                    <h1 className="text-2xl font-semibold text-neutral-90">Setup Your Profile</h1>
                </div>

                <PersonalInfo register={register} errors={errors} mobileNumber={otpData?.mobileNumber} />
                <div className="flex flex-col gap-4">
                    <p className="text-neutral-90 font-semibold">KYC Details</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            <IdentityInfo register={register} errors={errors} />
                            <UploadProof
                                register={register}
                                errors={errors}
                                fileNames={fileNames}
                                onFileChange={handleFileChange}
                            />
                        </div>
                        <BankInfo register={register} errors={errors} handleBankInfoChange={handleBankInfoChange} />
                    </div>
                </div>

                <div className="flex items-center gap-5 justify-end">
                    <Link
                        to={"/auth/login"}
                        className="px-6 py-3 bg-error text-white rounded-xl text-lg font-semibold"
                    >
                        Cancel
                    </Link>
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold">
                        {
                            isLoading ? <LoadingSpinner /> : "Submit"
                        }
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SetupProfile;


{/* <div className="bg-neutral-100 rounded-md p-2 text-neutral-30">Pending </div>
            <div className="bg-secondary-40 rounded-md p-2 text-secondary-55">Approved </div>
            <div className="bg-secondary-45 rounded-md p-2 text-secondary-60">Rejected</div> */}