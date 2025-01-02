import { useForm } from "react-hook-form";
import TextInput from "../../components/Reusable/TextInput/TextInput";

interface FormData {
    mobileNumber: string;
}

const Login = () => {
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

            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-neutral-15 rounded-[20px] p-5 md:p-[60px] flex flex-col gap-5 h-[304px] md:h-[336px] w-[529px] max-auto">
                <h1 className="text-primary-25 text-[28px] leading-8 font-semibold text-center mb-5">Login to get started</h1>
                <TextInput
                    label="Mobile Number"
                    placeholder="eg., +1 234 567 890"
                    type="tel"
                    validation={{
                        required: "Mobile Number is required",
                        pattern: {
                            value: /^\+?[1-9]\d{1,14}$/,
                            message: "Enter a valid mobile number",
                        },
                    }}
                    error={errors.mobileNumber}
                    {...register("mobileNumber", {
                        required: "Mobile Number is required",
                    })}
                />

                <button
                    type="submit"
                    className="px-6 py-3 bg-primary-10 text-white rounded-xl text-lg font-semibold"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;