import { useForm } from "react-hook-form";
import TextInput from "../../components/Reusable/TextInput/TextInput";
import { useSendOtpMutation } from "../../redux/Features/Auth/authApi";
import { toast } from "sonner";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { useNavigate } from "react-router-dom";

interface FormData {
    email: string;
    mobileNumber: string;
}

const Login = () => {
    const [sendOtp, { isLoading }] = useSendOtpMutation();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const handleLogin = async (data: FormData) => {
        try {
            const otpData = {
                mobileNumber: data.mobileNumber,
                email: data.email,
            };
            const response = await sendOtp(otpData).unwrap();
            console.log(response);
            if (response?.success) {
                toast.success(response?.message);
                navigate("/auth/verify-phone");
                localStorage.setItem("mobileNumber", data.mobileNumber);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="bg-neutral-80 h-screen flex items-center justify-center font-Inter p-5">
            <form onSubmit={handleSubmit(handleLogin)} className="bg-white border border-neutral-15 rounded-[20px] p-5 md:p-[60px] flex flex-col gap-5  w-[529px] max-auto">
                <h1 className="text-primary-25 text-[28px] leading-8 font-semibold text-center mb-5">Login to get started</h1>
                <TextInput
                    label="Email"
                    placeholder="Enter email"
                    type="email"

                    error={errors.mobileNumber}
                    {...register("email", {
                        required: "Email is required",
                    })}
                />
                <TextInput
                    label="Mobile Number"
                    placeholder="Enter mobile number"
                    type="tel"

                    error={errors.mobileNumber}
                    {...register("mobileNumber", {
                        required: "Mobile Number is required",
                        pattern: {
                            value: /^\+?[1-9]\d{1,14}$/,
                            message: "Enter a valid mobile number",
                        },
                    })}
                />

                <button
                disabled={isLoading}
                    type="submit"
                    className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold"
                >
                    {
                        isLoading ?
                            <LoadingSpinner />
                            :
                            "Login"
                    }
                </button>
            </form>
        </div>
    );
};

export default Login;