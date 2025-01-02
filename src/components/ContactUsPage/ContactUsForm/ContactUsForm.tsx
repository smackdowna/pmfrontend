import { useForm } from "react-hook-form";
import TextInput from "../../Reusable/TextInput/TextInput";
import Textarea from "../../Reusable/TextArea/TextArea";


const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
    };
    return (
        <div className="bg-neutral-20 py-[64px]">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white border border-neutral-75 max-w-[644px] mx-auto rounded-2xl">
               <div className="p-8 flex flex-col gap-8">
               <TextInput
                    label="Full Name"
                    name="fullName"
                    placeholder="eg., John Doe"
                    validation={{
                        required: "Full Name is required",
                        minLength: {
                            value: 3,
                            message: "Full Name must be at least 3 characters",
                        },
                    }}
                    error={errors.fullName}
                    {...register("fullName", {
                        required: "Full Name is required",
                        minLength: {
                            value: 3,
                            message: "Full Name must be at least 3 characters",
                        },
                    })}
                />
                <TextInput
                    label="Email"
                    name="email"
                    placeholder="eg., johndoe@site.com"
                    type="email"
                    validation={{
                        required: "Email is required",
                        pattern: {
                            value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                            message: "Enter a valid email address",
                        },
                    }}
                    error={errors.email}
                    {...register("email", {
                        required: "Email is required",
                    })}
                />
                <TextInput
                    label="Mobile Number"
                    name="mobileNumber"
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

                <Textarea
                    label="Feedback"
                    name="feedback"
                    placeholder="Leave your feedback"
                    rows={6}
                    validation={{
                        required: "Feedback is required",
                        minLength: {
                            value: 15,
                            message: "Feedback must be at least 15 characters",
                        },
                    }}
                    error={errors.feedback}
                    {...register("feedback", {
                        required: "Feedback is required",
                        minLength: {
                            value: 15,
                            message: "Feedback must be at least 15 characters",
                        },
                    })}
                />
               </div>

                <div className="flex justify-end border-t border-neutral-75 p-8">
                <button
                    type="submit"
                    className="px-8 py-4 bg-primary-10 text-white rounded-xl text-lg font-semibold"
                >
                    Submit
                </button>
                </div>
            </form>
        </div>
    );
};

export default ContactUsForm;