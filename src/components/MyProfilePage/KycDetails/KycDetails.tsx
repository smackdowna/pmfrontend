import Dropdown from "../../Reusable/Dropdown/Dropdown";
import TextInput from "../../Reusable/TextInput/TextInput";
import UploadInput from "../../Reusable/UploadInput/UploadInput";
const KycDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-neutral-90 font-semibold">KYC Details</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5">
          <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex justify-between items-center">
              <p className="text-neutral-90 font-semibold">KYC Status</p>
              <div className="bg-secondary-35 rounded-md p-2">In-Progress</div>
            </div>
          </div>

          <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-90 font-semibold">Identity Information</p>
              <TextInput
                label="PAN Card"
                name="panNumber"
                placeholder="Enter your PAN Number"
                type="text"
                validation={{
                  required: "PAN Number is required",
                  pattern: {
                    value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                    message: "Enter a valid PAN Number",
                  },
                }}
              />
              <TextInput
                label="Aadhaar Card"
                name="aadhaarNumber"
                placeholder="Enter your Aadhaar Number"
                type="text"
                validation={{
                  required: "Aadhaar Number is required",
                  pattern: {
                    value: /^[2-9]{1}[0-9]{11}$/,
                    message: "Enter a valid Aadhaar Number",
                  },
                }}
              />
            </div>
          </div>

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
        </div>

        <div>
        <div className="bg-white w-full rounded-2xl p-6">
            <div className="flex flex-col gap-4">
              <p className="text-neutral-90 font-semibold">Bank Information</p>
              
              <div className="flex flex-col xl:flex-row gap-4">
                <TextInput  
                    label="Account Holder Name"
                    name="holderName"
                    placeholder="Enter Account Holder's Name"
                    type="text"
                    validation={{
                        required: "Account Holder's Name is required",
                    }}
                />
                <TextInput  
                    label="Account Number"
                    name="accountNumber"
                    placeholder="Enter Account Number"
                    type="text"
                    validation={{
                        required: "Account Number is required",
                    }}
                />
              </div>
              <Dropdown 
                label="Account Type"
                name="accountType"
                options={["Savings", "Current"]}
                validation={{
                    required: "Account Type is required",
                }}
                />
              <TextInput
                label="IFSC Code"
                name="ifscCode"
                placeholder="Enter IFSC Code"
                type="text"
                validation={{
                  required: "IFSC Code is required",
                  pattern: {
                    value: /^[A-Z]{4}[0][A-Z0-9]{6}$/,
                    message: "Enter a valid IFSC Code",
                  },
                }}  
                />

                <div className="flex flex-col xl:flex-row gap-4">
                    <TextInput 
                        label="Bank Name"
                        name="bankName"
                        placeholder="Enter Bank Name"
                        type="text"
                        validation={{
                            required: "Bank Name is required",
                        }}
                    />
                    <TextInput 
                        label="Branch Name"
                        name="branchName"
                        placeholder="Enter Branch Name"
                        type="text"
                        validation={{
                            required: "Branch Name is required",
                        }}
                    />
                </div>

                <div className="flex flex-col xl:flex-row gap-4">
                    <TextInput  
                        label="Nominee Name"
                        name="nomineeName"
                        placeholder="Enter Nominee Name"
                        type="text"
                        validation={{
                            required: "Nominee Name is required",
                        }}
                    />
                    <TextInput  
                        label="Nominee Relation"
                        name="nomineeRelation"
                        placeholder="Enter Nominee Relation"
                        type="text"
                        validation={{
                            required: "Nominee Relation is required",
                        }}
                    />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycDetails;
