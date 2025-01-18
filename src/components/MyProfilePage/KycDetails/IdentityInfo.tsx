import TextInput from "../../Reusable/TextInput/TextInput";

const IdentityInfo = ({register, errors}) => {

  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Identity Information</p>
        <TextInput
          label="PAN Card"
          {...register("panNumber", {
            required: "PAN Number is required",
            pattern: {
              value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
              message: "Enter a valid PAN Number",
            },
          })}
          error={errors.panNumber}
          placeholder="Enter your PAN Number"
        />
        <TextInput
          label="Aadhaar Card"
          {...register("aadhaarNumber", {
            required: "Aadhaar Number is required",
            pattern: {
              value: /^[2-9]{1}[0-9]{11}$/,
              message: "Enter a valid Aadhaar Number",
            },
          })}
          error={errors.aadhaarNumber}
          placeholder="Enter your Aadhaar Number"
        />
      </div>
    </div>
  );
};

export default IdentityInfo;
