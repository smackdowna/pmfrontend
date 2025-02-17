/* eslint-disable @typescript-eslint/no-explicit-any */
import TextInput from "../../../components/Reusable/TextInput/TextInput";
import SelectDropdown from "../../Reusable/Dropdown/SelectDropdown";

type TPersonalInfo = {
  register?: any;
  errors?: any;
  mobileNumber?: string | number;
};

const PersonalInfo: React.FC<TPersonalInfo> = ({ register, errors, mobileNumber }) => {
  const genderOptions = ["Male", "Female", "Other"];
  const stateOptions: string[] = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ];
  const countryOptions: string[] = ["India"];
  const occupationOptions: string[] = [
    "Students",
    "Working professionals",
    "Housewife",
    "Entrepreneurs",
    "Artists",
    "Healthcare workers",
    "Educators",
    "Service industry workers",
    "Engineers",
    "Lawyers",
    "Accountants",
    "Sales professionals",
    "Scientists",
    "Social workers",
    "Tradespeople (e.g. plumbers, electricians)",
    "Military personnel",
    "Public servants (e.g. government employees)",
    "Freelancers",
    "Information technology professionals",
    "Writers and journalists",
    "Unemployed",
    "Retired",
    "Self-Employed",
    "Software Engineer",
    "Data Scientist",
    "Product Manager",
    "Marketing Specialist",
    "Graphic Designer",
    "Doctor",
    "Nurse",
    "Teacher",
    "Professor",
    "Architect",
    "Civil Engineer",
    "Mechanical Engineer",
    "Electrical Engineer",
    "Pharmacist",
    "Chef",
    "Financial Analyst",
    "Dentist",
    "Veterinarian",
    "Police Officer",
    "Firefighter",
    "Journalist",
    "Writer",
    "Musician",
    "Pilot",
    "Flight Attendant",
    "Sales Manager",
    "HR Manager",
    "Business Analyst",
    "UX Designer",
    "Cybersecurity Analyst",
    "Real Estate Agent",
    "Event Planner",
    "Photographer",
    "Interior Designer"
  ];
  
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-90 font-semibold">Personal Information</p>
      <div
        className="bg-white w-full rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8">
          <TextInput
            label="Full Name"
            // name="fullName"
            placeholder="Enter full name"
            error={errors.full_name}
            {...register("full_name", {
              required: "Full Name is required",
            })} />
         
          <TextInput
            label="Email ID"
            placeholder="Enter your email"
            type="email"
            isDisabled={true}
            error={errors.email}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Enter a valid email address",
              },
            })}
          />
           <TextInput
            label="Password"
            // name="fullName"
            placeholder="Enter password"
            error={errors.password}
            {...register("password", {
              required: "Password is required",
            })} />
           <TextInput
            label="Confirm Password"
            // name="fullName"
            placeholder="Re-Enter password"
            error={errors.confirm_password}
            {...register("confirm_password", {
              required: "Password is required",
            })} />

          <SelectDropdown
            label="Gender"
            options={genderOptions}
            error={errors.gender}
            {...register("gender", {
              required: "Gender is required",
            })}
          />

          <TextInput
            label="Date of Birth"
            placeholder="DD/MM/YYYY"
            type="date"
            error={errors.dob}
            {...register("dob", {
              required: "Date of Birth is required",
              validate: (value: any) => {
                const today = new Date();
                const dob = new Date(value);
                const age = today.getFullYear() - dob.getFullYear();
                const isBirthdayPassed =
                  today.getMonth() > dob.getMonth() ||
                  (today.getMonth() === dob.getMonth() && today.getDate() >= dob.getDate());
                const adjustedAge = isBirthdayPassed ? age : age - 1;

                return adjustedAge >= 18 || "You must be at least 18 years old.";
              },
            })}
          />

          <TextInput
            label="Mobile Number"
            placeholder="Enter your mobile number"
            type="tel"
            error={errors.mobileNumber}
            {...register("mobileNumber", {
              required: "Mobile Number is required",
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: "Enter a valid mobile number",
              }, minLength: {
                value: 10,
                message: "Mobile Number must be at least 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Mobile Number must be at most 10 characters",
              },
            })}
            defaultValue={mobileNumber ? mobileNumber : ""}
            isDisabled={true}
          />
          {/* <TextInput
            label="Occupation"
            placeholder="Enter your occupation"
            error={errors.occupation}
            {...register("occupation", {
              required: "Occupation is required",
            })} /> */}

          <SelectDropdown
            label="Occupation"
            options={occupationOptions}
            error={errors.occupation}
            {...register("occupation", {
              required: "Occupation is required",
            })}
          />

          <SelectDropdown
            label="Country"
            options={countryOptions}
            error={errors.country}
            {...register("country", {
              required: "country is required",
            })}
          />
          <SelectDropdown
            label="State"
            options={stateOptions}
            error={errors.state}
            {...register("state", {
              required: "State is required",
            })}
          />
          <TextInput
            label="Pin Code"
            placeholder="Enter your pincode"
            error={errors.pinCode}
            {...register("pinCode", {
              required: "Pin code is required",
            })}
          />
          <TextInput
            label="Address Line 1"
            placeholder="Enter your address"
            error={errors.city}
            {...register("addline1", {
              required: "Address is required",
            })}
          />
          <TextInput
            label="Address Line 2"
            placeholder="Enter your address"
            error={errors.city}
            {...register("addline2")}
            isRequired={false}
          />
          <TextInput
            label="City"
            placeholder="Enter your city"
            error={errors.city}
            {...register("city", {
              required: "City is required",
            })}
          />
          <TextInput
            label="Referral Code"
            placeholder="Enter your referral Code"
            error={errors.city}
            {...register("refralCode", {
              required: "Referral Code is required",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
