import UploadInput from "../../Reusable/UploadInput/UploadInput"
const UploadProof = () => {
  return (
    <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-90 font-semibold">Upload Proof</p>
              <UploadInput
                label="Aadhaar Card Image"
                name="aadhaarCardImage"
                accept="image/*"
              />
              <UploadInput
                label="PAN Card Image"
                name="panCardImage"
                accept="image/*"
              />
              <UploadInput
                label="Cancel Cheque/Passbook Image"
                name="cancelChequeImage"
                accept="image/*"
              />
            </div>
          </div>
  )
}

export default UploadProof
