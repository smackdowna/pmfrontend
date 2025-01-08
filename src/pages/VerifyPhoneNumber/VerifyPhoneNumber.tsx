import { useForm } from "react-hook-form";
import TextInput from "../../components/Reusable/TextInput/TextInput";
import { ICONS } from "../../assets";

interface FormData {
    otp: string;
}

const VerifyPhoneNumber = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };
    return (
        <div className="bg-neutral-80 h-screen flex items-center justify-center font-Inter p-5">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-neutral-15 rounded-[20px] p-5 md:p-[60px] flex flex-col gap-5 h-[396px] md:h-[428px] w-[529px] max-auto">
                <h1 className="text-primary-25 text-[28px] leading-8 font-semibold text-center mb-5">Verify your Number</h1>

                <div className="flex items-center justify-center gap-2 mb-5">
                    <p className="text-neutral-30 text-sm leading-5">OTP Has been sent to <strong>+91 96000  16417</strong></p>
                    <img src={ICONS.pen} alt="pen-icon" className="size-4" />
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
                    Verify Number
                </button>

                <button className="text-primary-10 text-sm leading-5 font-medium">Resend OTP</button>
            </form>
        </div>
    );
};

export default VerifyPhoneNumber;