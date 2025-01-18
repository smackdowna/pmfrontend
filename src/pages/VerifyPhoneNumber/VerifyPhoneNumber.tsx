/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import TextInput from "../../components/Reusable/TextInput/TextInput";
import { ICONS } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useVerifyOtpMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";

interface FormData {
    otp: string;
}

const VerifyPhoneNumber = () => {
    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
    const [mobileNumber, setMobileNumber] = useState<string | null>("");
    const navigate = useNavigate();
    // Getting mobile number from localstorage
    useEffect(() => {
        const mobileNumber = localStorage.getItem("mobileNumber");
        setMobileNumber(mobileNumber);
    }, []);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const handleRemoveMobileNumber = () => {
        localStorage.removeItem("mobileNumber");
        setMobileNumber(null);
    };

    const handleVerifyOtp = async (data: FormData) => {
        try {
            const verifyOtpData = {
                mobileNumber: mobileNumber,
                otp: data.otp,
            };
            const response = await verifyOtp(verifyOtpData).unwrap();
            console.log(response);
            if (response?.message) {
                toast.success(response?.message);
                if(response?.newUser){
                    navigate("/auth/setup-profile");
                } else{
                    navigate("/dashboard/my-profile");
                }
                
                handleRemoveMobileNumber();
            }
        } catch (err) {
            toast.error((err as any)?.data?.message);
        }
    };


    return (
        <div className="bg-neutral-80 h-screen flex items-center justify-center font-Inter p-5">
            <form onSubmit={handleSubmit(handleVerifyOtp)} className="bg-white border border-neutral-15 rounded-[20px] p-5 md:p-[60px] flex flex-col gap-5 h-[396px] md:h-[428px] w-[529px] max-auto">
                <h1 className="text-primary-25 text-[28px] leading-8 font-semibold text-center mb-5">Verify your Number</h1>

                <div className="flex items-center justify-center gap-2 mb-5">
                    <p className="text-neutral-30 text-sm leading-5">OTP Has been sent to <strong>+91 {mobileNumber}</strong></p>
                    <Link to={"/auth/login"} onClick={handleRemoveMobileNumber}>
                        <img src={ICONS.pen} alt="pen-icon" className="size-4" />
                    </Link>
                </div>
                <TextInput
                    label="Enter the OTP to verify"
                    placeholder="Enter 6 Digit OTP"
                    type="tel"

                    error={errors.otp}
                    {...register("otp", {
                        required: "OTP is required",
                    })}
                />
                <button
                    type="submit"
                    className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold"
                >
                    {
                        isLoading ? <LoadingSpinner /> : "Verify Number"
                    }
                </button>

                <Link to={"/auth/login"} onClick={handleRemoveMobileNumber} className="text-primary-10 text-sm leading-5 font-medium text-center">Resend OTP</Link>
            </form>
        </div>
    );
};

export default VerifyPhoneNumber;