import UploadInput from "../../Reusable/UploadInput/UploadInput";

const UploadProof = ({register, errors}) => {

  return (
    <div className="bg-white w-full rounded-2xl p-6">
      <div className="flex flex-col gap-4">
        <p className="text-neutral-90 font-semibold">Upload Proof</p>
        <UploadInput
          label="Aadhaar Card Image"
          // name="aadhaarCardImage"
          accept="image/*"
          error={errors.aadhaarCardImage}
          {...register("aadhaarCardImage", {
            required: "Aadhaar Card Image is required",
          })}
        />
        <UploadInput
          label="PAN Card Image"
          // name="panCardImage"
          accept="image/*"
          error={errors.panCardImage}
          {...register("panCardImage", {
            required: "PAN Card Image is required",
          })}
        />
        <UploadInput
          label="Cancel Cheque/Passbook Image"
          // name="cancelChequeImage"
          accept="image/*"
          error={errors.cancelChequeImage}
          {...register("cancelChequeImage", {
            required: "Cancel Cheque/Passbook Image is required",
          })}
        />
      </div>
    </div>
  );
};

export default UploadProof;
