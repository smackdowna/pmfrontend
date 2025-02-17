/* eslint-disable @typescript-eslint/no-explicit-any */
import { useResetPasswordMutation } from "../../../redux/Features/Auth/authApi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ICONS, IMAGES } from "../../../assets";
import TextInput from "../../../components/Reusable/TextInput/TextInput";
import LoadingSpinner from "../../../components/Loaders/LoadingSpinner/LoadingSpinner";
import { useState } from "react";

export type ResetPasswordFormData = {
    password: string;
    confirmPassword: string;
};

const ResetPassword = () => {
    const { token } = useParams<{ token: string }>();
    const [resetPassword, { isLoading }] = useResetPasswordMutation();
    const navigate = useNavigate();
    
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormData>();

    const handleLogin = async (data: ResetPasswordFormData) => {
        if (!token) {
            toast.error("Invalid or missing token.");
            return;
        }

        try {
            const resetPasswordData = {
                password: data.password,
                confirmPassword: data.confirmPassword,
            };
            const response = await resetPassword({resetPasswordData, token}).unwrap();
            if (response?.success) {
                toast.success(response?.message);
                navigate("/auth/login");
            }
        } catch (err) {
            toast.error((err as any)?.data?.message);
        }
    };

    return (
        <div className="bg-neutral-80 h-screen flex items-center justify-center font-Inter p-5">
            <form onSubmit={handleSubmit(handleLogin)} className="bg-white border border-neutral-15 rounded-[20px] p-5 md:p-[60px] flex flex-col gap-5 w-[529px] mx-auto">
                <div className="flex items-center gap-5 mb-5">
                    <Link to={"/"} className="flex items-center gap-2">
                        <img src={IMAGES.pmGurukulFavicon} alt="PM-Gurukul" className="size-16" />
                    </Link>
                    <h1 className="text-primary-25 text-[28px] leading-8 font-semibold text-center capitalize">
                        Reset Your Password
                    </h1>
                </div>

                {/* Password Input */}
                <div className="relative">
                    <TextInput
                        label="Password"
                        placeholder="Enter your password"
                        type={isPasswordVisible ? "text" : "password"}
                        error={errors.password}
                        {...register("password", { required: "Password is required" })}
                    />
                    <img
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                        src={isPasswordVisible ? ICONS.eyeOpen : ICONS.eyeClose}
                        alt="eye-icon"
                        className="size-5 cursor-pointer absolute top-[50px] bottom-0 right-3"
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="relative">
                    <TextInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        error={errors.confirmPassword}
                        {...register("confirmPassword", { required: "Confirm password is required" })}
                    />
                    <img
                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                        src={isConfirmPasswordVisible ? ICONS.eyeOpen : ICONS.eyeClose}
                        alt="eye-icon"
                        className="size-5 cursor-pointer absolute top-[50px] bottom-0 right-3"/>
                </div>

                <button
                    disabled={isLoading}
                    type="submit"
                    className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold">
                    {isLoading ? <LoadingSpinner /> : "Submit"}
                </button>

                <p className="text-primary-15 text-sm leading-5 font-medium text-center">
                    Back to <Link to={"/auth/login"} className="font-bold">Login</Link>
                </p>
            </form>
        </div>
    );
};

export default ResetPassword;
