import TextInput from "../../../components/Reusable/TextInput/TextInput";
import Dropdown from "../../../components/Reusable/Dropdown/Dropdown";
import { useForm } from "react-hook-form";

interface FormData {
  fullName: string;
  email: string;
  gender: string;
  language: string;
  state: string;
  pincode: string;
  dateOfBirth: string;
  mobileNumber: string;
  occupation: string;
  county: string;
  city: string;
}

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  const genderOptions = ["Male", "Female", "Other"];
  const languageOptions = ["English", "Hindi"];
  const stateOptions = ["Maharashtra", "Gujrat"];
  const countyOptions = ["India"];
  const occupationOptions = ["Engineer", "Doctor", "Teacher", "Artist"];
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-90 font-semibold">Personal Information</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full rounded-2xl"
      >
        <div className="grid grid-cols-2 gap-5 p-8">
          <div className="flex flex-col gap-6">
            <TextInput
              label="Name"
              placeholder="Enter your name"
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
              label="Email ID"
              placeholder="Enter your email"
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
            <Dropdown
              label="Gender"
              options={genderOptions}
              error={errors.gender}
              {...register("gender", {
                required: "Gender is required",
              })}
            />
            <Dropdown
              label="Language"
              options={languageOptions}
              error={errors.language}
              {...register("language", {
                required: "Language is required",
              })}
            />
            <Dropdown
              label="State"
              options={stateOptions}
              error={errors.state}
              {...register("state", {
                required: "State is required",
              })}
            />
            <TextInput
              label="Pincode"
              placeholder="Enter your pincode"
              validation={{
                required: "Pincode is required",
              }}
              error={errors.pincode}
              {...register("pincode", {
                required: "Pincode is required",
              })}
            />
          </div>

          <div className="flex flex-col gap-6">
            <TextInput
              label="Date of Birth"
              placeholder="DD/MM/YYYY"
              type="date"
              validation={{
                required: "Date of Birth is required",
              }}
              error={errors.dateOfBirth}
              {...register("dateOfBirth", {
                required: "Date of Birth is required",
              })}
            />
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
            <Dropdown
              label="Occupation"
              options={occupationOptions}
              error={errors.occupation}
              {...register("occupation", {
                required: "Occupation is required",
              })}
            />
            <Dropdown
              label="County"
              options={countyOptions}
              error={errors.county}
              {...register("county", {
                required: "County is required",
              })}
            />
            <TextInput
              label="City"
              placeholder="Enter your city"
              validation={{
                required: "City is required",
              }}
              error={errors.city}
              {...register("city", {
                required: "City is required",
              })}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
